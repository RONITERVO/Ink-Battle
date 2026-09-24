import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Session } from '../src/sdk/session.js';
import { createState, side } from '../src/core/state.js';
import { applyCommand } from '../src/core/commands.js';
import { step } from '../src/core/engine.js';
import { AGES } from '../src/content/ages.js';
import { FIELD, cannonPoint, cannonMuzzle, distance, unitRadius, worldX, worldZ, TABLETOP_RULES_VERSION } from '../src/core/battlefield.js';
import { TabletopHost } from '../src/mr/host.js';
import { Interaction } from '../src/mr/interaction.js';
import { toWorld } from '../src/mr/spatial.js';
import { assertInvariants, COMPOSITIONS, runComposition } from '../src/simulation/run.js';
import * as THREE from 'three';
import { InkBatch } from '../src/mr/ink-batch.js';
import { cannonModel } from '../src/mr/defense-models.js';
import { PENCIL } from '../src/mr/pencil-palette.js';

function state(age = 0) {
  const s = createState({ battlefield: 'tabletop', startAge: age, opponent: false });
  s.player.gold = s.enemy.gold = 1e8;
  return s;
}
function troop(s, team, index, x, z) {
  z=Math.max(-236,Math.min(236,z));
  side(s,team).deployTimer = 0;
  assert.ok(applyCommand(s,team,{type:'unit',index,z}).ok);
  const u = s.units.at(-1);
  Object.assign(u,{x,z,routeZ:z,drawProgress:1});
  return u;
}
function cannon(s, team, index = 0) {
  assert.ok(applyCommand(s,team,{type:'turret',index}).ok);
  const p=side(s,team),slot=p.turrets.findLastIndex(t=>t!==null);
  p.turretProgress[slot]=1;
  return slot;
}
function advance(s, ticks) { for(let i=0;i<ticks && s.running;i++) { step(s); s.events=[]; } }

test('tabletop rules are versioned separately and classic 2.2.4 checkpoints remain byte-compatible', () => {
  const old=JSON.parse(readFileSync(new URL('./fixtures/cannons-2.2.4.checkpoint.json',import.meta.url),'utf8'));
  assert.equal(Session.restore(old).digest(),old.replay.digest);
  const classic=new Session({opponent:false});
  assert.equal(classic.observe().battlefield,undefined);
  assert.equal(classic.command(1,{type:'unit',index:0,z:0}).ok,false);
  assert.equal(classic.command(1,{type:'guide',id:1,x:300,z:0}).error,'wrong-battlefield');
  const s=new Session({battlefield:'tabletop',opponent:false});
  assert.equal(s.observe().version,TABLETOP_RULES_VERSION);
  s.command(1,{type:'unit',index:0,z:-180}); s.advance(60);
  const u=s.observe().units[0],before=s.observe();
  const command={type:'guide',id:u.id,x:1100,z:230};
  assert.ok(s.command(1,command,'guide-once').ok);
  assert.equal(s.observe().units[0].x,u.x); assert.equal(s.observe().units[0].z,u.z);
  assert.equal(s.observe().player.gold,before.player.gold);
  assert.ok(s.command(1,command,'guide-once').ok);
  assert.equal(s.command(1,command).error,'guide-cooldown');
  for(const c of [{...command,id:999},{...command,x:NaN},{...command,z:271},{...command,x:2000}]) assert.equal(s.command(1,c).ok,false);
  assert.equal(s.command(-1,command).error,'unavailable-unit');
  s.advance(120); assert.equal(Session.restore(s.checkpoint()).digest(),s.digest());
  const bad=s.replay(); bad.version='2.0.0'; assert.throws(()=>Session.fromReplay(bad),/mismatch/);
  assert.throws(()=>new Session({battlefield:'unknown'}),/battlefield/);
  const fixture=JSON.parse(readFileSync(new URL('./fixtures/tabletop-1.0.0.checkpoint.json',import.meta.url),'utf8'));
  assert.equal(Session.restore(fixture).digest(),fixture.replay.digest,'Persisted wide-field aiming/guidance agrees across CI platforms');
});

test('automatic deployment uses the width, while a physical shop drop selects its route', () => {
  const s=new Session({battlefield:'tabletop',opponent:false});
  for(let i=0;i<5;i++) { assert.ok(s.command(1,{type:'unit',index:0}).ok); s.advance(30); }
  assert.ok(new Set(s.observe().units.map(u=>u.routeZ)).size>=3);
  const host=new TabletopHost(); host.start('normal',{opponent:false});
  host.grab('hand','unit-0'); assert.ok(host.drop('hand',{x:-.65,y:0,z:-.25}).ok);
  assert.ok(host.observe().units[0].z < -180);
  assert.equal(host.observe().units[0].x,180,'Drop chooses width, never teleports along the length');
  host.advance(60);host.grab('hand','unit-0'); assert.ok(host.drop('hand',{x:-.65,y:0,z:.6}).ok);
  assert.ok(host.observe().units[1].z>200);
});

