import test from 'node:test';
import assert from 'node:assert/strict';
import { Session } from '../src/sdk/session.js';
import { createState, income } from '../src/core/state.js';
import { applyCommand } from '../src/core/commands.js';
import { step, transition } from '../src/core/engine.js';
import { AGES } from '../src/content/ages.js';
import { RULES_VERSION } from '../src/core/constants.js';

const advance = (s, ticks) => { for (let i = 0; i < ticks && s.running; i++) { s.events = []; step(s); } };
function pair(age = 0, index = 0) {
  const s = createState({ opponent: false, startAge: age });
  applyCommand(s, 1, { type: 'unit', index }); applyCommand(s, -1, { type: 'unit', index });
  for (const u of s.units) { u.drawProgress = 1; u.x = u.team === 1 ? 600 : 680; }
  return s;
}

test('commands share legality, bind a side, and never spend on rejected actions', () => {
  const s = new Session({ opponent: false });
  const p = s.client(1);
  assert.equal(p.command({ type: 'unit', index: 0 }).ok, true);
  const before = s.digest();
  assert.equal(p.command({ type: 'unit', index: 0 }).error, 'deploying');
  assert.equal(s.digest(), before);
  assert.throws(() => p.command({ type: 'unit', index: 0, team: -1 }), /field/);
  assert.equal(s.command(0, { type: 'special' }).error, 'invalid-team');
  assert.equal(s.command(1, { type: 'unit', index: -1 }).error, 'invalid-unit');
  s.pause(true); assert.equal(p.command({ type: 'special' }).error, 'paused');
  s.advance(600); assert.equal(s.tick, 0);
  const view = s.observe(); view.player.gold = 1e9; assert.notEqual(s.observe().player.gold, 1e9);
});

test('equal lethal melee blows trade instead of favoring the first side', () => {
  const s = pair();
  s.units.forEach(u => { u.hp = 8; });
  step(s);
  assert.equal(s.units.length, 0);
  assert.equal(s.metrics.kills[1], 1); assert.equal(s.metrics.kills[-1], 1);
  assert.equal(s.player.gold, s.enemy.gold);
});

test('future lasers hit once and ordinary beams never become area specials', () => {
  const s = pair(4, 1);
  step(s);
  assert.equal(s.units[0].hp, AGES[4].units[1].hp - AGES[4].units[1].dmg);
  assert.equal(s.units[1].hp, s.units[0].hp);
  assert.ok(s.projectiles.every(p => p.type === 'laser' && !p.isSpecial));
  advance(s, 10);
  assert.equal(s.units[0].hp, AGES[4].units[1].hp - AGES[4].units[1].dmg);
});

test('missed troop shots cannot damage a base and ids never target replacement troops', () => {
  const s = pair(2, 1); s.units.forEach(u => u.x = u.team === 1 ? 400 : 800);
  step(s); assert.ok(s.projectiles.length);
  s.units = []; const hp = s.enemy.hp;
  s.enemy.deployTimer = 0;
  assert.equal(applyCommand(s, -1, { type: 'unit', index: 0 }).ok, true);
  advance(s, 120);
  assert.equal(s.enemy.hp, hp);
  assert.equal(s.units[0].hp, s.units[0].maxHp);
});

test('both specials can run concurrently, with mirrored random effects', () => {
  const s = pair();
  assert.equal(applyCommand(s, 1, { type: 'special' }).ok, true);
  assert.equal(applyCommand(s, -1, { type: 'special' }).ok, true);
  assert.equal(s.specials.length, 2);
  advance(s, 5);
  const shots = s.projectiles.filter(p => p.isSpecial);
  assert.equal(shots.length, 2);
  assert.ok(Math.abs(shots[0].targetX + shots[1].targetX - 1280) < 1e-8);
  assert.equal(shots[0].dmg, shots[1].dmg);
});

test('pacts and truce are enforced by the engine, with no defensive loophole', () => {
  const s = new Session({ opponent: false });
  s.agreements({ meleeOnly: true, noSpecials: true, noTurrets: true });
  assert.equal(s.command(-1, { type: 'unit', index: 1 }).error, 'pact');
  assert.equal(s.command(-1, { type: 'turret', index: 0 }).error, 'pact');
  assert.equal(s.command(-1, { type: 'special' }).error, 'pact');
  assert.equal(s.command(1, { type: 'unit', index: 1 }).ok, true);
  s.truce(30); assert.equal(s.command(-1, { type: 'unit', index: 0 }).error, 'truce');
  s.advance(1800); assert.equal(s.command(-1, { type: 'unit', index: 0 }).ok, true);
});

test('evolution refunds old defenses and resets turret cooldowns symmetrically', () => {
  const s = createState({ opponent: false });
  for (const team of [1, -1]) {
    const p = team === 1 ? s.player : s.enemy;
    applyCommand(s, team, { type: 'turret', index: 0 });
    p.xp = 400; p.turretTimers[0] = 999;
    assert.equal(applyCommand(s, team, { type: 'evolve' }).ok, true);
    assert.equal(p.gold, 125); assert.equal(p.maxHp, 1500); assert.equal(p.turretTimers[0], 0);
  }
});

test('late-age economy can buy basic troops within nine seconds of income', () => {
  for (let age = 0; age < AGES.length; age++) {
    const s = createState({ opponent: false, startAge: age });
    assert.ok(AGES[age].units[0].cost / income(s, 1) <= 9);
  }
});

test('pure transition does not retain or change the input state', () => {
  const state = createState({ opponent: false }), original = structuredClone(state);
  const next = transition(state, [{ team: 1, command: { type: 'unit', index: 0 } }]);
  assert.deepEqual(state, original); assert.equal(next.state.tick, 1); assert.equal(next.state.units.length, 1);
});

test('headless replay, chunked time, checkpoint and retries preserve the continuation', () => {
  const s = new Session({ seed: 42 });
  const first = s.command(1, { type: 'unit', index: 2 }, 'buy');
  s.advanceOnce('step', 600);
  assert.deepEqual(s.command(1, { type: 'unit', index: 2 }, 'buy'), first);
  assert.throws(() => s.command(1, { type: 'unit', index: 0 }, 'buy'), /conflict/);
  const restored = Session.restore(s.checkpoint());
  restored.advanceOnce('step', 600); assert.equal(restored.tick, 600);
  for (let i = 0; i < 20; i++) restored.advance(60);
  s.advance(1200); assert.equal(restored.digest(), s.digest());
  assert.equal(Session.fromReplay(s.replay()).digest(), s.digest());
  const bad = s.replay(); bad.version = RULES_VERSION + '-future';
  assert.throws(() => Session.fromReplay(bad), /Unsupported/);
  const tampered = s.replay(); tampered.digest = 'bad'; assert.throws(() => Session.fromReplay(tampered), /mismatch/);
});

test('mirrored scripted battles stay symmetric in all ages', () => {
  for (let age = 0; age < AGES.length; age++) {
    const s = createState({ opponent: false, startAge: age, seed: 93 });
    for (let i = 0; i < 7200 && s.running; i++) {
      if (i % 120 === 0) for (const team of [1, -1]) applyCommand(s, team, { type: 'unit', index: (i / 120) % 3 });
      if (i === 1200) for (const team of [1, -1]) applyCommand(s, team, { type: 'special' });
      s.events = []; step(s);
    }
    assert.ok(Math.abs(s.player.hp - s.enemy.hp) < 1e-6, `age ${age}: mirrored base health`);
    assert.equal(s.metrics.kills[1], s.metrics.kills[-1], `age ${age}: mirrored kills`);
  }
});
