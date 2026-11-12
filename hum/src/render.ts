/**
 * One stretch of the hummed melody → sound and mouth movement, with the CHIMERA voice engine.
 * Kept apart from the worker so it can be run and measured outside a browser.
 */
import type { BodyMix, Gesture, SungNote, Syllable } from "./chimera/wasm/types.ts";
import type { BandPart, RenderedPart } from "./chimera/band/types.ts";

/** The engine lays a consonant out before its note, so every stretch starts this long before its first note. */
export const LEAD = 0.35;
export const RATE = 48000;

/** What is sung on a note when it is not the plain hum: consonants before, the vowel, consonants after (IPA). */
export interface Syl { onset: string[]; vowel: string; coda: string[] }
/**
 * `hold` carries the vowel on (a change of pitch only). `midi` may lie between the keys (out of tune).
 * `vib` is the vibrato on this note, in cents. `beat` makes the note a beatbox sound instead (the engine's
 * pad id), `say` a spoken aside (IPA) starting at `start`.
 */
export interface HumNote { midi: number; start: number; duration: number; hold?: boolean; syl?: Syl; vib?: number; beat?: string; say?: string }
export interface Job { id: number; wasmUrl: string; notes: HumNote[]; body: BodyMix; vibrato: number; syllable: { onset: string; vowel: string } }

export type Engine = typeof import("./chimera/wasm/engine.ts");
export type RenderPart = typeof import("./chimera/band/render.ts").renderPart;

export function renderJob(engine: Engine, renderPart: RenderPart, module: WebAssembly.Module, job: Job): RenderedPart {
  const syllable = (o: Syl): Syllable => ({
    text: o.onset.join("") + o.vowel + o.coda.join(""),
    onset: o.onset.map((ipa) => ({ ipa, stress: 0 })),
    nucleus: { ipa: o.vowel, stress: 1 },
    coda: o.coda.map((ipa) => ({ ipa, stress: 0 })), wordEnd: true, phraseEnd: false,
  }) as Syllable;
  const plain = syllable({ onset: job.syllable.onset ? [job.syllable.onset] : [], vowel: job.syllable.vowel, coda: [] });
  // Notes that touch are one breath; a gap ends the phrase (as chimera's planMelody does).
  const gestures: Gesture[] = [], beats: { time: number; id: string }[] = [];
  let end = LEAD, spoken = plain, phrase: SungNote[] = [], vibs: { t: number; vib: number }[] = [], phraseStart = LEAD;
  const flush = () => {
    if (!phrase.length) return;
    const p = engine.planSong(phrase, { body: job.body, bpm: 60, t0: phraseStart, vibrato: job.vibrato });
    // the planner gives a phrase one vibrato; a note that asks for its own gets it (the gesture starts 0.22 s into its vowel)
    for (const g of p.gestures) {
      if (g.label !== "vibrato") continue;
      const own = vibs.find((v) => Math.abs(v.t + 0.22 - g.t0) < 0.004);
      if (own) g.targets = { ...g.targets, vibrato: own.vib };
    }
    gestures.push(...p.gestures); end = Math.max(end, p.end); phrase = []; vibs = [];
  };
  job.notes.forEach((n, i) => {
    const prev = job.notes[i - 1], next = job.notes[i + 1];
    if (n.beat) { flush(); beats.push({ time: n.start, id: n.beat }); end = Math.max(end, LEAD + n.start + 0.3); return; }
    if (n.say) {
      flush();
      const p = engine.planUtterance(engine.tokenizeIpa(n.say), { body: job.body, t0: LEAD + n.start, f0: 440 * 2 ** ((n.midi - 69) / 12), intonation: "statement" });
      gestures.push(...p.gestures); end = Math.max(end, p.end); return;
    }
    if (prev && (prev.beat || prev.say || n.start - prev.start - prev.duration > 0.025)) flush();
    if (!phrase.length) phraseStart = LEAD + n.start;
    // a held note keeps the vowel and only moves the pitch; the first note of a breath always speaks
    if (!n.hold || !phrase.length) spoken = n.syl ? syllable(n.syl) : plain;
    const s = n.hold && phrase.length ? ({ ...spoken, onset: [], coda: [], melisma: true, phraseEnd: false } as Syllable) : spoken;
    const joined = next && !next.beat && !next.say && next.start - n.start - n.duration <= 0.025;
    if (n.vib !== undefined) vibs.push({ t: LEAD + n.start, vib: n.vib });
    phrase.push({ midi: Math.max(24, Math.min(96, n.midi)), beats: joined ? next.start - n.start : n.duration, syl: s });
  });
  flush();
  const last = job.notes[job.notes.length - 1];
  const duration = Math.max(end, LEAD + last.start + (last.say || last.beat ? 0 : last.duration)) + 0.25;
  const part = { id: "hum", name: "The hummer", role: "", body: job.body, volume: 1, pan: 0, vibrato: job.vibrato, beats } as BandPart;
  const out = renderPart(module, part, duration, gestures);
  // the beatbox sounds come out far quieter than the singing: lift them to stand beside it
  if (beats.length) {
    const s = out.samples, span = (b: { time: number }) => [Math.max(0, Math.round((LEAD + b.time - 0.06) * RATE)), Math.min(s.length, Math.round((LEAD + b.time + 0.4) * RATE))];
    let peak = 0;
    for (const b of beats) { const [i0, i1] = span(b); for (let i = i0; i < i1; i++) peak = Math.max(peak, Math.abs(s[i])); }
    const gain = peak > 0 ? Math.min(8, 0.5 / peak) : 1, level = new Float32Array(s.length).fill(1);
    for (const b of beats) { const [i0, i1] = span(b); for (let i = i0; i < i1; i++) level[i] = Math.max(level[i], 1 + (gain - 1) * Math.min(1, (i - i0) / 960, (i1 - i) / 960)); }
    for (let i = 0; i < s.length; i++) if (level[i] > 1) s[i] = Math.tanh(s[i] * level[i]);
  }
  // no click where a stretch begins or ends
  const s = out.samples, fade = Math.min(480, s.length >> 1);
  for (let i = 0; i < fade; i++) { const g = i / fade; s[i] *= g; s[s.length - 1 - i] *= g; }
  return out;
}
