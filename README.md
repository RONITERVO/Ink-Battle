# Ink Battle

A living pencil-and-watercolor battle on a 3D sketchbook, from stone clubs to
cosmic weapons. The same physical troops, cannons and potions work with a mouse,
a phone's touchscreen, and Quest 3 hands or controllers.

[Play](https://drawbattles.com/) · [Controls](docs/TABLETOP.md) ·
[Tabletop tactics](docs/TACTICAL_BATTLEFIELD.md) · [SDK](docs/SDK.md) ·
[Hosting](docs/HOSTING.md)

## Play and develop

```sh
npm ci
npm run build
npm start
```

Open **http://127.0.0.1:4173** or open `index.html` directly. Drag a difficulty
seal onto the page to start. Drop troops across the rally strip, guide deployed
troops, build cannon docks, place cannons, and toss upgrade potions. The hourglass
pauses and the clock cycles 1×/2×/3×. Music retains its normal playback rate.

Use one finger or the left mouse button to move pieces. Start a drag outside the
book and its pieces to rotate the view. With two fingers, pinch to zoom, drag to
pan and twist to turn gently, all in the same gesture. On PC, scroll to zoom, middle-drag to pan and right-drag
to orbit. No additional game buttons are needed. On Quest Browser, enter mixed
reality; pinch or grip pieces, carry one drawn ring, or use two rings to scale/turn.

The default game uses a deterministic opponent and works without a model or an
account. The PWA caches the shell and fonts; music streams separately. Classic 2D
and optional Gemma remain playable at `classic.html`, linked as an archive from
help. Existing classic saves, settings and replays keep their rules. See
[archived Gemma setup](docs/GEMMA_WEB.md) for the separate local-model benchmark.

## The engine is shared

Inspired by [StateBeats](https://github.com/RONITERVO/StateBeats) and
[StateWork](https://github.com/RONITERVO/StateWork), combat is independent of display,
clock and input. The browser, terminal, replay verifier and accelerated simulator all
use `Session`. Observing state never moves time. Commands are validated on both sides.

```js
import { Session } from './src/sdk/session.js';
const game = new Session({ seed: 42, difficulty: 'normal', battlefield: 'tabletop' });
game.client(1).command({ type: 'unit', index: 0 });
game.advance(600); // ten game seconds, without waiting
console.log(game.observe());
Session.fromReplay(game.replay()); // verifies deterministic replay
```

`src/core` owns rules; `src/content` owns balance data; `src/sdk` owns the public
session; `src/client` owns the classic presentation; `src/mr` owns the tabletop.
`index.html` and `classic.html` are small page shells. `web/game.js`, `web/mr.js`
and `service-worker.js` are generated, committed static-host artifacts.
Edit source modules and run the build, rather than editing generated JavaScript.

## Verify changes and expansions

```sh
npm run check
npx playwright install chromium firefox webkit
npm run test:browser
npm run simulate -- --release
npm run test:tabletop
```

For the separate, opt-in GPU/model benchmark, run `npm start` in one terminal and
`npm run test:gemma` in another. It downloads the model on first use and checks real
1×/2×/3× play, offline inference and paired full matches. It is excluded from CI
and fast balance sweeps; it needs a WebGPU-capable browser and sufficient storage.

The release simulation covers every age and difficulty with six scripted styles,
seeded full matches, all troop compositions, side symmetry, state invariants and
replay verification. It writes measured reports and reproductions under
`artifacts/balance`. Gemma/model calls are excluded from this fast path. CI repeats
the same checks on future changes. See [simulation coverage and limits](docs/SIMULATION.md).

## Android

```powershell
npm ci
npm run build
.\gradlew.bat :app:assembleDebug
```

Gradle packages the same web bundle, CSS, fonts and assets. Optional on-device model
installation and native callbacks are retained; see [Gemma integration](LOCAL_GEMMA_ANDROID.md)
and [release packaging](README_RELEASE.md).

Code and existing game assets: [Apache-2.0](LICENSE). Bundled Caveat and Patrick Hand
fonts: SIL Open Font License, with license files in `assets/fonts`.