test('guidance is bounded walking with combat priority and resumes after the threat passes', () => {
  const s=state(),u=troop(s,1,0,600,0),enemy=troop(s,-1,0,655,0);
  assert.ok(applyCommand(s,1,{type:'guide',id:u.id,x:1100,z:230}).ok);
  assert.equal(u.guide.z,FIELD.maxNudge);
  step(s); assert.equal(u.intent,'engaged'); assert.equal(u.target.id,enemy.id);
  assert.ok(Math.abs(u.z)<1,'Does not abandon a melee to follow a route');
  enemy.hp=0;step(s); advance(s,30);
  assert.equal(u.intent,'following'); assert.ok(u.z>0);
  const before={x:u.x,z:u.z};step(s);
  assert.ok(distance(u,before)<=u.speed/60+1e-5,'Guidance cannot exceed ordinary walking speed');
  assertInvariants(s);
});

test('both armies can destroy any cannon and leave its paid foundation reusable', () => {
  for(const team of [1,-1]) for(let slot=0;slot<4;slot++) {
    const s=state(),defender=side(s,-team);
    for(let i=0;i<=slot;i++) { if(i) assert.ok(applyCommand(s,-team,{type:'slot'}).ok); cannon(s,-team); }
    const pad=cannonPoint(-team,slot), u=troop(s,team,2,pad.x-team*90,pad.z);
    // Test the exact selected structure independent of neighboring defenses.
    for(let i=0;i<4;i++) defender.turretTimers[i]=100;
    assert.ok(applyCommand(s,team,{type:'guide',id:u.id,x:pad.x<95?95:pad.x>1185?1185:pad.x,z:pad.z}).ok);
    assert.equal(u.guide.target.slot,slot);
    const original=defender.turretIds[slot];
    for(let i=0;i<600 && defender.turrets[slot]!==null;i++) step(s);
    assert.equal(defender.turrets[slot],null,`${team}/${slot}`);
    assert.equal(defender.unlockedSlots,slot+1);assert.equal(defender.turretHp[slot],0);
    assert.ok(applyCommand(s,-team,{type:'turret',index:2}).ok);
    assert.notEqual(defender.turretIds[slot],original,'Replacement has a new identity');
  }
});

test('all eighteen defenses turn, release from their real dock and keep projectiles in the target plane', () => {
  for(let age=0;age<AGES.length;age++) for(let index=0;index<3;index++) for(const team of [1,-1]) {
    const s=state(age);cannon(s,team,index);
    const enemy=troop(s,-team,0,team===1?390:890,-130);
    enemy.speed=0;enemy.range=0;
    for(let i=0;i<100 && !s.projectiles.some(p=>p.sourceSlot===0);i++) step(s);
    const p=s.projectiles.find(p=>p.sourceSlot===0);
    assert.ok(p,`Missing shot ${age}/${index}/${team}`);
    const heading=side(s,team).turretAim[0].heading;
    const muzzle=cannonMuzzle(team,0,age,index,heading);
    assert.equal(p.startX,muzzle.x);assert.equal(p.startZ,muzzle.z);assert.equal(p.startY,muzzle.y);
    assert.equal(p.targetZ,enemy.z);assert.equal(p.target.id,enemy.id);
    const cross=(p.targetX-p.startX)*Math.sin(heading)-(p.targetZ-p.startZ)*Math.cos(heading);
    assert.ok(Math.abs(cross)<1e-5,'Shot direction follows the barrel');
  }
});

