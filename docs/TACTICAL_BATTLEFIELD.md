# Tabletop tactics · 2.3.0

New tabletop matches use the width of the book, from the rear cannon flank to
the front flank. The base sits in the center of that frontage. There are three
lightly scored routes, but no invisible lane walls: troops steer and spread in
continuous space. Both armies use the same movement, damage and targeting rules.
Classic 2D remains unchanged, including its Gemma integration.

## Playing with your hands

Drop a shop troop across the green rally strip to choose its starting route.
Once it is drawn, pinch a living troop (or point and hold the controller trigger)
and move sideways. A dotted pencil arrow previews the suggested route. Release
to give the suggestion. Dropping the suggestion near an enemy cannon or base
highlights that objective. Desktop mouse/touch dragging uses the same command.

The troop remains on the battlefield while selected. It can move, fire and take
damage; guidance never teleports it, carries it over enemies or makes it invulnerable.
Nearby fighting takes priority. An amber arrow means it is engaged, while green
means it is following the suggestion. Target preferences expire after 12 simulated
seconds; the new lateral route remains. Each nudge changes the route by at most
160 simulation units (0.3 book units), with a one-second reaction interval per
soldier. Losing tracking cancels the unfinished gesture. Carrying or scaling the
book keeps guidance in the book's coordinate system, like other held pieces.

Troops have understandable priorities rather than random refusal. They defend
themselves, keep a target briefly to avoid dithering, favor their route, and choose
between a base push and nearby cannon flanks. Unguided heavies notice opponents
across more of the field. Hand instructions can yield to combat and resume later.

Cannons turn on their docks and wait until aimed before firing. Projectiles start
at each weapon's modeled release point, travel through the target's plane, and
can miss a moving troop. A base blocks its own cannon from firing through it.
Health marks appear above damaged cannons. Destroying a cannon removes the weapon
and retains the paid dock; the owner can buy its replacement normally. Selling
still refunds 50% of the catalog price. Base destruction remains the victory condition.

## Rules and compatibility

`Session({battlefield:'tabletop'})` selects `tabletop-1.0.0`. The shared economy,
fixed 60 Hz clock, content catalog and public command contract remain authoritative.
`battlefield.js` owns the geometry used by simulation and rendering; `tabletop-combat.js`
owns spatial targeting, simultaneous intent, movement, aiming and damage. The
classic combat implementation is unchanged. New state exists only in tabletop
sessions. Replay validation checks the version against the selected profile.

Old classic and MR checkpoints load with their original rules and exact digests.
The restore message explains how to start a new tabletop battle to enable tactics;
an old battle is never silently converted. Classic UI does not expose guidance.

Units gain a `z` coordinate, heading, target and guidance state. Defense installations
have health, aim and a fresh ID each time they are bought. A projectile targeting a
destroyed/sold installation cannot damage its replacement in the same dock. Special
attacks use two-dimensional clusters and symmetric seeded dispersal. Melee and
projectile intentions are collected before damage, so lethal exchanges can trade.

The tabletop profile compensates for the new space explicitly:

- Defense health is age base HP times `0.24 + 0.08 × type index`, with the owner's
  HP multiplier. Dock foundations survive and award no farming reward.
- Defense range gains 120 simulation units because the real docks sit behind
  the old engine's firing point. Range is measured from the actual dock in 2D.
- Ordinary ranged troops deal 1.5× damage to light infantry and 0.5× to heavies.
  Siege retains its light-infantry resistance and 2× structure damage where defined.
  These changes preserve equal-budget counters after removing the old single-file queue.
- Spawn spacing, local separation and solid foundations prevent overlapping
  deployment and walking through bases. Movement and guidance use ordinary troop speed.
  A troop caught in a newly built dock's footprint walks clear within that same
  speed budget. Splash damage is centered on the projectile's impact point.

## Expansion and release checks

`npm run release:check` runs classic regression coverage, the classic 2,304-game
release sweep, tabletop scenarios and browser tests. Tabletop coverage includes:

- 294 equal-budget composition trials across all six ages, mirrored comparisons
  and a counter for every troop type.
- 576 accelerated physical-host matches across six policies, four difficulties,
  six ages and four seeds, including missed drops, guidance and full replay verification.
- Targeted tests for every cannon type and both sides, all four destructible
  installations, damage/refunds/rebuilding, old saves and guide ownership/rate limits.
  Artwork geometry checks cover articulated muzzle origins; regressions cover
  construction beneath troops and splash around a moving target.
- Real pointer input and emulated Quest hand/controller guidance, save/reload,
  all-age artwork and the 160-unit/eight-cannon rendering stress fixture.

The existing 250,000-triangle / 85-call / 30-texture desktop limits remain in force.
At most twelve lingering route arrows render at once, plus the held suggestions;
all guidance commands still simulate. This avoids covering the battlefield with
arrows. No per-unit meshes, model inference, external requests or physics runtime
were added. Desktop emulation does not establish headset frame times. The player's
roughly 13 ms average report applies to the earlier release; 2.3.0 needs a new
Quest hands/controllers check after hosting, especially crowded fights and aiming.
