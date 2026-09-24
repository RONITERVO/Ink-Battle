# Ink Battle tabletop

The tabletop is the default game at `index.html` from version 2.4.0, including
the PWA and Android app. Old `mr.html` and `ink-battle.html` launch links redirect
to it. Classic 2D is retained at `classic.html` as an explicit archive, with its Gemma
settings, commander pacts and native Android bridge. The tabletop uses the standard
deterministic opponent; it does not load the multi-GB Gemma model while rendering XR.
From 2.3.0 new tabletop matches use a separately versioned wide battlefield with
aiming defenses, destructible cannons and troop guidance. Classic 2D and existing
classic/MR replays keep their original rules. See [tactics](TACTICAL_BATTLEFIELD.md).

Open [the hosted tabletop](https://ronitervo.github.io/Ink-Battle/mr.html) in Quest
Browser over HTTPS. The browser's **Enter mixed reality** permission gesture is
the only flat control needed to enter. Buying and match controls inside XR are
physical objects. Phones and desktop browsers play the same scene without a headset.

## Playing

1. Look at a horizontal surface and pinch or press the trigger to place the book.
   A green ring indicates a detected surface. If room detection is unavailable,
   the book starts in front of you at a comfortable height and can be carried.
2. Lift a difficulty seal from the tray and drop it onto the page to begin.
3. Pinch a troop's arm/head area, or hold a controller grip near the piece. Point
   and hold the trigger for distant pieces. Drop troops in the green rally area.
   They deploy from the normal base; placement chooses their route across the
   width and cannot bypass combat or spacing. Pinch a deployed soldier and move
   sideways to suggest a route. Release near an enemy cannon or base to suggest
   that objective. The soldier walks there, but nearby fighting takes priority.
4. Cannons sit on raised foundations beside your left base: two on each flank,
   four maximum. One dock is included at the start. Lift a cannon to highlight
   its next empty built dock; place it on that platform. Lift a cannon dock to
   highlight the next dashed outline; build there before mounting another cannon.
   Move the eraser over any of your cannons to highlight its dock. Release there
   to sell that cannon for 50% of its price; its dock stays for a replacement.
   Dropping inside the base, on a locked outline or on the wrong dock spends nothing.
   Evolution clears/refunds cannons and keeps all purchased docks.
   Cannons turn toward their targets. Both armies can destroy cannons; the paid
   foundations remain available for rebuilding. Potions are
   damage, health, income, evolution and specials. Toss them onto the page.
   Specials retain their normal automatic targeting. A missed throw spends nothing.
5. Lift the hourglass and drop it onto the page to pause/resume. The clock cycles
   1×/2×/3×. The feather cycles mist, clear and comfort. The music box toggles the
   original soundtrack. Pause before dropping the new-page block. The compass exits MR.
6. Hold one drawn ring to carry the whole book. Hold two to turn and resize it.
   The book stays horizontal; the soldiers stay upright. Width is bounded to
   0.48–3.84 meters; initial Quest width is 1.32 meters. Both left and right hands work.

On desktop, drag pieces with the left mouse button, orbit with the right, pan with
the middle button and scroll to zoom toward the pointer. On phones, one finger
drags the same pieces; two fingers pan and pinch to zoom, like a map. Adding a second
finger cancels a pending grab without buying or deploying it. There are no added
on-screen purchase or navigation buttons. Recenter restores the camera and book,
fitting the whole book into the current viewport. Escape cancels holds and pauses.
The help card collapses during play and is a small heading on narrow/short screens;
opening it exposes the original help, MR, recenter and archive controls.

Android launches the same book from packaged local files and follows the device's
orientation preference. Back first pauses a running match; leaving the app cancels
held pieces and saves a paused checkpoint. An updated app package is needed for
installed Android apps; a Pages deployment updates the browser/PWA version.

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
| `defense-layout.js` / `dock-model.js` | Shared four-slot layout, raised landings, target selection and painted foundations |
| `host.js` | Consumed grab tokens, release-time legality, Session commands, fixed ticks |
| `interaction.js` | Input-independent grab lifetime, presentation throws and table gestures |
| `spatial.js` | World/table transforms, one/two-hand carry, segment-plane landing |
| `input.js` | Pointer, controller and 25-joint hand input; fresh event poses, cancellations |
| `models.js` / `ink-batch.js` | Distinct spatial drawings and bounded pencil instance buffers |
| `pencil-geometry.js` / `pencil-palette.js` / `glyphs.js` | Pressure-tapered strokes, colored-pencil swatches, item symbols |
| `sketchbook.js` | Open book, six chapter landscapes and pencil mist |
| `watercolor.js` / `book-paper.js` | Classic age palette, shared pigment, opaque painted pages and cover |
| `scene.js` | Three.js scene, spatial sketchbook, labels, pencil mist and hatched contact shadows |
| `app.js` | WebXR session/placement, optional anchors, saved sessions, original music adapter |

`Session` alone owns spending, deployment, combat, cooldowns, economy and victory.
Table scale, facing, placement, finger positions and render quality never reach the
engine. Throws are cosmetic until their segment intersects the page or raised dock; then the
host validates the current age, balance and rules. Tokens are consumed before
execution, preventing duplicate releases. Simultaneous hands cannot bypass the
engine's deployment cooldown. Misses, lost input, rejected drops and stale offers
never debit gold. New matches opt into the versioned tabletop combat profile;
the shared content catalog, economy, fixed clock and Session contract remain.
Only logical route/target commands enter the engine, never tracking coordinates.

All eighteen troop types have depth and distinct equipment. Version 2.2.2 adds
opaque watercolor beneath the spatial pencil contours following real Quest
readability feedback. The open book has painted paper, page stacks, a sewn spine,
a cover and a ribbon; each age has its own classic palette wash and drawn landscape.
Pieces have grainy painted surfaces, teal/rust team accents and graphite hatching.
A paper tab backs the floating score. The room cannot show through the page,
pieces or score, but remains visible around them. See [the pencil art guide](PENCIL_ART.md)
for the reusable art system and complete catalog. Classic 2D retains its artwork.
Version 2.2.3 adds distinct attack actions to all 36 troops and defenses: swings,
throws, recoil, tilting launchers and charging energy weapons. The motions follow
real engine cooldowns, pause with the battle and respect 1×/2×/3× speed. Comfort
mode retains essential combat motion. See [combat animation](COMBAT_ANIMATION.md)
for the motion study, reusable rig and expansion checks.
This is rasterized geometry, not ray tracing or room-light reconstruction.
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

The 2.2.3 local run on 2026-09-24 passed 39 unit tests. The tabletop sweep completed **192
matches**, **5,580 physical purchases**, **415 deliberately missed drops**, and
**5.62 simulated hours in 7.9 seconds**. All terminal states replayed identically.
The shared release sweep completed **2,304 matches**, **294 composition trials**
and **83.32 simulated hours**, with zero invariant failures or timeouts. Model calls
are excluded from both sweeps. These are regression checks, not a claim that every
balance choice or human strategy is optimal.

The complete browser run passed 83 checks with 19 intentional platform skips.
All 17 MR/art checks also passed on Chromium's software renderer. Combat checks
cover every troop and defense, mirrored paint/joints, held-piece rest, pause,
checkpoint restoration and speed synchronization.

Browser checks cover real pointer drags, illegal landing areas, pause/speed,
checkpoint reload, all six ages, offline startup, emulated controller purchases,
visibility interruptions, repeated XR entry, emulated hand purchases, input removal,
closed-hand reconnection and two-hand resizing. A renderer-only capacity fixture
draws 160 units plus eight built turrets firing together for each age, sampling
release, recovery and preparation and checking buffer overflow, geometry,
draw calls and texture growth. Full-army geometry is gated below 250,000 triangles
and 85 draw calls per desktop view. These counts are not a Quest frame-rate result;
stereo rendering and GPU/browser differences must be measured on the device.

CI runs the same tests on future changes. New ages/types must extend the model
catalog or the content-coverage test fails. Both economic and grab/drop tests run
without a DOM. Browser screenshots and render-budget JSON accompany test reports;
full-match results are in `artifacts/tabletop/matches.json`.

## Quest 3 release-owner acceptance — pending

The player reported "Play is good" for the hosted 2.2.0 build on 2026-09-24.
That confirms their play experience, not every individual item below or measured
thermal performance. Their 2.2.1 Quest screenshot showed poor contrast over a busy
room. The 2.2.2 watercolor revision addresses that observed problem; the player
reported that it "looks really good" after merging. That feedback does not provide
measured frame timings. For 2.2.3 the player reported "Quest performance good.
Looks good." After testing 2.2.4, the player reported good Quest performance and
approximately 13 ms average frame time. They also found that selling was limited
to the last cannon. Version 2.2.5 enables selection with the eraser; that change
needs a hosted check for selecting an older cannon with hands/controllers.
The desktop emulator does not validate
physical tracking, passthrough, room permission UX, comfort or thermal performance.
After the PR is merged and Pages finishes publishing, check:

- Enter from Quest Browser, accept/decline optional room access, place on a real
  table, and carry to a second position. Confirm the book lies flat and the strokes remain readable over passthrough.
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
