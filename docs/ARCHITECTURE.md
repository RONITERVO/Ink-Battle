# Ink Battle engine contract

Inspired by [StateBeats](https://github.com/RONITERVO/StateBeats) and
[StateWork](https://github.com/RONITERVO/StateWork): the rules are usable without
the reference interface. The game has one implementation of combat and spending.

| Directory | Responsibility |
|---|---|
| `src/content` | Frozen age, troop, turret, special and appearance data |
| `src/core` | Seeded state, legal actions, economy, simultaneous combat, deterministic opponent |
| `src/sdk` | Caller-bound local clients, explicit time, replay/checkpoints, retry receipts |
| `src/simulation` | Observation-based policies, full matches, composition trials, invariant checks |
| `src/client` | Original notebook CSS, canvas drawing, music, menus, storage, optional Gemma |
| `src/mr` | Tabletop view, shared grab/drop adapter, physical catalog, controller/hand lifetimes, presentation transforms |
| `scripts` | Static build, loopback server, JSON-lines CLI, balance reports |

Core, SDK and simulations have no DOM, filesystem, network, model, timers or
wall-clock reads. A test enforces this boundary. Each session has private state.
`observe()` copies it, never advances time, and cannot mutate a match.
`transition(state, commands)` is the pure, copying reference operation; Session
uses the same internal in-place step for throughput. No separate simulator physics.

## Time and combat

Authoritative time is an integer tick at 60 Hz. A real frame advances whole ticks;
manual callers can advance up to 36,000 per call without sleeping. Brief browser
stalls catch up without dropping ticks; an interruption of five seconds or more
explicitly pauses the game, as does hiding the page. Rendering, audio and cosmetic
randomness cannot alter the combat PRNG. Each side has its own identical seeded xorshift32 stream,
so mirrored specials stay mirrored.

The browser speed control scales elapsed time by 1×, 2× or 3× before accumulating
whole engine ticks. Changing speed settles elapsed time at the previous rate.
Pause and the five-second interruption threshold use unscaled wall time. Speed
is an adapter setting: manual `advance(ticks)` stays exact, replay and balance
rules do not change, and audio playback remains at its normal rate.

A tick accrues income/research, updates construction/cooldowns, runs the opponent,
collects both armies' attack and movement intents, advances specials/projectiles,
applies damage, settles deaths once, then checks results. Simultaneous lethal blows
trade; simultaneous base destruction is a draw. A projectile retains a stable
target ID, not a pooled object reference. Missed troop shots do not turn into base
damage. Ordinary lasers and area specials are distinct.

Positions are canonicalized to micro-pixels. Range and flight-time comparisons use
defined small tolerances, preventing left/right rounding from changing firing order.
The renderer retains the original 1280×720 coordinates and procedural artwork.
Short-range troops may pass friendly ranged support. Deployment checks lane space;
each side is bounded to 80 units. Siege advances at 35% speed while firing, splashes
at most two additional troops for 35%, and deals twice normal damage to a targeted
base. Infantry takes half siege projectile/splash damage. A base inside the actual
splash radius takes 35% damage. Specials never damage bases.

Both sides use the same command validators. Normal has equal resources and stats.
Hard/Harder/Impossible retain the original explicitly configured resource/stat
handicaps. Pacts apply to the opponent. Truce stops new enemy units and specials;
existing troops and defenses continue fighting. One side's special no longer
blocks the other's activation. Evolution refunds old turrets at normal resale value.

## Replay and capabilities

Replays contain rules version, initial options, successful commands and host control
events at exact ticks, final tick and state digest. Opponent decisions are recomputed
from state; model emotion outputs, if present, are recorded as bounded host inputs.
No model is called during replay. Unsupported versions, illegal commands, invalid
time advances and mismatched digests fail. The FNV digest detects accidental drift;
it is **not a cryptographic signature or an anti-cheat mechanism**.

Checkpoint restoration replays the timeline and restores request receipts. Exact
request retries return their previous result; changed contents under the same ID
fail. Receipts are bounded to 10,000 IDs. Replay import accepts at most 250,000
events and 24 simulated hours. Checkpoints and host methods are trusted local
operations, not an authentication boundary. `client(team)` binds commands to a side;
time control, pacts, model inputs and restoration stay on the host Session.

## Browser and Android adapters

Each browser adapter is a module factory with explicit shared runtime dependencies.
It receives copied observations and presentation events. It cannot spend gold or
resolve combat. The original renderer, watercolor algorithm, music catalog, storage
keys, controls and native bridge callbacks are retained. Fonts ship locally under
their original OFL licenses. Cosmetic effects are capped and are excluded from replay.

The canvas and HTML controls share a 1280×720 notebook in `#aspect-wrapper`.
`viewport.js` fits this whole page into the visual viewport, subtracting safe-area
insets, and follows browser bar/keyboard resize and viewport scroll events. It
falls back to window dimensions when the Visual Viewport API is unavailable.
Page CSS uses `--page-vw` and `--page-vmin` for lengths relative to that notebook;
do not introduce browser `vw`/`vh`/`vmin` units inside the scaled page. Fixed page
pixels, text, spacing and hit targets all scale together. Pointer coordinates for
tooltips are converted back into page coordinates. Resizing never changes a Session.

The optional Gemma settings dialog stays outside the scaled notebook so long text
remains readable and scrollable within the visible safe area. Layout regression
tests run on Chromium, Firefox and WebKit, including short/portrait/wide viewports,
all ages/tabs, touch controls, simulated keyboard offsets and safe-area changes.
These emulate browser behavior; native Instagram/TikTok chrome still needs a real
device check. A browser overlay that does not report its occlusion cannot be measured.

`npm run build` creates the committed classic-script bundle and a content-versioned
service worker. Static hosting and Android `file:///android_asset` need no runtime
module loader, server, account or build tool. Gradle copies the same bundle, CSS and
assets. The cache updates the whole shell and removes only Ink Battle caches. Audio
streams separately; downloading every optional music variant is not part of PWA install.

Web Gemma is an optional worker transport beside the native Android bridge. It
receives a bounded textual observation and returns only a validated reply/emotion.
It has no command channel. `gemma-web` owns worker lifecycle, `gemma-model-store`
owns the verified OPFS download, and `gemma-worker` owns the pinned LiteRT runtime.
Model cadence uses wall time, while engine replays retain emotion inputs at exact
ticks. The model cache uses a separate name from the game shell and survives shell
updates. See [web Gemma](GEMMA_WEB.md) for the real-model test workflow.

## Extending the game

Add rules/data in `src/content` and the responsible core module, bump the rules
version for semantic changes, then update its regression fixture. Adding an age
also needs its income, special profile and art adapter. Adding a fourth unit/turret
slot requires adapting the three-card menu; a contract test prevents silent omission.
Run the full composition matrix, seed sweep and browser conformance after changes.
Change an input, rendering, storage or model adapter without creating new combat rules.

This is a local single-player engine. Network synchronization, adversarial multiplayer,
public plugin execution and backwards replay migration are not implemented.
