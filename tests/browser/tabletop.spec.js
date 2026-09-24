import { test, expect } from '@playwright/test';
import { build } from 'esbuild';
import { Session } from '../../src/sdk/session.js';
import { AGES } from '../../src/content/ages.js';
import { dockPosition } from '../../src/mr/defense-layout.js';
/* global InkTabletop, xrDevice, handConfig, controllerConfig, measureMRStress */

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
        "import {XRDevice,metaQuest3} from 'iwer'; import {oculusHandConfig} from 'iwer/lib/device/XRHandInput.js'; window.handConfig=oculusHandConfig; window.controllerConfig=metaQuest3.controllerConfig; window.xrDevice=new XRDevice(metaQuest3,{stereoEnabled:false}); xrDevice.installRuntime({forceInstall:true});",
      resolveDir: process.cwd()
    },
    bundle: true,
    format: 'iife',
    write: false
  });
  emulator = result.outputFiles[0].text;
});
async function emulated(page) {
  await page.addInitScript({ content: emulator });
  await ready(page);
  await page.locator('#enter-mr').click();
  await expect
    .poll(() => page.evaluate(() => InkTabletop.diagnostics().xr))
    .toBe(true);
}
async function controller(page, side, point, pressed) {
  await page.evaluate(
    ({ side, point, pressed }) => {
      const c = xrDevice.controllers[side],
        t = InkTabletop.diagnostics().table;
      if (point) {
        // IWER positions the aim ray, while the game holds pieces at the grip.
        // Align the physical grip to the requested point, including its offset.
        const offset = controllerConfig.layout[side].gripOffsetMatrix;
        const cos = Math.cos(t.yaw),
          sin = Math.sin(t.yaw);
        c.position.set(
          t.position.x + (cos * point.x + sin * point.z) * t.scale - (offset?.[12] || 0),
          t.position.y + point.y * t.scale - (offset?.[13] || 0),
          t.position.z + (-sin * point.x + cos * point.z) * t.scale - (offset?.[14] || 0)
        );
        c.quaternion.set(0, 0, 0, 1);
      }
      if (pressed !== undefined)
        c.updateButtonValue('trigger', pressed ? 1 : 0);
    },
    { side, point, pressed }
  );
  await page.waitForTimeout(90);
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

async function hand(page, side, point, pinched) {
  await page.evaluate(
    ({ side, point, pinched }) => {
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
      const cos = Math.cos(t.yaw),
        sin = Math.sin(t.yaw);
      h.quaternion.set(0, 0, 0, 1);
      h.position.set(
        t.position.x + (cos * point.x + sin * point.z) * t.scale - offset.x,
        t.position.y + point.y * t.scale - offset.y,
        t.position.z + (-sin * point.x + cos * point.z) * t.scale - offset.z
      );
      h.updatePinchValue(pinched ? 1 : 0);
    },
    { side, point, pinched }
  );
  await page.waitForTimeout(100);
}

for (const device of ['controller', 'hand']) {
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
