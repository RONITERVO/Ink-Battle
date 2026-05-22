# Age of War: Sketchbook Edition 1.0.8

This folder contains the 1.0 web game, offline PWA metadata, and an Android
WebView shell for Google Play packaging. The web app has one canonical source:
the root `Age_of_War_notebook_8.html` plus `manifest.webmanifest`,
`service-worker.js`, and `assets/`.

## What Shipped

- `Age_of_War_notebook_8.html`: the playable game with the local Codex Director.
- `index.html`: a GitHub Pages launcher that redirects to the playable game.
- `manifest.webmanifest`, `service-worker.js`, `assets/icon.svg`: offline web/PWA shell.
- `assets/audio/`: adaptive music catalog and generated tracks used by the in-game music director.
- `app/`, `settings.gradle`, `build.gradle`: native Android wrapper that packages generated copies of the root web app into app assets.
- `LOCAL_GEMMA_ANDROID.md`: the local Gemma 4 integration plan and safety notes.
- `GEMINI_AAB_PROMPT.md`: a compact prompt for Gemini when finalizing the Android Studio AAB build.

## Director Chat

The director is local in 1.0. It reads live game state, spends the enemy side
through tool-style actions, chats during play, and stores lightweight pacts in
localStorage. On Android, users can opt into a multi-GB Gemma 4 download. Once
the model is installed, LiteRT-LM gives the director higher-level local model
turns while the deterministic fallback keeps gameplay responsive.

Useful player messages:

- `no specials`
- `no turrets`
- `melee only`
- `truce for 30 seconds`
- `remember I like late game`
- `forget`

## Android Build

Prerequisites:

- JDK 17
- Android Studio with Android SDK Platform 36 and Build Tools 36.0.0
- Gradle 9.4.1 or Android Studio's bundled Gradle support

Build commands once Gradle/Android SDK are installed:

```powershell
.\gradlew.bat :app:assembleDebug
.\gradlew.bat :app:installDebug
.\gradlew.bat :app:bundleRelease
```

The Gradle task `syncWebAssets` copies the root web app into
`app/build/generated/web-assets` before Android packaging. Do not edit or commit
`app/src/main/assets`; the Android app should always consume the same web source
used by GitHub Pages.

## Release Notes

- The Android target SDK is 36, above Google Play's Android 15 / API 35 minimum for new apps and updates starting August 31, 2025.
- The Android project uses Android Gradle Plugin 9.2.0, which requires JDK 17 and Gradle 9.4.1.
- No OpenAI API key, unofficial OpenAI subscriber-login flow, or backend is included in the client.
- Local Gemma 4 model downloads require user consent and internet only for the model download. Inference runs on-device afterward.
- Local Gemma 4 turns use bounded mobile memory: the bridge keeps the same local chat for two visible turns, then starts a fresh native chat with raw previous-chat text plus the previous chat's tail user image. No summary is generated or inserted.
- The normal Gemma turn returns only a visible opponent message and one emotion word; all tactics remain inside the deterministic offline engine.
- Chunked `AgeOfWarGemma` logcat diagnostics are included for prompt/response diagnosis.
- Deterministic memory hygiene keeps recent player context and game facts without feeding emotion history back into Gemma.
- The offline engine now uses macro plans, matchup scoring, timing banks, turret pressure, and emotion-biased risk tolerance while still respecting non-pressure player pacts.
- Gemma director turns include a labeled tactical context image instead of a raw gameplay screenshot. The native bridge configures LiteRT-LM `visionBackend`, sends the image via the documented `ImageFile` path, and keeps those image files alive until the native chat is reset or closed.
- The LiteRT-LM engine is now process-scoped, so Activity/WebView recreation reuses the loaded Gemma model instead of unloading and reloading it.
- `Gemma 4 E2B` is the default 6GB+ phone model; `Gemma 4 E4B` is reserved for devices reporting at least 12GB RAM.
- Music playback starts from the user's difficulty tap. The music director now selects by age, tension, troop pressure, base danger, pause, and outcome; missing catalog files are skipped safely and `evolving_canvas.wav` remains the required fallback.

## Final Manual Checks

- Play each difficulty for at least one full age transition.
- Confirm `assets/audio/evolving_canvas.wav` starts after choosing a difficulty, loops cleanly, and the music toggle persists after reload.
- Fill the full `assets/audio/README.md` catalog before global release or document intentional omissions; verify missing optional files do not silence the active track.
- Confirm director pacts persist after reload.
- On a real phone, tap `Get Gemma`, download the model, go offline, and confirm Gemma director turns still appear.
- Capture Gemma diagnostics during a real match with `adb logcat -v time -s AgeOfWarGemma:I`.
- Confirm Android back button pauses the game.
- Build a signed release app bundle in Android Studio.
- Complete Play Console store listing, content rating, data safety, and closed testing before production rollout.
