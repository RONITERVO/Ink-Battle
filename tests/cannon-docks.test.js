import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { TabletopHost } from '../src/mr/host.js';
import { Session } from '../src/sdk/session.js';
import { Interaction } from '../src/mr/interaction.js';
import { toWorld, fly } from '../src/mr/spatial.js';
import { DOCK, dockPosition, defenseTarget } from '../src/mr/defense-layout.js';
import { InkBatch } from '../src/mr/ink-batch.js';
import { baseModel, cannonModel } from '../src/mr/models.js';
import { dockModel } from '../src/mr/dock-model.js';
import { REST, attackMotion } from '../src/mr/combat-motion.js';
import { AGES } from '../src/content/ages.js';
import { TABLE, dropZone } from '../src/mr/catalog.js';

function funded() {
  const host = new TabletopHost();
  host.start('normal', { opponent: false });
  host.advance(36000);
  host.advance(15000);
  return host;
}
function buy(host, id, point = defenseTarget(host.offer(id), host.observe())) {
  assert.ok(host.grab('test', id).ok, id);
  return host.drop('test', point);
}

test('four physical docks enforce foundations, safe misses, sale, restore and evolution', () => {
  const host = funded();
  assert.equal(host.observe().player.unlockedSlots, 1);
  for (let slot = 0; slot < 4; slot++) {
    if (slot) {
      const gold = host.observe().player.gold;
      assert.equal(buy(host, 'slot', dockPosition(slot - 1)).ok, false);
      assert.equal(host.observe().player.gold, gold);
      assert.ok(buy(host, 'slot').ok);
      assert.equal(host.observe().player.gold, gold - slot * 500);
    }
    const gold = host.observe().player.gold;
    const target = dockPosition(slot);
    for (const x of [-1, 1]) for (const z of [-1, 1])
      assert.equal(dropZone(host.offer('turret-0'), {
        x: target.x + x * DOCK.width / 2,
        y: target.y,
        z: target.z + z * DOCK.depth / 2,
      }, host.observe()), null, 'Every visible top corner accepts a cannon');
    for (const miss of [
      { x: -1.06, y: 0, z: 0.14 }, // The old, inside-base drop.
      dockPosition(slot, -1), // Opponent's dock.
      dockPosition((slot + 1) % 4), // Locked, occupied or different next dock.
    ]) {
      assert.equal(buy(host, 'turret-0', miss).ok, false);
      assert.equal(host.observe().player.gold, gold);
    }
    assert.ok(buy(host, 'turret-0').ok);
    assert.equal(host.observe().player.turrets[slot], 0);
    assert.equal(host.observe().player.gold, gold - 100);
    assert.equal(host.grab('test', 'turret-0').error, 'slots-full');
    host.session = Session.restore(host.session.checkpoint());
  }
  assert.equal(host.grab('test', 'slot').error, 'max-docks');
  assert.equal(host.offer('slot').price, Infinity);
  const gold = host.observe().player.gold;
  assert.ok(buy(host, 'sell', dockPosition(3)).ok);
  assert.equal(host.observe().player.gold, gold + 50);
  assert.deepEqual(host.observe().player.turrets, [0, 0, 0, null]);
  assert.equal(host.observe().player.unlockedSlots, 4);
  assert.equal(defenseTarget(host.offer('turret-0'), host.observe()).slot, 3);
  assert.ok(buy(host, 'turret-0').ok);
  assert.ok(buy(host, 'evolve', { x: 0, y: 0, z: 0 }).ok);
  assert.equal(host.observe().player.age, 1);
  assert.equal(host.observe().player.unlockedSlots, 4);
  assert.deepEqual(host.observe().player.turrets, [null, null, null, null]);
  assert.equal(Session.fromReplay(host.session.replay()).digest(), host.session.digest());
});

test('simultaneous releases cannot mount two cannons on one dock or build a dock twice', () => {
  const host = funded();
  for (const id of ['turret-0', 'slot']) {
    const target = defenseTarget(host.offer(id), host.observe());
    assert.ok(host.grab('left', id).ok);
    assert.ok(host.grab('right', id).ok);
    assert.ok(host.drop('left', target).ok);
    const gold = host.observe().player.gold;
    assert.equal(host.drop('right', target).ok, false);
    assert.equal(host.observe().player.gold, gold);
  }
});

