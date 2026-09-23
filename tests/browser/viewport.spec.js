import { test, expect } from '@playwright/test';
import { AGES } from '../../src/content/ages.js';
/* global InkBattle */

async function ready(page) {
  await page.goto('/ink-battle.html');
  // Procedural watercolor generation is slower in WebKit's software renderer.
  await expect(page.locator('#preloader')).toBeHidden({ timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
}

async function contained(page, selector, parent = '#aspect-wrapper') {
  const outer = await page.locator(parent).boundingBox();
  for (const element of await page.locator(selector).all()) {
    if (!await element.isVisible()) continue;
    const box = await element.boundingBox();
    expect(box.x, selector).toBeGreaterThanOrEqual(outer.x - 1);
    expect(box.y, selector).toBeGreaterThanOrEqual(outer.y - 1);
    expect(box.x + box.width, selector).toBeLessThanOrEqual(outer.x + outer.width + 1);
    expect(box.y + box.height, selector).toBeLessThanOrEqual(outer.y + outer.height + 1);
  }
}

async function fits(page, { width, height, x = 0, y = 0 }) {
  await expect.poll(async () => {
    const box = await page.locator('#aspect-wrapper').boundingBox();
    return box.x >= x - 1 && box.y >= y - 1 && box.x + box.width <= x + width + 1 &&
      box.y + box.height <= y + height + 1 && Math.abs(box.width / box.height - 16 / 9) < .01 &&
      // Fill one available axis; merely hiding or shrinking to nothing cannot pass.
      (Math.abs(box.width - width) < 1 || Math.abs(box.height - height) < 1);
  }).toBe(true);
  expect(await page.evaluate(() => ({
    x: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    y: document.documentElement.scrollHeight - document.documentElement.clientHeight
  }))).toEqual({ x: 0, y: 0 });
}

test('menus and controls fit short, portrait and wide viewports through live resizing', async ({ page }, info) => {
  test.setTimeout(90000); // Many real interactions across six consecutive resizes.
  await ready(page);
  const sizes = [{ width: 844, height: 240 }, { width: 667, height: 200 },
    { width: 320, height: 180 }, { width: 360, height: 640 },
    { width: 1920, height: 400 }, { width: 1280, height: 720 }];
  for (const size of sizes) {
    await page.setViewportSize(size);
    await fits(page, size);
    await contained(page, '#start-screen .overlay-content');
    await contained(page, '#start-screen button, #start-screen a', '#start-screen .overlay-content');
  }
  await page.evaluate(() => InkBattle.start('impossible', { manual: true, opponent: false }));
  await expect(page.locator('#start-screen')).toHaveCSS('opacity', '0');
  const before = await page.evaluate(() => InkBattle.digest());
  for (const size of sizes) {
    await page.setViewportSize(size);
    await fits(page, size);
    for (const tab of ['units', 'turrets', 'upgrades']) {
      await page.locator(`#tab-${tab}`).click();
      await page.mouse.move(0, 0);
      await contained(page, '#top-bar button, #diff-badge, .stat-line, #age-title', '#top-bar');
      // Catch text wrapping outside controls even if the button itself fits.
      expect(await page.locator('#top-bar button:visible').evaluateAll(buttons => buttons
        .filter(b => b.scrollHeight > b.clientHeight + 1 || b.scrollWidth > b.clientWidth + 1)
        .map(b => b.id))).toEqual([]);
    }
    await page.locator('#btn-pause').click();
    await contained(page, '#pause-overlay .overlay-content');
    await contained(page, '#pause-overlay button, #pause-overlay a', '#pause-overlay .overlay-content');
    await page.locator('#pause-overlay [data-game-speed]').click();
    await page.locator('#pause-overlay').getByRole('button', { name: 'Resume' }).click();
  }
  expect(await page.evaluate(() => InkBattle.digest())).toBe(before);
  await page.setViewportSize(sizes[0]);
  await page.locator('#tab-units').click();
  await page.locator('#btn-u1').click();
  expect(await page.evaluate(() => InkBattle.observe().units.some(u => u.team === 1))).toBe(true);
  await page.evaluate(() => InkBattle.advance(300));
  await page.mouse.move(0, 0);
  await page.screenshot({ path: info.outputPath('short-viewport.png') });
});

for (let age = 0; age < AGES.length; age++) {
  test(`short viewport contains every control label in ${AGES[age].name}`, async ({ page }) => {
    await page.setViewportSize({ width: 812, height: 220 });
    await ready(page);
    await page.evaluate(age => InkBattle.start('normal', { startAge: age, manual: true }), age);
    for (const tab of ['units', 'turrets', 'upgrades']) {
      await page.locator(`#tab-${tab}`).click();
      await page.mouse.move(0, 0);
      await contained(page, '#top-bar button, #age-title', '#top-bar');
      expect(await page.locator('#build-menu button:visible').evaluateAll(buttons => buttons
        .filter(b => b.scrollHeight > b.clientHeight + 1 || b.scrollWidth > b.clientWidth + 1)
        .map(b => b.id))).toEqual([]);
    }
    await page.locator('#tab-units').click();
    await page.locator('#btn-u1').hover();
    await expect(page.locator('#tooltip')).toHaveClass(/visible/);
    await contained(page, '#tooltip');
  });
}

test('visual viewport, keyboard offsets and safe areas keep taps and settings reachable', async ({ page }, info) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'visualViewport', { configurable: true, value: Object.assign(new EventTarget(), {
      width: 844, height: 240, offsetLeft: 0, offsetTop: 0
    }) });
  });
  await ready(page);
  await page.evaluate(() => {
    for (const [side, value] of Object.entries({ top: 8, right: 12, bottom: 20, left: 40 })) {
      document.documentElement.style.setProperty(`--safe-${side}`, `${value}px`);
    }
  });
  await fits(page, { x: 40, y: 8, width: 792, height: 212 });
  await page.locator('#start-screen [data-web-gemma-open]').click();
  // The long settings dialog scrolls independently, including with touch input.
  await contained(page, '#web-gemma-dialog', '#viewport');
  await expect(page.locator('#web-gemma-dialog')).toHaveCSS('touch-action', 'pan-y');
  await page.getByRole('button', { name: 'Back to game' }).click();
  await page.evaluate(() => InkBattle.start('normal', { manual: true }));
  await page.locator('#director-input').fill('no turrets');
  await page.evaluate(() => {
    Object.assign(window.visualViewport, { width: 700, height: 150, offsetLeft: 30, offsetTop: 110 });
    window.visualViewport.dispatchEvent(new Event('resize'));
    window.visualViewport.dispatchEvent(new Event('scroll'));
  });
  await fits(page, { x: 70, y: 118, width: 648, height: 122 });
  await contained(page, '#director-input, .director-send');
  await page.locator('.director-send').click();
  expect(await page.evaluate(() => InkBattle.observe().agreements.noTurrets)).toBe(true);
  await page.locator('#btn-pause').click();
  await page.locator('#pause-overlay [data-web-gemma-open]').click();
  await contained(page, '#web-gemma-dialog', '#viewport');
  await page.getByRole('button', { name: 'Back to game' }).click();
  await page.locator('#pause-overlay').getByRole('button', { name: 'Resume' }).click();
  await page.evaluate(() => {
    Object.assign(window.visualViewport, { width: 844, height: 240, offsetLeft: 0, offsetTop: 0 });
    window.visualViewport.dispatchEvent(new Event('resize'));
  });
  await fits(page, { x: 40, y: 8, width: 792, height: 212 });
  await page.screenshot({ path: info.outputPath('safe-area-restored.png') });
});

