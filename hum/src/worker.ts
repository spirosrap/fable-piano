/**
 * Renders one stretch of the hummed melody with the CHIMERA voice engine, off the main thread.
 * In:  { id, wasmUrl, notes: [{ midi, start, duration, hold }], body, vibrato, syllable }
 *      (times in seconds of voice time, from the start of the stretch)
 * Out: { id, samples (48 kHz mono), tele (the mouth's movement), lead (seconds before the first note) }
 */
import { initChimera, chimeraModule } from "./chimera/wasm/chimera.ts";
import type { BodyMix, Gesture, SungNote, Syllable } from "./chimera/wasm/types.ts";
import type { BandPart } from "./chimera/band/types.ts";

/** The engine lays a consonant out before its note, so every stretch starts this long before its first note. */
const LEAD = 0.35;
const RATE = 48000;

interface HumNote { midi: number; start: number; duration: number; hold?: boolean }
interface Job { id: number; wasmUrl: string; notes: HumNote[]; body: BodyMix; vibrato: number; syllable: { onset: string; vowel: string } }

let tools: Promise<{ planSong: typeof import("./chimera/wasm/engine.ts").planSong; renderPart: typeof import("./chimera/band/render.ts").renderPart }> | null = null;
async function load(wasmUrl: string) {
  await initChimera(wasmUrl);
  // these read the engine's catalogue as they load, so they come after it
  const [{ planSong }, { renderPart }] = await Promise.all([import("./chimera/wasm/engine.ts"), import("./chimera/band/render.ts")]);
  return { planSong, renderPart };
}

self.onmessage = async (e: MessageEvent<Job>) => {
  const job = e.data;
  try {
    const { planSong, renderPart } = await (tools ??= load(job.wasmUrl));
    const syl: Syllable = {
      text: job.syllable.onset + job.syllable.vowel,
      onset: job.syllable.onset ? [{ ipa: job.syllable.onset, stress: 0 }] : [],
      nucleus: { ipa: job.syllable.vowel, stress: 1 },
      coda: [], wordEnd: true, phraseEnd: false,
    } as Syllable;
    // Notes that touch are one breath; a gap ends the phrase (as chimera's planMelody does).
    const gestures: Gesture[] = [];
    let end = LEAD, phrase: SungNote[] = [], phraseStart = LEAD;
    const flush = () => {
      if (!phrase.length) return;
      const p = planSong(phrase, { body: job.body, bpm: 60, t0: phraseStart, vibrato: job.vibrato });
      gestures.push(...p.gestures); end = Math.max(end, p.end); phrase = [];
    };
    job.notes.forEach((n, i) => {
      const prev = job.notes[i - 1], next = job.notes[i + 1];
      if (prev && n.start - prev.start - prev.duration > 0.025) flush();
      if (!phrase.length) phraseStart = LEAD + n.start;
      // a held note keeps the vowel and only moves the pitch; the first note of a breath always speaks
      const s = n.hold && phrase.length ? ({ ...syl, onset: [], coda: [], melisma: true, phraseEnd: false } as Syllable) : syl;
      const span = next && next.start - n.start - n.duration <= 0.025 ? next.start - n.start : n.duration;
      phrase.push({ midi: Math.max(24, Math.min(96, n.midi)), beats: span, syl: s });
    });
    flush();
    const last = job.notes[job.notes.length - 1];
    const duration = Math.max(end, LEAD + last.start + last.duration) + 0.25;
    const part = { id: "hum", name: "The hummer", role: "", body: job.body, volume: 1, pan: 0, vibrato: job.vibrato } as BandPart;
    const out = renderPart(chimeraModule(), part, duration, gestures);
    // no click where a stretch begins or ends
    const s = out.samples, fade = Math.min(480, s.length >> 1);
    for (let i = 0; i < fade; i++) { const g = i / fade; s[i] *= g; s[s.length - 1 - i] *= g; }
    (self as unknown as Worker).postMessage({ id: job.id, samples: s, tele: out.tele, lead: LEAD, rate: RATE }, [s.buffer, out.tele]);
  } catch (err) {
    (self as unknown as Worker).postMessage({ id: job.id, error: err instanceof Error ? err.message : String(err) });
  }
};
