'use strict';
// ====================================================================
//  Hum along: a CHIMERA voice hums the top line of whatever the piano is playing.
//
//  The voice engine (hum/, built from https://github.com/jamesondh/chimera-vocal-synth) is too heavy to
//  run beside the piano in real time, so workers render the melody a few seconds ahead, stretch by
//  stretch, and each stretch is started on the piano's own audio clock. The head is drawn from the
//  mouth movement the engine recorded while it rendered the sound.
//
//  This file reads the page's state (NOTES, song, st, rate, ctx, songGen, position) and never changes it.
// ====================================================================
(() => {
  const VOICES = { // body, and the notes it hums comfortably (MIDI)
    high: { body: { female: 1, child: 0 }, lo: 55, hi: 76 },
    low: { body: { female: 0, child: 0 }, lo: 43, hi: 64 },
    child: { body: { female: 0, child: 1 }, lo: 60, hi: 79 },
  };
  const SYLLABLES = { la: { onset: 'l', vowel: 'ɑ' }, da: { onset: 'd', vowel: 'ɑ' }, doo: { onset: 'd', vowel: 'u' }, na: { onset: 'n', vowel: 'ɑ' }, ah: { onset: '', vowel: 'ɑ' } };
  const WASM = new URL('hum/chimera.wasm', document.baseURI).href;
  const settings = Object.assign({ on: false, voice: 'high', syl: 'la', vol: 0.3 }, store.get('hum', {}));
  if (!VOICES[settings.voice]) settings.voice = 'high';
  if (!SYLLABLES[settings.syl]) settings.syl = 'la';
  const save = () => store.set('hum', settings);

  // ------------------------------------------------------------------ the tune to hum
  // A piano piece has many notes at once and one voice can sing one. This picks the top line, leaves out
  // what a voice cannot keep up with, and moves it by octaves into the singer's range.
  function extractMelody(notes, ped, voice, rightHandOnly) {
    if (rightHandOnly) notes = notes.filter(n => n.h === 'R');
    if (!notes.length) return [];
    // how long each key really sounds: a note released under the pedal rings until the pedal lifts
    const ups = []; let down = null;
    for (const p of ped) { if (p.down) { if (down === null) down = p.t; } else if (down !== null) { ups.push([down, p.t]); down = null; } }
    const sounding = n => {
      const off = n.t + n.d; let lo = 0, hi = ups.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (ups[mid][1] < off) lo = mid + 1; else hi = mid; }
      return lo < ups.length && ups[lo][0] <= off ? ups[lo][1] - n.t : n.d;
    };
    // the top note of each chord (keys struck within 35 ms of each other)
    const tops = [];
    for (let i = 0; i < notes.length;) {
      let j = i, top = notes[i];
      while (j < notes.length && notes[j].t - notes[i].t < 0.035) { if (notes[j].m > top.m) top = notes[j]; j++; }
      tops.push({ t: top.t, m: top.m, v: top.v, d: Math.max(top.d, Math.min(sounding(top), 4)) });
      i = j;
    }
    // keep what belongs to the top line: near the highest notes of the moment, and not an inner or bass
    // note played under a melody note that is still ringing
    const line = []; let a = 0, b = 0;
    for (let i = 0; i < tops.length; i++) {
      const c = tops[i];
      while (tops[a].t < c.t - 2.5) a++;
      while (b < tops.length && tops[b].t <= c.t + 2.5) b++;
      let hi = 0, loud = 0; for (let k = a; k < b; k++) { if (tops[k].m > hi) hi = tops[k].m; if (tops[k].v > loud) loud = tops[k].v; }
      if (c.m < hi - 12) continue;
      if (c.v < loud - 14) continue; // much softer than the line around it: accompaniment, however high it lies
      const prev = line[line.length - 1];
      // under a note that still rings, a clearly lower note is accompaniment unless it is played like a melody note:
      // louder at once, or at least as present once the held note has had its time
      if (prev && prev.t + Math.min(prev.d, 4) > c.t + 0.03 && c.m < prev.m - 4 && (c.t - prev.t < 1.2 ? c.v <= prev.v + 8 : c.v < prev.v - 5)) continue;
      if (prev && c.t - prev.t < 0.1) continue; // faster than a voice can follow: the run is outlined instead
      line.push(c);
    }
    // lengths, and whether a note is spoken ("la") or only a change of pitch on the held vowel
    const mel = line.map((c, i) => {
      const next = line[i + 1], ioi = next ? next.t - c.t : Infinity;
      let d = Math.min(Math.max(Math.min(c.d, 2.5), 0.12), ioi);
      if (ioi - d < 0.15) d = ioi; // no gaps too short to breathe in
      return { t: c.t, d, m: c.m, hold: false };
    });
    for (let i = 1; i < mel.length; i++) { const p = mel[i - 1]; mel[i].hold = mel[i].t - p.t < 0.2 && p.t + p.d >= mel[i].t - 0.001; }
    // into the voice's range: one shift for the whole piece, then single notes that still stick out
    let best = 0, bestCost = Infinity;
    for (let k = -48; k <= 36; k += 12) {
      let cost = Math.abs(k) * 1e-3;
      for (const n of mel) { const m = n.m + k; cost += Math.min(n.d, 2) * (m < voice.lo ? voice.lo - m : m > voice.hi ? m - voice.hi : 0); }
      if (cost < bestCost) { bestCost = cost; best = k; }
    }
    for (const n of mel) { n.m += best; while (n.m < voice.lo - 2) n.m += 12; while (n.m > voice.hi + 2) n.m -= 12; }
    return mel;
  }

  // ------------------------------------------------------------------ rendering ahead
  let on = false, ready = false, head = null, headModule = null, out = null;
  let mel = [], melKey = '', chunks = [], chunkRate = 1, epoch = 0;
  let workers = [], jobs = new Map(), jobSeq = 0;
  let lastPos = 0, lastT = null, rateSeen = 1, rateAt = 0, failed = false;

  const msg = text => { $('humMsg').textContent = text; $('humMsg').hidden = !text; };
  const songPos = () => st.playing ? st.pos + (ctx.currentTime - st.now) * rate : st.pos; // the song time being rendered now

  // Stretches of the tune from `from` on. The first ones are short so the voice comes in soon.
  function buildChunks(from) {
    const list = []; let i = 0, target = 1.5;
    while (i < mel.length && mel[i].t < from - 0.02) i++;
    while (i < mel.length) {
      const t0 = mel[i].t; let j = i;
      for (;;) {
        const n = mel[j++], len = (n.t + n.d - t0) / chunkRate;
        if (j >= mel.length) break;
        const gap = mel[j].t - (n.t + n.d);
        if (len >= target && (gap > 0.12 || !mel[j].hold)) break; // cut at a breath or before a spoken note
        if (len >= target * 1.6) break;
      }
      const lastNote = mel[j - 1];
      list.push({
        t0, t1: j < mel.length ? mel[j].t : lastNote.t + lastNote.d + 0.5, tEnd: lastNote.t + lastNote.d,
        notes: mel.slice(i, j).map(n => ({ midi: n.m, start: (n.t - t0) / chunkRate, duration: Math.max(0.06, n.d / chunkRate), hold: n.hold })),
        buf: null, track: null, lead: 0.35, src: null, job: 0, done: false,
      });
      i = j; target = Math.min(6, target * 1.4);
    }
    return list;
  }
  function silence() {
    for (const c of chunks) if (c.src) { c.src.onended = null; try { c.src.stop(); } catch (e) {} c.src = null; }
  }
  // Start over from the current position (a new piece, a jump, another tempo, voice or syllable).
  let why = [];
  function restart(reason) {
    why = [...why.slice(-7), reason]; silence(); epoch++;
    for (const w of workers) if (w.busy) { w.terminate(); w.dead = true; } // what they are rendering is no longer wanted
    workers = workers.filter(w => !w.dead); jobs.clear();
    chunkRate = rate; lastPos = songPos(); lastT = st.playing ? ctx.currentTime : null; chunks = buildChunks(lastPos);
    if (head) head.reset();
  }
  function idleWorker() {
    let w = workers.find(x => !x.busy);
    // rendering runs at about twice real time on an idle core and less on a busy machine, so a few share the work
    if (!w && workers.length < Math.max(1, Math.min(4, (navigator.hardwareConcurrency || 4) >> 2))) {
      w = new Worker(new URL('hum/worker.js', document.baseURI), { type: 'module' });
      w.busy = false;
      w.onmessage = e => {
        const m = e.data, job = jobs.get(m.id); jobs.delete(m.id); w.busy = false;
        if (!job || job.epoch !== epoch || !on) return;
        const c = job.c; c.job = 0;
        if (m.error) { c.done = true; if (!failed) { failed = true; msg('The voice stumbled: ' + m.error); } return; }
        const buf = ctx.createBuffer(1, m.samples.length, m.rate); buf.copyToChannel(m.samples, 0);
        c.buf = buf; c.lead = m.lead; c.ms = Math.round(performance.now() - c.sent);
        try { c.track = head ? head.track(m.tele) : null; } catch (err) { c.track = null; }
        msg(''); tick();
      };
      w.onerror = e => { w.busy = false; if (!failed) { failed = true; msg('The voice could not start (' + (e.message || 'worker failed') + ').'); } };
      workers.push(w);
    }
    return w;
  }
  function tick() {
    if (!on || !ready || !ctx) return;
    const key = songGen + '/' + settings.voice;
    if (key !== melKey) { // another piece, or another singer
      melKey = key; failed = false;
      mel = extractMelody(NOTES, song.ped || [], VOICES[settings.voice], isSonata);
      restart('piece'); msg(mel.length ? 'Listening to the piece…' : 'Nothing to hum in this one.');
    }
    const now = ctx.currentTime;
    if (rate !== rateSeen) { rateSeen = rate; rateAt = performance.now(); silence(); } // the tempo slider is moving
    if (!st.playing) { silence(); lastPos = st.pos; lastT = null; return; }
    if (rate !== chunkRate && performance.now() - rateAt < 350) return;
    const pos = songPos();
    // a jump (what was prepared belongs elsewhere). Coming back from a pause, the music may already have run on a little.
    const jumped = lastT === null ? pos < lastPos - 0.25 || pos > lastPos + 2 * rate : Math.abs(pos - lastPos - (now - lastT) * rate) > 0.25;
    if (rate !== chunkRate || jumped) restart(rate !== chunkRate ? 'tempo' : `jump ${lastPos.toFixed(2)}>${pos.toFixed(2)}`);
    lastPos = pos; lastT = now;
    // start whatever is ready and due within the next few seconds, on the piano's clock
    for (const c of chunks) {
      const start = now + (c.t0 - pos) / rate - c.lead; // when the stretch's first sample belongs
      if (start > now + 4) break;
      if (c.src || !c.buf || c.done) continue;
      if (start + c.buf.duration < now + 0.15) { c.done = true; continue; }
      const src = ctx.createBufferSource(), g = ctx.createGain();
      src.buffer = c.buf; src.connect(g); g.connect(out);
      if (start >= now + 0.01) src.start(start);
      else { // ready late, or resumed half way: come in where the music is, without a click
        g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(1, now + 0.05);
        src.start(now + 0.01, now + 0.01 - start); c.late = +(now + 0.01 - start).toFixed(2);
      }
      c.src = src; src.onended = () => { if (c.src === src) { c.src = null; c.done = true; } };
    }
    // keep about half a minute rendered ahead, and let go of what has been sung
    for (const c of chunks) {
      if (c.done && c.t1 < pos - 3 * rate) { c.buf = null; c.track = null; continue; }
      if (c.t0 > pos + 30 * rate) break;
      if (c.buf || c.job || c.done) continue;
      if (c.t1 < pos) { c.done = true; continue; }
      const w = idleWorker(); if (!w) break;
      w.busy = true; c.job = ++jobSeq; c.sent = performance.now(); jobs.set(c.job, { c, epoch });
      w.postMessage({ id: c.job, wasmUrl: WASM, notes: c.notes, body: VOICES[settings.voice].body, vibrato: 18, syllable: SYLLABLES[settings.syl] });
    }
  }

  // ------------------------------------------------------------------ the head
  let lastDraw = 0;
  function draw(t) {
    if (!on) return;
    requestAnimationFrame(draw);
    const dt = Math.min(0.05, (t - lastDraw) / 1000); lastDraw = t;
    if (!head) return;
    let tele = null;
    if (st.playing && ctx) {
      const p = position(); // what is being heard now
      let cur = null, next = null;
      for (const c of chunks) { if (c.t0 <= p) cur = c; else { next = c; break; } }
      let tv;
      if (next && next.track && (!cur || p >= cur.tEnd) && (tv = next.lead - (next.t0 - p) / chunkRate) >= 0) tele = next.track.message(next.track.indexAt(tv)); // the consonant before its note
      else if (cur && cur.track && (tv = (p - cur.t0) / chunkRate + cur.lead) <= cur.track.duration) tele = cur.track.message(cur.track.indexAt(tv));
    }
    try { head.draw(tele, dt); } catch (e) { console.warn('hum: head', e); head = null; }
  }

  // ------------------------------------------------------------------ switching it on and off
  async function enable() {
    if (on) return;
    on = true; settings.on = true; save();
    $('humBtn').classList.add('on'); $('hum').hidden = false;
    msg('Warming up the voice…');
    if (!out) {
      out = ctx.createGain(); out.gain.value = settings.vol; out.connect(ctx.destination);
      // a little of the hall the piano stands in, so the voice is in the same room
      const len = Math.round(ctx.sampleRate * 1.7), ir = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.8); }
      const verb = ctx.createConvolver(), wet = ctx.createGain(); verb.buffer = ir; wet.gain.value = 0.16;
      out.connect(verb); verb.connect(wet); wet.connect(ctx.destination);
    }
    try {
      headModule = headModule || await import('./hum/head.js');
      const h = await headModule.createHead($('humHead'), WASM, VOICES[settings.voice].body);
      if (!on) { h.dispose(); return; }
      head = h;
    } catch (e) {
      console.warn('hum: no head', e); head = null;
      $('humHead').textContent = 'The head cannot be drawn in this browser; the voice still hums.';
    }
    if (!on) return;
    ready = true; melKey = ''; lastDraw = performance.now();
    requestAnimationFrame(draw); tick();
  }
  function disable() {
    on = false; ready = false; settings.on = false; save();
    silence(); epoch++; chunks = []; jobs.clear();
    for (const w of workers) w.terminate(); workers = [];
    if (head) { head.dispose(); head = null; }
    $('humHead').textContent = '';
    $('humBtn').classList.remove('on'); $('hum').hidden = true;
  }

  $('humBtn').onclick = async () => { if (on) { disable(); return; } await ensureAudio(); enable(); };
  $('humSyl').value = settings.syl; $('humVoice').value = settings.voice; $('humVol').value = settings.vol;
  $('humSyl').onchange = e => { settings.syl = e.target.value; save(); if (ready) { restart('syllable'); msg('Listening to the piece…'); tick(); } };
  $('humVoice').onchange = e => { settings.voice = e.target.value; save(); if (head) head.setBody(VOICES[settings.voice].body); tick(); };
  $('humVol').oninput = e => { settings.vol = parseFloat(e.target.value); save(); if (out) out.gain.setTargetAtTime(settings.vol, ctx.currentTime, 0.03); };
  // Runs in a background tab too (once a second there, which the few seconds of look-ahead cover).
  setInterval(() => { if (settings.on && !on && ctx) enable(); tick(); }, 200);
  window.fableHum = { extractMelody, state: () => ({ on, ready, head: !!head, notes: mel.length, chunks: chunks.length, rendered: chunks.filter(c => c.buf).length, sounding: chunks.filter(c => c.src).length, done: chunks.filter(c => c.done).length, workers: workers.length, failed, why,
    first: chunks.slice(0, 8).map(c => `${c.t0.toFixed(1)}-${c.t1.toFixed(1)} ${c.src ? 'sounding' : c.buf ? 'ready' : c.job ? 'rendering' : c.done ? 'done' : 'waiting'}${c.ms ? ' ' + c.ms + 'ms' : ''}${c.late ? ' late ' + c.late : ''}`) }) };
})();
