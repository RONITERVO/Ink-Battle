import * as THREE from "three";
import { InkBatch } from "../../src/mr/ink-batch.js";
import {
  unitModel,
  cannonModel,
  baseModel,
  objectModel,
} from "../../src/mr/models.js";
import { AGES } from "../../src/content/ages.js";
import { shopOffers, TOOLS } from "../../src/mr/catalog.js";
import { Session } from "../../src/sdk/session.js";

// Art contact sheets exercise the actual shipped models, at fixed poses and light.
window.drawPencilGallery = (kind = "armies") => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas"),
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  });
  renderer.setSize(1440, 1150, false);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#f5f1e8");
  const camera = new THREE.OrthographicCamera(-0.1, 3.5, 0.5, -2.375, 0.01, 10);
  camera.position.set(0, 0, 5);
  const batch = new InkBatch(scene, { capacity: 5000 });
  batch.begin();
  const labels = [];
  const posed = (x, y, draw, scale = 1) => {
    const start = { ...batch.counts };
    draw();
    const transform = new THREE.Matrix4()
      .makeTranslation(x, y, 0)
      .multiply(new THREE.Matrix4().makeRotationX(0.18))
      .multiply(new THREE.Matrix4().makeRotationY(-0.38))
      .multiply(new THREE.Matrix4().makeScale(scale, scale, scale))
      .multiply(new THREE.Matrix4().makeTranslation(-x, -y, 0));
    const matrix = new THREE.Matrix4();
    for (const [name, mesh] of Object.entries(batch.meshes)) {
      for (let i = start[name]; i < batch.counts[name]; i++) {
        mesh.getMatrixAt(i, matrix);
        mesh.setMatrixAt(i, matrix.premultiply(transform));
      }
    }
  };
  if (kind === "armies") {
    for (const [age, data] of AGES.entries()) {
      const y = -age * 0.43;
      for (let i = 0; i < 3; i++) {
        posed(0.2 + i * 0.43, y, () =>
          unitModel(batch, age, i, { x: 0.2 + i * 0.43, y, scale: 1.24 }),
        );
        labels.push({
          text: data.units[i].name,
          x: 0.2 + i * 0.43,
          y: y - 0.062,
        });
        batch.model(1.64 + i * 0.43, y, 0, 1.24);
        posed(1.64 + i * 0.43, y, () => cannonModel(batch, age, i));
        labels.push({
          text: data.turrets[i].name,
          x: 1.68 + i * 0.43,
          y: y - 0.062,
        });
      }
      posed(
        3.07,
        y,
        () => {
          const start = { ...batch.counts };
          baseModel(batch, age, 3.07, 1);
          const m = new THREE.Matrix4();
          for (const [name, mesh] of Object.entries(batch.meshes)) {
            for (let j = start[name]; j < batch.counts[name]; j++) {
              mesh.getMatrixAt(j, m);
              m.elements[13] += y;
              mesh.setMatrixAt(j, m);
            }
          }
        },
        0.78,
      );
      labels.push({ text: data.name, x: 3.07, y: y - 0.062 });
    }
  } else {
    const offers = [
      ...shopOffers(new Session().observe()).filter(
        (o) => !["unit", "turret"].includes(o.kind),
      ),
      ...TOOLS,
      ...shopOffers(null),
    ];
    for (const [i, offer] of offers.entries()) {
      const x = 0.35 + (i % 4) * 0.78,
        y = 0.05 - Math.floor(i / 4) * 0.47;
      posed(x, y, () => objectModel(batch, offer, 0, { x, y, scale: 2 }));
      labels.push({ text: offer.label, x, y: y - 0.085 });
    }
  }
  batch.end();
  renderer.render(scene, camera);
  for (const label of labels) {
    const point = new THREE.Vector3(label.x, label.y, 0).project(camera);
    const node = document.createElement("span");
    node.textContent = label.text;
    node.style.cssText = `position:absolute;left:${(point.x + 1) * 720}px;top:${(1 - point.y) * 575}px;transform:translateX(-50%);font:16px 'Patrick Hand';color:#514b45`;
    document.body.append(node);
  }
  const stats = {
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    overflow: batch.overflow,
  };
  // The finished canvas preserves the rendered frame for the screenshot. Release GPU resources.
  batch.dispose();
  renderer.dispose();
  return stats;
};