test('shot origins match articulated catapults and barrel flashes at release, including yaw and recoil',()=>{
  const batch=new InkBatch(new THREE.Group(),{capacity:600});
  const line=batch.line.bind(batch);
  let tips=[],catapult=false;
  batch.line=(a,b,r,color)=>{
    if(catapult ? b[0]===.058 && b[1]===.151 : color===PENCIL.paper) tips.push(batch.point(catapult?b:a));
    return line(a,b,r,color);
  };
  for(const [age,index] of [[0,0],[1,0],[2,0],[2,1],[2,2],[3,0],[3,2],[4,0],[4,1],[5,0]]) for(const team of [1,-1]) {
    tips=[];catapult=age<2;
    const heading=team===1?.35:Math.PI-.35,pad=cannonPoint(team,0);
    batch.begin();batch.model(worldX(pad.x),.044,worldZ(pad.z),.83,team,-(heading-(team===1?0:Math.PI)));
    cannonModel(batch,age,index,PENCIL.player,false,{strike:1,recoil:1,prepare:0,flash:1},true);
    assert.ok(tips.length,`No sampled release point for ${age}/${index}`);
    const mean=[0,1,2].map(axis=>tips.reduce((sum,p)=>sum+p[axis],0)/tips.length);
    const muzzle=cannonMuzzle(team,0,age,index,heading);
    const expected=[worldX(muzzle.x),(600-muzzle.y)*FIELD.worldScale,worldZ(muzzle.z)];
    for(let axis=0;axis<3;axis++) assert.ok(Math.abs(mean[axis]-expected[axis])<1e-8,`${age}/${index}/${team} axis ${axis}`);
  }
});

test('incoming cannon shots cannot damage a rebuilt cannon in the same slot', () => {
  const s=state(2);cannon(s,-1);
  const pad=cannonPoint(-1,0),u=troop(s,1,2,850,pad.z);
  applyCommand(s,1,{type:'guide',id:u.id,x:1180,z:pad.z});
  step(s);assert.equal(s.projectiles.some(p=>p.target.kind==='turret'),true);
  applyCommand(s,-1,{type:'sell',slot:0});cannon(s,-1,2);
  u.attackCooldown=100;
  const hp=s.enemy.turretHp[0];advance(s,120);
  assert.equal(s.enemy.turretHp[0],hp);
});

test('a foundation purchased beneath a heavy troop lets it walk clear without a speed boost',()=>{
  for(const team of [1,-1]) for(let slot=1;slot<4;slot++) {
    const s=state(5);
    while(side(s,team).unlockedSlots<slot) assert.ok(applyCommand(s,team,{type:'slot'}).ok);
    const pad=cannonPoint(team,slot),u=troop(s,-team,2,team===1?95:1185,pad.z);
    const minimum=pad.radius+unitRadius(u);
    assert.ok(distance(u,pad)<minimum,'Troop occupies the future dock footprint');
    assert.ok(applyCommand(s,team,{type:'slot'}).ok);
    for(let tick=0;tick<120;tick++) {
      const before={x:u.x,z:u.z};step(s);
      assert.ok(distance(u,before)<=u.speed/60+1e-5,`Dock ${team}/${slot} moved a troop too far`);
    }
    assert.ok(distance(u,pad)>=minimum-.001,'Troop eventually clears the built foundation');
    assertInvariants(s);
  }
});

test('splash stays centered on the visible impact when its large target has moved',()=>{
  for(const team of [1,-1]) {
    const s=state(3),x=value=>team===1?value:1280-value;
    const target=troop(s,-team,2,x(680),0);
    const besideImpact=troop(s,-team,1,x(580),-40);
    const besideTarget=troop(s,-team,1,x(715),40);
    for(const u of s.units) {u.speed=0;u.attackCooldown=100;}
    const before=s.units.map(u=>u.hp);
    s.projectiles.push({id:s.nextId++,team,type:'cannonball',sourceRole:2,dmg:100,splashRadius:80,
      target:{kind:'unit',id:target.id},startX:x(300),startY:560,startZ:0,
      targetX:x(600),targetY:560,targetZ:0,flightTicks:60,elapsed:59,arc:true,active:true,hit:false,life:0});
    step(s);
    assert.equal(target.hp,before[0]-100,'Moving heavy remains within direct-hit tolerance');
    assert.equal(besideImpact.hp,before[1]-35,'Troop beside the explosion takes splash');
    assert.equal(besideTarget.hp,before[2],'Troop outside the explosion is untouched');
    const impact=s.events.find(e=>e.type==='impact');
    assert.equal(impact.x,x(600));assert.equal(impact.z,0);
  }
});

test('mirrored open-field combat is fair, including simultaneous lethal hits', () => {
  const duel=state();const a=troop(duel,1,0,620,0),b=troop(duel,-1,0,660,0);
  a.hp=b.hp=8;step(duel);assert.equal(duel.units.length,0);assert.deepEqual(duel.metrics.kills,{'1':1,'-1':1});
  for(let age=0;age<AGES.length;age++) {
    const s=state(age);
    for(const team of [1,-1]) for(let i=0;i<3;i++) troop(s,team,i,team===1?480-i*40:800+i*40,-160+i*160);
    const mirror=structuredClone(s);
    [mirror.player,mirror.enemy]=[mirror.enemy,mirror.player];
    for(const u of mirror.units) {u.team=-u.team;u.x=1280-u.x;u.heading=u.team===1?0:Math.PI;}
    advance(s,900);advance(mirror,900);
    assert.equal(s.player.hp,mirror.enemy.hp);assert.equal(s.enemy.hp,mirror.player.hp);
    for(const u of s.units) {
      const v=mirror.units.find(v=>v.id===u.id);assert.ok(v);assert.equal(u.hp,v.hp);
      assert.ok(Math.abs(u.x+v.x-1280)<.002);assert.ok(Math.abs(u.z-v.z)<.002);
    }
  }
});

