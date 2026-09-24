import * as THREE from "three";
import { TabletopScene } from "../../src/mr/scene.js";
import { TabletopHost } from "../../src/mr/host.js";
import { Session } from "../../src/sdk/session.js";

// Deliberately busy synthetic passthrough. Never bundle a player's private room.
window.readableBook = async (age) => {
  const host = new TabletopHost();
  const session = new Session({ startAge: age, opponent: false });
  for (const index of [0, 1, 2]) {
    for (const side of [1, -1]) session.command(side, { type: "unit", index });
    session.advance(180);
  }
  session.pause(true);
  const view = new TabletopScene(document.querySelector("canvas"), host);
  view.immersive(true);
  await document.fonts.ready;
  view.update(session.observe(), [], 0);
  view.camera.lookAt(0, 0.1, 0.3);
  view.message("Lift a troop. Drop it in the green rally area.");
  view.render();
  const gl = view.renderer.getContext();
  const alphaAt = (point) => {
    const pixel = new Uint8Array(4);
    const p = point.clone().project(view.camera);
    gl.readPixels(
      Math.floor(((p.x + 1) / 2) * gl.drawingBufferWidth),
      Math.floor(((p.y + 1) / 2) * gl.drawingBufferHeight),
      1,
      1,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixel,
    );
    return pixel[3];
  };
  const pageAlpha = [-0.9, -0.35, 0, 0.35, 0.9].map((x) =>
    alphaAt(new THREE.Vector3(x, 0, 0.25)),
  );
  const statusAlpha = alphaAt(
    view.status.mesh.localToWorld(new THREE.Vector3(0.5, 0.075, 0)),
  );
  const outsideAlpha = alphaAt(new THREE.Vector3(1.7, 0, 0.2));
  const data = view.paper.canvas
    .getContext("2d")
    .getImageData(0, 0, 1024, 1024).data;
  let paperOpaque = true;
  for (let i = 3; i < data.length; i += 4)
    if (data[i] !== 255) paperOpaque = false;
  return { pageAlpha, statusAlpha, outsideAlpha, paperOpaque, ...view.stats() };
};
