import { test, expect } from "@playwright/test";
import { build } from "esbuild";
/* global drawPencilGallery, readableBook */

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
