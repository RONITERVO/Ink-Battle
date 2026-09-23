import { test, expect } from '@playwright/test';
import { build } from 'esbuild';
/* global InkBattle, togglePause */

async function mockGemma(page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'gpu', { value: {}, configurable: true });
    window.gemmaWorkers = [];
    window.Worker = class {
      constructor() { this.messages=[]; window.gemmaWorkers.push(this); }
      postMessage(data) { this.messages.push(data); }
      terminate() { this.terminated=true; }
      emit(data) { this.onmessage({data}); }
    };
  });
  await page.goto('/ink-battle.html');
  await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#start-screen [data-web-gemma-open]').click();
  await page.locator('#web-gemma-enable').click();
}

test('optional Gemma never downloads on startup and unsupported browsers can play', async ({page}) => {
  const requests=[]; page.on('request',r=>requests.push(r.url()));
  await page.addInitScript(()=>Object.defineProperty(navigator,'gpu',{value:undefined,configurable:true}));
  await page.goto('/ink-battle.html'); await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#start-screen [data-web-gemma-open]').click();
  await expect(page.locator('#web-gemma-status')).toContainText('compatible GPU');
  await expect(page.locator('#web-gemma-enable')).toBeDisabled();
  await page.getByRole('button',{name:'Back to game'}).click();
  await page.locator('#diff-btn-normal').click();
  await expect.poll(()=>page.evaluate(()=>InkBattle.observe().tick)).toBeGreaterThan(1);
  expect(requests.some(url=>/huggingface|gemma-worker|litert.*wasm/.test(url))).toBe(false);
});

test('download cancellation, loading pause, validated replies, stale replies and GPU failure', async ({page}) => {
  await mockGemma(page);
  await page.getByRole('button',{name:'Back to game'}).click();
  await expect(page.locator('#diff-btn-normal')).toBeDisabled();
  await page.locator('#start-screen [data-web-gemma-open]').click();
  await page.locator('#web-gemma-stop').click();
  expect(await page.evaluate(()=>window.gemmaWorkers[0].terminated)).toBe(true);
  await page.locator('#web-gemma-enable').click();
  await page.evaluate(()=>window.gemmaWorkers[1].emit({type:'status',state:'ready',cached:true}));
  await page.getByRole('button',{name:'Back to game'}).click();
  await page.evaluate(()=>InkBattle.start('normal',{manual:true}));
  expect(await page.evaluate(()=>InkBattle.gemma.request('hello'))).toBe(true);
  await page.evaluate(()=>{ const w=window.gemmaWorkers[1]; w.emit({type:'reply',id:w.messages.at(-1).id,text:'I will hold the line.\nConfident',durationMs:100}); });
  expect(await page.evaluate(()=>InkBattle.observe().opponent.emotion)).toBe('Confident');
  expect(await page.evaluate(()=>InkBattle.gemma.turns().length)).toBe(1);
  await page.waitForTimeout(4100);
  expect(await page.evaluate(()=>InkBattle.gemma.request('next'))).toBe(true);
  await page.evaluate(()=>{ togglePause(true); togglePause(false); const w=window.gemmaWorkers[1]; w.emit({type:'reply',id:w.messages.at(-1).id,text:'I changed my mind.\nWorried'}); });
  expect(await page.evaluate(()=>InkBattle.gemma.turns().length)).toBe(1);
  expect(await page.evaluate(()=>InkBattle.observe().opponent.emotion)).toBe('Confident');
  await page.evaluate(()=>window.gemmaWorkers[1].onerror());
  expect(await page.evaluate(()=>InkBattle.gemma.status().state)).toBe('error');
  expect(await page.evaluate(()=>InkBattle.observe().opponent.emotion)).toBe('Centered');
  await page.evaluate(()=>togglePause(false));
  await page.locator('#btn-u1').click();
  expect(await page.evaluate(()=>InkBattle.observe().units.length)).toBeGreaterThan(0);
});

