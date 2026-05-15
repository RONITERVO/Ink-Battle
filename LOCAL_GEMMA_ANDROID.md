# Local Gemma 4 Android Plan

The app now uses a no-backend architecture for the AI opponent:

- The game always has the deterministic local Codex Director fallback.
- On Android, the WebView exposes `LocalGemmaAndroid` through `LocalGemmaBridge.kt`.
- After user consent, Android `DownloadManager` downloads a `.litertlm` Gemma 4 model into the app's external files directory.
- LiteRT-LM loads the model locally and runs a no-system-prompt roleplay sequence made entirely of user turns.
- The LiteRT-LM engine is process-scoped and survives Activity/WebView recreation; each roleplay sequence uses one bounded conversation, then closes it after the order word and compact summary are complete.
- The JavaScript game validates every returned doctrine and action before applying them.
- Gemma turns use bounded application-managed memory: the saved compact summary is reused as Gemma wrote it, while the next summary turn asks Gemma to blend that summary with the fresh chat turn and image-derived battle state.
- Gemma director turns also receive a labeled tactical context image when available. The JavaScript app redraws the live lane as a self-contained diagram with Gemma's red/right-side identity, base ownership, attack directions, hit lines, front lines, danger zones, unit markers, counts, and a legend. The native bridge configures LiteRT-LM `visionBackend` and sends the image through a short-lived cache JPEG using `Content.ImageFile`.
- Gemma never has to author JSON. It speaks battlefield status, visible opponent chat, one doctrine word, one delayed-safe order word, and a compact summary in separate turns. Native code wraps the completed strings for the WebView.
- The selected doctrine persists between Gemma turns and steers the deterministic fast AI spending loop. Supported doctrines are `balanced`, `rush`, `tech`, `turtle`, `counter`, `bait`, `allin`, and `stall`.
- Gemma's order word is not applied as a stale purchase. It temporarily biases the live engine toward robust orders such as `press`, `defend`, `counter`, `tech`, `swarm`, `heavy`, `hold`, `fortify`, or `special`.
- To reduce stale tactical choices, native pauses after the doctrine phase and asks the WebView for a fresh tactical image. When available, that newest image is attached to the order-selection prompt so Gemma can see how the lane changed while it was writing.
- The deterministic engine remains a complete offline opponent when Gemma is unavailable, using live lane pressure, army composition, pacts, difficulty, and its own adaptive order selection.

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
  - Process-scoped engine reuse across Activity/WebView recreation.
  - GPU first, CPU fallback.
  - No-system `ConversationConfig()` for Gemma 4 default behavior.
  - Multiturn roleplay prompts with explicit red/right-side Gemma ownership and tactical-map label guidance.
  - Streaming phase callbacks for battlefield status, visible reply, doctrine word, order word, and compact memory summary.
  - Mid-turn `onLocalGemmaSelectionImageRequest` callback so the order phase can receive the newest battlefield image.
  - LiteRT-LM `visionBackend` setup and short-lived `ImageFile` context images for Android image input stability.
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
6. Once ready, Gemma periodically produces high-level director turns through battlefield, reply, doctrine, order, and summary phases.
7. The visible reply is shown in the opponent chat, and the tool line shows the exact one-word doctrine and temporary order choices. Click the reply's `...` marker to reveal streamed opponent thoughts in a rolling one-line strip.

## Gemma Diagnostics

Capture a gameplay log from a connected Android device with:

```powershell
adb logcat -v time -s AgeOfWarGemma:I
```

Each local model turn logs:

- `request.payload`: exact JSON sent by the WebView bridge.
- `request.context_image`: attached tactical context image byte count and MIME metadata.
- `request.prompt.<phase>`: final user-turn prompt passed to LiteRT-LM after the app's prompt cap.
- `response.phase.<phase>`: unmodified Gemma text for each roleplay phase.
- `response.raw`: native-created roleplay envelope returned to JavaScript.
- `js.response.roleplay` and `js.action.roleplay_result`: JavaScript validation outcomes.

Long values are split into numbered chunks between `BEGIN` and `END` lines so they can be reconstructed from logcat.

## Safety Rules

- No API keys.
- No backend.
- No prompt/game-state upload for inference.
- No arbitrary code execution from the model.
- Model output for doctrine is parsed as one lower-case word and constrained to supported doctrine tokens.
- Model output for temporary orders is parsed as one lower-case word and constrained to the current order tokens, for example `press`, `defend`, `counter`, `tech`, `swarm`, `heavy`, `fortify`, `special`, or `none`.
- Existing player pacts still gate Gemma orders and all realtime engine spending.

## Sources Used

- Google recommends LiteRT-LM over the deprecated MediaPipe LLM Inference API for this path.
- Google LiteRT-LM Android docs describe the Gradle dependency, Engine/Conversation API, GPU native library declarations, and background initialization requirement.
- Google Gemma 4 LiteRT-LM docs list E2B/E4B support, model sizes, mobile performance, and MTP recommendations.
