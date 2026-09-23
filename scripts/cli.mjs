import { createInterface } from 'node:readline';
import { Session } from '../src/sdk/session.js';
import { AGES } from '../src/content/ages.js';
let session = new Session();
const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
for await (const line of input) {
  try {
    if (Buffer.byteLength(line) > 8 * 1024 * 1024) throw new Error('Request too large');
    const request = JSON.parse(line);
    let result;
    switch (request.op) {
      case 'create': session = new Session(request.options); result = session.observe(); break;
      case 'observe': result = session.observe(); break;
      case 'catalog': result = AGES; break;
      case 'command': result = session.command(request.team ?? 1, request.command, request.id); break;
      case 'advance': result = request.id ? session.advanceOnce(request.id, request.ticks) : session.advance(request.ticks); break;
      case 'pause': session.pause(request.paused); result = { paused: session.paused }; break;
      case 'replay': result = session.replay(); break;
      case 'verify': result = { digest: Session.fromReplay(request.replay).digest() }; break;
      case 'checkpoint': result = session.checkpoint(); break;
      case 'restore': session = Session.restore(request.checkpoint); result = session.observe(); break;
      default: throw new Error('Unknown operation');
    }
    console.log(JSON.stringify({ ok: true, result }));
  } catch (error) { console.log(JSON.stringify({ ok: false, error: error.message })); }
}
