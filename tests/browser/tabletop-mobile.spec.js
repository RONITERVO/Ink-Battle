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

for (const input of ['mouse', 'touch']) test.describe(`${input} background orbit`,()=>{
  test.use({hasTouch:input==='touch',isMobile:input==='touch'});
  test('only a drag starting outside the book rotates, even when it crosses pieces',async({page,context})=>{
    const size=input==='touch'?{width:390,height:844}:{width:1280,height:720};
    await page.setViewportSize(size);await ready(page);
    await drag(page,seal,center);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().player.drawProgress)).toBe(1);
    const cdp=input==='touch'?await context.newCDPSession(page):null;
    const down=async p=>{
      if(cdp) await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:p.x,y:p.y}]});
      else {await page.mouse.move(p.x,p.y);await page.mouse.down();}
    };
    const move=async p=>{
      if(cdp) await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{id:1,x:p.x,y:p.y}]});
      else await page.mouse.move(p.x,p.y,{steps:4});
    };
    const up=()=>cdp?cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]}):page.mouse.up();
    const camera=()=>page.evaluate(()=>InkTabletop.diagnostics().camera);
    const outside={x:size.width-25,y:100};
    const before=await camera(),spent=await page.evaluate(()=>InkTabletop.observe().metrics.spent[1]);
    // Empty page space is protected, even if the drag later leaves the book.
    await down(await screen(page,{x:0,y:0,z:-.1}));await move(outside);await up();
    expect((await camera()).position).toEqual(before.position);
    // A piece remains a piece drag even after moving beyond the book.
    const piece=await screen(page,troop);
    await down(piece);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(1);
    await move(outside);await up();
    expect((await camera()).position).toEqual(before.position);
    expect(await page.evaluate(()=>InkTabletop.observe().metrics.spent[1])).toBe(spent);
    // An outside start stays camera-only when dragged over an available troop.
    await down(outside);await move(piece);
    await expect.poll(async()=>(await camera()).position).not.toEqual(before.position);
    expect(await page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(0);
    if(cdp) {
      const touches=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points});
      const first={id:1,x:piece.x,y:piece.y},second={id:2,x:piece.x+40,y:piece.y};
      const distance=(await camera()).distance;
      await touches('touchStart',[first,second]);
      first.x++;second.x++;
      await touches('touchMove',[first,second]);
      expect((await camera()).distance).toBeCloseTo(distance,2);
      second.x+=40;await touches('touchMove',[first,second]);
      await expect.poll(async()=>(await camera()).distance).toBeLessThan(distance*.9);
      // Release only the second contact; an empty touchEnd releases them all.
      await touches('touchEnd',[second]);
      // Drag back against the original orbit after lifting only one finger.
      // Inertia may keep coasting forward, but this finger must not reverse it.
      // Checking direction avoids depending on how fast the renderer settles.
      const azimuth=async()=>{
        const c=await camera();return Math.atan2(c.position[0]-c.target[0],c.position[2]-c.target[2]);
      };
      const angle=await azimuth();
      first.x=size.width-1;await touches('touchMove',[first]);
      const delta=(await azimuth())-angle;
      expect(Math.atan2(Math.sin(delta),Math.cos(delta))).toBeGreaterThanOrEqual(-.001);
      expect(await page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(0);
    }
    await up();
    expect(await page.evaluate(()=>InkTabletop.observe().metrics.spent[1])).toBe(spent);
    // Recenter and a fresh grab still work after orbiting.
    if(input==='touch') await page.getByRole('button',{name:'Show or hide instructions'}).tap();
    await page.getByRole('button',{name:'Recenter view'}).click();
    if(input==='touch') await page.getByRole('button',{name:'Show or hide instructions'}).tap();
    await down(await screen(page,troop));await move(await screen(page,rally));await up();
    await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().metrics.spawned[1])).toBe(1);
  });
});

