# Local Gemma 4 Android Plan

The app uses a no-backend opponent:

- The JavaScript game owns all tactical decisions and remains fully playable offline without Gemma.
- On Android, the WebView exposes `LocalGemmaAndroid` through `LocalGemmaBridge.kt`.
- After user consent, Android `DownloadManager` downloads a `.litertlm` Gemma 4 model into the app's external files directory.
- LiteRT-LM loads the model locally. Gemma stays in the same no-system chat for up to about nine text turns; multimodal chats reset earlier after three retained image turns or any empty native response. When that bounded chat resets, the next opening prompt can carry the app's compact local continuity summary.
- Gemma receives the labeled tactical context image. The opening message of a native chat includes compact local memory; later turns rely on the same native chat history instead of repeating that summary. It is asked to return exactly two lines: a visible opponent message and one emotion word from the randomized emotion vocabulary.
- The deterministic engine consumes the emotion word as a mood signal only. It never accepts unit, upgrade, turret, special, strategy, or order commands from the model.

## Model Choice

Default for the app's 6GB+ phone target: `Gemma 4 E2B`.

- E2B is 2.58GB and is the safer default for 6GB phones.
- E4B is 3.65GB and is selected automatically only when Android reports at least 12GB RAM.

Configured downloads:

- `Gemma 4 E2B`: `litert-community/gemma-4-E2B-it-litert-lm`
- `Gemma 4 E4B`: `litert-community/gemma-4-E4B-it-litert-lm`

## Native Files

- `app/src/main/java/com/sketchwar/ageofwar/LocalGemmaBridge.kt`
  - Model recommendation and install flow.
  - Process-scoped LiteRT-LM engine reuse across Activity/WebView recreation.
  - Bounded shared conversation reuse for short-term chat continuity.
  - `ImageFile` paths retained until the shared conversation is reset or closed.
  - Empty LiteRT responses and the observed fourth retained-image turn reset the native chat before the next request.
  - GPU first, CPU fallback.
  - No-system `ConversationConfig()` for Gemma 4 default behavior.
  - One prompt cap, one optional `ImageFile`, one streamed `message` phase, and raw text returned to JavaScript.
- `Age_of_War_notebook_8.html`
  - Builds the randomized emotion prompt.
  - Parses the two-line model answer, including suffix/last-word emotion recovery, without JSON repair.
  - Runs the offline tactical engine with composition, threat, age, economy, turret, macro-plan, timing-bank, and emotion scoring.
  - Shows the current emotion and removable pact chips between the base health bars.

## Runtime UX

1. Player starts a game.
2. Director panel shows local Gemma status.
3. Player taps `Get Gemma`.
4. App asks for confirmation before the multi-GB download.
5. Offline AI continues playing during download, loading, and model thinking.
6. Once ready, Gemma periodically returns a visible message plus one emotion word.
7. The emotion word appears as the current mood signal and biases the local engine's timing, risk tolerance, defense, teching, special use, and aggression.
8. Active agreements are clickable chips; removing one updates the local engine and future Gemma context.

## Gemma Diagnostics

Capture a gameplay log from a connected Android device with:

```powershell
adb logcat -v time -s AgeOfWarGemma:I
```

Each local model turn logs:

- `request.prompt.message`: final user-turn prompt passed to LiteRT-LM after the app's prompt cap.
- `request.context_image`: attached tactical context image byte count and MIME metadata.
- `conversation.created`, `conversation.reuse`, `conversation.image_retained`, `conversation.reset_after_response`: native chat lifetime and retained image-file diagnostics.
- `response.phase.message`: unmodified streamed Gemma text.
- `response.raw`: raw two-line model response returned to JavaScript.
- `js.response.emotion`: JavaScript parse result for reply and emotion.

## Safety Rules

- No API keys.
- No backend.
- No prompt/game-state upload for cloud inference.
- No arbitrary code execution from the model.
- Model output is only a visible message plus an emotion word.
- Existing player pacts still gate local engine spending.
