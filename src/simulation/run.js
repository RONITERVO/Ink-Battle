import { Session } from '../sdk/session.js';
import { AGES } from '../content/ages.js';
import { FIELD, wide, unitRadius } from '../core/battlefield.js';

export const STYLES = ['adaptive', 'melee', 'ranged', 'heavy', 'turtle', 'mixed'];
export function assertInvariants(s) {
  for (const p of [s.player, s.enemy]) {
    for (const key of ['hp', 'maxHp', 'gold', 'xp', 'specialTimer', 'deployTimer']) if (!Number.isFinite(p[key]) || p[key] < -1e-7) throw new Error(`Invalid ${key}`);
    if (p.hp > p.maxHp + 1e-6) throw new Error('Base health exceeds maximum');
  }
  const ids = new Set();
  for (const u of s.units) {
    if (ids.has(u.id)) throw new Error('Duplicate unit id'); ids.add(u.id);
    if (![u.hp, u.x, u.y, u.attackCooldown].every(Number.isFinite) || u.x < (wide(s) ? FIELD.minX : 180) - 1e-6 || u.x > (wide(s) ? FIELD.maxX : 1100) + 1e-6) throw new Error('Unit outside valid lane');
    if (wide(s) && (!Number.isFinite(u.z) || !Number.isFinite(u.heading) || u.z < FIELD.minZ + unitRadius(u) - 1e-6 || u.z > FIELD.maxZ - unitRadius(u) + 1e-6)) throw new Error('Unit outside battlefield width');
    if (u.hp <= 0 || u.hp > u.maxHp + 1e-6) throw new Error('Invalid living unit');
  }
  for (const p of s.projectiles) if (![p.x, p.y, p.vx, p.vy].every(Number.isFinite)) throw new Error('Non-finite projectile');
  if (wide(s)) for (const p of [s.player,s.enemy]) for (let slot=0;slot<4;slot++) {
    if (!Number.isFinite(p.turretHp[slot]) || p.turretHp[slot] < 0 || p.turretHp[slot] > p.turretMaxHp[slot] ||
      (p.turrets[slot] === null) !== (p.turretIds[slot] === null)) throw new Error('Invalid defense health or identity');
  }
}

export function runMatch({ seed = 1, difficulty = 'normal', startAge = 0, style = 'adaptive', limitSeconds = 1200, verifyReplay = false } = {}) {
  const session = new Session({ seed, difficulty, startAge });
  let checks = 0;
  try {
    while (session.running && session.tick < limitSeconds * 60) {
      const command = session.decide(1, style);
      if (command) session.command(1, command);
      session.advance(30, { events: false });
      if (session.tick % 600 === 0) { assertInvariants(session.observe()); checks++; }
    }
    const state = session.observe(); assertInvariants(state);
    if (verifyReplay && Session.fromReplay(session.replay()).digest() !== session.digest()) throw new Error('Replay diverged');
    return { seed, difficulty, startAge, style, seconds: session.tick / 60, winner: session.winner,
      timedOut: session.running, firstContact: state.metrics.firstContactTick / 60,
      ages: [state.player.age, state.enemy.age], hp: [state.player.hp / state.player.maxHp, state.enemy.hp / state.enemy.maxHp],
      metrics: state.metrics, checks, digest: session.digest(), replay: verifyReplay || session.running ? session.replay() : undefined };
  } catch (error) { error.replay = session.replay(); throw error; }
}

// Equal-budget opening tests: buy each composition through the public command API.
// No opponent, specials, turrets, upgrades or evolution. Same budget and cadence on both sides.
export const COMPOSITIONS = [[0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]];
export function runComposition({ age = 0, left = [0], right = [1], seed = 1, seconds = 120, battlefield } = {}) {
  const session = new Session({ seed, startAge: age, opponent: false, battlefield });
  const opening = session.observe().player.gold, spent = { '1': 0, '-1': 0 }, cursor = { '1': 0, '-1': 0 };
  while (session.running && session.tick < seconds * 60) {
    for (const [team, mix] of [[1, left], [-1, right]]) {
      const index = mix[cursor[team] % mix.length], cost = AGES[age].units[index].cost;
      if (spent[team] + cost <= opening && session.command(team, { type: 'unit', index }).ok) { spent[team] += cost; cursor[team]++; }
    }
    session.advance(30, { events: false });
  }
  const s = session.observe(); assertInvariants(s);
  const value = team => s.units.filter(u => u.team === team).reduce((n, u) => n + u.cost * u.hp / u.maxHp, 0);
  const score = (s.player.hp - s.enemy.hp) / s.player.maxHp + (value(1) - value(-1)) / opening;
  return { age, left: left.join(''), right: right.join(''), score, winner: Math.abs(score) < 1e-7 ? 0 : Math.sign(score), seconds: session.tick / 60, spent };
}
