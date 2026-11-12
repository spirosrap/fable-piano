/**
 * The hummer's head: chimera's 3D vocal tract, moved by the telemetry the voice engine recorded
 * while it rendered the sound. No React here; the page calls draw() from its own frame loop.
 */
import { initChimera } from "./chimera/wasm/chimera.ts";
import type { BodyMix, HumanArtic } from "./chimera/wasm/types.ts";
import type { TelemetryMessage } from "./chimera/worklet/protocol.ts";

export interface Track { message(i: number): TelemetryMessage; indexAt(t: number): number; readonly duration: number }
export interface Head {
  /** a recording of the mouth, from the worker's `tele` */
  track(buf: ArrayBuffer): Track;
  /** draw one frame: the mouth as in `tele`, or at rest when null */
  draw(tele: TelemetryMessage | null, dt: number): void;
  setBody(body: BodyMix): void;
  /** forget the motion so far (the music jumped) */
  reset(): void;
  dispose(): void;
}

export async function createHead(host: HTMLElement, wasmUrl: string, body: BodyMix): Promise<Head> {
  await initChimera(wasmUrl);
  // these read the engine's catalogue as they load, so they come after it
  const [{ Anatomy3D }, { VoiceModel }, { TeleTrack }, { headRendererPool }, { NEUTRAL }] = await Promise.all([
    import("./chimera/ui/render/anatomy3d.ts"), import("./chimera/ui/analysis.ts"), import("./chimera/show/tele.ts"),
    import("./chimera/ui/render/sharedHeadRenderer.ts"), import("./chimera/wasm/engine.ts"),
  ]);
  const lease = headRendererPool.acquire();
  const gl = lease.renderer;
  gl.outputColorSpace = "srgb-linear"; // the palette's sRGB values go straight through, as in chimera
  gl.setClearColor(0x000000, 1);
  const canvas = gl.domElement;
  canvas.style.cssText = "width:100%;height:100%;display:block";
  host.appendChild(canvas);
  const r = new Anatomy3D();
  r.centred = true;
  let model = new VoiceModel(body, 48000);
  let posed = false, w = 0, h = 0;
  const view = { pressure: true, particles: true, grid: false, calipers: false };
  const fit = () => {
    const b = host.getBoundingClientRect();
    if (b.width < 1 || b.height < 1 || (b.width === w && b.height === h)) return;
    w = b.width; h = b.height;
    gl.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    gl.setSize(w, h, false);
    r.resize(w, h);
    posed = false;
  };
  return {
    track: (buf) => new TeleTrack(buf),
    draw(tele, dt) {
      fit();
      if (w < 1) return;
      const a: HumanArtic = tele ? VoiceModel.articFromArray(tele.t.artic) : (NEUTRAL as HumanArtic);
      r.face.update(tele, dt);
      // a touch closer than chimera stands
      if (!posed) { const p = r.poses(model); r.camera.position.copy(p.target).lerp(p.home, 0.93); r.camera.lookAt(p.target); posed = true; }
      r.update(model, model.frame(a), a, tele, view, dt);
      gl.render(r.scene, r.camera);
    },
    setBody(b) { model.dispose(); model = new VoiceModel(b, 48000); posed = false; r.resetMotion(); },
    reset() { r.resetMotion(); },
    dispose() { canvas.remove(); r.dispose(); model.dispose(); lease.release(); },
  };
}
