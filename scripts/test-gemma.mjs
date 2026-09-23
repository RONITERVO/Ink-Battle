// Opt in with `npm run test:gemma`; downloads ~2 GB on first use. Requires npm start.
import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { cpus, platform } from 'node:os';
import { WEB_MODEL, RUNTIME_VERSION } from '../src/client/gemma-web-config.js';
const url = process.env.GEMMA_TEST_URL || 'http://127.0.0.1:4173/ink-battle.html';
const liveOnly = process.env.GEMMA_LIVE_ONLY === '1';
const output = liveOnly ? 'artifacts/gemma/live-comparison.json' : 'artifacts/gemma/benchmark.json';
const report = {date:new Date().toISOString(),url,revision:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),
  workingTreeDirty:!!execFileSync('git',['status','--porcelain'],{encoding:'utf8'}).trim(),
  model:WEB_MODEL,runtime:RUNTIME_VERSION,live:[],errors:[],requests:[]};
await mkdir('artifacts/gemma',{recursive:true});
const context=await chromium.launchPersistentContext('artifacts/gemma-browser-profile',{channel:process.env.GEMMA_BROWSER || 'msedge',headless:true,viewport:{width:1280,height:720}});
report.hardware={platform:platform(),cpu:cpus()[0].model,browser:context.browser().version()};
const page=await context.newPage();
page.on('pageerror',e=>report.errors.push(e.message));
// Only URLs, never browser credentials. No telemetry is sent by the game or this script.
page.on('request',r=>{if(!r.url().startsWith('blob:'))report.requests.push(r.url());});
async function open() {
  await page.goto(url); await expect(page.locator('#preloader')).toBeHidden();
  // Let an updated service worker take control, then use its newest bundle.
  await page.evaluate(async()=>{
    const registration=await navigator.serviceWorker.ready;
    if(navigator.onLine) await registration.update();
    const installing=registration.installing;
    if(installing && installing.state!=='activated') await new Promise(resolve=>installing.addEventListener('statechange',()=>{
      if(['activated','redundant'].includes(installing.state))resolve();
    }));
  });
  await page.reload(); await expect(page.locator('#preloader')).toBeHidden();
}
async function load() {
  await page.locator('#start-screen [data-web-gemma-open]').click();
  await expect.poll(()=>page.evaluate(()=>window.InkBattle.gemma.status().state)).not.toBe('browser');
  await page.locator('#web-gemma-enable').click();
  const start=Date.now(); let last='';
  while(Date.now()-start < 1200000) {
    const status=await page.evaluate(()=>window.InkBattle.gemma.status());
    const info=`${status.state} ${Math.floor(status.progress || 0)}%`;
    if(info!==last){console.log(info);last=info;}
    if(status.state==='ready')break;
    if(['error','unavailable'].includes(status.state))throw new Error(status.message);
    await page.waitForTimeout(2000);
  }
  expect(await page.evaluate(()=>window.InkBattle.gemma.status().state)).toBe('ready');
  await page.getByRole('button',{name:'Back to game'}).click();
  return Date.now()-start;
}
try {
  await open();
  report.gpu=await page.evaluate(async()=>{const a=await navigator.gpu.requestAdapter();return {vendor:a.info.vendor,architecture:a.info.architecture,features:[...a.features],isolated:crossOriginIsolated};});
  for(const enabled of [false,true]) for(const speed of [1,2,3]) {
    await open();
    const loadMs=enabled ? await load() : 0;
    await page.evaluate(async()=>{
      const {chooseAction}=await import('./src/core/opponent.js');
      window.InkBattle.start('normal',{seed:717});
      window.__gemmaFrames=[]; window.__gemmaSpikes=[]; window.__gemmaLastFrame=performance.now();
      const sample=now=>{
        const gap=now-window.__gemmaLastFrame;window.__gemmaFrames.push(gap);
        if(gap>100)window.__gemmaSpikes.push({gap,tick:window.InkBattle.observe().tick,busy:window.InkBattle.gemma.status().busy});
        window.__gemmaLastFrame=now;window.__gemmaRaf=requestAnimationFrame(sample);
      };
      window.__gemmaRaf=requestAnimationFrame(sample);
      window.__gemmaBot=setInterval(()=>{const s=window.InkBattle.observe();if(s.running&&!s.paused){const c=chooseAction(s,1,'adaptive');if(c)window.InkBattle.command(c);}},250);
    });
    for(let i=1;i<speed;i++)await page.locator('#btn-speed').click();
    await page.waitForTimeout(55000);
    const result=await page.evaluate(()=>{
      clearInterval(window.__gemmaBot);cancelAnimationFrame(window.__gemmaRaf);
      const gaps=window.__gemmaFrames.slice(2).sort((a,b)=>a-b);
      const state=window.InkBattle.observe();
      window.InkBattle.Session.fromReplay(window.InkBattle.replay());
      return {ticks:state.tick,paused:state.paused,turns:window.InkBattle.gemma.turns(),status:window.InkBattle.gemma.status(),
        frames:gaps.length,p95GapMs:gaps[Math.floor(gaps.length*.95)],maxGapMs:gaps.at(-1),spikes:window.__gemmaSpikes,replay:window.InkBattle.replay()};
    });
    report.live.push({enabled,speed,loadMs,...result});console.log(JSON.stringify({enabled,speed,loadMs,ticks:result.ticks,turns:result.turns.length,p95:result.p95GapMs,max:result.maxGapMs,spikes:result.spikes}));
    expect(result.paused).toBe(false);
    if(enabled)expect(result.turns.length).toBeGreaterThanOrEqual(2);else expect(result.turns).toHaveLength(0);
    await page.evaluate(()=>window.InkBattle.gemma.stop());
    await writeFile(output,JSON.stringify(report,null,2));
  }
  // Reopen offline: both the model and optional runtime must work from local storage.
  await context.setOffline(true);await open();report.offlineLoadMs=await load();
  await page.evaluate(()=>{window.InkBattle.start('normal',{manual:true});window.InkBattle.gemma.request('Can you still see our battlefield?');});
  await expect.poll(()=>page.evaluate(()=>window.InkBattle.gemma.turns().length),{timeout:35000}).toBe(1);
  report.offlineTurn=await page.evaluate(()=>window.InkBattle.gemma.turns()[0]);
  await page.evaluate(()=>window.InkBattle.gemma.stop());await context.setOffline(false);
  console.log('Offline inference passed.');
  if(!liveOnly) {
  console.log('Starting paired completed matches.');
  await page.evaluate(()=>{ window.__gemmaPairs={state:'starting'}; import('./scripts/gemma-benchmark-page.js').then(async mod=>{
    try { const results=await mod.pairedMatches(progress=>{window.__gemmaPairs={state:'running',...progress};});window.__gemmaPairs={state:'complete',results}; }
    catch(e){window.__gemmaPairs={state:'error',message:e.message};}
  }); });
  let last=0;
  for(let i=0;i<360;i++){
    const status=await page.evaluate(()=>window.__gemmaPairs);
    if(status.state==='complete'){report.pairs=status.results;break;}
    if(status.state==='error')throw new Error(status.message);
    if(status.completed>last){console.log(JSON.stringify(status));last=status.completed;}
    await page.waitForTimeout(5000);
  }
  expect(report.pairs?.length).toBe(24);
  expect(report.pairs.every(pair=>pair.gemma.finished && pair.baseline.finished)).toBe(true);
  const turns=report.pairs.flatMap(pair=>pair.turns);
  expect(turns.length).toBeGreaterThan(0);
  expect(turns.filter(turn=>turn.valid).length/turns.length).toBeGreaterThanOrEqual(.95);
  }
  expect(report.errors).toEqual([]);
  report.completed=true;
} finally {
  await writeFile(output,JSON.stringify(report,null,2));
  await context.close();
}
