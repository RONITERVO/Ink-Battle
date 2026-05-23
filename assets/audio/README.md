# Game Music Assets

This folder is the canonical music source for the web build, PWA build, and
Android WebView build. Gradle packages it automatically through the existing
root `assets/` sync task.

## Runtime Rules

- `evolving_canvas.wav` is the required fallback track.
- Every other track is optional during development, but the global release
  target is to fill the full catalog below.
- The game probes tracks lazily. Missing files are skipped and the current
  working track keeps playing.
- Preferred format is WAV. The runtime also accepts matching `.mp3` or `.ogg`
  files with the same base filename.
- Keep filenames lowercase and exact. Do not add spaces.
- Keep tracks instrumental, loopable, and free of copyrighted references.
- Avoid long silence, spoken words, hard fade-outs, or abrupt intros unless the
  track is an outcome loop.
- Target 44.1 kHz or 48 kHz stereo, normalized for mobile speakers with peaks
  under -1 dB.
- The runtime can randomize many variations of the same track. Variants are
  loaded lazily and each failed variation is skipped without disabling the
  whole track.

## Adding Track Variations

When Suno generates multiple good versions of one cue, keep them under the
same role and register them as variations in `MUSIC_TRACKS`.

Recommended naming pattern:

- Base: `graphite_skirmish.wav`
- Variants: `graphite_skirmish_v2.wav`, `graphite_skirmish_v3.wav`, ...

Example config in `Age_of_War_notebook_8.html`:

```js
{
  id: 'graphiteSkirmish',
  title: 'Graphite Skirmish',
  variants: ['graphite_skirmish', 'graphite_skirmish_v2', 'graphite_skirmish_v3'],
  scene: 'battle',
  // ... keep the same scoring fields (ageMin, tensionMin, priority, etc.)
}
```

Supported variation formats:

- `variants: ['base_name', 'base_name_v2']`
- `variants: [{ file: 'base_name_alt' }, { file: 'base_name_mix2' }]`
- `variants: [{ sources: ['assets/audio/custom_mix.ogg'] }]`
- `files: ['base_name', 'base_name_v2']` (alias for base-name variants)

Behavior:

- The director picks a random variation when switching to that track.
- A shuffle-bag avoids immediate repeats until all available variations cycle.
- If one variation file is missing/corrupt, it is skipped and other variations
  remain eligible.

## Track Catalog

| Filename | Role | Music Direction |
| --- | --- | --- |
| `evolving_canvas.wav` | Required fallback and broad match progression | Acoustic sketchbook opening evolving into orchestral/synth age progression. |
| `pencil_dawn.wav` | Opening, Stone/Castle low tension | Soft pencil percussion, acoustic plucks, light hand drums, curious but ready. |
| `graphite_skirmish.wav` | Early and mid-game normal battle | Upbeat acoustic math-rock, snappy drums, playful xylophone or plucked lead. |
| `inkline_advance.wav` | Early lane pressure | Faster graphite rhythm, tight percussion, rising bass, no huge modern elements. |
| `castle_march.wav` | Castle/Iron steady battle | Medieval march, frame drums, low strings, restrained brass, loopable momentum. |
| `renaissance_rush.wav` | Renaissance momentum | Snare march, staccato cello, brass answers, faster tactical energy. |
| `cannon_smoke.wav` | Siege, turrets, specials, base pressure | Heavy drums, cannon-like impacts, dark strings, tense but not final-boss scale. |
| `modern_warfare.wav` | Modern age combat | Orchestral drop, electric guitar support, aggressive strings, military drive. |
| `future_arpeggio.wav` | Future age low/medium pressure | Analog synth arpeggios, digital texture, clean pulse, thoughtful tech feel. |
| `neon_front.wav` | Future/Cosmic pressure | Cybernetic drums, heavy bass, sharp synth lead, urgent lane-control energy. |
| `cosmic_clash.wav` | Cosmic final age | Massive synthwave/orchestral hybrid, choir pads, triumphant brass, huge scale. |
| `last_page_siege.wav` | Critical HP or deathball pressure | Maximum tension loop, distorted low drums, alarm-like motifs, no melody clutter. |
| `codex_gemma.wav` | Pause/director/memory menu | Chillhop lo-fi beat, thoughtful cello, warm electric piano, subtle glitch. |
| `victory_canvas.wav` | Victory result loop | Short triumphant loop, warm resolution, sketchbook/cosmic motif callback. |
| `erased_pages.wav` | Defeat result loop | Melancholy but replayable loop, low piano/cello, paper-noise texture. |

## Gemini/Suno Prompt For Missing Tracks

Paste this into Gemini when asking it to create Suno Custom Mode prompts for any
missing files:

```text
You are composing missing music tracks for "Age of War: Sketchbook Edition",
a hand-drawn notebook lane strategy game that evolves from Stone/Castle ages to
Modern, Future, and Cosmic ages.

Use the exact filenames and roles from this track catalog. Only generate prompts
for files that are missing from assets/audio. Keep every output instrumental,
loopable, safe for a commercial global release, and distinct from the other
tracks so the game does not feel like it is replaying the same cue.

For each missing track, return:
1. Filename
2. Suno "Style of Music" text
3. Suno "Lyrics" box structure tags with no sung lyrics
4. Loop/edit notes

Hard requirements:
- No vocals or copyrighted style references.
- No long silence at the beginning or end.
- Make each track usable as a 60-150 second loop.
- Preserve the sketchbook identity with pencil, paper, acoustic, cello, or
  handmade percussion elements where possible.
- Add electronic/orchestral elements only as the age and pressure increase.
- Export WAV when possible, then save it using the exact filename.
```

After adding or replacing audio, run:

```powershell
.\gradlew.bat :app:assembleDebug
```

Then confirm the APK asset list contains the new files under
`assets/assets/audio/`.
