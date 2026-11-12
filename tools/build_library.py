#!/usr/bin/env python3
"""Build the piece library from the MAESTRO v3.0.0 dataset.

    python3 tools/build_library.py <maestro-v3.0.0.csv> <unzipped maestro-v3.0.0 dir>

Dataset (CC BY-NC-SA 4.0): https://magenta.tensorflow.org/datasets/maestro
  CSV : https://storage.googleapis.com/magentadata/datasets/maestro/v3.0.0/maestro-v3.0.0.csv
  MIDI: https://storage.googleapis.com/magentadata/datasets/maestro/v3.0.0/maestro-v3.0.0-midi.zip

Writes:
  pieces/<id>.mid   the performance MIDI files, renamed, content untouched
  pieces/index.csv  id -> composer, title, year, duration, original MAESTRO file name
  pieces/LICENSE    the dataset's licence
  library.js        the catalogue the page loads (window.LIBRARY)
"""
import collections
import csv
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Titles the dataset spells oddly.
TITLE_FIX = {
    'SuiteBergamasque': 'Suite Bergamasque',
    'IsoldasLiebestod': "Isolde's Liebestod",
    'Pictures at an E': 'Pictures at an Exhibition',
    'Rigoletto Parap.': 'Rigoletto Paraphrase',
    'Rhapsody Esp.': 'Rhapsodie Espagnole',
    'Toccata in DMin.': 'Toccata in D Minor',
    'Andante w/Var.': 'Andante with Variations',
}

# The "Well known" shelf: (composer contains, title matches).
WELL_KNOWN = [
    ('Beethoven', r'Waldstein|Appassionata|Tempest|Op\. ?13\b|Rage over|Op\. ?53\b|Op\. ?57\b'),
    ('Chopin', r'Ballade No\. ?[14]\b|Barcarolle|Berceuse|Etude Op\. ?10,? No\. ?(3|4|5|12)\b|Etude Op\. ?25,? No\. ?(1|11|12)\b'
               r'|Nocturne Op\. ?9,? No\. ?2|Nocturne Op\. ?27,? No\. ?2|Nocturne in C-Sharp Minor, Op\. Posth|Polonaise Op\. ?53'
               r'|Scherzo No\. ?2|Andante Spianato|Fantaisie-Impromptu|Fantasie-Impromptu|Op\. ?66'),
    ('Liszt', r'Campanella|Sospiro|Hungarian Rhapsody No\. ?(2|6)\b|Mephisto|Sonata in B Minor|Dante|Rigoletto|Liebest'
              r'|Sonetto 104|jeux d.eau|Widmung|Erlk|Danse Macabre|Consolation'),
    ('Schubert', r'Impromptus? Op\. ?90|Impromptu Op\. ?142 No\. ?3|Moment.* No\. ?3|Wanderer'),
    ('Debussy', r'joyeuse|Bergamasque|Reflets|Estampes|Jardins|Pour le piano'),
    ('Bach', r'Italian Concerto|Chromatic Fantasy|Jesu|Chaconne|French Suite No\. ?5|Partita No\. ?[12]\b'),
    ('Mussorgsky', r'Pictures'),
    ('Tchaikovsky', r'Nutcracker'),
    ('Schumann', r'Carnaval|Arabesque|Fantasie Op\. ?17|Kinderszenen|Toccata'),
    ('Rachmaninoff', r'Op\. ?3,? No\. ?2|Moment.*No\. ?4|Liebesfreud|Liebesleid|Bumble|Vocalise|Op\. ?23,? No\. ?5'),
    ('Brahms', r'Op\. ?118|H[aä]ndel|Rhapsody Op\. ?79'),
    ('Balakirev', r'Islamey|Lark'),
    ('Mendelssohn', r'Rondo Capriccioso|Variations S'),
    ('Mozart', r'K\.? ?(330|331|333|457|545)\b|Rondo in A Minor'),
    ('Handel', r'Chaconne'),
    ('Scarlatti', r'K\. ?(1|27|87|141)\b'),
    ('Strauss', r'Soir'),
    ('Bizet', r'Carmen Variations'),
]


def clean_title(t):
    t = re.sub(r'\s+', ' ', t).strip()
    t = TITLE_FIX.get(t, t)
    if len(t) > 2 and t[0] == '"' and t[-1] == '"' and t.count('"') == 2:
        t = t[1:-1]
    return t


def natural(s):
    return [int(p) if p.isdigit() else p.lower() for p in re.split(r'(\d+)', s)]


def surname(name):
    return name.split(' / ')[0].split()[-1].lower()


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    csv_path, midi_root = Path(sys.argv[1]), Path(sys.argv[2])
    out = ROOT / 'pieces'
    out.mkdir(exist_ok=True)
    for old in out.glob('*.mid'):
        old.unlink()

    groups = collections.OrderedDict()
    index_rows = []
    with open(csv_path, newline='', encoding='utf-8') as f:
        for r in csv.DictReader(f):
            src = midi_root / r['midi_filename']
            pid = hashlib.sha1(r['midi_filename'].encode()).hexdigest()[:8]
            shutil.copyfile(src, out / f'{pid}.mid')
            composer, title = r['canonical_composer'].strip(), clean_title(r['canonical_title'])
            key = (composer, re.sub(r'[^a-z0-9]', '', title.lower()))
            g = groups.setdefault(key, {'c': composer, 'titles': collections.Counter(), 'takes': []})
            g['titles'][title] += 1
            g['takes'].append({'id': pid, 'y': int(r['year']), 'd': round(float(r['duration']))})
            index_rows.append([pid, composer, title, r['year'], f"{float(r['duration']):.1f}", r['midi_filename']])

    pieces = []
    for g in groups.values():
        best = max(g['titles'].items(), key=lambda kv: (kv[1], len(kv[0])))[0]
        fav = any(c in g['c'] and re.search(p, best, re.I) for c, p in WELL_KNOWN)
        takes = sorted(g['takes'], key=lambda t: (t['y'], t['id']))
        p = {'c': g['c'], 't': best, 'takes': takes}
        if fav:
            p['f'] = 1
        pieces.append(p)
    pieces.sort(key=lambda p: (surname(p['c']), p['c'], natural(p['t'])))

    with open(out / 'index.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['id', 'composer', 'title', 'year', 'duration_s', 'maestro_midi_filename'])
        w.writerows(sorted(index_rows, key=lambda r: (surname(r[1]), natural(r[2]), r[3])))
    lic = midi_root / 'LICENSE'
    if lic.exists():
        shutil.copyfile(lic, out / 'LICENSE')

    body = json.dumps(pieces, ensure_ascii=False, separators=(',', ':'))
    (ROOT / 'library.js').write_text(
        '// Generated by tools/build_library.py from the MAESTRO v3.0.0 dataset (CC BY-NC-SA 4.0).\n'
        '// One entry per work: c = composer, t = title, f = on the "Well known" shelf,\n'
        '// takes = recorded performances (id -> pieces/<id>.mid, y = year, d = seconds).\n'
        f'window.LIBRARY = {body};\n', encoding='utf-8')
    print(f'{len(index_rows)} performances, {len(pieces)} works, {sum(1 for p in pieces if p.get("f"))} well known')


if __name__ == '__main__':
    main()
