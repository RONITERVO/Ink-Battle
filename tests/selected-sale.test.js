import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Session } from '../src/sdk/session.js';
import { createState } from '../src/core/state.js';
import { applyCommand } from '../src/core/commands.js';
import { AGES } from '../src/content/ages.js';
import { TabletopHost } from '../src/mr/host.js';
import { Interaction } from '../src/mr/interaction.js';
import { dockPosition, defenseTarget, DOCK } from '../src/mr/defense-layout.js';
import { toWorld } from '../src/mr/spatial.js';

function armed() {
  const host = new TabletopHost();
  host.start('normal', { opponent: false });
  host.advance(36000);
  host.advance(15000);
  for (const [slot, index] of [0, 2, 1, 0].entries()) {
    if (slot) assert.ok(host.session.command(1, { type: 'slot' }).ok);
    assert.ok(host.session.command(1, { type: 'turret', index }).ok);
  }
  host.advance(120);
  return host;
}

test('selected sales refund only the chosen cannon in every age and on both sides', () => {
  for (let age = 0; age < AGES.length; age++) for (const team of [1, -1])
    for (let slot = 0; slot < 4; slot++) {
      const state = createState({ startAge: age, opponent: false });
      const side = team === 1 ? state.player : state.enemy;
      side.gold = 1e8;
      for (const [i, index] of [0, 2, 1, 0].entries()) {
        if (i) assert.ok(applyCommand(state, team, { type: 'slot' }).ok);
        assert.ok(applyCommand(state, team, { type: 'turret', index }).ok);
      }
      side.turretTimers = [0.1, 0.2, 0.3, 0.4];
      const before = structuredClone(state), oldSide = team === 1 ? before.player : before.enemy;
      const type = side.turrets[slot];
      assert.ok(applyCommand(state, team, { type: 'sell', slot }).ok);
      assert.equal(side.gold, oldSide.gold + AGES[age].turrets[type].cost / 2);
      assert.equal(side.unlockedSlots, 4);
      for (let i = 0; i < 4; i++) {
        assert.equal(side.turrets[i], i === slot ? null : oldSide.turrets[i]);
        assert.equal(side.turretTimers[i], i === slot ? 0 : oldSide.turretTimers[i]);
      }
      assert.deepEqual(team === 1 ? state.enemy : state.player, team === 1 ? before.enemy : before.player);
      assert.ok(applyCommand(state, team, { type: 'turret', index: 2 }).ok);
      assert.equal(side.turrets[slot], 2, 'A better cannon reuses the vacant foundation');
    }
});

test('bad or empty explicit slots never sell a different cannon; omitted slot stays compatible', () => {
  const host = armed(), session = host.session;
  for (const slot of [-1, 4, 0.5, NaN, Infinity, null, undefined, '0', true, {}, []]) {
    const before = session.digest();
    assert.equal(session.command(1, { type: 'sell', slot }).error, 'invalid-slot');
    assert.equal(session.digest(), before);
  }
  assert.throws(() => session.command(1, { type: 'sell', slot: 0, team: -1 }), /field/);
  assert.ok(session.command(1, { type: 'sell', slot: 0 }, 'sell-0').ok);
  const beforeRetry = session.digest();
  assert.ok(session.command(1, { type: 'sell', slot: 0 }, 'sell-0').ok);
  assert.equal(session.digest(), beforeRetry, 'Request retry refunds once');
  assert.throws(() => session.command(1, { type: 'sell', slot: 1 }, 'sell-0'), /conflict/);
  assert.equal(session.command(1, { type: 'sell', slot: 0 }).error, 'no-turret');
  assert.equal(session.digest(), beforeRetry);
  session.pause(true);
  assert.equal(session.command(1, { type: 'sell', slot: 1 }).error, 'paused');
  session.pause(false);
  assert.ok(session.command(1, { type: 'sell' }).ok);
  assert.deepEqual(session.observe().player.turrets, [null, 2, 1, null]);
  assert.equal(Session.restore(session.checkpoint()).digest(), session.digest());
  assert.equal(Session.fromReplay(session.replay()).digest(), session.digest());

  const legacy = JSON.parse(readFileSync(new URL('./fixtures/cannons-2.2.4.checkpoint.json', import.meta.url), 'utf8'));
  const restored = Session.restore(legacy);
  assert.equal(restored.digest(), legacy.replay.digest, 'Unmodified 2.2.4 checkpoint still loads');
  assert.deepEqual(restored.observe().player.turrets, [0, null, null, null]);
  assert.equal(restored.command(1, { type: 'sell', slot: 2 }).error, 'invalid-slot');
  assert.equal(restored.digest(), legacy.replay.digest, 'A locked slot cannot redirect the sale');
  assert.ok(restored.command(1, { type: 'sell', slot: 0 }).ok);
  assert.equal(Session.restore(restored.checkpoint()).digest(), restored.digest());
});

