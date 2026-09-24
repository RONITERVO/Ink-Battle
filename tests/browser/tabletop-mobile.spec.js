import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
/* global InkTabletop */

async function ready(page, url='/') {
  await page.goto(url);
  await expect(page.locator('body')).toHaveAttribute('data-ready','true');
}
const seal={x:-.72,y:.06,z:.89}, center={x:0,y:0,z:0}, troop={x:-1.02,y:.15,z:.86}, rally={x:-.65,y:0,z:.4};
const screen=(page,p)=>page.evaluate(p=>InkTabletop.project(p),p);
async function drag(page,a,b) {
  const from=await screen(page,a),to=await screen(page,b);
  await page.mouse.move(from.x,from.y);await page.mouse.down();
  await page.mouse.move(to.x,to.y,{steps:4});await page.mouse.up();
}
test.beforeEach(({browserName})=>test.skip(browserName!=='chromium','Touch/WebGL and Android use Chromium; archive has cross-browser coverage.'));

test('home and old launch URLs open tabletop, with classic explicitly archived',async({page,context})=>{
  for(const url of ['/', '/ink-battle.html?entry=old#book','/mr.html?entry=xr#book']) {
    await ready(page,url);
    expect(await page.evaluate(()=>window.InkBattle)).toBeUndefined();
    if(url!=='/') expect(new URL(page.url()).hash).toBe('#book');
  }
  await page.getByRole('link',{name:'Archive: Classic 2D & Gemma'}).click();
  await expect(page).toHaveURL(/classic.html$/);
  await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#diff-btn-normal').click();await page.locator('#btn-u1').click();
  await ready(page);
  await page.evaluate(()=>navigator.serviceWorker.ready);
  await expect.poll(()=>page.evaluate(()=>!!navigator.serviceWorker.controller)).toBe(true);
  await context.setOffline(true);await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready','true');
  await drag(page,seal,center);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.observe()?.battlefield)).toBe('tabletop');
});

test('wheel zoom, middle-drag pan and recenter keep desktop pieces playable',async({page})=>{
  await ready(page);
  for(const size of [{width:390,height:640},{width:844,height:240},{width:1280,height:720}]) {
    await page.setViewportSize(size);
    await expect.poll(async()=>{
      const corners=await Promise.all([-1.4,1.4].flatMap(x=>[-.75,1.4].map(z=>screen(page,{x,y:0,z}))));
      return corners.every(p=>p.x>0 && p.x<size.width && p.y>0 && p.y<size.height);
    }).toBe(true);
  }
  const before=await page.evaluate(()=>InkTabletop.diagnostics().camera);
  await page.mouse.move(800,450);await page.mouse.wheel(0,-240);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.distance)).toBeLessThan(before.distance-.2);
  const target=await page.evaluate(()=>InkTabletop.diagnostics().camera.target);
  await page.mouse.down({button:'middle'});await page.mouse.move(900,490,{steps:5});await page.mouse.up({button:'middle'});
  await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.target)).not.toEqual(target);
  await page.getByRole('button',{name:'Recenter view'}).click();
  await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.distance)).toBeCloseTo(before.distance,1);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.target)).toEqual(before.target);
  await drag(page,seal,center);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.observe()?.running)).toBe(true);
});

test.describe('phone gestures',()=>{
  test.use({hasTouch:true,isMobile:true});
  for(const size of [{width:390,height:844},{width:844,height:240}]) {
    test(`one finger plays; two fingers pan/pinch without buying at ${size.width}x${size.height}`,async({page,context},info)=>{
      await page.setViewportSize(size);await ready(page);
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      const cdp=await context.newCDPSession(page);
      const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y,radiusX:5,radiusY:5,force:1}))});
      const fingerDrag=async(a,b)=>{
        const from=await screen(page,a),to=await screen(page,b);
        await touch('touchStart',[[1,from.x,from.y]]);
        for(let step=1;step<=4;step++) await touch('touchMove',[[1,from.x+(to.x-from.x)*step/4,from.y+(to.y-from.y)*step/4]]);
        await touch('touchEnd',[]);
      };
      const canvas=await page.locator('#tabletop').boundingBox();
      expect(canvas.width).toBe(size.width);expect(canvas.height).toBe(size.height);
      const panel=await page.locator('#welcome').boundingBox();
      expect(panel.height).toBeLessThan(65);
      for(const x of [-1.4,1.4]) for(const z of [-.75,1.4]) {
        const corner=await screen(page,{x,y:0,z});
        expect(corner.x).toBeGreaterThan(0);expect(corner.x).toBeLessThan(size.width);
        expect(corner.y).toBeGreaterThan(0);expect(corner.y).toBeLessThan(size.height);
      }
      await fingerDrag(seal,center);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.observe()?.running)).toBe(true);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().player.drawProgress)).toBe(1);
      const p=await screen(page,troop),before=await page.evaluate(()=>({camera:InkTabletop.diagnostics().camera,spent:InkTabletop.observe().metrics.spent[1]}));
      await touch('touchStart',[[1,p.x,p.y]]);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(1);
      await touch('touchStart',[[1,p.x,p.y],[2,p.x+50,p.y]]);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(0);
      await touch('touchMove',[[1,p.x-15,p.y],[2,p.x+85,p.y]]);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.distance)).toBeLessThan(before.camera.distance*.9);
      await touch('touchEnd',[]);
      expect(await page.evaluate(()=>InkTabletop.observe().metrics.spent[1])).toBe(before.spent);
      const oldTarget=await page.evaluate(()=>InkTabletop.diagnostics().camera.target);
      const x=size.width*.6,y=size.height*.55;
      await touch('touchStart',[[1,x-25,y],[2,x+25,y]]);
      await touch('touchMove',[[1,x,y+20],[2,x+50,y+20]]);
      await touch('touchEnd',[]);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.target)).not.toEqual(oldTarget);
      // A fresh single-finger gesture still buys after navigation is finished.
      await page.getByRole('button',{name:'Show or hide instructions'}).tap();
      await page.getByRole('button',{name:'Recenter view'}).tap();
      await page.getByRole('button',{name:'Show or hide instructions'}).tap();
      await fingerDrag(troop,rally);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().metrics.spawned[1])).toBe(1);
      await page.screenshot({path:info.outputPath(`touch-${size.width}.png`)});
      expect(errors).toEqual([]);
    });
  }
});

test('Android file entry opens the book and exposes pause for native lifecycle',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await ready(page,pathToFileURL(resolve('index.html')).href);
  await drag(page,seal,center);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.observe()?.running)).toBe(true);
  await page.evaluate(()=>InkTabletop.pause());
  expect(await page.evaluate(()=>InkTabletop.observe().paused)).toBe(true);
  expect(errors).toEqual([]);
});
