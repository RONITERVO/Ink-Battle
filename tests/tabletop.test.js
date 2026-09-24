import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { TabletopHost } from '../src/mr/host.js';
import { Interaction } from '../src/mr/interaction.js';
import { TableGesture, toLocal, toWorld, fly } from '../src/mr/spatial.js';
import { UNIT_FORMS, TABLE, shopOffers, dropZone } from '../src/mr/catalog.js';
import { InkBatch } from '../src/mr/ink-batch.js';
import { unitModel, baseModel } from '../src/mr/models.js';
import { Session } from '../src/sdk/session.js';
import { AGES } from '../src/content/ages.js';
import { attackMotion } from '../src/mr/combat-motion.js';

const rally = { x: -0.65, y: 0, z: 0.4 },
  page = { x: 0, y: 0, z: 0 };
const table = () => ({
  position: { x: 0, y: 0.8, z: -1 },
  yaw: 0.3,
  scale: 0.55
});
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-8, `${a} != ${b}`);

test('MR purchases are atomic, validated on release and replay through the existing engine', () => {
  const host = new TabletopHost();
  host.start('normal', { opponent: false });
  const before = host.observe().player.gold;
  assert.equal(host.grab('left', 'unit-0').ok, true);
  assert.equal(host.observe().player.gold, before);
  assert.equal(host.drop('left', page).error, 'rally-area');
  assert.equal(host.observe().player.gold, before);
  host.grab('left', 'unit-0');
  host.grab('right', 'unit-0');
  assert.equal(host.drop('left', rally).ok, true);
  assert.equal(host.drop('right', rally).error, 'deploying');
  assert.equal(host.drop('left', rally).error, 'not-held');
  assert.equal(host.observe().player.gold, before - AGES[0].units[0].cost);
  assert.equal(host.observe().units[0].x, 180); // Drop cannot teleport a troop behind enemy lines.
  assert.equal(
    Session.fromReplay(host.session.replay()).digest(),
    host.session.digest()
  );
  const checkpoint = host.session.checkpoint();
  host.session = Session.restore(checkpoint);
  host.advance(180);
  const beforeSecond = host.observe().player.gold;
  host.grab('fresh', 'unit-0');
  assert.equal(host.drop('fresh', rally).ok, true);
  assert.equal(
    host.observe().player.gold,
    beforeSecond - AGES[0].units[0].cost
  );
});

test('misses, cancellation, paused drops, stale ages and lost sessions never spend', () => {
  const host = new TabletopHost();
  host.start('normal', { opponent: false });
  for (const point of [
    { x: 9, y: 0, z: 0 },
    { x: NaN, y: 0, z: 0 },
    { x: 0, y: 9, z: 0 },
    null
  ]) {
    const gold = host.observe().player.gold;
    host.grab('a', 'unit-0');
    assert.equal(host.drop('a', point).ok, false);
    assert.equal(host.observe().player.gold, gold);
  }
  host.grab('a', 'unit-0');
  host.cancel('a');
  assert.equal(host.drop('a', rally).error, 'not-held');
  host.grab('a', 'unit-0');
  host.session.pause(true);
  assert.equal(host.drop('a', rally).error, 'paused');
  host.session.pause(false);
  host.grab('a', 'unit-0');
  host.session = new Session({ startAge: 1 });
  assert.equal(host.drop('a', rally).error, 'stale-age');
  host.grab('a', 'unit-0');
  host.pauseForInterruption();
  assert.equal(host.holds.size, 0);
  assert.equal(host.session.paused, true);
});

test('every content age has a physical catalog using authoritative prices and zones', () => {
  assert.equal(UNIT_FORMS.length, AGES.length);
  for (let age = 0; age < AGES.length; age++) {
    const state = new Session({ startAge: age }).observe(),
      offers = shopOffers(state);
    assert.equal(UNIT_FORMS[age].length, AGES[age].units.length);
    for (const offer of offers) {
      if (offer.kind === 'unit') {
        assert.equal(offer.price, AGES[age].units[offer.command.index].cost);
        assert.equal(dropZone(offer, rally), null);
      }
      if (offer.kind === 'turret') {
        assert.equal(offer.price, AGES[age].turrets[offer.command.index].cost);
        assert.equal(dropZone(offer, rally), 'your-base');
        assert.equal(dropZone(offer, { x: -1, y: 0, z: 0.2 }), null);
      }
    }
  }
});

