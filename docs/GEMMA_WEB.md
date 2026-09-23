# Optional Gemma on the web

From the start screen choose **Play with Gemma**, read the download details and
choose **Download & turn on**. During a match, use the pause screen or Gemma's
Settings button. Downloading/loading pauses an active match and does not resume
it automatically. Cancel and Turn off terminate the worker and release its GPU
resources. Remove download deletes only the model and optional runtime cache.

The standard deterministic opponent always handles purchases and combat. Gemma
provides a short reply and a validated emotion. Emotions slightly influence the
existing policy's unit scores; they do not grant money, alter troop stats, change
difficulty, or override pacts. This is a personality option, not a promise of a
stronger opponent. Android continues using its native Gemma bridge and image input.

## Runtime and storage

- Pinned `@litert-lm/core` 0.12.1; WebGPU, text input/output, 2,048 context tokens,
  96 output tokens, thinking disabled. Each turn uses a fresh bounded conversation.
- Gemma 4 E2B web weights, revision `b3ca0d2f076785a8f4b2219ddbd2bdb99954eae1`,
  2,008,432,640 bytes. The configured SHA-256 is checked while streaming the download.
- OPFS stores the model; a verification marker is written only after the complete
  download matches. An interrupted download is never treated as installed. Retry
  starts that download again; partial download resumption is not implemented.
- The 19 MB WASM runtime is hosted with the game, cached only when enabled. The
  large model is downloaded directly from Hugging Face after opt-in and never enters
  the PWA shell cache. Normal PWA updates preserve the model/runtime caches.
- The worker, small SDK and game shell are precached for offline starts. Once both
  model and runtime are saved, enabling Gemma also works offline. Browser eviction,
  private browsing or clearing site data can remove them. Reload starts with Gemma
  off to avoid silently reserving gigabytes of GPU memory.
- A compatible GPU, shader-f16, OPFS and an updated Chrome/Edge over HTTPS or
  localhost are required. Loading can fail on limited-memory devices; the standard
  game remains available. The Google Web API is an early preview. No universal
  mobile-device compatibility or CPU fallback is claimed.

The renderer and model share the GPU even in separate workers. The browser uses
WebGPU rather than CUDA. Testing a different CUDA inference stack would not measure
the shipped browser runtime. Use the included WebGPU benchmark on a supported PC.

## Timing and trust boundaries

The initial periodic request starts after about 12 wall seconds, then every 26
wall seconds. Player chat has a four-second minimum gap. Only one request runs at
a time; 2×/3× speed does not queue additional requests. Game simulation never waits
for a reply. Thirty-second generation timeouts stop the worker and restore the
standard opponent's chat. Load/download timeout is 20 minutes.

The prompt describes the actual bases, fronts, health, army counts, gold, pacts,
and two recent chat lines as bounded text. The response must contain exactly one
reply line and one allowed emotion; malformed responses cannot change engine state.
Unknown IDs, duplicate responses, old sessions, paused games and finished matches
are rejected. Prompts and replies never leave the device. The provider sees normal
download request metadata; see the game's privacy policy.

Emotion inputs are stored in ordinary engine replays. Replay needs no model and
checks the same final state digest. Model generation itself is not deterministic.

## Repeatable testing

`npm run check` and `npm run test:browser` cover offline shell behavior, no automatic
model download, unsupported devices, cancellation, retries, stale/invalid responses,
native-bridge preference, bounded prompts, wall-clock cadence at 3×, worker failure,
timeouts, pacts and model-emotion replay. These tests use fixtures and never fetch
weights. `npm run simulate -- --release` remains model-free for fast balance sweeps.

For actual model tests, start `npm start`, then run `npm run test:gemma`. Default:
Edge, local server, isolated persistent profile under `artifacts/gemma-browser-profile`.
Set `GEMMA_BROWSER=chrome` to test installed Chrome. Expect a roughly 2 GB first
download and several minutes of testing; subsequent runs reuse browser storage.

The benchmark exercises live rendered battles at 1×/2×/3×, then reloads offline and
generates another reply. Each live speed is measured with Gemma off and on. Set
`GEMMA_LIVE_ONLY=1` to rerun that hardware comparison and offline test without the
full match sweep (writes `artifacts/gemma/live-comparison.json`).
The default run also compares 24 full Gemma games against 24 controls:
two seeds × all six starting ages × Normal/Hard, using the same adaptive player.
It skips idle wall time between model calls, while retaining their actual inference
time (rounded up to whole seconds) in the simulated battle. Every model turn is real;
none is substituted by a canned emotion. The paired run checks engine invariants
and full replay. Results/replies/replays remain local in `artifacts/gemma/benchmark.json`.
The run fails on a timed-out match, an invalid state/replay, missing live replies,
or fewer than 95% structurally valid model replies.
These bot comparisons do not establish human fun, universal performance or balance.

Primary references: [Google Web API](https://developers.google.com/edge/litert-lm/js),
[runtime source](https://github.com/google-ai-edge/LiteRT-LM/tree/main/js/packages/core),
[model card](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm),
[Gemma terms](https://ai.google.dev/gemma/terms).

## 2.1.0 release evidence

Measured September 23, 2026 on Windows, Ryzen 9 7950X, RTX 5070 (12 GB), Edge 153.
The [machine-readable evidence](evidence/gemma-web-2.1.0.json) includes the source
fingerprint, pinned model, sampled replies and all match comparisons.

| Check | Observed result |
|---|---:|
| Completed paired matches | 48 (24 Gemma + 24 control) |
| Simulated battle time | 2.66 hours |
| Real model turns in those matches | 191 |
| Invalid replies / invariant or replay failures | 0 |
| Reply latency, median / 95th percentile | 232 / 300 ms |
| Longest sampled reply | 340 ms |
| Warm start, including runtime and GPU initialization | about 4.1 s |
| Offline reload and local reply | passed |
| Live 1×/2×/3×, 55 seconds each, model off/on | all passed |
| Live frame-gap 95th percentile, off/on | 16.8 / 16.8 ms |
| Worst live frame gap, off/on | 17.0 / 33.3 ms |

The adaptive player won 10/24 with Gemma versus 8/24 without it. Two winners
changed; all Hard games remained opponent wins. Gemma's mood sometimes prolonged
battles and did not consistently improve opponent strength. Both sets finished
inside the 20-minute limit. These are two seeded bot scenarios per age/difficulty,
not a statistically reliable human win-rate estimate. Model sampling can vary.

An earlier run recorded a 2.98-second frame stall while other browser/build tests
were running. The separate off/on comparison above had no gaps above 100 ms.
This does not rule out stalls on other hardware or under contention. Model loading
therefore stays outside active play, and slow/error cases keep the standard fallback.

The first complete download passed SHA-256 verification. Dedicated storage tests
also covered truncation, corrupted bytes, excess size, HTTP failure, insufficient
quota, offline cache reuse and removal. Release checks additionally pass 22 unit/
contract tests, 36 browser tests (two browser-specific skips), and the model-free
2,304-match / 294-composition sweep with zero findings. The signed Android 2.1.0
(210) release bundle builds; its native model was not re-benchmarked on a phone.

To refresh the small checked-in evidence after a new actual-model run, use
`node scripts/summarize-gemma.mjs`; the full local report keeps its replays.
