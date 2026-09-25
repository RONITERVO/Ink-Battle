import { test, expect } from '@playwright/test';
import { build } from 'esbuild';
import { Session } from '../../src/sdk/session.js';
import { AGES } from '../../src/content/ages.js';
import { dockPosition } from '../../src/mr/defense-layout.js';
import { worldX, worldZ } from '../../src/core/battlefield.js';
import { Quaternion, Vector3, Euler } from 'three';
/* global InkTabletop, xrDevice, handConfig, controllerConfig, measureMRStress, xrMath */

async function ready(page) {
  await page.goto('/mr.html');
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
}
async function drag(page, from, to) {
  const a = await page.evaluate((p) => InkTabletop.project(p), from),
    b = await page.evaluate((p) => InkTabletop.project(p), to);
  await page.mouse.move(a.x, a.y);
  await page.mouse.down();
  // Keep real intermediate pointer moves without making software-rendered CI
  // spend most of its timeout processing redundant drag frames.
  await page.mouse.move(b.x, b.y, { steps: 4 });
  await page.mouse.up();
}
const seal = { x: -0.72, y: 0.06, z: 0.89 },
  cannon = { x: 0.12, y: 0.07, z: 0.86 },
  eraser = { x: 0.66, y: 0.07, z: 1.16 },
  center = { x: 0, y: 0, z: 0 },
  troop = { x: -1.02, y: 0.15, z: 0.86 },
  rally = { x: -0.65, y: 0, z: 0.4 },
  hourglass = { x: 1.05, y: 0.06, z: 0.83 };

test('tabletop desktop grabs, invalid drops, pause, speed and saves', async ({
  page,
  browserName
}) => {
  test.skip(
    browserName !== 'chromium',
    'The WebGL/XR render suite uses Chromium; classic UI covers the other engines.'
  );
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await ready(page);
  await drag(page, seal, center);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe()?.running))
    .toBe(true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().textures))
    .toBeGreaterThan(15);
  await drag(page, troop, { x: 0.4, y: 0, z: 0.4 });
  expect(
    await page.evaluate(
      () => InkTabletop.observe().units.filter((u) => u.team === 1).length
    )
  ).toBe(0);
  await drag(page, troop, rally);
  await expect
    .poll(() =>
      page.evaluate(
        () => InkTabletop.observe().units.filter((u) => u.team === 1).length
      )
    )
    .toBe(1);
  await drag(page, hourglass, center);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe().paused))
    .toBe(true);
  const tick = await page.evaluate(() => InkTabletop.observe().tick);
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => InkTabletop.observe().tick)).toBe(tick);
  await drag(page, { x: 1.05, y: 0.06, z: 1.13 }, center);
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
  expect(await page.evaluate(() => InkTabletop.observe().paused)).toBe(true);
  expect(await page.evaluate(() => InkTabletop.observe().tick)).toBe(tick);
  expect(errors).toEqual([]);
});

