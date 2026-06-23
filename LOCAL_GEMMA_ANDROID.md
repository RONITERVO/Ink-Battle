<!--
Copyright 2025 Roni Tervo

SPDX-License-Identifier: Apache-2.0
-->

# Local Gemma 4 Android Plan

The app uses a no-backend opponent:

- The JavaScript game owns all tactical decisions and remains fully playable offline without Gemma.
- On Android, the WebView exposes `LocalGemmaAndroid` through `LocalGemmaBridge.kt`.
- After user consent, the app's own resumable HTTPS downloader saves a `.litertlm` Gemma 4 model into the app's external files directory.
- LiteRT-LM loads the model locally. Gemma stays in the same system-instructed chat for two visible turns, then the bridge starts a fresh native chat.
- The fresh native chat carries raw text copied from the previous native chat window and includes the previous chat's tail user image. No generated or local summary is inserted.
- Gemma receives the labeled tactical context image and is asked to return exactly two lines: a visible opponent message and one emotion word from the randomized emotion vocabulary.
- The deterministic engine consumes the emotion word as a mood signal only. It never accepts unit, upgrade, turret, special, strategy, or order commands from the model.

## Model Choice

Default for the app's 6GB+ phone target: `Gemma 4 E2B`.

- E2B is 2.58GB and is the safer default for 6GB phones.
- E4B is 3.65GB and is selected automatically only when Android reports at least 12GB RAM.

Configured downloads:

- `Gemma 4 E2B`: `litert-community/gemma-4-E2B-it-litert-lm`
- `Gemma 4 E4B`: `litert-community/gemma-4-E4B-it-litert-lm`

## Native Files

- `app/src/main/java/com/ronitervo/inkbattle/LocalGemmaBridge.kt`
  - Model recommendation and install flow.
  - App-owned `.part` file downloader with redirect handling, resume support, and byte-level progress.
  - Process-scoped LiteRT-LM engine reuse across Activity/WebView recreation.
  - Two-turn shared conversation reuse for short-term chat continuity.
  - `ImageFile` paths retained until the shared conversation is reset or closed.
  - Raw previous-chat text and the previous tail user image are carried into the next native chat; no summary callback or local summary prompt is used.
  - Empty LiteRT responses reset the native chat before the next request.
  - GPU first, CPU fallback.
  - `ConversationConfig` uses one system instruction: Gemma is the blue opponent and must reply with one visible line plus one emotion word.
  - One prompt cap, one optional `ImageFile`, one streamed `message` phase, and raw text returned to JavaScript.
- `ink-battle.html`
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
adb logcat -v time -s InkBattleGemma:I
```

Each local model turn logs:

- `request.prompt.message`: final user-turn prompt passed to LiteRT-LM after the app's prompt cap.
- `request.context_image`: attached tactical context image byte count and MIME metadata.
- `conversation.created`, `conversation.reuse`, `conversation.image_retained`, `conversation.carryover_saved`, `conversation.carryover_applied`, `conversation.reset_after_two_turns`: native chat lifetime, retained image-file, and raw carryover diagnostics.
- `response.phase.message`: unmodified streamed Gemma text.
- `response.raw`: raw two-line model response returned to JavaScript.
- `js.response.emotion`: JavaScript parse result for reply and emotion.

## Safety Rules

- No API keys.
- No backend.
- No prompt/game-state upload for cloud inference.
- No arbitrary code execution from the model.
- Model output is only a visible message plus an emotion word.
- Non-pressure player pacts still gate local engine spending; Gemma receives a fixed `pressure: rush` stability tag only in its prompt/image context.
