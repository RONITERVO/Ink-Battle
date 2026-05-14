# Local Gemma 4 Android Plan

The app now uses a no-backend architecture for the AI opponent:

- The game always has the deterministic local Codex Director fallback.
- On Android, the WebView exposes `LocalGemmaAndroid` through `LocalGemmaBridge.kt`.
- After user consent, Android `DownloadManager` downloads a `.litertlm` Gemma 4 model into the app's external files directory.
- LiteRT-LM loads the model locally and returns compact JSON director turns.
- The JavaScript game validates every returned action before applying it.
- Gemma turns use compact application-managed memory: each request creates a fresh LiteRT-LM conversation, then receives a bounded memory packet with a match summary, last 3 player/model turns, recent action outcomes, and repetition guards.
- The same on-device Gemma model can compact memory opportunistically while idle; deterministic JavaScript compaction keeps memory bounded when native compaction is skipped.
- Deterministic memory hygiene strips repeated model phrases from summaries, records only high-signal fallback events, and rewrites stale repeated `say` text before it reaches the player.

## Model Choice

Default for the app's 6GB+ phone target: `Gemma 4 E2B`.

Reasoning:

- Google's Gemma 4 LiteRT-LM docs position E2B and E4B for mobile/edge deployment.
- E2B is 2.58GB and is the safer default for 6GB phones.
- E4B is 3.65GB and is selected automatically only when Android reports at least 12GB RAM.

Configured downloads:

- `Gemma 4 E2B`: `litert-community/gemma-4-E2B-it-litert-lm`
- `Gemma 4 E4B`: `litert-community/gemma-4-E4B-it-litert-lm`

## Native Files

- `app/src/main/java/com/sketchwar/ageofwar/LocalGemmaBridge.kt`
  - Model recommendation.
  - DownloadManager install.
  - LiteRT-LM engine setup.
  - GPU first, CPU fallback.
  - JSON-only director prompt tuned for Gemma 4 compact memory.
  - Idle `compactDirectorMemory` bridge for bounded mobile memory summaries.
  - Chunked `AgeOfWarGemma` logcat diagnostics for exact request payloads, prompts, raw responses, parse failures, and action results.
- `app/src/main/java/com/sketchwar/ageofwar/MainActivity.java`
  - Registers the bridge as `LocalGemmaAndroid`.
- `app/build.gradle`
  - Adds `com.google.ai.edge.litertlm:litertlm-android:0.11.0`.
- `app/src/main/AndroidManifest.xml`
  - Adds internet/network permissions for model download.
  - Adds optional OpenCL native libraries recommended by LiteRT-LM GPU backend.

## Runtime UX

1. Player starts a game.
2. Director panel shows local Gemma status.
3. Player taps `Get Gemma`.
4. App asks for confirmation before the multi-GB download.
5. Fallback AI continues playing during download and model loading.
6. Once ready, Gemma periodically produces high-level director turns.

## Gemma Diagnostics

Capture a gameplay log from a connected Android device with:

```powershell
adb logcat -v time -s AgeOfWarGemma:I
```

Each local model turn logs:

- `request.payload`: exact JSON sent by the WebView bridge.
- `request.prompt`: final prompt passed to LiteRT-LM after the app's prompt cap.
- `response.raw`: unmodified Gemma text.
- `memory.compact.*`: native Gemma memory compaction jobs.
- `js.say.rewritten`: stale/repeated model text that was replaced by the local memory guard.
- `js.response.parsed`, `js.response.parse_failed`, and `js.action.result`: JavaScript parse and validation outcomes.

Long values are split into numbered chunks between `BEGIN` and `END` lines so they can be reconstructed from logcat.

## Safety Rules

- No API keys.
- No backend.
- No prompt/game-state upload for inference.
- No arbitrary code execution from the model.
- Model output is parsed as JSON and constrained to known tools:
  - `spawn_unit`
  - `buy_upgrade`
  - `build_turret`
  - `use_special`
  - `none`
- Existing player pacts still gate model-requested actions.

## Sources Used

- Google recommends LiteRT-LM over the deprecated MediaPipe LLM Inference API for this path.
- Google LiteRT-LM Android docs describe the Gradle dependency, Engine/Conversation API, GPU native library declarations, and background initialization requirement.
- Google Gemma 4 LiteRT-LM docs list E2B/E4B support, model sizes, mobile performance, and MTP recommendations.
