import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Quaternion, Vector3, Euler } from 'three';
import { TableGesture, toLocal, toWorld, toLocalVector, rotationData } from '../src/mr/spatial.js';
import { TabletopHost } from '../src/mr/host.js';
import { Interaction } from '../src/mr/interaction.js';
import { dockPosition } from '../src/mr/defense-layout.js';

const identity = () => new Quaternion();
const turn = (x, y, z) => new Quaternion().setFromEuler(new Euler(x, y, z));
const vec = p => new Vector3().copy(p);
const nearPoint = (a, b) => assert.ok(vec(a).distanceTo(vec(b)) < 1e-8, `${JSON.stringify(a)} != ${JSON.stringify(b)}`);
const nearRotation = (a, b) => assert.ok(Math.abs(new Quaternion().copy(a).dot(b)) > 1 - 1e-8);

test('full book transforms round-trip positions and throwing velocities, including upside-down', () => {
  for (const rotation of [identity(), turn(.7, .5, -.4), turn(Math.PI / 2, 0, 0), turn(Math.PI, .3, 0)])
    for (const scale of [.2, .55, 1.6]) {
      const table = { position: { x: 2, y: 1.4, z: -3 }, rotation: rotationData(rotation), scale };
      const p = { x: -.65, y: .38, z: .4 };
      const expected = vec(p).applyQuaternion(rotation).multiplyScalar(scale).add(table.position);
      nearPoint(toWorld(p, table), expected);
      nearPoint(toLocal(expected, table), p);
      const velocity = vec(p).applyQuaternion(rotation).multiplyScalar(scale);
      nearPoint(toLocalVector(velocity, table), p);
    }
});

test('either diagonal pair tilts, twists and scales, then either remaining wrist carries without a jump', () => {
  for (const diagonal of [-1, 1]) for (const release of ['left', 'right']) {
    const table = { position: { x: 0, y: .776, z: -.6 }, rotation: rotationData(identity()), scale: .2 };
    const gesture = new TableGesture(table);
    const points = [{ x: -1.28, y: .035, z: diagonal === 1 ? 1.34 : -.65 },
      { x: 1.28, y: .035, z: diagonal === 1 ? -.65 : 1.34 }];
    const palms = [turn(.1, .3, -.2), turn(-.2, .1, .4)];
    const before = points.map(p => vec(toWorld(p, table)));
    const center = before[0].clone().add(before[1]).multiplyScalar(.5);
    const shift = new Vector3(.2, .5, .1), rotation = turn(2.7, -.35, .6);
    const after = before.map(p => p.clone().sub(center).multiplyScalar(1.4).applyQuaternion(rotation).add(center).add(shift));
    for (const [i, side] of ['left', 'right'].entries()) gesture.begin(side, before[i], palms[i]);
    for (const [i, side] of ['left', 'right'].entries())
      gesture.move(side, after[i], rotation.clone().multiply(palms[i]));
    nearRotation(table.rotation, rotation);
    assert.ok(Math.abs(table.scale - .28) < 1e-10);
    points.forEach((p, i) => nearPoint(toWorld(p, table), after[i]));
    const held = release === 'left' ? 1 : 0, remaining = held ? 'right' : 'left';
    const snapshot = structuredClone(table);
    gesture.end(release);
    const currentPalm = rotation.clone().multiply(palms[held]);
    gesture.move(remaining, after[held], currentPalm);
    nearPoint(table.position, snapshot.position); nearRotation(table.rotation, rotation);
    const wristTurn = turn(-.4, .2, .1), translated = after[held].clone().add(new Vector3(-.1, .15, 0));
    gesture.move(remaining, translated, wristTurn.clone().multiply(currentPalm));
    nearRotation(table.rotation, wristTurn.clone().multiply(rotation));
    nearPoint(toWorld(points[held], table), translated);
  }
});

test('twisting both wrists turns a book around stationary grips; coincident grips recover without flipping', () => {
  const table = { position: { x: 0, y: 1, z: -1 }, rotation: rotationData(identity()), scale: .2 };
  const gesture = new TableGesture(table), left = { x: -.25, y: 1, z: -1 }, right = { x: .25, y: 1, z: -1 };
  gesture.begin('left', left, identity()); gesture.begin('right', right, identity());
  const rotation = turn(Math.PI, 0, 0);
  gesture.move('left', left, rotation); gesture.move('right', right, rotation);
  nearRotation(table.rotation, rotation);
  gesture.move('right', left, rotation);
  const before = structuredClone(table);
  gesture.move('right', right, rotation);
  nearRotation(table.rotation, new Quaternion().copy(before.rotation));
  assert.equal(table.scale, before.scale);
});

test('tilted and overhead shops preserve drop, potion throw, cannon, miss and replay behavior', () => {
  const digests = [];
  for (const rotation of [identity(), turn(.7, .4, -.6), turn(Math.PI / 2, 0, 0), turn(Math.PI, .2, -.3)]) {
    const host = new TabletopHost(); host.start('normal', { opponent: false }); host.advance(60 * 300);
    const table = { position: { x: .4, y: 1.5, z: -.5 }, rotation: rotationData(rotation), scale: .2 };
    const input = new Interaction(host, table);
    const release = (id, point, throwFrom = null) => {
      const start = toWorld(throwFrom || point, table), end = toWorld(point, table);
      assert.ok(input.begin('hand', id, start, 1));
      input.move('hand', end, 1.1); input.release('hand');
      for (let i = 0; i < 180; i++) input.update(1 / 60);
      assert.equal(input.flights.size, 0);
    };
    release('unit-0', { x: -.65, y: .226, z: .4 });
    assert.equal(host.observe().units.length, 1);
    host.advance(120);
    const unit = host.observe().units[0];
    release(`troop-${unit.id}`, { x: -.5, y: .3, z: -.35 });
    assert.ok(host.observe().units[0].guide);
    release('upgrade-dmg', { x: 0, y: .65, z: 0 }, { x: -.02, y: .7, z: 0 });
    assert.equal(host.observe().player.upgrades.dmg, 1);
    const dock = dockPosition(0);
    release('turret-0', { ...dock, y: dock.y + .06 });
    assert.equal(host.observe().player.turrets[0], 0);
    const gold = host.observe().player.gold;
    release('upgrade-hp', { x: 4, y: .7, z: 0 });
    assert.equal(host.observe().player.gold, gold);
    assert.equal(host.observe().player.upgrades.hp, 0);
    digests.push(host.session.digest());
  }
  assert.equal(new Set(digests).size, 1, 'View orientation must not change any engine command or outcome');
});
