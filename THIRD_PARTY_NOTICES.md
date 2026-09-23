# Third-party notices

Caveat variable font and Patrick Hand regular font are bundled from the Google Fonts
repository under the SIL Open Font License 1.1. Their original notices and terms are
preserved in `assets/fonts/OFL-Caveat.txt` and `assets/fonts/OFL-PatrickHand.txt`.

The gameplay engine has no third-party runtime JavaScript dependencies. esbuild,
ESLint, globals and Playwright are development tools recorded in `package-lock.json`.
The existing Android LiteRT-LM dependency remains declared in `app/build.gradle`.

The optional browser worker bundles `@litert-lm/core` 0.12.1 and
`@litertjs/wasm-utils` under Apache-2.0 (Google LLC / The ODML Authors). The
unmodified compatibility WASM and loader are copied from that pinned npm package
into `web/vendor/litert-lm-0.12.1`. License text is in
`assets/licenses/litert-lm-Apache-2.0.txt`; source:
https://github.com/google-ai-edge/LiteRT-LM.

Streaming model integrity checks use `@noble/hashes` 2.4.0, copyright Paul Miller,
under MIT. Its complete notice is in `assets/licenses/noble-hashes-MIT.txt`.

Gemma model weights are not distributed in this repository or Android bundle.
Players explicitly download the pinned web model from the model publisher under
the Gemma terms: https://ai.google.dev/gemma/terms. Model card:
https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm.
