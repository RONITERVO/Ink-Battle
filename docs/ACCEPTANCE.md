# 2.0.0 acceptance evidence

Local verification on 2026-09-23, Windows, AMD Ryzen 9 7950X, Node 25.4.0.
The source fingerprint and complete composition table are in
[`evidence/balance-2.0.0.json`](evidence/balance-2.0.0.json).

## Measured simulation

Command: `node scripts/simulate.mjs --release --seeds 32 --out artifacts/release-balance-final`

| Measurement | Result |
|---|---:|
| Full matches | 4,608 |
| Composition trials | 294 |
| Simulated play | 160.51 hours / 6.69 days |
| Measured wall time | 92.06 seconds |
| Effective speed | 6,277× realtime |
| Invalid-state / replay / mirror failures | 0 |
| Full matches exceeding 20 minutes | 0 |
| Normal, Stone-age-start median duration | 358.98 seconds |
| Normal, Stone-age-start 95th percentile | 554.25 seconds |
| Normal, Stone-age-start median first contact | 17.17 seconds |

There are 32 seeds × 6 starting ages × 6 player policies × 4 difficulties.
Composition trials use all 7 nonempty mixes in both orientations in every age.
Repeated seeds without random events may have identical outcomes; this is not
4,608 unique human strategies. Model inference, networking and rendering are excluded.

Normal's scripted player win rate across all age starts is 34.0%. These scripted
policies won none of the final Hard/Harder/Impossible games; those modes retain the
original advertised enemy stat/economy handicaps. These numbers describe this bot
corpus, not a predicted human win rate or proof that the modes are unbeatable.

## Other checks

- `npm run check`: 18 engine/contract tests, including 294 mirrored composition
  trials, mono-type counters, 8 adversarial command sequences, replay/checkpoint/
  retry behavior, pacts, simultaneous combat and previously observed stalls.
- Playwright: 22 passed across Chromium and Firefox. Two Chromium-specific checks
  are intentionally skipped on Firefox (packaged file entry and PWA installation).
- Browser checks include real input/clock, pause/resume, all six rendered ages,
  full match to result screen, Node/browser replay parity, mobile landscape, saved
  medals, pacts, local file loading, and offline shell/fonts.
- Android `:app:assembleDebug` succeeds using the existing wrapper, JDK 21 and
  installed SDK. Packaged asset paths include the shared bundle and CSS.
- npm audit during installation reports zero dependency vulnerabilities.
- Generated bundle and service worker are reproducible; CI checks generated drift.

## Findings that changed the release

The initial rebuild sweep found side-dependent target selection after overtaking,
flight-time rounding differences, repeated spawn congestion, and battles lasting
more than 20 minutes. Fixes use canonical positions, stable target IDs, simultaneous
damage, deployment spacing, support passing, siege pressure and deliberate spending.
Rare failures found in larger seed sweeps became focused regression cases.

The original Modern Marine won every other tested opening composition while the
Tank and War Mech were poor value. Knight had no mono-type counter. The revised
catalog gives every troop a tested mono-type counter in its own age. Siege splash
is bounded, infantry resists siege shots, and opening-budget tests still distinguish
the benefits and costs of mixed armies. Future changes must rerun the same matrix.

The original notebook CSS and drawing algorithms were extracted into adapters;
ordinary laser rendering was corrected. Audio files, unit/base silhouettes, fonts,
controls and persistent preference keys are retained. Fonts now load locally.

## Limits and release handoff

Automated results cannot establish human enjoyment or exhaustive strategic balance.
Actual Android touch/audio performance and on-device Gemma inference were not tested
on a physical phone in this rebuild. The native bridge is retained and compiles;
model installation/inference is intentionally outside accelerated testing. No signed
store bundle was uploaded, no model was downloaded, and no deployment was performed.

Full reports and replay reproductions remain under ignored `artifacts/`; CI uploads
fresh reports and browser artifacts. CI status on the PR is authoritative for the
remote platform checks. Code/source, generated web build, Android packaging and
reusable validation are prepared for review as the 2.0.0 release change.
