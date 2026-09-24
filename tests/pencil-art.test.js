import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import * as THREE from "three";
import { AGES } from "../src/content/ages.js";
import { InkBatch } from "../src/mr/ink-batch.js";
import { pencilGeometries, strokeGeometry } from "../src/mr/pencil-geometry.js";
import { CHAPTERS, bookPaths, landscapePaths } from "../src/mr/sketchbook.js";
import {
  cannonModel,
  unitModel,
  baseModel,
  objectModel,
  specialModel,
} from "../src/mr/models.js";
import { shopOffers, TOOLS } from "../src/mr/catalog.js";
import { Session } from "../src/sdk/session.js";

function signature(batch, draw) {
  batch.begin();
  batch.model(0, 0, 0);
  draw();
  batch.end();
  assert.equal(batch.overflow, 0);
  assert.ok(batch.triangles > 0);
  const hash = createHash("sha256");
  for (const [name, mesh] of Object.entries(batch.meshes)) {
    hash.update(name);
    const values = mesh.instanceMatrix.array.slice(0, mesh.count * 16);
    assert.ok(values.every(Number.isFinite));
    hash.update(Buffer.from(values.buffer));
  }
  return hash.digest("hex");
}

test("pencil surfaces contain strokes and open space instead of filled faces", () => {
  const geometries = pencilGeometries();
  for (const geometry of Object.values(geometries)) {
    const pos = geometry.attributes.position.array;
    assert.ok(pos.length > 0);
    assert.ok(pos.every(Number.isFinite));
    assert.equal(
      geometry.attributes.color.count,
      geometry.attributes.position.count,
    );
    assert.ok(geometry.userData.paths > 0);
  }
  const box = new THREE.Mesh(
    geometries.box,
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }),
  );
  const ray = new THREE.Raycaster(
    new THREE.Vector3(0, 0, 2),
    new THREE.Vector3(0, 0, -1),
  );
  assert.equal(
    ray.intersectObject(box).length,
    0,
    "A box must not conceal the room behind its unmarked center",
  );
  ray.ray.origin.set(0.5, 0.5, 2);
  assert.ok(
    ray.intersectObject(box).length > 0,
    "The contour must still have real 3D thickness",
  );
  for (const geometry of Object.values(geometries)) geometry.dispose();
  box.material.dispose();
});

test("every troop, defense, base, potion and tool has a stable distinct drawing", () => {
  assert.equal(
    CHAPTERS.length,
    AGES.length,
    "New ages need a pencil chapter and landscape",
  );
  const batch = new InkBatch(new THREE.Group(), { capacity: 1200 });
  const troops = new Set(),
    defenses = new Set(),
    bases = new Set(),
    effects = new Set();
  for (const [age, content] of AGES.entries()) {
    for (const [index] of content.units.entries()) {
      const draw = () => unitModel(batch, age, index);
      const hash = signature(batch, draw);
      assert.equal(
        signature(batch, draw),
        hash,
        "No per-frame random line jitter",
      );
      troops.add(hash);
    }
    for (const [index] of content.turrets.entries())
      defenses.add(signature(batch, () => cannonModel(batch, age, index)));
    bases.add(signature(batch, () => baseModel(batch, age, 0, 1)));
    effects.add(signature(batch, () => specialModel(batch, age, 1, 1)));
    const offers = shopOffers(new Session({ startAge: age }).observe()).filter(
      (o) => ["potion", "evolve", "special"].includes(o.kind),
    );
    assert.equal(
      new Set(
        offers.map((o) => signature(batch, () => objectModel(batch, o, age))),
      ).size,
      offers.length,
    );
  }
  assert.equal(
    troops.size,
    AGES.reduce((n, age) => n + age.units.length, 0),
  );
  assert.equal(
    defenses.size,
    AGES.reduce((n, age) => n + age.turrets.length, 0),
  );
  assert.equal(bases.size, AGES.length);
  assert.equal(effects.size, AGES.length);
  assert.equal(
    new Set(TOOLS.map((o) => signature(batch, () => objectModel(batch, o, 0))))
      .size,
    TOOLS.length,
  );
  batch.dispose();
});

test("book and all chapter landscapes are deterministic, volumetric and bounded", () => {
  const book = strokeGeometry(bookPaths());
  book.computeBoundingBox();
  const bounds = book.boundingBox.getSize(new THREE.Vector3());
  assert.ok(
    bounds.x > 2.5 && bounds.z > 2.2 && bounds.y > 0.1,
    "Page stacks, cover and bookmark must have depth",
  );
  assert.ok(book.attributes.position.count / 3 < 15000);
  const signatures = new Set();
  for (let age = 0; age < AGES.length; age++) {
    const paths = landscapePaths(age);
    assert.deepEqual(paths, landscapePaths(age));
    signatures.add(JSON.stringify(paths));
    const geometry = strokeGeometry(paths);
    assert.ok(geometry.attributes.position.count / 3 < 15000);
    assert.ok(geometry.attributes.position.array.every(Number.isFinite));
    geometry.dispose();
  }
  assert.equal(signatures.size, AGES.length);
  book.dispose();
});