function defenseCheckpoint(count, types = []) {
  const session = new Session({ opponent: false });
  session.advance(36000);
  session.advance(15000);
  for (let slot = 0; slot < count; slot++) {
    if (slot) expect(session.command(1, { type: 'slot' }).ok).toBe(true);
    expect(session.command(1, { type: 'turret', index: types[slot] ?? 0 }).ok).toBe(true);
  }
  session.advance(120);
  return session.checkpoint();
}
function tacticalCheckpoint() {
  const session=new Session({battlefield:'tabletop',opponent:false});
  expect(session.command(1,{type:'unit',index:0,z:-150}).ok).toBe(true);
  session.advance(90);
  return session.checkpoint();
}
async function soldierPoint(page) {
  const u=await page.evaluate(()=>InkTabletop.observe().units.find(u=>u.team===1));
  return {x:worldX(u.x),y:.13*Math.min(1.8,u.size/50),z:worldZ(u.z)};
}
test('desktop suggests a live troop route without teleporting it, then reloads the instruction',async({page,browserName},info)=>{
  test.skip(browserName!=='chromium','MR input uses Chromium.');
  // Drive game time explicitly: a slow software renderer must not let the
  // moving soldier escape between reading its position and the real mouse click.
  await page.clock.install({time:new Date('2026-01-01T00:00:00Z')});
  await ready(page);
  await page.clock.pauseAt(new Date('2026-01-01T01:00:00Z'));
  await page.evaluate(cp=>InkTabletop.restore(cp),tacticalCheckpoint());
  await page.clock.runFor(16);
  await drag(page,hourglass,center);
  await page.clock.runFor(16);
  const p=await soldierPoint(page),screen=await page.evaluate(p=>InkTabletop.project(p),p);
  await page.mouse.move(screen.x,screen.y);await page.mouse.down();
  await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(1);
  const before=await page.evaluate(()=>InkTabletop.observe().units[0]);
  await page.clock.runFor(200);
  expect((await page.evaluate(()=>InkTabletop.observe().units[0])).x).toBeGreaterThan(before.x);
  const end=await page.evaluate(p=>InkTabletop.project(p),{x:p.x,y:0,z:.45});
  await page.mouse.move(end.x,end.y,{steps:4});
  await page.clock.runFor(16);
  await page.screenshot({path:info.outputPath('troop-guidance.png')});
  const justBefore=await page.evaluate(()=>InkTabletop.observe().units[0]);
  await page.mouse.up();
  await page.clock.runFor(16);
  await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().units[0].guide!==null)).toBe(true);
  const after=await page.evaluate(()=>InkTabletop.observe().units[0]);
  expect(Math.abs(after.z-justBefore.z)).toBeLessThan(10);
  expect(after.guide.z).toBeGreaterThan(after.z+50);
  expect(await page.evaluate(()=>InkTabletop.replay().entries.at(-1).command.type)).toBe('guide');
  await drag(page,hourglass,center);await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready','true');
  expect((await page.evaluate(()=>InkTabletop.observe().units[0])).guide).toEqual(after.guide);
});
async function restoreDefenses(page, count, types) {
  await page.evaluate((cp) => InkTabletop.restore(cp), defenseCheckpoint(count, types));
  await drag(page, hourglass, center);
  await expect.poll(() => page.evaluate(() => InkTabletop.observe().paused)).toBe(false);
}

// Each location gets a separate context and timeout budget on software CI.
// Prior foundations come from a real replayable Session; the new dock and cannon
// still have to be purchased through actual mouse input in every case.
for (let slot = 0; slot < 4; slot++) {
  test(`desktop cannon dock ${slot + 1} requires its own foundation`, async ({ page, browserName }, info) => {
    test.skip(browserName !== 'chromium', 'MR input uses the Chromium render target.');
    await ready(page);
    await restoreDefenses(page, slot);
    if (slot) {
      const p = dockPosition(slot);
      await drag(page, { x: 0.37, y: 0.07, z: 1.16 }, { ...p, y: 0 });
      await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.unlockedSlots)).toBe(slot + 1);
    }
    await drag(page, cannon, { x: -1.06, y: 0, z: 0.14 });
    expect(await page.evaluate(() => InkTabletop.observe().player.turrets.filter((t) => t !== null).length)).toBe(slot);
    await drag(page, cannon, dockPosition(slot));
    await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets.filter((t) => t !== null).length)).toBe(slot + 1);
    await page.screenshot({ path: info.outputPath(`cannon-dock-${slot + 1}.png`) });
  });
}

test('desktop cannon docks stop at four and persist after selling and reloading', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'MR input uses the Chromium render target.');
  await ready(page);
  await restoreDefenses(page, 4);
  await drag(page, { x: 0.37, y: 0.07, z: 1.16 }, center);
  expect(await page.evaluate(() => InkTabletop.observe().player.unlockedSlots)).toBe(4);
  await drag(page, { x: 0.66, y: 0.07, z: 1.16 }, dockPosition(3));
  await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets[3])).toBe(null);
  expect(await page.evaluate(() => InkTabletop.observe().player.unlockedSlots)).toBe(4);
  await drag(page, hourglass, center);
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
  expect(await page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual([0, 0, 0, null]);
  expect(await page.evaluate(() => InkTabletop.observe().player.unlockedSlots)).toBe(4);
});