test('eraser can sell any occupied dock; empty, enemy, base and missed drops refund nothing', () => {
  const host = armed();
  const erase = (point) => {
    assert.ok(host.grab('hand', 'sell').ok);
    return host.drop('hand', point);
  };
  assert.equal(defenseTarget(host.offer('sell'), host.observe()), null, 'No default last-cannon target');
  for (const slot of [1, 0, 2, 3]) {
    const before = host.observe();
    const point = dockPosition(slot);
    assert.equal(defenseTarget(host.offer('sell'), before, point).slot, slot);
    assert.ok(erase(point).ok);
    const after = host.observe();
    assert.equal(after.player.gold, before.player.gold + AGES[0].turrets[before.player.turrets[slot]].cost / 2);
    assert.equal(after.player.unlockedSlots, 4);
    assert.equal(after.player.turrets[slot], null);
    assert.deepEqual(host.session.replay().entries.at(-1).command, { type: 'sell', slot });
    if (slot !== 3) for (const miss of [point, dockPosition(0, -1), {x: -1.06, y: 0, z: 0.14}, {x: 5, y: 0, z: 0}]) {
      const digest = host.session.digest();
      assert.equal(erase(miss).ok, false);
      assert.equal(host.session.digest(), digest);
    }
  }
  assert.equal(host.grab('hand', 'sell').error, 'no-turret');
  assert.equal(Session.fromReplay(host.session.replay()).digest(), host.session.digest());
});

test('two erasers cannot refund the same cannon twice or spill into a neighboring dock', () => {
  const host = armed(), point = dockPosition(1);
  const gold = host.observe().player.gold;
  assert.ok(host.grab('left', 'sell').ok);
  assert.ok(host.grab('right', 'sell').ok);
  assert.ok(host.drop('left', point).ok);
  assert.equal(host.drop('right', point).error, 'sell-dock');
  assert.equal(host.observe().player.gold, gold + 200);
  assert.deepEqual(host.observe().player.turrets, [0, null, 1, 0]);
  // Even an empty dock edge within the other dock's tracking margin is a miss.
  const edge = { ...point, z: point.z + DOCK.depth / 2 };
  assert.equal(defenseTarget(host.offer('sell'), host.observe(), edge), null);
  assert.ok(host.grab('left', 'sell').ok);
  assert.equal(host.drop('left', edge).ok, false);
  assert.equal(host.observe().player.gold, gold + 200);
});

test('eraser targeting follows hand poses, raised throws and desktop landing previews at every table scale', () => {
  for (const scale of [0.2, 0.55, 1.6]) for (const thrown of [false, true]) {
    const host = armed();
    const table = { position: {x: 1, y: 0.9, z: -2}, rotation: { x: 0, y: Math.sin(.35), z: 0, w: Math.cos(.35) }, scale };
    const input = new Interaction(host, table);
    const pad = dockPosition(0);
    const world = toWorld({...pad, y: pad.y + 0.06 + (thrown ? 0.5 : 0)}, table);
    assert.ok(input.begin('hand', 'sell', world));
    input.move('hand', world, 0.1);
    assert.equal(defenseTarget(input.visuals()[0].offer, host.observe(), input.visuals()[0].targetPosition).slot, 0);
    input.release('hand');
    for (let i = 0; i < 100; i++) input.update(0.016);
    assert.deepEqual(host.observe().player.turrets, [null, 2, 1, 0]);
    assert.equal(host.drops.at(-1).point.y, DOCK.height);
    assert.equal(input.flights.size, 0);
    // Mouse preview can float elsewhere; its projection still picks the dock.
    assert.ok(input.begin('mouse', 'sell', toWorld({x: 0.66,y: 0.07,z: 1.16}, table)));
    input.move('mouse', toWorld({x: 0,y: 0.28,z: 0}, table), 0.2, toWorld(dockPosition(1), table));
    const visual = input.visuals()[0];
    assert.equal(defenseTarget(visual.offer, host.observe(), visual.targetPosition).slot, 1);
    input.cancelAll();
  }
});
