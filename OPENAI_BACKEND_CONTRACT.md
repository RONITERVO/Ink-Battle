# OpenAI Opponent Backend Contract

The 1.0 client ships with a local Codex Director instead of direct OpenAI calls.
That is intentional: the OpenAI API uses API keys, and those secrets must not be
embedded in browser, WebView, or Android client code.

Official reference:
- https://platform.openai.com/docs/api-reference
- https://platform.openai.com/docs/quickstart

## Required Backend Shape

When the cloud opponent is added, put all OpenAI calls behind a server owned by
the app. The Android app should authenticate to your backend, and the backend
should call OpenAI with a server-side project key.

Recommended endpoint:

`POST /v1/director/decision`

Request:

```json
{
  "sessionId": "uuid",
  "difficulty": "hard",
  "version": "1.0.0",
  "memory": {
    "agreements": {
      "noSpecials": false,
      "noTurrets": false,
      "meleeOnly": false,
      "pressure": "balanced"
    },
    "notes": ["likes late-game rushes"]
  },
  "snapshot": {
    "time": 123.4,
    "player": { "age": 2, "hpRatio": 0.72, "gold": 430, "xp": 1280 },
    "enemy": { "age": 2, "hpRatio": 0.88, "gold": 920, "xp": 760 },
    "lane": { "playerUnits": 6, "enemyUnits": 4, "threatCount": 2, "heavyThreat": false }
  }
}
```

Response:

```json
{
  "chat": "I am saving for a turret slot, then I will counter-push.",
  "tool": {
    "name": "spawn_unit",
    "args": { "typeIndex": 1, "reason": "counter ranged pressure" }
  },
  "memoryPatch": {
    "notes": ["player overbuilds early ranged units"]
  }
}
```

Allowed tool names should match the local director tools:
- `spawn_unit`
- `buy_upgrade`
- `build_turret`
- `buy_turret_slot`
- `use_special`
- `evolve_enemy`
- `say`

## Safety Rules

- Never expose OpenAI API keys in the app package.
- Keep per-user rate limits and spend limits on the backend.
- Validate every tool response server-side and client-side before applying it.
- Keep a local fallback director so the game remains playable offline.
- Pin the production model string and regression-test decisions before updating it.
