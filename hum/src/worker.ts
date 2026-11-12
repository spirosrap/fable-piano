/**
 * Renders one stretch of the hummed melody with the CHIMERA voice engine, off the main thread.
 * In:  { id, wasmUrl, notes: [{ midi, start, duration, hold, syl, vib, beat, say }], body, vibrato, syllable }
 *      (times in seconds of voice time, from the start of the stretch)
 * Out: { id, samples (48 kHz mono), tele (the mouth's movement), lead (seconds before the first note) }
 */
import { initChimera, chimeraModule } from "./chimera/wasm/chimera.ts";

import { LEAD, RATE, renderJob, type Engine, type Job, type RenderPart } from "./render.ts";

let tools: Promise<{ engine: Engine; renderPart: RenderPart }> | null = null;
async function load(wasmUrl: string) {
  await initChimera(wasmUrl);
  // these read the engine's catalogue as they load, so they come after it
  const [engine, { renderPart }] = await Promise.all([import("./chimera/wasm/engine.ts"), import("./chimera/band/render.ts")]);
  return { engine, renderPart };
}

self.onmessage = async (e: MessageEvent<Job>) => {
  const job = e.data;
  try {
    const { engine, renderPart } = await (tools ??= load(job.wasmUrl));
    const out = renderJob(engine, renderPart, chimeraModule(), job), s = out.samples;
    (self as unknown as Worker).postMessage({ id: job.id, samples: s, tele: out.tele, lead: LEAD, rate: RATE }, [s.buffer, out.tele]);
  } catch (err) {
    (self as unknown as Worker).postMessage({ id: job.id, error: err instanceof Error ? err.message : String(err) });
  }
};
