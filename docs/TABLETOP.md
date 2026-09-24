# Ink Battle tabletop

The tabletop is an additional client of the existing deterministic game, served
from `mr.html`. The classic game remains the default entry and retains its Gemma
settings, commander pacts and native Android bridge. The tabletop uses the standard
deterministic opponent; it does not load the multi-GB Gemma model while rendering XR.

Open [the hosted tabletop](https://ronitervo.github.io/Ink-Battle/mr.html) in Quest
Browser over HTTPS. The browser's **Enter mixed reality** permission gesture is
the only flat control needed to enter. Buying and match controls inside XR are
physical objects. A desktop browser can preview the same scene without a headset.

## Playing

1. Look at a horizontal surface and pinch or press the trigger to place the book.
   A green ring indicates a detected surface. If room detection is unavailable,
   the book starts in front of you at a comfortable height and can be carried.
2. Lift a difficulty seal from the tray and drop it onto the page to begin.
3. Pinch a troop's arm/head area, or hold a controller grip near the piece. Point
   and hold the trigger for distant pieces. Drop troops in the green rally area.
   They deploy from the normal base; placement cannot bypass combat or spacing.
4. Cannons, cannon docks and the eraser go in the left base area. Potions are
   damage, health, income, evolution and specials. Toss them onto the page.
   Specials retain their normal automatic targeting. A missed throw spends nothing.
5. Lift the hourglass and drop it onto the page to pause/resume. The clock cycles
   1×/2×/3×. The feather cycles mist, clear and comfort. The music box toggles the
   original soundtrack. Pause before dropping the new-page block. The compass exits MR.
6. Hold one brass ring to carry the whole book. Hold two to turn and resize it.
   The book stays horizontal; the soldiers stay upright. Width is bounded to
   0.48–3.84 meters; initial Quest width is 1.32 meters. Both left and right hands work.

In desktop preview, drag pieces with the left mouse button, orbit with the right,
and scroll to zoom. Touch supports dragging and two-finger orbit/zoom. Recenter
preview restores the camera and book. Escape cancels held objects and pauses.
The help card collapses during play and starts collapsed in small viewports.

Putting the headset aside, opening a system panel, losing viewer tracking, leaving
XR, or hiding the page pauses the battle. Held/thrown purchases are cancelled.
Restoring tracking does not resume combat; use the hourglass. A reconnecting hand
must open before another pinch can buy. Saved battles restore paused after reload.
The tabletop checkpoint is separate from classic settings and shares earned medals
and the music preference. No account or external service is required.

## Implementation boundaries

| Module | Responsibility |
| --- | --- |
| `catalog.js` | Offers derived from the age catalog, physical positions, permitted drop zones |
| `host.js` | Consumed grab tokens, release-time legality, Session commands, fixed ticks |
| `interaction.js` | Input-independent grab lifetime, presentation throws and table gestures |
| `spatial.js` | World/table transforms, one/two-hand carry, segment-plane landing |
| `input.js` | Pointer, controller and 25-joint hand input; fresh event poses, cancellations |
| `models.js` / `ink-batch.js` | Volumetric procedural ink models and bounded instance buffers |
| `scene.js` | Three.js scene, original watercolor page, labels, mist and contact shadows |
| `app.js` | WebXR session/placement, optional anchors, saved sessions, original music adapter |

`Session` alone owns spending, deployment, combat, cooldowns, economy and victory.
Table scale, facing, placement, finger positions and render quality never reach the
engine. Throws are cosmetic until their segment intersects the table; then the
host validates the current age, balance and rules. Tokens are consumed before
execution, preventing duplicate releases. Simultaneous hands cannot bypass the
engine's deployment cooldown. Misses, lost input, rejected drops and stale offers
never debit gold. No separate MR balance rules exist.

All eighteen troop types have depth and distinct equipment. The background is
rendered by the original watercolor/sketch code into the horizontal page. Contact
shadows and bounded, low-opacity ground mist make the pieces readable; this is
rasterized rendering, not ray tracing or real-room lighting reconstruction.
The passthrough outside the book is transparent. There is no room mesh occlusion,
persistent room map, cloud anchor, real-table collision, or multi-user multiplayer.
An available hit-test/anchor improves placement; optional permission failure leaves
free placement working. Moving a ring releases the anchor. No anchor persists after
leaving XR. The geometry assumes the tabletop stays horizontal.

Three.js 0.186.0 is bundled locally (MIT license); IWER 2.5.0 is a development-only
emulator and is absent from `web/mr.js`. No CDN or runtime framework download is
needed. The generated service worker caches both game clients and local fonts.
Audio continues to stream separately. The shared Android asset task includes the
preview page and CSS; Quest immersive sessions run in Quest Browser, not the
Android WebView wrapper.

## Automated verification

```sh
npm run check
npm run test:tabletop
npx playwright test tests/browser/tabletop.spec.js --project=chromium
npm run simulate -- --release
```

The 2026-09-24 local run passed 29 unit tests. The tabletop sweep completed **192
matches**, **5,580 physical purchases**, **415 deliberately missed drops**, and
**5.62 simulated hours in 7.9 seconds**. All terminal states replayed identically.
The shared release sweep completed **2,304 matches**, **294 composition trials**
and **83.32 simulated hours**, with zero invariant failures or timeouts. Model calls
are excluded from both sweeps. These are regression checks, not a claim that every
balance choice or human strategy is optimal.

Browser checks cover real pointer drags, illegal landing areas, pause/speed,
checkpoint reload, all six ages, offline startup, emulated controller purchases,
visibility interruptions, repeated XR entry, emulated hand purchases, input removal,
closed-hand reconnection and two-hand resizing. A renderer-only capacity fixture
draws 160 units plus eight turrets for each age, checking buffer overflow, geometry,
draw calls and texture growth. Full-army geometry is gated below 250,000 triangles
and 85 draw calls per desktop view. These counts are not a Quest frame-rate result;
stereo rendering and GPU/browser differences must be measured on the device.

CI runs the same tests on future changes. New ages/types must extend the model
catalog or the content-coverage test fails. Both economic and grab/drop tests run
without a DOM. Browser screenshots and render-budget JSON accompany test reports;
full-match results are in `artifacts/tabletop/matches.json`.

## Quest 3 release-owner acceptance — pending

The user will test the hosted build. The desktop emulator does not validate
physical tracking, passthrough, room permission UX, comfort or thermal performance.
After the PR is merged and Pages finishes publishing, check:

- Enter from Quest Browser, accept/decline optional room access, place on a real
  table, and carry to a second position. Confirm the watercolor page lies flat.
- Buy all troop categories with hands and controllers; lift by the arm, throw a
  potion, deliberately miss, buy a cannon/dock and erase it. Confirm costs and hints.
- Resize small and large with both hands; release either hand first; ensure no jump,
  accidental spend, hard-to-reach tray items or unreadable prices.
- Open the Quest menu while holding a piece, remove/replace the headset, cover a
  hand, change from controllers to hands, and re-enter MR. Confirm pause and no spend.
- Play through ages and finish a match at 1×, then use 2×/3×. Check base damage,
  specials, music, victory/defeat, restart and restored progress after reload.
- Inspect mist, clear and comfort in both bright and dim rooms. Target stable 72 Hz
  at the initial size; check busy late-age battles and a longer thermal session.
  If unstable, use comfort and report the age, quality, army size and browser version.

After leaving MR, open **Headset test report → Save test report** in the preview
card. This downloads local JSON with the last XR session's frame intervals, peak
army/draw counts and browser version. It sends nothing to a server. Timing uses
recent frame intervals, excludes interruptions above 500 ms, and is not a GPU timer.

Pending items must not be described as hardware-tested or release-approved.

Primary platform references: [Meta WebXR mixed reality](https://developers.meta.com/horizon/documentation/web/webxr-mixed-reality/),
[hand input](https://developers.meta.com/horizon/documentation/web/webxr-hands/),
[performance](https://developers.meta.com/horizon/documentation/web/webxr-perf-bp/),
[Three.js WebXRManager](https://threejs.org/docs/pages/WebXRManager.html),
[IWER](https://meta-quest.github.io/immersive-web-emulation-runtime/).
