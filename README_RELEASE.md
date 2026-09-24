# Ink Battle 2.4.0 release

Version 2.4.0 makes the 3D sketchbook the default on web, PWA and Android. Classic
2D remains playable in the explicit `classic.html` archive. Previous launch URLs
redirect to the new game, preserving query strings and fragments. The PWA retains
its old identity so this updates the existing install rather than creating another.

Phones use the same physical pieces as Quest and desktop. Pinch zooms and two-finger
drag pans; adding a second finger safely cancels a pending grab. Wheel zoom and
middle-drag pan work on desktop. The book fits the initial viewport and the existing
recenter control. No extra on-screen controls were added. Android supports device
orientation, native Back-to-pause and lifecycle saving. Version code: 219.

The custom domain is `drawbattles.com`; see [hosting](docs/HOSTING.md).

Version 2.3.0 adds a wide tactical battlefield to new tabletop matches. Armies
spread across both cannon flanks, cannons turn and fire from their own docks, and
both sides can destroy defenses. Pinch a deployed soldier to suggest a route or
enemy structure; it walks under its own power and prioritizes immediate combat.
Foundations survive destroyed cannons. Classic 2D behavior and old saved battles
remain compatible. See [tabletop tactics](docs/TACTICAL_BATTLEFIELD.md).

This release rebuilds the single-file demo around one standalone engine while
retaining the notebook presentation, six ages, four difficulties, music, menus,
medals, pacts and optional native Gemma bridge. Version 2.1.0 adds optional local
Gemma on the web with a separate, reusable real-model benchmark. Classic combat
and its replay rules version remain 2.0.0. Version 2.2.0 adds the 3D tabletop and
Quest mixed-reality entry at `mr.html`. See [tabletop acceptance](docs/TABLETOP.md);
physical Quest testing is a separate release-owner check after hosting the build.

Version 2.2.2 adds watercolor fills to the spatial pencil sketchbook after a Quest
screenshot showed thin unfilled drawings disappearing against the room. Opaque
grainy paper, six washes derived from the classic age palette, painted pieces and
a paper score tab improve contrast while retaining the pencil contours. See
[the art guide](docs/PENCIL_ART.md). Game rules, classic 2D art, controls and saved
checkpoints are unchanged. The new fills need a follow-up visual check on Quest.

Version 2.2.3 gives all 18 tabletop troops and 18 defenses a distinct combat
action synchronized with real attacks, pauses and 1×/2×/3× speed. Paint and pencil
move together through reusable local joints. Defenses prepare only while an enemy
is in range; finished matches return pieces to rest and clear transient combat
effects. The deterministic engine, replay format and classic 2D behavior are
unchanged. See [combat animation](docs/COMBAT_ANIMATION.md) for the motion study,
authoring contract and tests. The player reported that Quest performance and
appearance were good after this release; no measured frame timings were supplied.

Version 2.2.4 gives each base four visible cannon locations, two on each flank.
One painted dock starts built; the remaining locations are dashed outlines.
Cannons mount on raised foundations, clear of every base. Held cannons, docks and
erasers highlight their valid destination; misplaced releases spend nothing.
Sales and evolution preserve purchased docks. The shop uses the same foundation
model as the battlefield. See [cannon docks](docs/CANNON_DOCKS.md). This changes
MR presentation and placement, with engine rules, replays and 2D play unchanged.

Version 2.2.5 lets the eraser sell any selected cannon, including a cheaper one
installed earlier. The occupied dock under the eraser highlights before release;
selling refunds half that cannon's price and keeps its foundation. The additive
`sell.slot` command records the choice in replays, while old commands, saved games
and the classic sell button retain their behavior. Empty docks, misses and repeated
releases never sell another cannon. The player reported good Quest performance
and approximately 13 ms average frame time on 2.2.4; selected selling needs a
follow-up on the hosted build.

## Build and verify

Use Node 22+ and npm:

```sh
npm ci
npm run check
npx playwright install chromium firefox webkit
npm run release:check
```

The build generates `web/game.js`, `web/mr.js` and a content-versioned `service-worker.js`.
They are committed so existing GitHub Pages branch hosting works immediately.
The shell uses a classic script bundle, including for local file and Android loads.
The service worker caches the HTML, bundle, stylesheet, icons and bundled fonts;
music is deliberately streamed independently.

Keep `index.html`, `classic.html`, `ink-battle.html`, `mr.html`, `CNAME`, `privacy-policy.html`, `manifest.webmanifest`,
`service-worker.js`, `favicon.ico`, `web/`, `src/client/game.css`, `src/mr/tabletop.css`, and `assets/`
together when deploying to a static host. Preserve relative paths for project Pages.

## Android packaging

Use an installed JDK and Android SDK Platform 36 / Build Tools 36.0.0 compatible with
the checked-in Gradle wrapper. The local acceptance build used JDK 21.

```powershell
npm run build
.\gradlew.bat :app:assembleDebug
.\gradlew.bat :app:bundleRelease
```

`syncWebAssets` copies the shared bundle, CSS and assets into
`app/build/generated/web-assets`. Never hand-edit generated Android assets.
The next Android build is configured as `2.3.0` / code `218`; this web/MR change
does not publish an AAB. Quest Browser uses the hosted page and needs no Android
package. Code `211` was the preceding published Android version; code `210` was
rejected by Google Play with automatic protection enabled. The minimum
supported version is Android 7.0 (API 24), as required by
[Google Play automatic protection](https://support.google.com/googleplay/android-developer/answer/10183279?hl=en).
Signing remains in the existing ignored
`keystore.properties` configuration. Google Play upload remains a release-owner action.
GitHub Pages publishes merged `main`. The browser-only WASM is excluded from Android
assets; the Android bridge continues to use its existing native runtime.
Store submission, real-phone controls/audio and optional multi-GB model installation
remain device/release-owner checks; no model download is part of automated balance tests.

## Behavior changes

- The notebook and controls scale together into the visible browser area, including
  short in-app browser windows, safe areas and keyboard changes. Existing matches
  survive resizing; optional Gemma settings scroll separately. Layout checks cover
  Chromium, Firefox and WebKit, including real touch events in reduced viewports.
- Players can cycle between 1×, 2× and 3× using the control beside Pause or on the
  pause screen. Speed applies to the whole battle; new matches start at 1×.
- Simultaneous combat and mirrored geometry remove side-order advantages.
- Normal laser art is separated from screen-wide special art; projectiles have stable targets.
- No purchases while paused/ended, no phantom base hits, no special lockout by the other side.
- Frontline troops can pass ranged support; deployment spacing prevents spawn piles.
- Late-age income and passive research prevent long idle progression. Both sides get
  some research from casualties. Evolving refunds removed turrets at resale value.
- Troop value outliers are retuned. Siege has bounded splash, base damage and slow
  forward movement while firing; infantry resists siege projectiles.
- The opponent saves for useful support/counters, invests when affordable, responds
  to immediate danger, uses clustered special targets, and respects engine-enforced pacts.
- Existing saves/preferences remain readable. Optional Gemma messages and emotions
  continue through the browser adapter; emotion inputs are recorded for replay.

See [acceptance evidence](docs/ACCEPTANCE.md) for measured coverage and limitations.
See [web Gemma](docs/GEMMA_WEB.md) for model lifecycle, hardware requirements and
the additional measured release evidence.