for (const slot of [0, 1, 2]) {
  test(`eraser selects older cannon ${slot + 1}, highlights it and saves its replacement`, async ({ page, browserName }, info) => {
    test.skip(browserName !== 'chromium', 'MR input uses the Chromium render target.');
    await ready(page);
    const types = [0, 2, 1, 0];
    await restoreDefenses(page, 4, types);
    const source = await page.evaluate((p) => InkTabletop.project(p), eraser);
    await page.mouse.move(source.x, source.y);
    await page.mouse.down();
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(1);
    for (const target of [(slot + 1) % 4, slot]) {
      const pointer = await page.evaluate((p) => InkTabletop.project(p), dockPosition(target));
      await page.mouse.move(pointer.x, pointer.y, { steps: 4 });
      await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().highlightedDocks)).toEqual([target]);
      expect(await page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual(types);
    }
    await page.screenshot({ path: info.outputPath(`selected-cannon-${slot}.png`) });
    await page.mouse.up();
    types[slot] = null;
    await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual(types);
    expect(await page.evaluate(() => InkTabletop.replay().entries.at(-1).command)).toEqual({ type: 'sell', slot });
    await drag(page, { x: 0.8, y: 0.07, z: 0.86 }, dockPosition(slot));
    types[slot] = 2;
    await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual(types);
    expect(await page.evaluate(() => InkTabletop.observe().player.unlockedSlots)).toBe(4);
    await drag(page, hourglass, center);
    await page.reload();
    await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
    expect(await page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual(types);
  });
}

// Separate contexts give every catalog age its own failure and timeout budget;
// six software-rendered screenshots must not compete inside one 45-second test.
for (let age = 0; age < AGES.length; age++) {
  test(`tabletop models and prices render in ${AGES[age].name}`, async ({
    page,
    browserName
  }, info) => {
    test.skip(
      browserName !== 'chromium',
      'The WebGL render suite targets Chromium.'
    );
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await ready(page);
    const session = new Session({ startAge: age, opponent: false });
    session.advance(36000);
    session.advance(15000);
    for (const team of [1, -1]) for (let slot = 0; slot < 4; slot++) {
      if (slot) expect(session.command(team, { type: 'slot' }).ok).toBe(true);
      expect(session.command(team, { type: 'turret', index: slot % 3 }).ok).toBe(true);
    }
    session.command(1, { type: 'unit', index: age % 3 });
    session.command(-1, { type: 'unit', index: 2 });
    session.advance(240);
    await page.evaluate((cp) => InkTabletop.restore(cp), session.checkpoint());
    await expect
      .poll(() => page.evaluate(() => InkTabletop.observe().player.age))
      .toBe(age);
    await page.waitForTimeout(350);
    const stats = await page.evaluate(() => InkTabletop.diagnostics());
    expect(stats.overflow).toBe(0);
    expect(stats.calls).toBeLessThan(85);
    expect(stats.triangles).toBeGreaterThan(1000);
    await page.screenshot({ path: info.outputPath(`tabletop-age-${age}.png`) });
    expect(errors).toEqual([]);
  });
}

