# Repeatable balance work

```sh
npm ci
npm run check
npm run simulate                         # 288 matches + 294 composition trials
npm run simulate -- --release            # 2,304 matches + composition trials
npm run simulate -- --seeds 32 --out artifacts/experiment
npm run test:browser
node scripts/evidence.mjs artifacts/experiment/report.json
```

The simulator advances explicit 60 Hz ticks as fast as the CPU allows. No rendering,
sleep, music, Gemma, cloud AI, network or model inference is involved. The deterministic
game opponent **is** tested; skipping it would skip the opponent we need to improve.
The normal browser uses precisely this engine and policy. Seeds vary special landing
positions; seeds with no stochastic events may correctly repeat identical outcomes.

Reports include machine/runtime, measured wall time, simulated hours, speedup, outcomes,
first contact, ages, purchases, casualties, damage, peak population, progression and
invariant checks. Every difficulty, starting age and six player styles are covered:
adaptive, melee, ranged, heavy, turtle and cycling mixed armies. Mid/late-age starts
are stress scenarios; their durations are not durations of a normal Stone-age game.

All seven nonempty compositions of three troop types are tested against each other
with identical opening budgets and purchase cadence in every age. Both orientations
are compared. These deliberately exclude income-funded reinforcements, evolution,
turrets, upgrades and specials to isolate troop value. Unspent budget and actual
spending are reported; expensive compositions can leave change. The final score
uses base health difference plus surviving army value, not just victory screens.
Mono-type counters are required by regression tests. A strong mixed army is not
automatically a defect; investigate its timing, cost and counterplay.

The CLI fails on invalid state, replay drift, mirrored side bias or full-match timeouts
at 20 minutes. Failure and timeout replays are written alongside `report.json`.
Selected complete replays are saved even on success. The small checked-in acceptance
summary is evidence from a specific build, not a claim of exhaustive balance.

To replay a finding in Node:

```js
import { readFileSync } from 'node:fs';
import { Session } from './src/sdk/session.js';
const replay = JSON.parse(readFileSync('artifacts/experiment/replay-normal-0-mixed-1.json'));
const match = Session.fromReplay(replay); // throws if replay verification fails
console.log(match.observe(), match.digest());
```

Preserve a failing scenario as a focused test before fixing it. Retain old reports
under different `--out` directories when comparing balance changes. A seed sweep
is broad automated evidence; it cannot measure human enjoyment or prove no strategy
exists outside the supplied policies. Human play and actual phone/model testing remain
separate acceptance activities. CI runs the same command and publishes report/replay
artifacts so future additions receive the same coverage.