test.describe('phone gestures',()=>{
  test.use({hasTouch:true,isMobile:true});
  test('two fingers combine gentle twist, pan and zoom without buying or switching modes',async({page,context})=>{
    await page.setViewportSize({width:390,height:844});await ready(page);
    await drag(page,seal,center);
    const cdp=await context.newCDPSession(page);
    const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points});
    const pair=(x,y,r,angle)=>[1,2].map((id,i)=>({id,
      x:x+(i?1:-1)*r*Math.cos(angle),y:y+(i?1:-1)*r*Math.sin(angle)}));
    const camera=()=>page.evaluate(()=>InkTabletop.diagnostics().camera);
    const angle=c=>Math.atan2(c.position[0]-c.target[0],c.position[2]-c.target[2]);
    const before=await camera(),spent=await page.evaluate(()=>InkTabletop.observe().metrics.spent[1]);
    await touch('touchStart',pair(180,230,55,0));
    await touch('touchMove',pair(195,240,55,0));
    await expect.poll(async()=>(await camera()).target).not.toEqual(before.target);
    expect(Math.abs(angle(await camera())-angle(before))).toBeLessThan(.04);
    await touch('touchMove',pair(195,240,65,0));
    await expect.poll(async()=>(await camera()).distance).toBeLessThan(before.distance*.95);
    expect(Math.abs(angle(await camera())-angle(before))).toBeLessThan(.04);
    // Spread, translate and turn in one continuous gesture; no toggle or release.
    for(let i=1;i<=4;i++)
      await touch('touchMove',pair(195+3*i,240+2*i,65+4*i,i*Math.PI/12));
    await touch('touchEnd',[]);
    await expect.poll(async()=>angle(await camera())-angle(before)).toBeGreaterThan(.08);
    expect(angle(await camera())-angle(before)).toBeLessThan(.45);
    expect((await camera()).distance).toBeLessThan(before.distance*.85);
    expect(await page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(0);
    expect(await page.evaluate(()=>InkTabletop.observe().metrics.spent[1])).toBe(spent);
  });

  test('backgrounding with missing touch-end events allows fresh piece and camera gestures',async({page,context})=>{
    await page.setViewportSize({width:390,height:844});
    await page.addInitScript(()=>{
      for(const type of ['pointerup','pointercancel','lostpointercapture'])
        window.addEventListener(type,e=>{if(window.dropTouchEnds)e.stopImmediatePropagation();},true);
    });
    await ready(page);await drag(page,seal,center);
    const cdp=await context.newCDPSession(page);
    const touch=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points});
    const fingerDrag=async(from,to)=>{
      const a=await screen(page,from),b=await screen(page,to);
      await touch('touchStart',[{id:9,...a}]);
      await touch('touchMove',[{id:9,...b}]);await touch('touchEnd',[]);
    };
    for(const count of [1,2]) {
      const p=await screen(page,troop),points=[{id:1,...p}];
      await touch('touchStart',points);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(1);
      if(count===2) await touch('touchStart',[...points,{id:2,x:p.x+50,y:p.y}]);
      await page.evaluate(()=>{window.dropTouchEnds=true;InkTabletop.pause();});
      await touch('touchEnd',[]);
      await page.evaluate(()=>{window.dropTouchEnds=false;});
      await fingerDrag({x:1.05,y:.06,z:.83},center);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().paused)).toBe(false);
    }
    await fingerDrag(troop,rally);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().metrics.spawned[1])).toBe(1);
    const before=await page.evaluate(()=>InkTabletop.diagnostics().camera.distance);
    await touch('touchStart',[{id:4,x:150,y:240},{id:5,x:220,y:240}]);
    await touch('touchMove',[{id:4,x:120,y:240},{id:5,x:250,y:240}]);
    await touch('touchEnd',[]);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().camera.distance)).toBeLessThan(before*.9);
  });

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
      p.x+=40;p.y-=40;
      await touch('touchMove',[[1,p.x,p.y]]);
      expect((await page.evaluate(()=>InkTabletop.diagnostics().camera)).distance).toBeCloseTo(before.camera.distance,4);
      await touch('touchStart',[[1,p.x,p.y],[2,p.x+50,p.y]]);
      await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(0);
      await touch('touchMove',[[1,p.x+1,p.y],[2,p.x+51,p.y]]);
      expect((await page.evaluate(()=>InkTabletop.diagnostics().camera)).distance).toBeCloseTo(before.camera.distance,2);
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

test('carrying a book disables automatic camera framing until recenter',async({page})=>{
  await ready(page);
  const before=await page.evaluate(()=>InkTabletop.diagnostics());
  const p=await screen(page,{x:1.28,y:.035,z:1.34});
  await page.mouse.move(p.x,p.y);await page.mouse.down();
  await page.mouse.move(p.x-90,p.y-45,{steps:4});await page.mouse.up();
  const moved=await page.evaluate(()=>InkTabletop.diagnostics());
  expect(moved.table.position).not.toEqual(before.table.position);
  await page.setViewportSize({width:1024,height:660});
  await page.evaluate(()=>new Promise(requestAnimationFrame));
  const resized=await page.evaluate(()=>InkTabletop.diagnostics());
  expect(resized.table).toEqual(moved.table);
  expect(resized.camera.position).toEqual(moved.camera.position);
  expect(resized.camera.target).toEqual(moved.camera.target);
  await page.getByRole('button',{name:'Recenter view'}).click();
  expect((await page.evaluate(()=>InkTabletop.diagnostics())).table).toEqual(before.table);
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

test('small screens can reach the classic fallback when WebGL cannot initialize',async({page})=>{
  await page.setViewportSize({width:390,height:640});
  await page.addInitScript(()=>{
    const get=HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext=function(type,...args) {
      return type==='webgl2' || type==='webgl' ? null : get.call(this,type,...args);
    };
  });
  await page.goto('/');
  await expect(page.getByRole('status')).toContainText('3D graphics are unavailable');
  await page.getByRole('link',{name:'Archive: Classic 2D & Gemma'}).click();
  await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#diff-btn-normal').click();await page.locator('#btn-u1').click();
});

test('MR entry remains visible on a small screen when its browser supports XR',async({page})=>{
  await page.setViewportSize({width:390,height:640});
  await page.addInitScript(()=>Object.defineProperty(navigator,'xr',{configurable:true,
    value:Object.assign(new EventTarget(),{isSessionSupported:async()=>true})}));
  await ready(page);
  await expect(page.getByRole('button',{name:'Enter mixed reality',exact:true})).toBeVisible();
});