let emulator;
test.beforeAll(async () => {
  const result = await build({
    stdin: {
      contents:
        "import {XRDevice,metaQuest3} from 'iwer'; import {oculusHandConfig} from 'iwer/lib/device/XRHandInput.js'; import {Vector3,Quaternion} from 'three'; window.xrMath={Vector3,Quaternion}; window.handConfig=oculusHandConfig; window.controllerConfig=metaQuest3.controllerConfig; window.xrDevice=new XRDevice(metaQuest3,{stereoEnabled:false}); xrDevice.installRuntime({forceInstall:true});",
      resolveDir: process.cwd()
    },
    bundle: true,
    format: 'iife',
    write: false
  });
  emulator = result.outputFiles[0].text;
});
async function emulated(page, viewerHeight) {
  await page.addInitScript({ content: emulator });
  await ready(page);
  if (viewerHeight !== undefined)
    await page.evaluate((height) => { xrDevice.position.y = height; }, viewerHeight);
  await page.locator('#enter-mr').click();
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().xr))
    .toBe(true);
}
async function controller(page, side, point, pressed, orientation = null, world = false) {
  await page.evaluate(
    ({ side, point, pressed, orientation, world }) => {
      const c = xrDevice.controllers[side],
        t = InkTabletop.diagnostics().table;
      if (point) {
        // IWER positions the aim ray, while the game holds pieces at the grip.
        // Align the physical grip to the requested point, including its offset.
        const offset = controllerConfig.layout[side].gripOffsetMatrix;
        c.quaternion.copy(orientation || { x: 0, y: 0, z: 0, w: 1 });
        const p = new xrMath.Vector3().copy(point);
        if (!world) p.applyQuaternion(t.rotation).multiplyScalar(t.scale).add(t.position);
        p.sub(new xrMath.Vector3(offset?.[12] || 0, offset?.[13] || 0, offset?.[14] || 0).applyQuaternion(c.quaternion));
        c.position.copy(p);
      }
      if (pressed !== undefined)
        c.updateButtonValue('trigger', pressed ? 1 : 0);
    },
    { side, point, pressed, orientation: orientation && { x: orientation.x, y: orientation.y, z: orientation.z, w: orientation.w }, world }
  );
  await page.waitForTimeout(90);
}
for (const height of [1.2, 1.75]) {
  test(`MR starts with a reachable tabletop-sized book at viewer height ${height} m`, async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'IWER uses Chromium WebGL.');
    await emulated(page, height);
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().table.position.y)).toBeGreaterThan(0.7);
    const table = await page.evaluate(() => InkTabletop.diagnostics().table);
    // Include the cover below the gameplay plane and the nearest shop edge.
    expect(2.6 * table.scale).toBeGreaterThanOrEqual(0.48);
    expect(2.6 * table.scale).toBeLessThanOrEqual(0.55);
    expect(table.position.y - 0.13 * table.scale).toBeCloseTo(0.75, 3);
    expect(-table.position.z - 0.345 * table.scale).toBeLessThan(0.75);
    expect(-table.position.z - 1.45 * table.scale).toBeGreaterThan(0.2);
    await controller(page, 'right', center, true);
    await controller(page, 'right', center, false);
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().placing)).toBe(false);
    expect(await page.evaluate(() => InkTabletop.diagnostics().table)).toEqual(table);
    await page.evaluate(() => xrDevice.activeSession.end());
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().table.scale)).toBe(1);
  });
}

