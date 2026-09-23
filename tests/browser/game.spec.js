import { test, expect } from '@playwright/test';
import { Session } from '../../src/sdk/session.js';
import { AGES } from '../../src/content/ages.js';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
/* global InkBattle, buyUnit, toggleDirectorPanel */

async function ready(page) {
  await page.goto('/ink-battle.html');
  await expect(page.locator('#preloader')).toBeHidden();
  await page.evaluate(() => document.fonts.ready);
}
test('menu, real clock, troop controls, pause, tabs, pacts and persisted medals', async ({ page }) => {
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await ready(page);
  await page.locator('#diff-btn-normal').click();
  await page.locator('#btn-u1').click();
  await expect.poll(() => page.evaluate(() => InkBattle.observe().tick)).toBeGreaterThan(15);
  await page.locator('#btn-pause').click();
  const before = await page.evaluate(() => InkBattle.observe());
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => InkBattle.observe().tick)).toBe(before.tick);
  await page.evaluate(() => buyUnit(1));
  expect(await page.evaluate(() => InkBattle.observe().player.gold)).toBe(before.player.gold);
  await page.locator('#pause-overlay').getByRole('button', { name: 'Resume' }).click();
  await page.locator('#tab-turrets').click();
  await expect(page.locator('#name-t1')).toHaveText('Rock Thrower');
  await page.locator('#btn-t1').click();
  await page.locator('#btn-sell').click();
  await page.locator('#tab-upgrades').click();
  await expect(page.locator('#btn-up-dmg')).toBeVisible();
  await page.evaluate(() => toggleDirectorPanel());
  await page.locator('#director-input').fill('no ranged, no specials, no turrets, truce for 30 seconds');
  await page.locator('#director-input').press('Enter');
  expect(await page.evaluate(() => InkBattle.observe().agreements)).toEqual({ meleeOnly: true, noSpecials: true, noTurrets: true });
  await page.evaluate(() => localStorage.setItem('aow_sketch_progress', JSON.stringify({ beaten: ['hard'] })));
  await page.reload(); await expect(page.locator('#preloader')).toBeHidden();
  await expect(page.locator('#diff-btn-hard')).toHaveClass(/beaten/);
  expect(errors).toEqual([]);
});

test('brief frame stalls catch up and long interruptions pause until resumed', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
  await ready(page);
  await page.clock.pauseAt(new Date('2026-01-01T01:00:00Z'));
  await page.locator('#diff-btn-normal').click();

  // Deliver one delayed animation frame, as on a busy device during startup.
  await page.clock.fastForward(1000);
  const caughtUp = await page.evaluate(() => InkBattle.observe());
  expect(caughtUp.paused).toBe(false);
  expect(caughtUp.tick).toBeGreaterThanOrEqual(59);
  expect(caughtUp.tick).toBeLessThanOrEqual(60);
  await expect(page.locator('#pause-overlay')).toBeHidden();
  await page.locator('#btn-u1').click();
  expect(await page.evaluate(() => InkBattle.observe().units.some(u => u.team === 1))).toBe(true);

  // A long interruption must not advance an unattended battle or lose the pause.
  await page.clock.fastForward(6000);
  const paused = await page.evaluate(() => InkBattle.observe());
  expect(paused.paused).toBe(true);
  expect(paused.tick).toBe(caughtUp.tick);
  await expect(page.locator('#pause-overlay')).toBeVisible();
  await page.clock.runFor(1000);
  expect(await page.evaluate(() => InkBattle.observe().tick)).toBe(paused.tick);

  await page.locator('#pause-overlay').getByRole('button', { name: 'Resume' }).click();
  await page.clock.runFor(1000);
  const resumed = await page.evaluate(() => InkBattle.observe());
  expect(resumed.paused).toBe(false);
  expect(resumed.tick - paused.tick).toBeGreaterThanOrEqual(59);
  expect(resumed.tick - paused.tick).toBeLessThanOrEqual(61);
  await expect(page.locator('#pause-overlay')).toBeHidden();
});

for (let age = 0; age < AGES.length; age++) {
  test(`original renderer and controls work in ${AGES[age].name}`, async ({ page }, info) => {
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await ready(page);
    await page.evaluate(age => InkBattle.start('normal', { manual: true, startAge: age, seed: 9, opponent: false }), age);
    await expect(page.locator('#start-screen')).toHaveCSS('opacity', '0');
    await page.locator('#btn-u3').click();
    await page.evaluate(() => InkBattle.advance(200));
    await page.locator('#btn-u2').click();
    await page.evaluate(() => InkBattle.advance(200));
    await page.locator('#btn-special').click();
    await page.evaluate(() => { InkBattle.advance(90); InkBattle.render(); });
    await expect(page.locator('#age-title')).toHaveText(AGES[age].name);
    await page.screenshot({ path: info.outputPath(`age-${age}.png`) });
    expect(await page.evaluate(() => InkBattle.observe().units.length)).toBeGreaterThan(0);
    expect(errors).toEqual([]);
  });
}

test('browser and Node verify the same full match replay', async ({ page }) => {
  const session = new Session({ seed: 711, difficulty: 'normal' });
  while (session.running && session.tick < 72000) {
    const c = session.decide(1, 'mixed'); if (c) session.command(1, c);
    session.advance(30, { events: false });
  }
  expect(session.running).toBe(false);
  await ready(page);
  expect(await page.evaluate(replay => InkBattle.Session.fromReplay(replay).digest(), session.replay())).toBe(session.digest());
});

test('browser plays through to the result screen on the manual clock', async ({ page }) => {
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await ready(page);
  await page.evaluate(() => InkBattle.start('normal', { manual: true, seed: 23 }));
  // An independent script supplies player decisions while the UI runs the shared engine.
  const winner = await page.evaluate(() => {
    const policy = new InkBattle.Session({ seed: 23 });
    for (let i = 0; i < 2400 && InkBattle.observe().running; i++) {
      const c = policy.decide(1, 'mixed');
      if (c) { InkBattle.command(c); policy.command(1, c); }
      InkBattle.advance(30); policy.advance(30, { events: false });
    }
    InkBattle.render(); return InkBattle.observe().winner;
  });
  expect(winner).not.toBeNull(); await expect(page.locator('#game-over-screen')).toBeVisible();
  expect(errors).toEqual([]);
});

test('narrow landscape keeps the known controls on the page', async ({ page }) => {
  await page.setViewportSize({ width: 844, height: 390 }); await ready(page);
  await page.locator('#diff-btn-normal').click();
  for (const id of ['#btn-u1', '#btn-u2', '#btn-u3', '#btn-special', '#btn-pause']) {
    const box = await page.locator(id).boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0); expect(box.x + box.width).toBeLessThanOrEqual(845);
  }
});

test('static file entry loads like the Android packaged app', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Android WebView uses Chromium');
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await page.goto(pathToFileURL(resolve('ink-battle.html')).href);
  await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#diff-btn-normal').click(); await page.locator('#btn-u1').click();
  expect(await page.evaluate(() => InkBattle.observe().units.length)).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test('installed shell and fonts start a match offline', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'Service worker installation gate runs in Chromium');
  await ready(page);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  await context.setOffline(true);
  await page.reload(); await expect(page.locator('#preloader')).toBeHidden();
  await page.locator('#diff-btn-normal').click(); await page.locator('#btn-u1').click();
  expect(await page.evaluate(() => document.fonts.check('16px Caveat'))).toBe(true);
  expect(await page.evaluate(() => InkBattle.observe().units.length)).toBeGreaterThan(0);
});
