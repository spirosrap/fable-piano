#!/usr/bin/env python3
"""Build the pieces that the Fable performer plays from a score (scores/*.json, scores/index.js).

    python3 tools/build_scores.py

A score here is the notes of an engraved edition (scores/src/, MIDI written by LilyPond: every note
at the same loudness, no pedal, no tempo) plus a reading of it: tempo, dynamics by bar, which notes
sing and which accompany, where the pedal changes, where the phrases are. The page hands the result
to the performer in score.js, which adds the breathing, the rubato and the hands.

Moonlight Sonata: Mutopia Project, Mutopia-2007/02/11-276, typeset by Chris Sawer and Stewart Holmes
from the Berners edition of 1908 (ed. A. Winterberger), CC BY-SA 2.5.
https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=276
The dynamics below follow the markings of that edition, bar by bar.
"""
import json
import struct
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'scores' / 'src'
PP, P, MP, MF, F, FF = 32, 46, 58, 70, 88, 104


def read_staves(path):
    """Notes of a LilyPond MIDI file as {'up': [[beat, beats, midi]], 'down': [...]} (beats = quarter notes)."""
    b = path.read_bytes()
    assert b[:4] == b'MThd'
    hl = struct.unpack('>I', b[4:8])[0]
    _, ntr, div = struct.unpack('>HHH', b[8:14])
    p = 8 + hl
    staves = {}

    def vlq(q):
        v = 0
        while True:
            c = b[q]; q += 1; v = v * 128 + (c & 127)
            if not c & 128:
                return v, q

    for _ in range(ntr):
        assert b[p:p + 4] == b'MTrk'
        ln = struct.unpack('>I', b[p + 4:p + 8])[0]
        q, end = p + 8, p + 8 + ln
        p = end
        tick = run = 0
        name, notes, held = '', [], {}
        while q < end:
            dt, q = vlq(q); tick += dt
            st = b[q]
            if st & 0x80: q += 1
            else: st = run
            if st == 0xff:
                ty = b[q]; n, q = vlq(q + 1)
                if ty == 3: name = b[q:q + n].decode('latin1')
                q += n
                if ty == 0x2f: break
            elif st in (0xf0, 0xf7):
                n, q = vlq(q); q += n
            else:
                run = st; k = st >> 4
                a1 = b[q]; q += 1
                a2 = 0
                if k not in (0xc, 0xd): a2 = b[q]; q += 1
                if k in (8, 9) and a1 in held:
                    t0 = held.pop(a1); notes.append([t0 / div, (tick - t0) / div, a1])
                if k == 9 and a2 > 0: held[a1] = tick
        if notes:
            staves[name] = sorted(notes)
    return staves


def curve(points):
    """Loudness by bar: straight lines between (bar, level) points."""
    def at(bar):
        if bar <= points[0][0]: return points[0][1]
        for (b0, v0), (b1, v1) in zip(points, points[1:]):
            if bar < b1: return v0 + (v1 - v0) * (bar - b0) / (b1 - b0) if b1 > b0 else v1
        return points[-1][1]
    return at


def groups(notes):
    """Notes struck together, by beat."""
    out = {}
    for n in notes: out.setdefault(round(n[0] * 96), []).append(n)
    return out


def finish(title, sub, bar_len, bpm, seed, beats, notes, ped, tempo, sections, gap=3.2):
    notes.sort(key=lambda n: (n[0], n[4], n[2]))
    rows = [[round(n[0], 4), round(max(n[1], 0.05), 4), n[2], max(14, min(124, round(n[3]))), n[4], n[5]] for n in notes]
    ped = sorted({(round(b, 3), t) for b, t in ped})
    return {'title': title, 'sub': sub, 'barLen': bar_len, 'bpm': bpm, 'seed': seed, 'beats': beats, 'gap': gap,
            'notes': rows, 'ped': [list(x) for x in ped], 'tempo': tempo, 'sections': sections}


STAC, ACC = 1, 2
is_triplet = lambda d: abs(d - 1 / 3) < 0.03