test('window resize fallback works without the visual viewport API', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'visualViewport', { value: undefined }));
  await ready(page);
  for (const size of [{ width: 720, height: 200 }, { width: 360, height: 500 }]) {
    await page.setViewportSize(size);
    await fits(page, size);
    await contained(page, '#start-screen .overlay-content');
  }
  await page.locator('#diff-btn-normal').click();
  await page.locator('#btn-u1').click();
  expect(await page.evaluate(() => InkBattle.observe().units.some(u => u.team === 1))).toBe(true);
});

test.describe('touch controls', () => {
  test.use({ hasTouch: true });
  test('scaled controls receive taps in a short in-app browser viewport', async ({ page }) => {
    await page.setViewportSize({ width: 844, height: 240 });
    await ready(page);
    await page.locator('#diff-btn-normal').tap();
    await page.locator('#btn-u1').tap();
    expect(await page.evaluate(() => InkBattle.observe().units.some(u => u.team === 1))).toBe(true);
    await page.locator('#btn-speed').tap();
    await expect(page.locator('#btn-speed')).toHaveText('2×');
    await page.locator('#btn-pause').tap();
    expect(await page.evaluate(() => InkBattle.observe().paused)).toBe(true);
    await page.locator('#pause-overlay').getByRole('button', { name: 'Resume' }).tap();
    expect(await page.evaluate(() => InkBattle.observe().paused)).toBe(false);
  });
});
