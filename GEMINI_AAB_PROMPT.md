# Prompt For Gemini In Android Studio / AI Studio

Use this prompt when asking Gemini to help produce the final signed Android App Bundle.

```text
You are helping finish the Android release build for an existing local-first game project. Do not load or reason through the entire 100KB HTML game unless a specific WebView asset issue appears.

Project summary:
- Root folder contains `Age_of_War_notebook_8.html`, a standalone canvas game.
- Android wrapper is in `app/`.
- `app/build.gradle` uses AGP 9.2.0, compileSdk/targetSdk 36, minSdk 23, versionName 1.0.8.
- AGP 9 has built-in Kotlin support, so Kotlin sources exist without applying `org.jetbrains.kotlin.android`.
- The WebView Activity is `app/src/main/java/com/sketchwar/ageofwar/MainActivity.java`.
- Native local model bridge is `app/src/main/java/com/sketchwar/ageofwar/LocalGemmaBridge.kt`.
- The bridge uses `DownloadManager` and `com.google.ai.edge.litertlm:litertlm-android:0.11.0`.
- Model downloads are Gemma 4 `.litertlm` files from Hugging Face LiteRT Community after user confirmation.
- E2B is default for 6GB+ phones; E4B is selected only for >=12GB RAM.
- `Age_of_War_notebook_8.html` calls `window.LocalGemmaAndroid` when present; browser mode keeps a deterministic local fallback.
- `syncGameAsset` copies the root HTML/PWA assets into `app/src/main/assets` before build.

Please focus only on release-blocking Android build/package issues:
1. Confirm Gradle sync requirements: JDK 17, Gradle 9.4.1, Android SDK Platform 36, Build Tools 36.0.0.
2. Check `app/build.gradle`, `AndroidManifest.xml`, `MainActivity.java`, and `LocalGemmaBridge.kt`.
3. If the LiteRT-LM 0.11.0 Kotlin API names differ from the current SDK, give the smallest patch for `LocalGemmaBridge.kt`.
4. Confirm release signing steps for an Android App Bundle, not APK.
5. Confirm the final file path for the `.aab`.
6. Do not suggest adding an OpenAI backend or API key.

Desired result:
- Debug build installs on a real 6GB+ Android phone.
- Player can tap Get Gemma, download model, go offline, and still get local model opponent messages.
- Gemma turns stay stable in long matches because the LiteRT-LM engine is process-scoped, while the bridge reuses one bounded local chat for up to about nine text turns. Multimodal chats reset earlier after three retained image turns or any empty native response, then start a fresh chat whose opening prompt can include the app's compact continuity summary. The model returns only a visible message and one emotion word; the JavaScript engine owns all tactics.
- Gemma turns attach a labeled tactical context image when available; prompt context tells Gemma it controls the red/right enemy side and the image labels define hit lines, front lines, danger zones, and unit markers. The native bridge configures `visionBackend`, sends the image via `Content.ImageFile`, and retains that file until the native chat resets or closes.
- Release build generates `app/build/outputs/bundle/release/app-release.aab`.
```