def moonlight_1():
    """Adagio sostenuto: pianissimo throughout, the pedal down and changed with the harmony."""
    s = read_staves(SRC / 'moonlight1.mid')
    level = curve([(1, 30), (5, 32), (21, 33), (25, 40), (26, 44), (27.5, 40), (28, 36), (32, 42), (35, 48), (37, 46), (40, 35),
                   (42, 31), (45, 33), (48, 40), (49, 42), (51, 36), (52, 33), (57, 34), (58, 38), (59, 42), (60, 40), (62, 42),
                   (64, 40), (65, 36), (67, 30), (69, 25)])
    notes, ped = [], [(b, 'P') for b in range(0, 276, 4)]
    for hand, key in ((0, 'up'), (1, 'down')):
        for g in groups(s[key]).values():
            long_ = sorted((n for n in g if not is_triplet(n[1])), key=lambda n: n[2])
            for b, d, m in g:
                base = level(b / 4 + 1)
                if is_triplet(d):
                    v = base - 2 + (2 if abs(b - round(b)) < 0.01 else 0)  # the accompaniment, barely leaning on the beat
                elif hand == 0:
                    v = base + (16 if m == long_[-1][2] else 8)  # the melody sings over it
                else:
                    v = base + (10 if d < 1 else 6 if m == long_[0][2] else 0)  # bass; in the coda the bass has the melody's rhythm
                    if d >= 1: ped.append((b, 'P'))
                notes.append([b, d, m, v, hand, 0])
    sections = [[0, 'Introduction'], [16, 'First theme'], [88, 'Development'], [108, 'Dominant pedal'], [164, 'Recapitulation'], [236, 'Coda']]
    return finish('I. Adagio sostenuto', 'C-sharp minor', 4, 54, 31, 276, notes, ped, [[264, 40, 12]], sections, gap=1.6)


def moonlight_2():
    """Allegretto and Trio, then the Allegretto again (the da capo the edition asks for)."""
    s = read_staves(SRC / 'moonlight2.mid')
    for key in s:  # the Allegretto returns after the Trio; everything two beats later so the upbeat falls on a third beat
        s[key] = [[b + 2, d, m] for b, d, m in s[key]] + [[b + 182, d, m] for b, d, m in s[key] if b < 108]
    bar = lambda b: b / 3  # the first full bar is bar 1
    allegretto = [(1, 48), (17, 48), (21, 52), (23.5, 66), (25, 48), (29, 50), (31, 62), (32, 70), (33, 50), (36, 46)]
    trio = [(36.7, 62), (44, 60), (44.7, 36), (49, 40), (53, 42), (56, 60), (57, 48), (60, 44)]
    level = curve(allegretto + trio + [(60.7, 48)] + [(b + 60, v) for b, v in allegretto])
    in_trio = lambda b: 110 <= b < 182
    notes, ped = [], []
    for hand, key in ((0, 'up'), (1, 'down')):
        for g in groups(s[key]).values():
            ms = sorted(n[2] for n in g)
            for b, d, m in g:
                v, flags = level(bar(b)), 0
                if hand == 0:
                    v += 6 if m == ms[-1] else -3
                    if in_trio(b) and d >= 2.9 and abs(b % 3 - 2) < 0.01: v += 14; flags = ACC  # the Trio's sforzando syncopations
                else:
                    v += 0 if m == ms[0] else -5
                    if in_trio(b) and d >= 2.9 and b % 3 < 0.01: v += 8  # its fortepiano basses
                    if d >= 2.9 and b % 3 < 0.01: ped += [(b, 'P'), (b + 2.6, '*')]
                notes.append([b, d, m, v, hand, flags])
    sections = [[0, 'Allegretto'], [110, 'Trio'], [182, 'Allegretto, da capo']]
    return finish('II. Allegretto', 'D-flat major', 3, 176, 32, 291, notes, ped, [[285, 150, 4]], sections)


