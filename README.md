# Ink Battle

A notebook lane-strategy game, from stone clubs to cosmic weapons. The original
watercolor canvas, squiggly troops, music, controls and optional local Gemma chat
now run on a standalone, deterministic game engine.

[Play](https://ronitervo.github.io/Ink-Battle/) · [Release evidence](docs/ACCEPTANCE.md) ·
[Architecture](docs/ARCHITECTURE.md) · [SDK / terminal play](docs/SDK.md) ·
[Balance simulations](docs/SIMULATION.md)

**Tabletop mixed reality:** [open the 3D sketchbook](https://ronitervo.github.io/Ink-Battle/mr.html)
in Quest Browser, then choose **Enter mixed reality**. Grab physical troops,
cannons and potions; carry the brass rings with one hand or resize with two.
Hands and controllers share the same rules. A desktop drag-and-drop preview is
also available. [Controls, architecture and Quest acceptance](docs/TABLETOP.md).

## Play and develop

Open `ink-battle.html` directly, or serve the checkout:

```sh
npm ci
npm run build
npm start
```

Open **http://127.0.0.1:4173**. Choose a difficulty, buy troops, defend with turrets,
upgrade, evolve and time specials. Commander pacts such as `no ranged`, `no turrets`
and `truce for 30 seconds` still work. Medals, music preferences and commander memory
keep their existing storage keys. No account, network or model is needed to play.
The PWA caches the game and fonts; music streams separately.

Use the **1×** button beside **Pause** to cycle through **1×, 2× and 3×** game speed.
The pause screen also lets you change speed before resuming. Both sides, income
and cooldowns speed up together; music stays at its normal playback rate.
Each new match starts at 1×.

**Optional Gemma on the web:** choose **Play with Gemma** on the start screen, or
open its settings while paused. This downloads Gemma 4 E2B (2.01 GB) once and runs
its replies locally on a compatible WebGPU GPU in Chrome/Edge. The game stays
paused while loading. Turn it off or remove its download from the same settings.
Gemma remains optional, and starts off when the page is reopened. See
[web Gemma setup, testing and limitations](docs/GEMMA_WEB.md).

## The engine is shared

Inspired by [StateBeats](https://github.com/RONITERVO/StateBeats) and
[StateWork](https://github.com/RONITERVO/StateWork), combat is independent of display,
clock and input. The browser, terminal, replay verifier and accelerated simulator all
use `Session`. Observing state never moves time. Commands are validated on both sides.

```js
import { Session } from './src/sdk/session.js';
const game = new Session({ seed: 42, difficulty: 'normal' });
game.client(1).command({ type: 'unit', index: 0 });
game.advance(600); // ten game seconds, without waiting
console.log(game.observe());
Session.fromReplay(game.replay()); // verifies deterministic replay
```

`src/core` owns rules; `src/content` owns balance data; `src/sdk` owns the public
session; `src/client` owns the classic presentation; `src/mr` owns the tabletop.
`ink-battle.html` and `mr.html` are small page shells. `web/game.js`, `web/mr.js`
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
