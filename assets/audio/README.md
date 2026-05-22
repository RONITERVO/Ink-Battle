# Game Music Assets

The game music director expects the generated WAV files in this folder with
these exact names:

- `evolving_canvas.wav`
- `graphite_skirmish.wav`
- `codex_gemma.wav`

The Android Gradle build packages this folder automatically through the existing
root `assets/` sync task. The browser build also serves the same paths.

For store releases, keep these names stable. Future music rules can switch by
track id in `MUSIC_TRACKS` without changing asset paths.
