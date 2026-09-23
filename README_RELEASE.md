# Ink Battle 2.0.0 release

This release rebuilds the single-file demo around one standalone engine while
retaining the notebook presentation, six ages, four difficulties, music, menus,
medals, pacts and optional native Gemma bridge.

## Build and verify

Use Node 22+ and npm:

```sh
npm ci
npm run check
npx playwright install chromium firefox
npm run release:check
```

The build generates `web/game.js` and a content-versioned `service-worker.js`.
Both are committed so existing GitHub Pages branch hosting works immediately.
The shell uses a classic script bundle, including for local file and Android loads.
The service worker caches the HTML, bundle, stylesheet, icons and bundled fonts;
music is deliberately streamed independently.

Keep `index.html`, `ink-battle.html`, `privacy-policy.html`, `manifest.webmanifest`,
`service-worker.js`, `favicon.ico`, `web/`, `src/client/game.css`, and `assets/`
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
The Android version is `2.0.0` / code `200`. Signing remains in the existing ignored
`keystore.properties` configuration. This PR does not publish to Google Play or Pages.
Store submission, real-phone controls/audio and optional multi-GB model installation
remain device/release-owner checks; no model download is part of automated balance tests.

## Behavior changes

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