test('emulated Quest controller grabs, visibility loss, reconnection and session re-entry', async ({
  page,
  browserName
}) => {
  test.skip(
    browserName !== 'chromium',
    'IWER runs against the Chromium WebGL test target.'
  );
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await emulated(page);
  await controller(page, 'right', center, true);
  await controller(page, 'right', center, false);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().placing))
    .toBe(false);
  await controller(page, 'right', seal, false);
  await controller(page, 'right', seal, true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().holds))
    .toBe(1);
  await controller(page, 'right', { ...center, y: 0.05 }, true);
  await controller(page, 'right', { ...center, y: 0.05 }, false);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe()?.running))
    .toBe(true);
  await page.waitForTimeout(350);
  await controller(page, 'right', troop, true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().holds))
    .toBe(1);
  await page.evaluate(() => xrDevice.updateVisibilityState('visible-blurred'));
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe().paused))
    .toBe(true);
  expect(await page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(0);
  await page.evaluate(() => xrDevice.updateVisibilityState('visible'));
  await controller(page, 'right', rally, false);
  expect(
    await page.evaluate(
      () => InkTabletop.observe().units.filter((u) => u.team === 1).length
    )
  ).toBe(0);
  await controller(page, 'right', hourglass, true);
  await controller(page, 'right', { ...center, y: 0.05 }, false);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe().paused))
    .toBe(false);
  await controller(page, 'right', troop, true);
  await controller(page, 'right', { ...rally, y: 0.23 }, false);
  await expect
    .poll(() =>
      page.evaluate(
        () => InkTabletop.observe().units.filter((u) => u.team === 1).length
      )
    )
    .toBe(1);
  await controller(page, 'right', cannon, false);
  await controller(page, 'right', cannon, true);
  await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(1);
  const dock = dockPosition(0);
  await controller(page, 'right', { ...dock, y: dock.y + 0.06 }, true);
  await controller(page, 'right', { ...dock, y: dock.y + 0.06 }, false);
  await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets[0])).toBe(0);
  await page.evaluate(() => xrDevice.activeSession.end());
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().xr))
    .toBe(false);
  expect(await page.evaluate(() => InkTabletop.observe().paused)).toBe(true);
  await page.locator('summary').click();
  const download = page.waitForEvent('download');
  await page.locator('#save-report').click();
  expect((await download).suggestedFilename()).toBe(
    'ink-battle-quest-report.json'
  );
  expect(
    await page.evaluate(() => InkTabletop.diagnostics().xrMeasurements.frames)
  ).toBeGreaterThan(0);
  await page.locator('#enter-mr').click();
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().xr))
    .toBe(true);
  await page.evaluate(() => xrDevice.activeSession.end());
  expect(errors).toEqual([]);
});

test('tabletop shell opens offline after its first successful load', async ({
  page,
  context,
  browserName
}) => {
  test.skip(
    browserName !== 'chromium',
    'Shared service worker is also covered by the classic browser suite.'
  );
  await ready(page);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('body')).toHaveAttribute('data-ready', 'true');
  await drag(page, seal, center);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe()?.running))
    .toBe(true);
});

async function hand(page, side, point, pinched, orientation = null, world = false) {
  await page.evaluate(
    ({ side, point, pinched, orientation, world }) => {
      const h = xrDevice.hands[side],
        t = InkTabletop.diagnostics().table,
        pose = handConfig.poses[pinched ? 'pinch' : 'default'];
      const a = pose.jointTransforms['thumb-tip'].offsetMatrix,
        b = pose.jointTransforms['index-finger-tip'].offsetMatrix;
      const offset = {
        x: ((a[12] + b[12]) / 2) * (side === 'right' ? -1 : 1),
        y: (a[13] + b[13]) / 2,
        z: (a[14] + b[14]) / 2
      };
      h.quaternion.copy(orientation || { x: 0, y: 0, z: 0, w: 1 });
      const p = new xrMath.Vector3().copy(point);
      if (!world) p.applyQuaternion(t.rotation).multiplyScalar(t.scale).add(t.position);
      p.sub(new xrMath.Vector3().copy(offset).applyQuaternion(h.quaternion));
      h.position.copy(p);
      h.updatePinchValue(pinched ? 1 : 0);
    },
    { side, point, pinched, orientation: orientation && { x: orientation.x, y: orientation.y, z: orientation.z, w: orientation.w }, world }
  );
  await page.waitForTimeout(100);
}

