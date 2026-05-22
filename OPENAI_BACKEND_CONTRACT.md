# Optional Cloud Opponent Contract

The client ships with an offline tactical engine. A cloud model, if added later,
must remain a voice and mood layer only. It must not choose purchases, upgrades,
turrets, specials, age timing, or other gameplay commands.

## Required Backend Shape

When a cloud opponent is added, put all model calls behind a server owned by the
app. The Android app should authenticate to your backend, and the backend should
hold any provider credentials server-side.

Recommended endpoint:

`POST /v1/opponent/message`

Request:

```json
{
  "sessionId": "uuid",
  "difficulty": "hard",
  "version": "1.0.8",
  "memorySummary": "Player asked for no specials and likes late-game rushes.",
  "agreements": ["no specials"],
  "snapshot": {
    "time": 123.4,
    "player": { "age": 2, "hpRatio": 0.72, "gold": 430 },
    "enemy": { "age": 2, "hpRatio": 0.88, "gold": 920 },
    "lane": {
      "playerUnits": 6,
      "enemyUnits": 4,
      "playerRanged": 3,
      "playerHeavy": 1,
      "threatCount": 2,
      "frontGap": 420
    }
  }
}
```

Response:

```json
{
  "message": "I see the ranged stack. I am not walking straight into it.",
  "emotion": "Determined",
  "summary": "Player prefers no specials and is leaning on ranged pressure in Castle Age."
}
```

The client may display `message`, parse `emotion` through the same local emotion
normalizer, and store `summary` as continuity memory. The local engine remains
the sole authority for gameplay.

## Safety Rules

- Never expose provider API keys in the app package.
- Keep per-user rate limits and spend limits on the backend.
- Treat model output as text only.
- Keep the offline engine complete so the game remains playable without network.
- Regression-test the offline engine separately from any cloud voice layer.
