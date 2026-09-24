import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { Session } from '../src/sdk/session.js';
import { AGES } from '../src/content/ages.js';
import { INCOME } from '../src/core/constants.js';
import { COMPOSITIONS, runComposition, runMatch, assertInvariants } from '../src/simulation/run.js';

test('catalog expansions must define complete finite rules, names, art and an economy', () => {
  assert.equal(AGES.length, INCOME.length);
  const names = new Set();
  for (const age of AGES) {
    assert.ok(age.theme.bg && age.theme.fg && age.theme.accent && age.baseStyle && age.special.type);
    for (const unit of age.units) {
      assert.ok(!names.has(unit.name)); names.add(unit.name);
      for (const field of ['cost', 'hp', 'dmg', 'range', 'speed', 'size', 'attackSpeed', 'killGold', 'killXp']) assert.ok(Number.isFinite(unit[field]) && unit[field] > 0, `${unit.name}.${field}`);
      assert.ok(unit.killGold < unit.cost, 'death rewards must not create a gold loop');
      if (unit.projType) assert.ok(unit.projSpeed > 0);
    }
    assert.equal(age.units.length, 3, 'Update the three-card browser adapter when adding unit slots');
    assert.equal(age.turrets.length, 3, 'Update the three-card browser adapter when adding turret slots');
    for (const turret of age.turrets) for (const field of ['cost', 'dmg', 'range', 'attackSpeed', 'projSpeed']) assert.ok(turret[field] > 0);
  }
});

test('all composition trials are mirrored, and every troop has a mono-type counter', () => {
  for (let age = 0; age < AGES.length; age++) {
    const rows = COMPOSITIONS.flatMap(left => COMPOSITIONS.map(right => runComposition({ age, left, right })));
    for (const row of rows) {
      const reverse = rows.find(r => r.left === row.right && r.right === row.left);
      assert.ok(Math.abs(row.score + reverse.score) < 1e-6, `${age}: ${row.left} vs ${row.right}`);
    }
    for (let unit = 0; unit < 3; unit++) assert.ok(rows.some(r => r.left === String(unit) && r.right.length === 1 && r.winner === -1), `${AGES[age].units[unit].name} lacks a counter`);
  }
});

test('reported stall regressions finish under twenty minutes', () => {
  for (const config of [{ seed: 8, startAge: 1, style: 'turtle' }, { difficulty: 'hard', startAge: 5, style: 'turtle' }, { startAge: 4, style: 'adaptive' }]) {
    const result = runMatch(config); assert.equal(result.timedOut, false, JSON.stringify(config));
  }
});

test('seeded adversarial command sequences preserve invariants and replay', () => {
  for (let seed = 1; seed <= 8; seed++) {
    const s = new Session({ seed }); let rng = seed;
    const rand = n => { rng = (Math.imul(rng, 1664525) + 1013904223) >>> 0; return rng % n; };
    for (let i = 0; i < 400 && s.running; i++) {
      const commands = [{ type: 'unit', index: rand(5) - 1 }, { type: 'turret', index: rand(5) - 1 }, { type: 'upgrade', stat: ['hp', 'econ', 'dmg', 'invalid'][rand(4)] }, { type: 'sell' }, { type: 'sell', slot: rand(6) - 1 }, { type: 'slot' }, { type: 'evolve' }, { type: 'special' }];
      s.command(rand(2) ? 1 : -1, commands[rand(commands.length)]);
      s.advance(rand(120), { events: false }); assertInvariants(s.observe());
    }
    assert.equal(Session.fromReplay(s.replay()).digest(), s.digest());
  }
});

test('the engine, SDK and simulation have no browser, model, network or wall-clock dependencies', () => {
  for (const dir of ['core', 'sdk', 'simulation']) for (const file of readdirSync(`src/${dir}`).filter(f => f.endsWith('.js'))) {
    const code = readFileSync(`src/${dir}/${file}`, 'utf8');
    assert.doesNotMatch(code, /\b(?:document|window|fetch|localStorage|requestAnimationFrame|setTimeout|performance)\s*[.(]/);
    assert.doesNotMatch(code, /Math\.random\(|Date\.now\(|from ['"](?:node:|\.\.\/client)/);
  }
});

test('terminal commands expose the same session and reject malformed input', () => {
  const input = [{ op: 'create', options: { seed: 7, opponent: false } }, { op: 'command', command: { type: 'unit', index: 0 } }, { op: 'advance', ticks: 60, id: 'tick' }, { op: 'observe' }, { op: 'unknown' }].map(JSON.stringify).join('\n') + '\n';
  const result = spawnSync(process.execPath, ['scripts/cli.mjs'], { input, encoding: 'utf8' });
  assert.equal(result.status, 0);
  const rows = result.stdout.trim().split('\n').map(JSON.parse);
  assert.equal(rows[3].result.tick, 60); assert.equal(rows[3].result.units.length, 1); assert.equal(rows[4].ok, false);
});

test('emotion updates are bounded replay inputs while pacts remain authoritative', () => {
  const s = new Session({ seed: 42 }); s.emotion('Furious'); s.agreements({ noTurrets: true }); s.advance(1200);
  assert.equal(Session.fromReplay(s.replay()).digest(), s.digest());
  assert.equal(s.observe().enemy.turrets.some(t => t !== null), false);
  assert.throws(() => s.emotion('x'.repeat(81)), /Invalid/);
});
