# Age of War: Sketchbook Edition

Age of War: Sketchbook Edition is a hand-drawn lane strategy game built around one core playable file: `Age_of_War_notebook_8.html`.

You pick a difficulty, start in the Stone Age, and push through six eras while defending your base and breaking the enemy base. The whole experience is styled like a living notebook page with rough ink lines, watercolor washes, paper texture, and animated sketch effects.

## How It Plays

Each match is real-time and deterministic (fixed timestep):

- Earn gold passively over time.
- Spend gold on three unit types each age (light/melee, ranged, heavy).
- Switch tabs to build turrets or buy upgrades (damage, HP, economy).
- Spend XP to evolve to the next age and unlock new unit/turret sets.
- Trigger age-specific special abilities when cooldown is ready.
- Win by reducing enemy base HP to zero before yours falls.

Difficulty settings (`Normal`, `Hard`, `Harder`, `Impossible`) change enemy economy, damage, HP scaling, XP scaling, and AI aggression.

## Signature Features

- Sketchbook visual identity: rough-line rendering, jittered strokes, paper grain, and procedural watercolor backgrounds.
- Six full ages: Stone, Castle, Renaissance, Modern, Future, Cosmic.
- Age-specific specials: Meteor Shower, Arrow Volley, Cannon Barrage, Airstrike, Orbital Laser, Void Rift.
- Local persistence: beaten difficulty medals and director agreements are stored in localStorage.
- Tooltips on unit/turret buttons with live stats and descriptions.
- Pause/resume overlay and auto-pause when tab visibility is lost.

## Codex Director (Enemy AI + Chat)

The opponent is not only an economy/army AI. It also has a local "Codex Director" panel that:

- Chats with the player during the match.
- Tracks pacts and short memory notes.
- Adapts spending behavior (rush/balanced/mercy pressure plans).
- Executes tool-style actions like spawning units, buying upgrades, building turrets, and using specials.

Example chat commands:

- `no specials`
- `no turrets`
- `melee only`
- `go easy`
- `rush me`
- `truce for 30 seconds`
- `remember I like late game`
- `forget`

## Optional Local Gemma (Android)

In browser mode, the director runs with local deterministic logic.

In the Android build, a Local Gemma bridge can be used to install/load an on-device model and request higher-level director turns, while fallback logic keeps matches responsive.

## Project Structure

- `Age_of_War_notebook_8.html`: main playable game (web entry point).
- `manifest.webmanifest`, `service-worker.js`, `assets/`: PWA/offline shell assets.
- `app/`: Android WebView wrapper project that packages the game into app assets.
- `README_RELEASE.md`: release and packaging notes.

## Run Locally

### Web

Quick play:

- Open `Age_of_War_notebook_8.html` directly in a browser.

For service worker/PWA behavior:

- Serve the folder over HTTP (`http://...`) instead of opening `file://...`.

### Android

Prerequisites:

- JDK 17
- Android SDK platform/build tools required by the Gradle config

Build examples:

```powershell
gradle :app:assembleDebug
gradle :app:bundleRelease
```

---

If you enjoy lane strategy games and stylized visuals, this edition focuses on readable mechanics, expressive presentation, and a surprisingly interactive AI rival.