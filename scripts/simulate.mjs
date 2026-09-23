import { mkdir, writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { cpus, platform } from 'node:os';
import { runMatch, runComposition, STYLES, COMPOSITIONS } from '../src/simulation/run.js';
import { AGES } from '../src/content/ages.js';
import { RULES_VERSION } from '../src/core/constants.js';

const args = process.argv.slice(2), release = args.includes('--release');
const option = (name, fallback) => { const i = args.indexOf(name); return i < 0 ? fallback : args[i + 1]; };
const seeds = Number(option('--seeds', release ? 16 : 2));
if (!Number.isInteger(seeds) || seeds < 1 || seeds > 10000) throw new Error('--seeds must be 1..10000');
const out = option('--out', 'artifacts/balance');
await mkdir(out, { recursive: true });
const started = performance.now(), matches = [], compositions = [], failures = [];
for (const difficulty of ['normal', 'hard', 'harder', 'impossible']) {
  for (let age = 0; age < AGES.length; age++) {
    for (const style of STYLES) for (let seed = 1; seed <= seeds; seed++) {
      try {
        const result = runMatch({ seed, difficulty, startAge: age, style, verifyReplay: seed === 1 && age === 0 });
        if (result.timedOut) failures.push({ kind: 'timeout', difficulty, age, style, seed });
        if (result.replay) { await writeFile(`${out}/replay-${difficulty}-${age}-${style}-${seed}.json`, JSON.stringify(result.replay)); delete result.replay; }
        matches.push(result);
      } catch (error) {
        failures.push({ kind: 'invariant', difficulty, age, style, seed, message: error.message });
        if (error.replay) await writeFile(`${out}/failure-${difficulty}-${age}-${style}-${seed}.json`, JSON.stringify(error.replay));
      }
    }
    console.log(`${difficulty}, ${AGES[age].name}: ${matches.length} matches, ${failures.length} findings`);
  }
}
for (let age = 0; age < AGES.length; age++) for (const left of COMPOSITIONS) for (const right of COMPOSITIONS) compositions.push(runComposition({ age, left, right }));
for (const row of compositions) {
  const mirror = compositions.find(r => r.age === row.age && r.left === row.right && r.right === row.left);
  if (Math.abs(row.score + mirror.score) > 1e-6) failures.push({ kind: 'side-bias', ...row, mirror: mirror.score });
}
const wallSeconds = (performance.now() - started) / 1000, simulatedSeconds = matches.reduce((s, m) => s + m.seconds, 0) + compositions.reduce((s, m) => s + m.seconds, 0);
const summary = { version: RULES_VERSION, seeds, matches: matches.length, compositionTrials: compositions.length,
  simulatedHours: simulatedSeconds / 3600, wallSeconds, speedup: simulatedSeconds / wallSeconds,
  meanMatchSeconds: matches.reduce((s, m) => s + m.seconds, 0) / matches.length,
  timeouts: matches.filter(m => m.timedOut).length, failures, environment: { node: process.version, platform: platform(), cpu: cpus()[0].model },
  byDifficulty: Object.fromEntries(['normal', 'hard', 'harder', 'impossible'].map(d => {
    const rows = matches.filter(m => m.difficulty === d);
    return [d, { games: rows.length, playerWinRate: rows.filter(m => m.winner === 1).length / rows.length, meanSeconds: rows.reduce((n, m) => n + m.seconds, 0) / rows.length }];
  })) };
await writeFile(`${out}/report.json`, JSON.stringify({ summary, matches, compositions }, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (failures.length) process.exitCode = 1;