for (const device of ['controller', 'hand']) {
  for (const diagonal of [-1, 1]) {
    test(`emulated ${device} plays on an overhead book carried by diagonal ${diagonal}`, async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', 'IWER uses Chromium WebGL.');
      await emulated(page);
      if (device === 'hand') await page.evaluate(() => { xrDevice.primaryInputMode = 'hand'; });
      const move = device === 'hand' ? hand : controller;
      await move(page, 'right', center, false); await move(page, 'right', center, true); await move(page, 'right', center, false);
      await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().placing)).toBe(false);
      const initial = await page.evaluate(() => InkTabletop.diagnostics().table);
      const corners = [{ x: -1.28, y: .035, z: diagonal === 1 ? 1.34 : -.65 },
        { x: 1.28, y: .035, z: diagonal === 1 ? -.65 : 1.34 }];
      const world = corners.map(p => new Vector3().copy(p).applyQuaternion(initial.rotation).multiplyScalar(initial.scale).add(initial.position));
      const midpoint = world[0].clone().add(world[1]).multiplyScalar(.5);
      for (const [i, side] of ['left', 'right'].entries()) {
        await move(page, side, corners[i], false); await move(page, side, corners[i], true);
      }
      await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(0); // Rings never purchase shop tokens.
      const target = new Quaternion().setFromEuler(new Euler(2.45, .35, diagonal * .4));
      let finalPoints;
      for (let step = 1; step <= 5; step++) {
        const q = new Quaternion().slerp(target, step / 5);
        finalPoints = world.map(p => p.clone().sub(midpoint).multiplyScalar(1 + .2 * step / 5).applyQuaternion(q)
          .add(midpoint).add(new Vector3(.15, .6, .1).multiplyScalar(step / 5)));
        for (const [i, side] of ['left', 'right'].entries()) await move(page, side, finalPoints[i], true, q, true);
      }
      const carried = await page.evaluate(() => InkTabletop.diagnostics().table);
      expect(Math.abs(new Quaternion().copy(carried.rotation).dot(target))).toBeGreaterThan(.9999);
      expect(carried.scale).toBeCloseTo(initial.scale * 1.2, 4);
      // Release opposite hands first for the two diagonal arrangements.
      const first = diagonal === 1 ? 0 : 1, remaining = 1 - first;
      await move(page, first ? 'right' : 'left', finalPoints[first], false, target, true);
      const single = await page.evaluate(() => InkTabletop.diagnostics().table);
      expect(Math.abs(new Quaternion().copy(single.rotation).dot(target))).toBeGreaterThan(.9999);
      expect(new Vector3().copy(single.position).distanceTo(carried.position)).toBeLessThan(.001);
      // The remaining wrist can also turn the book around its held corner.
      target.premultiply(new Quaternion().setFromEuler(new Euler(.15, -.12, .18)));
      finalPoints[remaining].add(new Vector3(.04, .08, 0));
      await move(page, remaining ? 'right' : 'left', finalPoints[remaining], true, target, true);
      const oneHand = await page.evaluate(() => InkTabletop.diagnostics().table);
      expect(Math.abs(new Quaternion().copy(oneHand.rotation).dot(target))).toBeGreaterThan(.9999);
      await move(page, remaining ? 'right' : 'left', finalPoints[remaining], false, target, true);
      const released = await page.evaluate(() => InkTabletop.diagnostics().table);
      expect(Math.abs(new Quaternion().copy(released.rotation).dot(target))).toBeGreaterThan(.9999);
      expect(new Vector3().copy(released.position).distanceTo(oneHand.position)).toBeLessThan(.001);
      // View the underside-facing page from a reclining head pose.
      await page.evaluate(() => {
        xrDevice.position.y = .85;
        xrDevice.quaternion.set(Math.sin(Math.PI / 8), 0, 0, Math.cos(Math.PI / 8));
      });
      const session = new Session({ battlefield: 'tabletop', opponent: false }); session.advance(60 * 300);
      await page.evaluate(cp => InkTabletop.restore(cp), session.checkpoint());
      await move(page, 'right', hourglass, false); await move(page, 'right', hourglass, true);
      await move(page, 'right', { ...center, y: .06 }, false);
      await expect.poll(() => page.evaluate(() => InkTabletop.observe().paused)).toBe(false);
      await move(page, 'right', troop, false); await move(page, 'right', troop, true);
      await move(page, 'right', { ...rally, y: .226 }, true); await move(page, 'right', { ...rally, y: .226 }, false);
      await expect.poll(() => page.evaluate(() => InkTabletop.observe().metrics.spawned[1])).toBe(1);
      const potion = { x: -1.04, y: .07, z: 1.16 }, above = { x: 0, y: .7, z: 0 };
      await move(page, 'right', potion, false); await move(page, 'right', potion, true);
      await move(page, 'right', above, true); await page.waitForTimeout(200); await move(page, 'right', above, false);
      await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.upgrades.dmg)).toBe(1);
      const dock = dockPosition(0), mount = { ...dock, y: dock.y + .06 };
      await move(page, 'right', cannon, false); await move(page, 'right', cannon, true);
      await move(page, 'right', mount, true); await move(page, 'right', mount, false);
      await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets[0])).toBe(0);
      expect(await page.evaluate(() => InkTabletop.diagnostics().table)).toEqual(released);
      await page.evaluate(() => xrDevice.activeSession.end());
      await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().table.rotation)).toEqual({ x: 0, y: 0, z: 0, w: 1 });
    });
  }
  test(`emulated ${device} nudges a living troop across the battlefield`,async({page,browserName})=>{
    test.skip(browserName!=='chromium','IWER uses Chromium WebGL.');
    await emulated(page);
    if(device==='hand') await page.evaluate(()=>{xrDevice.primaryInputMode='hand';});
    const move=device==='hand'?hand:controller;
    await move(page,'right',center,false);await move(page,'right',center,true);await move(page,'right',center,false);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().placing)).toBe(false);
    await page.evaluate(cp=>InkTabletop.restore(cp),tacticalCheckpoint());
    await move(page,'right',hourglass,false);await move(page,'right',hourglass,true);await move(page,'right',{...center,y:.05},false);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().paused)).toBe(false);
    await move(page,'right',await soldierPoint(page),false);
    await move(page,'right',await soldierPoint(page),true);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.diagnostics().holds)).toBe(1);
    await move(page,'right',{x:-.6,y:.22,z:.45},true);await move(page,'right',{x:-.6,y:.22,z:.45},false);
    await expect.poll(()=>page.evaluate(()=>InkTabletop.observe().units[0].guide!==null)).toBe(true);
    const u=await page.evaluate(()=>InkTabletop.observe().units[0]);
    expect(u.guide.z).toBeGreaterThan(-50);expect(u.z).toBeLessThan(-50);
    expect(await page.evaluate(()=>InkTabletop.replay().entries.at(-1).command.type)).toBe('guide');
    await page.evaluate(()=>xrDevice.activeSession.end());
  });
  test(`emulated ${device} erases the chosen older cannon instead of the last one`, async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'IWER uses Chromium WebGL.');
    await emulated(page);
    if (device === 'hand') await page.evaluate(() => { xrDevice.primaryInputMode = 'hand'; });
    const move = device === 'hand' ? hand : controller;
    await move(page, 'right', center, false);
    await move(page, 'right', center, true);
    await move(page, 'right', center, false);
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().placing)).toBe(false);
    await page.evaluate((cp) => InkTabletop.restore(cp), defenseCheckpoint(4, [0, 2, 1, 0]));
    await move(page, 'right', hourglass, false);
    await move(page, 'right', hourglass, true);
    await move(page, 'right', { ...center, y: 0.05 }, false);
    await expect.poll(() => page.evaluate(() => InkTabletop.observe().paused)).toBe(false);
    await move(page, 'right', eraser, false);
    await move(page, 'right', eraser, true);
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(1);
    const pad = dockPosition(0), grip = { ...pad, y: pad.y + 0.06 };
    await move(page, 'right', grip, true);
    await expect.poll(() => page.evaluate(() => InkTabletop.diagnostics().highlightedDocks)).toEqual([0]);
    await move(page, 'right', grip, false);
    await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets)).toEqual([null, 2, 1, 0]);
    expect(await page.evaluate(() => InkTabletop.replay().entries.at(-1).command)).toEqual({ type: 'sell', slot: 0 });
    await page.evaluate(() => xrDevice.activeSession.end());
  });
}
test('emulated hands pinch to buy, carry and scale; reconnecting a closed hand cannot buy', async ({
  page,
  browserName
}) => {
  test.skip(
    browserName !== 'chromium',
    'IWER hand joint simulation uses the Chromium render target.'
  );
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await emulated(page);
  await page.evaluate(() => {
    xrDevice.primaryInputMode = 'hand';
  });
  await hand(page, 'right', center, false);
  await hand(page, 'right', center, true);
  await hand(page, 'right', center, false);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().placing))
    .toBe(false);
  await hand(page, 'right', seal, false);
  await hand(page, 'right', seal, true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().holds))
    .toBe(1);
  await hand(page, 'right', { ...center, y: 0.04 }, true);
  await hand(page, 'right', { ...center, y: 0.04 }, false);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.observe()?.running))
    .toBe(true);
  await page.waitForTimeout(300);
  await hand(page, 'right', troop, false);
  await hand(page, 'right', troop, true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().holds))
    .toBe(1);
  await page.evaluate(() => {
    xrDevice.hands.right.connected = false;
  });
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().holds))
    .toBe(0);
  await page.evaluate(() => {
    xrDevice.hands.right.connected = true;
  });
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => InkTabletop.diagnostics().holds)).toBe(0);
  await hand(page, 'right', troop, false);
  await hand(page, 'right', troop, true);
  await hand(page, 'right', { ...rally, y: 0.24 }, true);
  await hand(page, 'right', { ...rally, y: 0.24 }, false);
  await expect
    .poll(() =>
      page.evaluate(
        () => InkTabletop.observe().units.filter((u) => u.team === 1).length
      )
    )
    .toBe(1);
  await hand(page, 'right', cannon, false);
  await hand(page, 'right', cannon, true);
  const dock = dockPosition(0);
  await hand(page, 'right', { ...dock, y: dock.y + 0.06 }, true);
  await hand(page, 'right', { ...dock, y: dock.y + 0.06 }, false);
  await expect.poll(() => page.evaluate(() => InkTabletop.observe().player.turrets[0])).toBe(0);

  // Two real XR input sources manipulate the same presentation transform.
  const left = { x: -1.28, y: 0.035, z: 1.34 },
    right = { x: 1.28, y: 0.035, z: 1.34 };
  await hand(page, 'left', left, false);
  await hand(page, 'right', right, false);
  await hand(page, 'left', left, true);
  await hand(page, 'right', right, true);
  const scale = await page.evaluate(
    () => InkTabletop.diagnostics().table.scale
  );
  await hand(page, 'right', { ...right, x: 1.7 }, true);
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().table.scale))
    .toBeGreaterThan(scale);
  await page.evaluate(() => xrDevice.activeSession.end());
  expect(errors).toEqual([]);
});

test('all ages render full 160-unit armies with bounded geometry and draw calls', async ({
  page,
  browserName
}, info) => {
  test.skip(
    browserName !== 'chromium',
    'WebGL capacity checks run on Chromium.'
  );
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const fixture = await build({
    entryPoints: ['tests/fixtures/mr-stress.js'],
    bundle: true,
    format: 'iife',
    write: false
  });
  await page.route('**/mr-stress.html', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: '<link rel="stylesheet" href="/src/mr/tabletop.css"><canvas style="width:100vw;height:100vh"></canvas>'
    })
  );
  await page.goto('/mr-stress.html');
  await page.addScriptTag({ content: fixture.outputFiles[0].text });
  const results = await page.evaluate(() => measureMRStress());
  for (const result of results) {
    expect(result.overflow).toBe(0);
    expect(result.calls).toBeLessThan(85);
    expect(result.triangles).toBeLessThan(250000);
    expect(result.textures).toBeLessThan(30);
  }
  await info.attach('full-army-render-budget.json', {
    body: JSON.stringify(results, null, 2),
    contentType: 'application/json'
  });
  await page.screenshot({ path: info.outputPath('160-unit-cosmic.png') });
  expect(errors).toEqual([]);
});
