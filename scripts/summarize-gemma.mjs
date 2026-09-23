import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { Session } from '../src/sdk/session.js';

const report = JSON.parse(await readFile('artifacts/gemma/benchmark.json', 'utf8'));
if (!report.completed || report.pairs?.length !== 24) throw new Error('Finish the real-model benchmark first');
const turns = report.pairs.flatMap(pair => pair.turns);
const times = turns.map(turn => turn.durationMs).sort((a,b)=>a-b);
for (const run of report.live) Session.fromReplay(run.replay);
for (const pair of report.pairs) Session.fromReplay(pair.replay);
if (!report.pairs.every(pair=>pair.gemma.finished && pair.baseline.finished)) throw new Error('Unfinished benchmark match');
if (turns.filter(turn=>turn.valid).length/turns.length < .95) throw new Error('Model format regression');
const sourceHash = createHash('sha256');
for (const name of (await readdir('src', {recursive:true})).filter(name=>name.endsWith('.js')).sort()) {
  sourceHash.update(name.replaceAll('\\','/'));
  sourceHash.update((await readFile(`src/${name}`, 'utf8')).replaceAll('\r\n','\n'));
}
const evidence = {
  date: report.date, sourceSha256: sourceHash.digest('hex'), model: report.model, runtime: report.runtime, gpu: report.gpu,
  hardware: report.hardware || {note:'See the accompanying acceptance document for the measured machine.'},
  live: report.live.map(({replay,...result})=>result), offlineLoadMs: report.offlineLoadMs, offlineTurn: report.offlineTurn,
  matches: report.pairs.length * 2, modelTurns: turns.length, invalidReplies: turns.filter(turn=>!turn.valid).length,
  latencyMs: {p50:times[Math.floor(times.length*.5)],p95:times[Math.floor(times.length*.95)],max:times.at(-1)},
  changedWinners: report.pairs.filter(pair=>pair.gemma.winner!==pair.baseline.winner).length,
  playerWins: {gemma:report.pairs.filter(pair=>pair.gemma.winner===1).length,baseline:report.pairs.filter(pair=>pair.baseline.winner===1).length},
  emotions: turns.reduce((counts,turn)=>{counts[turn.emotion]=(counts[turn.emotion]||0)+1;return counts;},{}),
  simulatedHours: report.pairs.reduce((total,pair)=>total+(pair.gemma.ticks+pair.baseline.ticks)/60/3600,0),
  pairs:report.pairs.map(({replay,...pair})=>pair), errors:report.errors
};
await writeFile('docs/evidence/gemma-web-2.1.0.json',JSON.stringify(evidence,null,2)+'\n');
console.log(JSON.stringify({...evidence,live:evidence.live.map(({replay,turns,status,...result})=>result),pairs:undefined,model:undefined},null,2));
