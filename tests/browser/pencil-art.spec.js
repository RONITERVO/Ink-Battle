import { test, expect } from "@playwright/test";
import { build } from "esbuild";
/* global drawPencilGallery, poseCombatGallery, readableBook, checkCombatClock */

test("live combat rendering freezes on pause and follows engine time at 3x and in comfort mode", async ({
  page,
  browserName,
}) => {
  test.skip(
    browserName !== "chromium",
    "Spatial motion is verified with Chromium WebGL.",
  );
  const fixture = await build({
    entryPoints: ["tests/fixtures/mr-combat.js"],
    bundle: true,
    format: "iife",
    write: false,
  });
  await page.route("**/combat-clock.html", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: '<link rel="stylesheet" href="/src/mr/tabletop.css"><canvas style="width:100vw;height:100vh"></canvas>',
    }),
  );
  await page.goto("/combat-clock.html");
  await page.addScriptTag({ content: fixture.outputFiles[0].text });
  const result = await page.evaluate(() => checkCombatClock());
  for (const field of [
    "attacking",
    "frozen",
    "restored",
    "advanced",
    "clockMatches",
    "comfortMoves",
  ])
    expect(result[field], field).toBe(true);
  expect(result.overflow).toBe(0);
});

test("all combat artwork can be scrubbed, frozen and restored without visual drift", async ({
  page,
  browserName,
}, info) => {
  test.skip(
    browserName !== "chromium",
    "Spatial motion is verified with Chromium WebGL.",
  );
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1150 });
  const fixture = await build({
    entryPoints: ["tests/fixtures/pencil-gallery.js"],
    bundle: true,
    format: "iife",
    write: false,
  });
  await page.route("**/combat-gallery.html", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: '<link rel="stylesheet" href="/src/mr/tabletop.css"><canvas style="width:1440px;height:1150px"></canvas>',
    }),
  );
  await page.goto("/combat-gallery.html");
  await page.addScriptTag({ content: fixture.outputFiles[0].text });
  const stats = await page.evaluate(() => drawPencilGallery("armies", true));
  await page.evaluate(() => document.fonts.ready);
  expect(stats.overflow).toBe(0);
  expect(stats.calls).toBeLessThanOrEqual(11);
  const shot = await page
    .locator("canvas")
    .screenshot({ path: info.outputPath("combat-release.png") });
  await page.evaluate(() => poseCombatGallery(0.2));
  const recovery = await page
    .locator("canvas")
    .screenshot({ path: info.outputPath("combat-recovery.png") });
  expect(recovery.equals(shot)).toBe(false);
  await page.evaluate(() => poseCombatGallery(0.6));
  await page.screenshot({ path: info.outputPath("combat-ready.png") });
  await page.evaluate(() => poseCombatGallery(0));
  expect((await page.locator("canvas").screenshot()).equals(shot)).toBe(true);
  expect(errors).toEqual([]);
});

for (const kind of ["armies", "objects"]) {
  test(`pencil art sheet: ${kind}`, async ({ page, browserName }, info) => {
    test.skip(
      browserName !== "chromium",
      "Spatial art is verified in the Chromium WebGL suite.",
    );
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width: 1440, height: 1150 });
    const fixture = await build({
      entryPoints: ["tests/fixtures/pencil-gallery.js"],
      bundle: true,
      format: "iife",
      write: false,
    });
    await page.route("**/pencil-gallery.html", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: '<link rel="stylesheet" href="/src/mr/tabletop.css"><canvas style="width:1440px;height:1150px"></canvas>',
      }),
    );
    await page.goto("/pencil-gallery.html");
    await page.addScriptTag({ content: fixture.outputFiles[0].text });
    const stats = await page.evaluate((kind) => drawPencilGallery(kind), kind);
    await page.evaluate(() => document.fonts.ready);
    expect(stats.overflow).toBe(0);
    // Six contour shapes plus five instanced paint shapes; independent of the
    // number of items. The complete gameplay scene retains its <85 call gate.
    expect(stats.calls).toBeLessThanOrEqual(11);
    expect(stats.triangles).toBeGreaterThan(1000);
    await page.screenshot({ path: info.outputPath(`pencil-${kind}.png`) });
    expect(errors).toEqual([]);
  });
}

for (const age of [0, 5]) {
  test(`painted book stays opaque over busy passthrough: age ${age}`, async ({
    page,
    browserName,
  }, info) => {
    test.skip(
      browserName !== "chromium",
      "Passthrough compositing uses the Chromium WebGL suite.",
    );
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width: 1440, height: 1000 });
    const fixture = await build({
      entryPoints: ["tests/fixtures/mr-readability.js"],
      bundle: true,
      format: "iife",
      write: false,
    });
    await page.route("**/mr-readability.html", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: `
      <link rel="stylesheet" href="/src/mr/tabletop.css">
      <style>body { background: repeating-linear-gradient(83deg,transparent 0 160px,#161e22 162px 168px,transparent 170px 250px),
        repeating-linear-gradient(-25deg,#aaa198 0 115px,#423d39 117px 200px,#716c63 202px 270px); }
      canvas { width:100vw;height:100vh; }</style><canvas></canvas>`,
      }),
    );
    await page.goto("/mr-readability.html");
    await page.addScriptTag({ content: fixture.outputFiles[0].text });
    const stats = await page.evaluate((age) => readableBook(age), age);
    expect(stats.pageAlpha).toEqual([255, 255, 255, 255, 255]);
    expect(stats.statusAlpha).toBe(255);
    expect(stats.outsideAlpha).toBe(0);
    expect(stats.paperOpaque).toBe(true);
    expect(stats.overflow).toBe(0);
    expect(stats.calls).toBeLessThan(85);
    await page.screenshot({
      path: info.outputPath(`painted-passthrough-${age}.png`),
    });
    expect(errors).toEqual([]);
  });
}