test('model cadence uses wall time at 3x and never catches up with queued requests', async ({page}) => {
  await page.clock.install();
  await mockGemma(page);
  await page.evaluate(()=>window.gemmaWorkers[0].emit({type:'status',state:'ready',cached:true}));
  await page.getByRole('button',{name:'Back to game'}).click();
  await page.locator('#diff-btn-normal').click();
  await page.locator('#btn-speed').click(); await page.locator('#btn-speed').click();
  await page.clock.runFor(12500);
  const before=await page.evaluate(()=>({tick:InkBattle.observe().tick,messages:window.gemmaWorkers[0].messages}));
  expect(before.tick).toBeGreaterThan(2000);
  expect(before.messages.filter(m=>m.type==='generate')).toHaveLength(1);
  await page.clock.runFor(15000);
  expect(await page.evaluate(()=>window.gemmaWorkers[0].messages.filter(m=>m.type==='generate').length)).toBe(1);
  await page.clock.runFor(16000);
  expect(await page.evaluate(()=>InkBattle.gemma.status().state)).toBe('error');
  expect(await page.evaluate(()=>window.gemmaWorkers[0].terminated)).toBe(true);
});

test('Gemma dialog stays usable on a phone and native Android keeps its own bridge', async ({page}) => {
  await page.setViewportSize({width:390,height:844});
  await page.goto('/ink-battle.html'); await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#start-screen [data-web-gemma-open]').click();
  await expect(page.getByRole('button',{name:'Back to game'})).toBeInViewport();
  await page.screenshot({path:test.info().outputPath('gemma-phone.png')});
  await page.addInitScript(()=>{window.LocalGemmaAndroid={getStatus:()=>JSON.stringify({state:'installed',modelName:'Native Gemma'})};});
  await page.reload(); await expect(page.locator('#preloader')).toBeHidden();
  await expect(page.locator('#start-screen [data-web-gemma-open]')).toBeHidden();
  expect(await page.evaluate(()=>InkBattle.gemma.status().modelName)).toBe('Native Gemma');
});

test('real model storage rejects incomplete/corrupt downloads, reuses verified files and removes them', async ({page}) => {
  const {outputFiles}=await build({bundle:true,write:false,format:'iife',stdin:{resolveDir:process.cwd(),contents:`
    import {downloadVerifiedModel,cachedModel,removeModel,modelDirectory} from './src/client/gemma-model-store.js';
    import {sha256} from '@noble/hashes/sha2.js';
    (async()=>{
      const bytes=new Uint8Array([1,2,3,4]);
      const model={bytes:bytes.length,sha256:Array.from(sha256(bytes),n=>n.toString(16).padStart(2,'0')).join(''),url:'https://example.invalid/model'};
      const results=[];
      const check=(value,label)=>{if(!value)throw new Error(label);results.push(label);};
      const fails=async(fetchModel,pattern)=>{try{await downloadVerifiedModel({model,fetchModel});throw new Error('unexpected success');}catch(e){check(pattern.test(e.message),e.message);}check(await cachedModel(model)===null,'no unverified cache');};
      await removeModel();
      await fails(async()=>new Response(bytes.slice(0,2)),/integrity/);
      await fails(async()=>new Response(new Uint8Array([9,8,7,6])),/integrity/);
      await fails(async()=>new Response(new Uint8Array(5)),/unexpected size/);
      await fails(async()=>new Response('',{status:503}),/503/);
      const estimate=navigator.storage.estimate.bind(navigator.storage);
      navigator.storage.estimate=async()=>({quota:0,usage:0});
      await fails(async()=>new Response(bytes),/free browser storage/);
      navigator.storage.estimate=estimate;
      const file=await downloadVerifiedModel({model,fetchModel:async()=>new Response(bytes)});
      check(file.size===4,'complete download');
      const cached=await downloadVerifiedModel({model,fetchModel:async()=>{throw new Error('network should not run');}});
      check(cached.size===4,'offline cache hit');
      const writer=await(await(await modelDirectory()).getFileHandle('model.litertlm')).createSyncAccessHandle();writer.truncate(1);writer.close();
      check(await cachedModel(model)===null,'truncated file rejected');
      await removeModel();check(await cachedModel(model)===null,'removed');
      self.postMessage({ok:true,results});
    })().catch(e=>self.postMessage({ok:false,error:e.message}));
  `}});
  await page.goto('/ink-battle.html');
  const result=await page.evaluate(source=>new Promise(resolve=>{
    const url=URL.createObjectURL(new Blob([source],{type:'text/javascript'}));
    const worker=new Worker(url);worker.onmessage=({data})=>{worker.terminate();URL.revokeObjectURL(url);resolve(data);};
    worker.onerror=e=>{worker.terminate();resolve({ok:false,error:e.message});};
  }),outputFiles[0].text);
  expect(result).toMatchObject({ok:true});
});
