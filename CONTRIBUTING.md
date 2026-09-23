# Contributing

Use Node 22+ and `npm ci`. Work in the source modules; build artifacts are generated
with `npm run build`. Keep authoritative gameplay in `src/core`, never in a renderer,
timer, model callback or alternate simulator.

Before submitting:

1. Add a focused regression for changed gameplay or a reproduced exploit.
2. Run `npm run check` and `npm run simulate -- --release`.
3. Install Playwright browsers and run `npm run test:browser` for browser changes.
4. Review balance reports, saved failure replays and all affected age screenshots.
5. Commit the regenerated bundle and service worker together with source changes.

New content must pass catalog, counter, mirror and full-match tests. The three-card
menu is an explicit adapter contract; do not add hidden, inaccessible unit slots.
Changing combat semantics requires a rules version bump and new acceptance evidence.
Document measured results and remaining device/model checks honestly. Keep artwork,
audio and local font licenses with distributed assets.