test('hands and throws land on raised docks after table translation, rotation and scaling', () => {
  for (const scale of [0.2, 0.55, 1.6]) for (const thrown of [false, true]) {
    const host = new TabletopHost();
    host.start('normal', { opponent: false });
    const table = { position: { x: 1, y: 0.8, z: -1 }, yaw: 1.2, scale };
    const input = new Interaction(host, table);
    const target = dockPosition(0);
    const world = toWorld({ ...target, y: target.y + 0.06 + (thrown ? 0.5 : 0) }, table);
    assert.ok(input.begin('hand', 'turret-0', world));
    input.move('hand', world, 0.1);
    input.release('hand');
    for (let i = 0; i < 100; i++) input.update(0.016);
    assert.equal(host.observe().player.turrets[0], 0);
    assert.equal(host.drops.at(-1).point.y, DOCK.height);
    assert.equal(input.flights.size, 0);
  }
  const flight = { position: { x: 0, y: 1, z: 0 }, velocity: { x: 2, y: -80, z: 0 }, age: 0 };
  const hit = fly(flight, 0.1, 9.81, DOCK.height);
  assert.equal(hit.y, DOCK.height);
  assert.ok(hit.x > 0 && hit.x < 0.2, 'Fast throws interpolate the raised crossing');
});

// Read actual shader-adjusted stroke positions as well as filled geometry.
function bounds(batch, draw) {
  batch.begin();
  draw();
  batch.end();
  const box = new THREE.Box3(), matrix = new THREE.Matrix4(), point = new THREE.Vector3();
  for (const mesh of Object.values(batch.meshes)) {
    const { position, pencilCenter, pencilOffset, pencilRadius } = mesh.geometry.attributes;
    for (let i = 0; i < mesh.count; i++) {
      mesh.getMatrixAt(i, matrix);
      for (let v = 0; v < position.count; v++) {
        if (pencilCenter) point.set(
          pencilCenter.getX(v) + pencilOffset.getX(v) * pencilRadius.getX(i),
          pencilCenter.getY(v) + pencilOffset.getY(v) * pencilRadius.getY(i),
          pencilCenter.getZ(v) + pencilOffset.getZ(v) * pencilRadius.getZ(i),
        );
        else point.fromBufferAttribute(position, v);
        box.expandByPoint(point.applyMatrix4(matrix));
      }
    }
  }
  return box;
}

test('all 18 defenses rest on four separated foundations clear of every base in every combat pose', () => {
  const batch = new InkBatch(new THREE.Group(), { capacity: 1200 });
  try {
    for (const team of [1, -1]) for (let age = 0; age < AGES.length; age++) {
      const base = bounds(batch, () => baseModel(batch, age, -team * 1.06, team));
      const pads = [];
      for (let slot = 0; slot < 4; slot++) {
        const p = dockPosition(slot, team);
        assert.ok(Math.abs(p.x) + DOCK.width / 2 <= TABLE.width / 2);
        assert.ok(Math.abs(p.z) + DOCK.depth / 2 <= TABLE.depth / 2);
        const pad = bounds(batch, () => {
          batch.model(p.x, 0, p.z);
          dockModel(batch, { occupied: true });
        });
        assert.equal(base.intersectsBox(pad), false, `Base/dock ${age}/${team}/${slot}`);
        for (const other of pads) assert.equal(pad.intersectsBox(other), false);
        pads.push(pad);
        for (let index = 0; index < 3; index++) {
          const period = AGES[age].turrets[index].attackSpeed;
          for (const motion of [REST, attackMotion(period, period, true), attackMotion(0.05, period, true)]) {
            const cannon = bounds(batch, () => {
              batch.model(p.x, p.y, p.z, 0.83, team);
              cannonModel(batch, age, index, undefined, false, motion);
            });
            assert.equal(base.intersectsBox(cannon), false, `Base/cannon ${age}/${index}/${team}/${slot}`);
            assert.ok(Math.abs(cannon.min.y - DOCK.height) < 0.008, 'Feet stay on the foundation');
            assert.ok(cannon.min.z >= pad.min.z && cannon.max.z <= pad.max.z, 'Cannon fits the dock depth');
          }
        }
      }
      assert.equal(pads.filter((p) => p.max.z < base.min.z).length, 2);
      assert.equal(pads.filter((p) => p.min.z > base.max.z).length, 2);
    }
  } finally { batch.dispose(); }
});
