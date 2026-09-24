import { test, expect } from "@playwright/test";
import { build } from "esbuild";
/* global drawPencilGallery */

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
    expect(stats.calls).toBeLessThan(10);
    expect(stats.triangles).toBeGreaterThan(1000);
    await page.screenshot({ path: info.outputPath(`pencil-${kind}.png`) });
    expect(errors).toEqual([]);
  });
}
