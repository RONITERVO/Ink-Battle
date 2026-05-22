<div align="center">

# Age of War: Sketchbook Edition

**A real-time strategy lane war where civilizations evolve from stone clubs to cosmic weapons—all sketched alive on a single, coffee-stained HTML canvas.**

[![Play on GitHub Pages](https://img.shields.io/badge/Play%20Now-GitHub%20Pages-24292F?style=for-the-badge&logo=github&logoColor=white)](https://ronitervo.github.io/Scetch-War/)
&nbsp;
[![Android Wrapper](https://img.shields.io/badge/Android-WebView%20Build-3DDC84?style=for-the-badge&logo=android&logoColor=white)](app/)
&nbsp;
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Shell-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](manifest.webmanifest)

</div>

---

## 🖋️ The Canvas Battlefield

> You drop 15 gold on a Clubman. He doesn't just slide across the screen—he *boils*. Every line of his body jitters in rough, procedural "Squigglevision" as he marches right. 
>
> In the margins, Opponent is watching. You click the commander HUD and type: *"no ranged units."* The AI reads it, pins a `melee only` pact to its legal pad, and stops building Slingers. But it's not stupid. It immediately counters your squishy infantry by rushing a heavy Dino Rider. Its status updates to `! Aggravated`.
>
> Your base takes a hit. The adaptive music swells from a steady beat to a frantic march. You bank 400 XP and hit **Evolve**. 
>
> A procedural watercolor wash bleeds across the paper, shifting the era from prehistoric grays to Castle Age blues. You queue a Knight. The arms race accelerates through six ages of history—straight into orbital lasers and cosmic motherships—until someone's base is literally erased from the page.

---

## ⚙️ The Tech (All in one `.html` file)

*   **No Sprites, Pure Code:** Every unit, attack, and watercolor background is drawn mathematically. Lines jitter and warp every few frames to simulate a turbulent, hand-drawn animation style.
*   **The Codex Director (Live AI):** It analyzes lane pressure, manages an emotional state, and chats with you. Type "truce for 30s" or "no turrets" and it parses the text to alter its build rules in real-time.
*   **Local LLM Vision (Optional):** Play in a browser for a highly competent deterministic AI, or use the Android wrapper to feed a physical "tactical minimap" into an on-device Gemma LLM, letting the AI actually *see* the board and talk trash based on your unit composition.
*   **Zero-GC Engine:** Built with strict `1/60s` fixed-timestep physics and pre-allocated object pools. The game stays buttery smooth even when the screen is flooded with 500+ units on **Impossible** difficulty.
*   **Adaptive Audio:** The music engine crossfades tracks dynamically based on your current Age, lane tension, and base health.

---

## 🚀 Quick Start

**Play Instantly:**
Since the entire game (rendering, physics, AI) is zero-dependency, you can just open `Age_of_War_notebook_8.html` in any browser.

**Deploy (GitHub Pages):**
The repo is pre-configured. `index.html` points to the engine, and the included `manifest.webmanifest` + `service-worker.js` makes it an installable, fully offline PWA.

**Native Gemma Build:**
To unlock the local LLM vision integration, build the Android WebView shell (requires JDK 17 & Android SDK):
```powershell
.\gradlew.bat :app:assembleDebug
```
*(See `LOCAL_GEMMA_ANDROID.md` for AI setup details).*

---

## 🤝 Contributing

Contributions are welcome! Please ensure any gameplay, balance, or rendering changes are made directly to `Age_of_War_notebook_8.html` so the Android and Web versions remain perfectly in sync. 

1. Fork it & Branch it.
2. Test your changes locally.
3. Submit a PR with a summary of how it impacts the "feel" of the notebook war.

## 📄 License

Distributed under the [Apache 2.0 License](LICENSE).