test('table carry, turn, scale and hand release preserve held positions without touching the engine', () => {
  const t = table(),
    gesture = new TableGesture(t),
    a = { x: -0.3, y: 1, z: -0.8 },
    b = { x: 0.3, y: 1, z: -0.8 };
  const local = toLocal(a, t);
  gesture.begin('a', a);
  gesture.move('a', { ...a, y: 1.2 });
  near(toWorld(local, t).y, 1.2);
  gesture.begin('b', b);
  const scale = t.scale;
  gesture.move('b', { x: 0.8, y: 1, z: -0.8 });
  assert.ok(t.scale > scale);
  const before = structuredClone(t);
  gesture.end('b');
  gesture.move('a', { ...a, y: 1.2 });
  for (const k of ['x', 'y', 'z']) near(t.position[k], before.position[k]);
  near(t.scale, before.scale);
  near(t.yaw, before.yaw);
  gesture.begin('b', b);
  gesture.move('b', { x: 100, y: 1, z: 1 });
  assert.equal(t.scale, TABLE.maxScale);
  gesture.clear();
  assert.equal(gesture.grips.size, 0);
  for (const yaw of [0, 0.5, 2, -3]) {
    t.yaw = yaw;
    const p = { x: 0.12, y: 0.35, z: -0.8 },
      round = toLocal(toWorld(p, t), t);
    for (const k of ['x', 'y', 'z']) near(p[k], round[k]);
  }
});

test('thrown purchases cross the landing plane, miss safely and cancel on tracking interruption', () => {
  const host = new TabletopHost();
  host.start('normal', { opponent: false });
  const t = table(),
    input = new Interaction(host, t);
  const point = toWorld({ x: -0.65, y: 0.7, z: 0.4 }, t);
  input.begin('a', 'unit-0', point, 0);
  input.move('a', point, 0.1);
  input.release('a');
  assert.equal(input.flights.size, 1);
  for (let i = 0; i < 100; i++) input.update(0.016);
  assert.equal(host.observe().units.length, 1);
  assert.equal(input.flights.size, 0);
  host.advance(180);
  const gold = host.observe().player.gold;
  input.begin('a', 'unit-0', toWorld({ x: 5, y: 1, z: 0 }, t), 1);
  input.release('a');
  for (let i = 0; i < 100; i++) input.update(0.016);
  assert.equal(host.observe().player.gold, gold);
  input.begin('a', 'unit-0', point, 2);
  input.release('a');
  input.cancelAll();
  for (let i = 0; i < 100; i++) input.update(0.016);
  assert.equal(host.observe().player.gold, gold);
  const flight = {
    position: { x: 0, y: 1, z: 0 },
    velocity: { x: 2, y: -80, z: 0 },
    age: 0
  };
  const hit = fly(flight, 0.1);
  assert.equal(hit.y, 0);
  assert.ok(hit.x > 0 && hit.x < 0.2);
});

test('all 18 troop forms have volume and 160-unit rendering stays within instance budgets', () => {
  const batch = new InkBatch(new THREE.Group(), { capacity: 6000 }),
    bounds = new THREE.Box3(),
    local = new THREE.Box3(),
    matrix = new THREE.Matrix4();
  for (let age = 0; age < AGES.length; age++)
    for (let index = 0; index < 3; index++) {
      batch.begin();
      unitModel(batch, age, index);
      batch.end();
      bounds.makeEmpty();
      for (const mesh of Object.values(batch.meshes)) {
        mesh.geometry.computeBoundingBox();
        for (let i = 0; i < mesh.count; i++) {
          mesh.getMatrixAt(i, matrix);
          assert.ok([...matrix.elements].every(Number.isFinite));
          local.copy(mesh.geometry.boundingBox).applyMatrix4(matrix);
          bounds.union(local);
        }
      }
      const size = bounds.getSize(new THREE.Vector3());
      assert.ok(
        size.x > 0.04 && size.y > 0.05 && size.z > 0.035,
        `Flat model ${age}/${index}`
      );
      batch.begin();
      for (let i = 0; i < 160; i++)
        unitModel(batch, age, index, {
          x: i / 160,
          team: i % 2 ? 1 : -1,
          time: i,
          walking: true,
          motion: attackMotion(AGES[age].units[index].attackSpeed, AGES[age].units[index].attackSpeed, true)
        });
      baseModel(batch, age, -1, 1);
      baseModel(batch, age, 1, -1);
      batch.end();
      assert.equal(batch.overflow, 0);
      assert.ok(
        batch.triangles < 250000,
        `Geometry budget ${age}/${index}: ${batch.triangles}`
      );
    }
  batch.dispose();
});

test('MR speed and interruptions have the same deterministic clock as classic play', () => {
  for (const speed of [1, 2, 3]) {
    const host = new TabletopHost();
    host.start();
    host.speed = speed;
    const reference = new Session();
    host.update(1);
    reference.advance(60 * speed);
    assert.equal(host.session.digest(), reference.digest());
    const tick = host.session.tick;
    host.update(6);
    assert.equal(host.session.tick, tick);
    assert.equal(host.session.paused, true);
  }
});
