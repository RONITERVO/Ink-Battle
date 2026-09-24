import { mkdir, writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import assert from 'node:assert/strict';
import { TabletopHost } from '../src/mr/host.js';
import { Session } from '../src/sdk/session.js';
import { AGES } from '../src/content/ages.js';
import { DIFFICULTIES } from '../src/mr/catalog.js';
import { defenseTarget, dockPosition } from '../src/mr/defense-layout.js';
import { chooseSpawnZ, worldZ, worldX } from '../src/core/battlefield.js';
import { assertInvariants } from '../src/simulation/run.js';

// Same adapter as hands and controllers, with the wall clock removed. No model.
const started = performance.now(),
  matches = [];
for (let age = 0; age < AGES.length; age++)
  for (const difficulty of DIFFICULTIES)
    for (const style of ['adaptive', 'melee', 'ranged', 'heavy', 'turtle', 'mixed'])
      for (let seed = 1; seed <= 4; seed++) {
        const host = new TabletopHost();
        host.start(difficulty, { startAge: age, seed });
        let drops = 0, guides = 0,
          misses = 0;
        while (host.session.running && host.session.tick < 60 * 60 * 20) {
          const command = host.session.decide(1, style);
          if (command) {
            const offer = host
              .offers()
              .find(
                (o) => (o.command?.type === 'sell' && command.type === 'sell') ||
                  JSON.stringify(o.command) === JSON.stringify(command)
              );
            assert.ok(offer, 'Every legal action needs a physical offer');
            if (host.grab('simulated-hand', offer.id).ok) {
              const p =
                offer.kind === 'unit'
                  ? { x: -0.65, y: 0, z: worldZ(chooseSpawnZ(host.observe(),1,AGES[host.observe().player.age].units[command.index])) }
                  : offer.kind === 'eraser'
                    ? dockPosition(command.slot ?? host.observe().player.turrets.findLastIndex((t) => t !== null))
                  : ['turret', 'slot'].includes(offer.kind)
                    ? defenseTarget(offer, host.observe())
                    : { x: 0, y: 0, z: 0 };
              if (drops % 17 === 0) {
                const gold = host.observe().player.gold;
                assert.equal(
                  host.drop('simulated-hand', { x: 4, y: 0, z: 0 }).ok,
                  false
                );
                assert.equal(host.observe().player.gold, gold);
                host.grab('simulated-hand', offer.id);
                misses++;
              }
              assert.equal(host.drop('simulated-hand', p).ok, true);
              assert.equal(host.drop('simulated-hand', p).error, 'not-held');
              drops++;
            }
          }
          if (host.session.tick % 240 === 0) {
            const s=host.observe();
            const u=s.units.find(u=>u.team===1 && u.drawProgress===1 && s.tick>=u.guideReady);
            if(u && host.grab('guide-hand',`troop-${u.id}`).ok) {
              const point=guides%2 ? {x:1.1,y:0,z:guides%4===1 ? -.3 : .55}
                : {x:worldX(u.x),y:0,z:worldZ(Math.max(-230,Math.min(230,u.z+(guides%4===0?120:-120))))};
              assert.ok(host.drop('guide-hand',point).ok); guides++;
            }
            assertInvariants(host.observe());
          }
          host.advance(24);
        }
        assert.equal(
          host.session.running,
          false,
          `Unfinished MR match: ${age}/${difficulty}/${style}/${seed}`
        );
        assert.equal(
          Session.fromReplay(host.session.replay()).digest(),
          host.session.digest()
        );
        matches.push({
          age,
          difficulty,
          style,
          seed,
          winner: host.session.winner,
          seconds: host.session.tick / 60,
          drops,
          misses,
          guides,
          digest: host.session.digest()
        });
      }
const report = {
  matches: matches.length,
  secondsSimulated: matches.reduce((s, m) => s + m.seconds, 0),
  wallSeconds: (performance.now() - started) / 1000,
  purchases: matches.reduce((s, m) => s + m.drops, 0),
  misses: matches.reduce((s, m) => s + m.misses, 0),
  guides: matches.reduce((s, m) => s + m.guides, 0),
  results: matches
};
await mkdir('artifacts/tabletop', { recursive: true });
await writeFile(
  'artifacts/tabletop/matches.json',
  JSON.stringify(report, null, 2) + '\n'
);
console.log(JSON.stringify({ ...report, results: undefined }, null, 2));
