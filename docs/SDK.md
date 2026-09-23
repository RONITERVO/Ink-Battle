# Programmatic play

Node 22+ can import the dependency-free SDK directly. The browser bundle exposes
the same class as `window.InkBattle.Session` for local hosts.

```js
import { Session } from './src/sdk/session.js';
const game = new Session({ seed: 42, difficulty: 'normal' });
const player = game.client(1);
player.command({ type: 'unit', index: 0 }, 'opening');
game.advanceOnce('first-second', 60);
console.log(player.observe());
const replay = game.replay();
const restored = Session.fromReplay(replay);
```

Options: uint32 `seed`, `difficulty` (normal/hard/harder/impossible), `startAge`
(zero-based), and `opponent` (boolean, default true). A new session is a new match.
Observations expose both armies because this is a public-information lane game.

Commands: `unit`/`turret` with `index`, `upgrade` with `stat` (hp/dmg/econ), and
`sell`, `slot`, `evolve`, `special` without extra fields. Unknown fields/types throw;
unaffordable or contextually illegal actions return `{ok:false,error}` without spending.
Observe `legal(team, command)` to drive controls. Commands while paused/ended are denied.
`advance(ticks)` returns resulting tick and events; `{events:false}` omits presentation
events during bulk simulation. `pause`, `agreements`, `truce`, `emotion`, `checkpoint`,
and `restore` are trusted host operations. `decide(team, style)` reads state to propose
a legal tactical action or returns null; calling it never advances time.

## Terminal / tool loop

Run `node scripts/cli.mjs`, then write one JSON object per line. Each response is
one JSON object. The CLI keeps its session between lines and never starts a server.

```json
{"op":"create","options":{"seed":42,"difficulty":"normal"}}
{"op":"catalog"}
{"op":"command","team":1,"command":{"type":"unit","index":0},"id":"opening"}
{"op":"advance","ticks":600,"id":"ten-seconds"}
{"op":"observe"}
{"op":"checkpoint"}
{"op":"replay"}
```

Also supported: `pause` with `paused`, `restore` with `checkpoint`, and `verify`
with `replay`. Request IDs are optional and provide idempotency when supplied.
This local process is suitable for an agent/tool adapter. There is no bundled MCP
server or HTTP mutation endpoint.

## Optional browser model diagnostics

The browser host exposes `InkBattle.gemma.status()` and `InkBattle.gemma.turns()`
(copies of at most 100 applied replies in the current match). The opt-in model is
enabled through its visible settings. `InkBattle.gemma.request(text)` requests a
turn using the same pause, readiness, rate and busy checks as player chat; it returns
false if no request was submitted. `InkBattle.gemma.stop()` releases the browser
worker and restores the neutral opponent mood. These are host helpers, not engine
or remote inference APIs. The engine `Session` remains independent of the model.