test('live-troop nudges share hand/controller release semantics without suspending combat or duplicating units', () => {
  for(const scale of [.2,.55,1.6]) {
    const host=new TabletopHost();host.start('normal',{opponent:false});
    host.session.command(1,{type:'unit',index:0,z:0});host.advance(60);
    const u=host.observe().units[0], table={position:{x:1,y:.8,z:-2},yaw:.7,scale};
    const input=new Interaction(host,table);
    assert.ok(input.begin('hand',`troop-${u.id}`,toWorld({x:worldX(u.x),y:.14,z:worldZ(u.z)},table)));
    host.advance(60); assert.ok(host.observe().units[0].x>u.x,'A held suggestion cannot freeze the soldier');
    const before=host.observe().units[0];
    input.move('hand',toWorld({x:worldX(before.x),y:.3,z:.45},table),1);
    input.release('hand');assert.equal(input.flights.size,0);
    assert.equal(host.observe().units.length,1);assert.equal(host.observe().units[0].z,before.z);
    assert.ok(host.observe().units[0].guide.z>0);assert.equal(host.drops.at(-1).ok,true);
    assert.equal(Session.restore(host.session.checkpoint()).digest(),host.session.digest());
  }
});

test('every tabletop army composition is mirrored and each troop retains an equal-budget counter in all ages',()=>{
  for(let age=0;age<AGES.length;age++) {
    const rows=COMPOSITIONS.flatMap(left=>COMPOSITIONS.map(right=>runComposition({age,left,right,battlefield:'tabletop'})));
    for(const row of rows) {
      const reverse=rows.find(r=>r.left===row.right && r.right===row.left);
      assert.ok(Math.abs(row.score+reverse.score)<1e-6,`${age}: ${row.left} vs ${row.right}`);
    }
    for(let unit=0;unit<3;unit++) assert.ok(rows.some(r=>r.left===String(unit) && r.right.length===1 && r.winner===-1),`${AGES[age].units[unit].name} needs a counter`);
  }
});

test('special dispersal remains mirrored across the two-dimensional field',()=>{
  for(let age=0;age<AGES.length;age++) {
    const s=state(age);
    for(const team of [1,-1]) for(let i=0;i<3;i++) {
      const u=troop(s,team,i,team===1?400:880,-170+i*170);
      u.speed=0;u.attackCooldown=100;u.hp=u.maxHp=1e7;
    }
    const mirror=structuredClone(s);
    [mirror.player,mirror.enemy]=[mirror.enemy,mirror.player];
    for(const u of mirror.units) {u.team=-u.team;u.x=1280-u.x;u.heading=u.team===1?0:Math.PI;}
    assert.ok(applyCommand(s,1,{type:'special'}).ok);
    assert.ok(applyCommand(mirror,-1,{type:'special'}).ok);
    advance(s,360);advance(mirror,360);
    for(const u of s.units) assert.equal(u.hp,mirror.units.find(v=>v.id===u.id).hp,`Age ${age}`);
  }
});

test('crowded maximum armies preserve finite positions and per-tick walking budgets',()=>{
  const s=state(5), count=160;
  s.units=Array.from({length:count},(_,i)=>{
    const team=i<80?1:-1,k=i%80,data=AGES[5].units[k%3];
    return {...data,id:i+1,age:5,uType:k%3,team,x:team===1?220+Math.floor(k/8)*34:1060-Math.floor(k/8)*34,
      y:600,z:-210+(k%8)*60,routeZ:-210+(k%8)*60,hp:1e8,maxHp:1e8,drawProgress:1,
      heading:team===1?0:Math.PI,attackCooldown:1000,animTimer:0,thinkAt:0,target:null,
      guide:null,guideReady:0,intent:'advancing'};
  });
  s.nextId=count+1;
  for(let tick=0;tick<240;tick++) {
    const old=s.units.map(u=>({x:u.x,z:u.z}));step(s);
    assertInvariants(s);
    for(let i=0;i<s.units.length;i++) assert.ok(distance(s.units[i],old[i])<=s.units[i].speed/60+.0001,`Unit ${i} jumped`);
  }
});
