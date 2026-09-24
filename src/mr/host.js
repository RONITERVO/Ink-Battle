import { Session } from '../sdk/session.js';
import { commandError } from '../core/commands.js';
import {
  shopOffers,
  TOOLS,
  dropZone,
  REASONS,
  DIFFICULTIES
} from './catalog.js';

/** Input-independent MR adapter. This module can run unchanged in Node. */
export class TabletopHost {
  constructor({ session = null, onEvent = () => {} } = {}) {
    this.session = session;
    this.onEvent = onEvent;
    this.speed = 1;
    this.quality = 'mist';
    this.holds = new Map();
    this.sequence = 0;
    this.accumulator = 0;
    this.drops = [];
  }
  observe() {
    return this.session?.observe() ?? null;
  }
  offers(state = this.observe()) {
    return [...shopOffers(state), ...TOOLS];
  }
  offer(id) {
    return this.offers().find((o) => o.id === id);
  }
  reason(offer, state = this.observe()) {
    if (!offer) return 'unknown-offer';
    if (offer.action === 'new' && state?.running && !state.paused)
      return 'pause-first';
    if (offer.action) return null;
    if (offer.kind === 'slot' && state?.player.unlockedSlots >= 4) return 'max-docks';
    return state ? commandError(state, 1, offer.command) : 'not-started';
  }
  say(type, data = {}) {
    this.onEvent({ type, ...data });
  }
  fail(error) {
    this.say('message', { text: REASONS[error] || error, error });
    return { ok: false, error };
  }
  start(difficulty = 'normal', options = {}) {
    if (!DIFFICULTIES.includes(difficulty)) return this.fail('unknown-offer');
    this.cancelAll();
    this.session = new Session({ ...options, difficulty });
    this.accumulator = 0;
    this.speed = 1;
    this.say('start', { difficulty });
    return { ok: true };
  }
  grab(owner, offerId) {
    if (this.holds.has(owner)) return this.fail('already-holding');
    const offer = this.offer(offerId),
      error = this.reason(offer);
    if (error) return this.fail(error);
    const token = {
      id: ++this.sequence,
      owner,
      offer: structuredClone(offer),
      age: this.observe()?.player.age ?? null
    };
    this.holds.set(owner, token);
    this.say('grab', { token });
    return { ok: true, token };
  }
  cancel(owner) {
    const token = this.holds.get(owner);
    this.holds.delete(owner);
    if (token) this.say('cancel', { token });
  }
  cancelAll() {
    for (const owner of [...this.holds.keys()]) this.cancel(owner);
  }
  drop(owner, point) {
    const token = this.holds.get(owner);
    if (!token) return { ok: false, error: 'not-held' };
    this.holds.delete(owner);
    const { offer } = token,
      zone = dropZone(offer, point, this.observe());
    let result;
    if (zone) result = this.fail(zone);
    else if (token.age !== (this.observe()?.player.age ?? null))
      result = this.fail('stale-age');
    else {
      const error = this.reason(offer);
      if (error) result = this.fail(error);
      else if (offer.action) result = this.tool(offer);
      // Taking the token out of holds makes release idempotent, including after
      // checkpoint restoration, without reusing a previous session receipt id.
      else result = this.session.command(1, offer.command);
    }
    if (!result.ok && !zone)
      this.say('message', {
        text: REASONS[result.error] || result.error,
        error: result.error
      });
    this.drops.push({
      offer: offer.id,
      tick: this.session?.tick ?? 0,
      point: { ...point },
      ...result
    });
    if (this.drops.length > 256) this.drops.shift();
    this.say('drop', { token, point, result });
    return result;
  }
  tool(offer) {
    switch (offer.action) {
      case 'start':
        return this.start(offer.difficulty);
      case 'pause':
        if (!this.session?.running) return this.fail('not-started');
        this.session.pause(!this.session.paused);
        this.accumulator = 0;
        this.say('message', {
          text: this.session.paused
            ? 'Paused. Drop the hourglass onto the page to resume.'
            : 'The battle continues.'
        });
        break;
      case 'speed':
        this.speed = (this.speed % 3) + 1;
        this.say('message', { text: `Battle speed: ${this.speed}×` });
        break;
      case 'quality':
        this.quality =
          this.quality === 'mist'
            ? 'clear'
            : this.quality === 'clear'
              ? 'comfort'
              : 'mist';
        this.say('quality', { quality: this.quality });
        break;
      case 'music':
        this.say('music');
        break;
      case 'new':
        this.cancelAll();
        this.session = null;
        this.accumulator = 0;
        this.say('menu');
        break;
      case 'exit':
        this.pauseForInterruption();
        this.say('exit');
        break;
      default:
        return this.fail('unknown-offer');
    }
    return { ok: true };
  }
  pauseForInterruption() {
    this.cancelAll();
    this.accumulator = 0;
    if (this.session?.running && !this.session.paused) this.session.pause(true);
  }
  update(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0)
      throw new Error('Invalid elapsed time');
    if (seconds >= 5) {
      this.pauseForInterruption();
      return;
    }
    if (!this.session?.running || this.session.paused) return;
    this.accumulator += seconds * this.speed * 60;
    const ticks = Math.floor(this.accumulator);
    if (ticks) {
      this.accumulator -= ticks;
      this.advance(ticks);
    }
  }
  advance(ticks) {
    if (!this.session) return;
    const wasRunning = this.session.running,
      result = this.session.advance(ticks);
    if (result.events.length) this.say('combat', { events: result.events });
    if (wasRunning && !this.session.running) {
      this.cancelAll();
      this.say('finish', { winner: this.session.winner });
    }
    return result;
  }
}