def moonlight_3():
    """Presto agitato. The exposition is played once: the first ending is left out."""
    s = read_staves(SRC / 'moonlight3.mid')
    fixed = {}
    for key in s:
        out = []
        for b, d, m in s[key]:
            # LilyPond wrote the unmeasured cadenza a little too long in the upper staff; everything after it is late by that much
            if key == 'up' and b >= 760: b -= 0.7083
            if 256 <= b < 260: continue  # the first-time bar
            out.append([b - 4 if b >= 260 else b, d, m])
        fixed[key] = out
    s = fixed
    level = curve([(1, 48), (7, 50), (8.5, 66), (9, 86), (14.9, 86), (15, 48), (19, 50), (20.5, 64), (21, 50), (23, 54), (25, 60), (29, 76),
                   (31, 88), (32, 100), (32.5, 50), (33, 50), (35, 70), (36, 100), (36.5, 50), (37, 54), (38.9, 80), (39, 86), (42.9, 88),
                   (43, 50), (47, 52), (48.9, 70), (49, 86), (50, 70), (51, 88), (52, 50), (53, 56), (54, 66), (55, 54), (56, 48), (61, 52),
                   (63, 70), (64, 60), (65, 70), (70.9, 72), (71, 50), (77, 52), (79, 66), (80, 60), (81, 86), (87, 84), (88, 60), (89, 52),
                   (92, 70), (93, 50), (95, 58), (97, 50), (99, 60), (100, 48), (101, 36), (102, 50), (108, 54), (109.5, 70), (110, 86),
                   (115.9, 86), (116, 50), (118, 54), (120, 60), (124, 76), (126, 88), (127, 100), (127.5, 50), (128, 52), (130, 70),
                   (131, 100), (131.5, 50), (132, 54), (133.9, 80), (134, 86), (137.9, 88), (138, 50), (141, 52), (142, 84), (143, 52),
                   (144, 84), (145, 50), (147, 56), (148, 66), (149, 54), (150, 48), (157, 54), (158, 70), (159, 64), (166, 66), (167, 48),
                   (173, 50), (176, 74), (177, 88), (185, 86), (186.5, 64), (187, 56), (189, 44), (190, 48), (194, 52), (196, 76), (197, 90),
                   (199, 104), (201, 104)])
    notes, held = [], []
    for hand, key in ((0, 'up'), (1, 'down')):
        for g in groups(s[key]).values():
            chord = len(g) >= 3
            for b, d, m in g:
                v, flags = level(b / 4 + 1), 0
                if chord:  # the sforzando chords that close each run
                    v += 14 if hand == 0 else 10; flags = ACC | (STAC if d <= 0.5 else 0)
                    held.append((b, b + max(d, 0.5) - 0.05))
                elif hand == 0:
                    v += 8 if d >= 0.75 else 3 if abs(b - round(b)) < 0.01 else 0
                else:
                    v += 2 if d >= 1 else -3
                    if abs(d - 0.5) < 0.01: flags = STAC  # the bass's detached quavers
                    if d >= 3.9: held.append((b, b + d - 0.1))  # the long basses of the Adagio bars
                notes.append([b, d, m, v, hand, flags])
    ped, cur = [], None  # pedal only where the chords ring, as Beethoven marks it
    for a, z in sorted(held):
        if cur and a <= cur[1] + 0.3: cur[1] = max(cur[1], z)
        else:
            if cur: ped += [(cur[0], 'P'), (cur[1], '*')]
            cur = [a, z]
    if cur: ped += [(cur[0], 'P'), (cur[1], '*')]
    tempo = [[744, 104], [748, 56], [756, 160]]  # the cadenza slows into two Adagio bars, then Tempo I
    sections = [[0, 'Exposition — first theme'], [80, 'Second theme'], [168, 'Closing theme'], [256, 'Development'], [404, 'Recapitulation'],
                [460, 'Second theme'], [632, 'Coda'], [748, 'Adagio'], [756, 'Tempo I']]
    return finish('III. Presto agitato', 'C-sharp minor', 4, 160, 33, 800, notes, ped, tempo, sections)


def main():
    piece = {
        'id': 'moonlight',
        'composer': 'Ludwig van Beethoven',
        'title': 'Sonata No. 14 in C-sharp Minor, Op. 27 No. 2 “Moonlight”',
        'html': 'Sonata No. 14 in C-sharp Minor, Op. 27 No. 2 <em>“Moonlight”</em>',
        'credit': 'score from the Mutopia Project, typeset by Chris Sawer and Stewart Holmes (CC BY-SA 2.5)',
        'movements': [moonlight_1(), moonlight_2(), moonlight_3()],
    }
    out = ROOT / 'scores'
    (out / 'moonlight.json').write_text(json.dumps(piece, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    seconds = round(sum(m['beats'] * 60 / m['bpm'] * 1.04 + m['gap'] for m in piece['movements']))
    index = [{'c': piece['composer'], 't': piece['title'], 'f': 1, 'score': piece['id'], 'takes': [{'id': 'score-' + piece['id'], 'd': seconds}]}]
    (out / 'index.js').write_text(
        '// Generated by tools/build_scores.py: pieces the Fable performer plays from a score (scores/<score>.json).\n'
        f'window.SCORE_PIECES = {json.dumps(index, ensure_ascii=False, separators=(",", ":"))};\n', encoding='utf-8')
    for m in piece['movements']:
        print(f"{m['title']}: {len(m['notes'])} notes, {m['beats']} beats, {len(m['ped'])} pedal marks")
    print(f'about {seconds // 60}:{seconds % 60:02d}')


if __name__ == '__main__':
    main()
