import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createRenderer(runtime) {
// --- SQUIGGLEVISION MAGIC ---
function jitterVal(x, y, amp) {
    let frame = Math.floor(runtime.globalTime * 8) % 3;
    let seed = x * 12.9898 + y * 78.233 + frame * 13.131;
    let h = Math.sin(seed) * 43758.5453;
    return ((h - Math.floor(h)) - 0.5) * amp;
}

function setSketchStyle(color, thickness = 2) {
    runtime.ctx.strokeStyle = color;
    runtime.ctx.fillStyle = color;
    runtime.ctx.lineWidth = thickness;
    runtime.ctx.lineCap = 'round';
    runtime.ctx.lineJoin = 'round';
}

function applyDash(progress, pathLen) {
    if (progress >= 1.0) { runtime.ctx.setLineDash([]); return; }
    let dash = pathLen;
    runtime.ctx.setLineDash([dash, dash]);
    runtime.ctx.lineDashOffset = dash * (1.0 - progress);
}

function drawRoughLine(x1, y1, x2, y2, passes = 2, jAmp = 3, progress = 1.0) {
    runtime.ctx.beginPath();
    let len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    for (let i = 0; i < passes; i++) {
        let ox1 = x1 + jitterVal(x1, y1 + i, jAmp);
        let oy1 = y1 + jitterVal(x1 + i, y1, jAmp);
        let ox2 = x2 + jitterVal(x2, y2 + i, jAmp);
        let oy2 = y2 + jitterVal(x2 + i, y2, jAmp);
        runtime.ctx.moveTo(ox1, oy1);
        let mx = (x1 + x2) / 2 + jitterVal((x1 + x2) / 2, (y1 + y2) / 2 + i, jAmp * 2);
        let my = (y1 + y2) / 2 + jitterVal((x1 + x2) / 2 + i, (y1 + y2) / 2, jAmp * 2);
        runtime.ctx.quadraticCurveTo(mx, my, ox2, oy2);
    }
    applyDash(progress, len);
    runtime.ctx.stroke();
    runtime.ctx.setLineDash([]);
}

function drawRoughCircle(cx, cy, r, passes = 2, jAmp = 3, progress = 1.0) {
    runtime.ctx.beginPath();
    let len = 2 * Math.PI * r;
    for (let i = 0; i < passes; i++) {
        let jc_x = cx + jitterVal(cx, cy + i, jAmp);
        let jc_y = cy + jitterVal(cx + i, cy, jAmp);
        let jr = r + jitterVal(r, i, jAmp);
        runtime.ctx.arc(jc_x, jc_y, jr, 0, Math.PI * 2);
    }
    applyDash(progress, len * passes);
    runtime.ctx.stroke();
    runtime.ctx.setLineDash([]);
}

function fillScribble(x, y, w, h, color, density = 5, progress = 1.0) {
    if (progress <= 0) return;
    runtime.ctx.strokeStyle = color;
    runtime.ctx.lineWidth = 1;
    runtime.ctx.beginPath();
    let totalLines = Math.floor(w / density);
    let linesToDraw = Math.max(1, Math.floor(totalLines * progress));
    for (let i = 0; i <= linesToDraw; i++) {
        let cx = x + (i * density);
        let j1 = jitterVal(cx, y, 5);
        let j2 = jitterVal(cx, y + h, 5);
        runtime.ctx.moveTo(cx + j1, y + Math.abs(j1));
        runtime.ctx.lineTo(cx + j2, y + h - Math.abs(j2));
    }
    runtime.ctx.stroke();
}
        // --- RENDERING PIPELINE ---
        function draw() {
            runtime.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            runtime.ctx.save();

            if (runtime.gameState.screenShake > 0) {
                let mag = runtime.gameState.screenShake * 15;
                runtime.ctx.translate(Math.sin(runtime.globalTime * 50) * mag, Math.cos(runtime.globalTime * 43) * mag);
            }

            drawBackground(runtime.gameState.worldProgress);

            if (runtime.gameState.worldProgress >= 1.0) {
                drawBase(1, runtime.gameState.player);
                drawBase(-1, runtime.gameState.enemy);

                for (let i = 0; i < runtime.gameState.units.pool.length; i++) {
                    if (runtime.gameState.units.pool[i].active) drawUnit(runtime.gameState.units.pool[i]);
                }
                for (let i = 0; i < runtime.gameState.projectiles.pool.length; i++) {
                    if (runtime.gameState.projectiles.pool[i].active) drawProjectile(runtime.gameState.projectiles.pool[i]);
                }
                for (let i = 0; i < runtime.gameState.visualFx.pool.length; i++) {
                    if (runtime.gameState.visualFx.pool[i].active) drawFX(runtime.gameState.visualFx.pool[i]);
                }

                // Render Particles
                for (let i = 0; i < runtime.gameState.particles.pool.length; i++) {
                    let pt = runtime.gameState.particles.pool[i];
                    if (!pt.active) continue;

                    setSketchStyle(pt.color, 2);
                    runtime.ctx.globalAlpha = Math.max(0, pt.life);

                    if (pt.pType === 'splatter') {
                        runtime.ctx.beginPath();
                        runtime.ctx.moveTo(pt.x, pt.y);
                        runtime.ctx.lineTo(pt.x - pt.vx * 0.05, pt.y - pt.vy * 0.05);
                        runtime.ctx.arc(pt.x, pt.y, pt.size / 2, 0, Math.PI * 2);
                        runtime.ctx.fill();
                    } else if (pt.pType === 'ghost') {
                        setSketchStyle(runtime.COLORS.pencilLight, 2);
                        drawRoughCircle(pt.x, pt.y, 15, 1, 2);
                        drawRoughLine(pt.x - 5, pt.y - 2, pt.x - 2, pt.y - 2, 1, 0);
                        drawRoughLine(pt.x + 5, pt.y - 2, pt.x + 2, pt.y - 2, 1, 0);
                        drawRoughLine(pt.x - 10, pt.y + 15, pt.x + 10, pt.y + 15, 1, 5);
                    } else if (pt.pType === 'slash') {
                        setSketchStyle(runtime.COLORS.pencil, 3);
                        runtime.ctx.beginPath();
                        runtime.ctx.arc(pt.x, pt.y, 30, -Math.PI / 4, Math.PI / 4);
                        runtime.ctx.stroke();
                    } else if (pt.pType === 'graphite') {
                        setSketchStyle(runtime.COLORS.pencil, 3);
                        runtime.ctx.beginPath();
                        runtime.ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
                        runtime.ctx.fill();
                    } else if (pt.pType === 'spark' || pt.pType === 'dust') {
                        drawRoughCircle(pt.x, pt.y, pt.size / 2, 1, 1);
                    } else {
                        fillScribble(pt.x, pt.y, pt.size, pt.size, pt.color, 3);
                    }
                }
                runtime.ctx.globalAlpha = 1.0;

                // Render Floating Text
                for (let i = 0; i < runtime.gameState.floatingTexts.pool.length; i++) {
                    let ft = runtime.gameState.floatingTexts.pool[i];
                    if (!ft.active) continue;

                    let alpha = Math.max(0, Math.min(1, ft.life / (ft.maxLife || 1)));
                    let progress = 1 - alpha;
                    runtime.ctx.globalAlpha = alpha;
                    runtime.ctx.fillStyle = ft.color;
                    runtime.ctx.font = `bold ${(ft.size || 30) + progress * (ft.grow === undefined ? 15 : ft.grow)}px 'Caveat', cursive`;
                    runtime.ctx.textAlign = 'center';
                    if (ft.stroke) {
                        runtime.ctx.lineWidth = 5;
                        runtime.ctx.strokeStyle = 'rgba(255, 250, 235, 0.82)';
                        runtime.ctx.strokeText(ft.text, ft.x, ft.y);
                    }
                    runtime.ctx.fillText(ft.text, ft.x, ft.y);
                }
                runtime.ctx.globalAlpha = 1.0;
            }
            runtime.ctx.restore();
        }

        function drawBackground(wp) {
            // 1. Draw Organic Procedural Watercolor Wash (Restored Multiply from Iteration 1)
            runtime.ctx.save();
            runtime.ctx.globalCompositeOperation = 'multiply';

            if (runtime.gameState.ageTransition > 0) {
                runtime.ctx.globalAlpha = runtime.gameState.ageTransition;
                runtime.ctx.drawImage(runtime.WatercolorEngine.canvases[runtime.gameState.player.age - 1], 0, 0);
                runtime.ctx.globalAlpha = 1.0 - runtime.gameState.ageTransition;
                runtime.ctx.drawImage(runtime.WatercolorEngine.canvases[runtime.gameState.player.age], 0, 0);
            } else {
                runtime.ctx.drawImage(runtime.WatercolorEngine.canvases[runtime.gameState.player.age], 0, 0);
            }
            runtime.ctx.restore();

            // 2. Era-Specific Architectural/Sketch details
            setSketchStyle(runtime.COLORS.pencilLight, 1);
            runtime.ctx.save();
            runtime.ctx.globalAlpha = 0.2 + (0.1 * Math.sin(runtime.globalTime));
            let age = runtime.gameState.player.age;

            if (age === 0) {
                drawRoughCircle(CANVAS_WIDTH / 2, 200, 50, 1, 5, wp);
                for (let i = 0; i < 3; i++) drawRoughCircle(CANVAS_WIDTH / 2, 200, 30 + i * 10, 1, 3, wp);
            } else if (age === 1) {
                for (let x = 200; x < CANVAS_WIDTH - 200; x += 150) {
                    drawRoughLine(x, GROUND_Y, x, GROUND_Y - 300, 1, 1, wp);
                    drawRoughLine(x, GROUND_Y - 300, x + 150, GROUND_Y - 300, 1, 1, wp);
                    runtime.ctx.beginPath();
                    runtime.ctx.arc(x + 75, GROUND_Y - 150, 75, Math.PI, 0);
                    runtime.ctx.stroke();
                }
            } else if (age === 2) {
                drawRoughCircle(CANVAS_WIDTH / 2, 300, 200, 2, 1, wp);
                drawRoughLine(CANVAS_WIDTH / 2 - 200, 300, CANVAS_WIDTH / 2 + 200, 300, 1, 1, wp);
                drawRoughLine(CANVAS_WIDTH / 2, 100, CANVAS_WIDTH / 2, 500, 1, 1, wp);
                runtime.ctx.strokeRect(CANVAS_WIDTH / 2 - 140, 160, 280, 280);
            } else if (age === 3) {
                for (let r = 0; r < 4; r++) {
                    runtime.ctx.beginPath();
                    for (let x = 0; x <= CANVAS_WIDTH; x += 100) {
                        let y = 300 + Math.sin(x / 200) * 100 + r * 50 + Math.cos(x / 150 + r) * 30;
                        runtime.ctx.lineTo(x, y);
                    }
                    runtime.ctx.stroke();
                }
            } else if (age === 4) {
                for (let x = 100; x < CANVAS_WIDTH; x += 150) {
                    for (let y = 100; y < GROUND_Y; y += 130) {
                        drawRoughCircle(x, y, 40, 1, 1, wp);
                        drawRoughLine(x, y, x + 75, y + 65, 1, 1, wp);
                    }
                }
            } else if (age === 5) {
                for (let i = 0; i < 15; i++) {
                    let cx = (Math.sin(i * 12.2) * CANVAS_WIDTH + CANVAS_WIDTH) % CANVAS_WIDTH;
                    let cy = (Math.cos(i * 3.1) * 400 + 400) % 400;
                    drawRoughCircle(cx, cy, 20 + i * 2, 1, 2, wp);
                    drawRoughLine(cx, cy, CANVAS_WIDTH / 2, 200, 1, 1, wp);
                }
            }
            runtime.ctx.restore();

            // 3. Environment Scenery
            drawRoughCircle(CANVAS_WIDTH * 0.8, 150, 60, 2, 5, wp);

            runtime.ctx.beginPath();
            for (let x = 0; x <= CANVAS_WIDTH; x += 80) {
                let y = GROUND_Y - 200 - Math.sin(x / 300 + runtime.globalTime * 0.1) * 100 + jitterVal(x, 0, 5);
                runtime.ctx.lineTo(x, y);
            }
            applyDash(wp, CANVAS_WIDTH * 2);
            runtime.ctx.stroke();
            runtime.ctx.setLineDash([]);

            for (let c = 0; c < 4; c++) {
                let cx = (runtime.globalTime * 5 + c * 300) % (CANVAS_WIDTH + 200) - 100;
                let cy = 100 + c * 40;
                drawRoughCircle(cx, cy, 30, 1, 5, wp);
                drawRoughCircle(cx + 40, cy - 10, 45, 1, 5, wp);
                drawRoughCircle(cx + 80, cy, 25, 1, 5, wp);
            }

            setSketchStyle(runtime.COLORS.pencil, 2);
            drawRoughLine(0, GROUND_Y, CANVAS_WIDTH, GROUND_Y, 2, 5, wp);

            runtime.ctx.beginPath();
            for (let i = 0; i < CANVAS_WIDTH; i += 60) {
                let j = jitterVal(i, GROUND_Y, 5);
                runtime.ctx.moveTo(i, GROUND_Y + j);
                runtime.ctx.lineTo(i + 30, GROUND_Y - 50 - Math.abs(j * 5));
                runtime.ctx.lineTo(i + 60, GROUND_Y + j);
            }
            applyDash(wp, CANVAS_WIDTH * 2);
            runtime.ctx.stroke();
            runtime.ctx.setLineDash([]);
        }

        function drawFX(fx) {
            if (fx.type === 'plane') {
                runtime.ctx.save();
                runtime.ctx.translate(fx.x, fx.y);
                if (fx.team === -1) runtime.ctx.scale(-1, 1);

                setSketchStyle(runtime.COLORS.pencil, 3);
                drawRoughLine(-40, 0, 50, 0, 2, 2);
                drawRoughCircle(50, 0, 10, 2, 2);
                drawRoughLine(10, 0, -20, -30, 2, 2);
                drawRoughLine(10, 0, -20, 30, 2, 2);
                drawRoughLine(-40, 0, -50, -15, 2, 2);
                fillScribble(-30, -5, 60, 10, runtime.COLORS.pencil, 3);

                runtime.ctx.restore();
            }
        }

        function drawBase(team, state) {
            let x = team === 1 ? 0 : CANVAS_WIDTH - BASE_WIDTH;
            let y = GROUND_Y;
            let dp = state.drawProgress;

            runtime.ctx.save();
            runtime.ctx.translate(x, y);
            if (team === -1) {
                runtime.ctx.translate(BASE_WIDTH, 0);
                runtime.ctx.scale(-1, 1);
            }

            setSketchStyle(runtime.COLORS.pencil, 3);

            switch (AGES[state.age].baseStyle) {
                case "cave":
                    drawRoughLine(10, 0, BASE_WIDTH, 0, 2, 5, dp);
                    runtime.ctx.beginPath();
                    runtime.ctx.moveTo(10, 0);
                    runtime.ctx.quadraticCurveTo(BASE_WIDTH / 2, -300, BASE_WIDTH, 0);
                    applyDash(dp, BASE_WIDTH * 2);
                    runtime.ctx.stroke();
                    runtime.ctx.setLineDash([]);
                    fillScribble(30, -150, BASE_WIDTH - 60, 150, runtime.COLORS.pencil, 8, dp);
                    break;
                case "castle":
                    drawRoughLine(20, 0, 20, -200, 2, 3, dp);
                    drawRoughLine(BASE_WIDTH - 20, 0, BASE_WIDTH - 20, -200, 2, 3, dp);
                    drawRoughLine(20, -200, BASE_WIDTH - 20, -200, 2, 3, dp);
                    for (let i = 20; i < BASE_WIDTH - 30; i += 30) {
                        drawRoughLine(i, -200, i, -230, 2, 2, dp);
                        drawRoughLine(i, -230, i + 15, -230, 2, 2, dp);
                        drawRoughLine(i + 15, -230, i + 15, -200, 2, 2, dp);
                    }
                    fillScribble(BASE_WIDTH / 2 - 30, -100, 60, 100, runtime.COLORS.pencil, 6, dp);
                    break;
                case "fort":
                    drawRoughLine(10, 0, 30, -250, 2, 2, dp);
                    drawRoughLine(BASE_WIDTH - 10, 0, BASE_WIDTH - 30, -250, 2, 2, dp);
                    drawRoughLine(30, -250, BASE_WIDTH - 30, -250, 2, 2, dp);
                    for (let i = -200; i < 0; i += 40) drawRoughLine(15, i, BASE_WIDTH - 15, i, 1, 2, dp);
                    break;
                case "bunker":
                    drawRoughLine(10, 0, 10, -150, 2, 2, dp);
                    drawRoughLine(10, -150, BASE_WIDTH / 2, -200, 2, 2, dp);
                    drawRoughLine(BASE_WIDTH / 2, -200, BASE_WIDTH - 10, -150, 2, 2, dp);
                    drawRoughLine(BASE_WIDTH - 10, -150, BASE_WIDTH - 10, 0, 2, 2, dp);
                    for (let i = 0; i < 3; i++) drawRoughCircle(BASE_WIDTH + 20, -15 - i * 20, 15, 2, 2, dp);
                    fillScribble(20, -120, BASE_WIDTH - 40, 20, runtime.COLORS.pencil, 4, dp);
                    break;
                case "dome":
                    runtime.ctx.beginPath();
                    runtime.ctx.arc(BASE_WIDTH / 2, 0, BASE_WIDTH / 2 - 10, Math.PI, 0);
                    applyDash(dp, BASE_WIDTH * 2);
                    runtime.ctx.stroke();
                    runtime.ctx.setLineDash([]);
                    setSketchStyle(runtime.COLORS.blue, 2);
                    runtime.ctx.beginPath();
                    runtime.ctx.arc(BASE_WIDTH / 2, 0, BASE_WIDTH / 2 - 25, Math.PI, 0);
                    applyDash(dp, BASE_WIDTH * 2);
                    runtime.ctx.stroke();
                    runtime.ctx.setLineDash([]);
                    drawRoughLine(BASE_WIDTH / 2, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2 + 25, 2, 2, dp);
                    setSketchStyle(runtime.COLORS.pencil, 3);
                    break;
                case "portal":
                    setSketchStyle(runtime.COLORS.accent, 2);
                    for (let i = 0; i < 4; i++) {
                        let r = (BASE_WIDTH / 2 - 10) - i * 10;
                        drawRoughCircle(BASE_WIDTH / 2, -BASE_WIDTH / 2, r, 2, 4 + i * 2, dp);
                    }
                    drawRoughLine(0, 0, BASE_WIDTH, 0, 2, 3, dp);
                    drawRoughLine(BASE_WIDTH / 2 - 20, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2, 2, 2, dp);
                    drawRoughLine(BASE_WIDTH / 2 + 20, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2, 2, 2, dp);
                    setSketchStyle(runtime.COLORS.pencil, 3);
                    break;
            }

            for (let i = 0; i < state.unlockedSlots; i++) {
                let ty = -150 - (i * 90);
                let tx = BASE_WIDTH - 60;
                let tp = state.turretProgress[i];

                if (state.age !== 5) {
                    drawRoughLine(tx, ty, tx + 50, ty, 2, 3, tp);
                    drawRoughLine(tx + 10, ty, tx + 10, ty + 90, 2, 3, tp);
                    drawRoughLine(tx + 40, ty, tx + 40, ty + 90, 2, 3, tp);
                    drawRoughLine(tx + 10, ty + 90, tx + 40, ty, 1, 2, tp);
                }
                if (state.turrets[i] !== null) drawTurret(tx + 25, ty, state.age, AGES[state.age].turrets[state.turrets[i]].name, tp);
            }
            runtime.ctx.restore();
        }

        function drawTurret(x, y, age, name, dp) {
            runtime.ctx.save();
            runtime.ctx.translate(x, y);
            setSketchStyle(runtime.COLORS.pencil, 2);

            if (age === 0) {
                drawRoughLine(-15, 0, 15, 0, 2, 3, dp);
                drawRoughLine(0, 0, 0, -30, 2, 3, dp);
                if (name.includes("Rock")) {
                    drawRoughCircle(0, -35, 10, 2, 3, dp);
                } else if (name.includes("Egg")) {
                    drawRoughLine(-10, -40, 10, -40, 2, 3, dp);
                    drawRoughLine(0, -30, 0, -40, 2, 3, dp);
                } else {
                    fillScribble(-10, -40, 20, 20, runtime.COLORS.accent, 4, dp);
                }
            } else if (age === 1) {
                drawRoughLine(-20, 0, 20, 0, 2, 3, dp);
                drawRoughLine(-10, 0, -20, -20, 2, 3, dp);
                if (name.includes("Catapult")) {
                    drawRoughLine(-20, -20, 20, -30, 2, 3, dp);
                    drawRoughCircle(20, -30, 8, 2, 3, dp);
                } else if (name.includes("Ballista")) {
                    drawRoughLine(-25, -15, 25, -25, 2, 3, dp);
                    drawRoughLine(10, -40, 10, -10, 2, 3, dp);
                } else {
                    drawRoughLine(-15, -30, 15, -30, 3, 2, dp);
                    fillScribble(-10, -25, 20, 25, runtime.COLORS.pencil, 4, dp);
                }
            } else if (age === 2) {
                drawRoughCircle(0, -10, 10, 2, 3, dp);
                drawRoughLine(0, -10, 25, -20, 3, 2, dp);
                if (name.includes("Heavy")) drawRoughLine(0, -10, 35, -25, 4, 2, dp);
                if (name.includes("Mortar")) drawRoughLine(-10, 0, 15, -35, 5, 2, dp);
            } else if (age === 3) {
                drawRoughLine(-15, 0, 15, 0, 2, 3, dp);
                drawRoughLine(0, 0, 0, -20, 2, 3, dp);
                if (name.includes("Machine")) {
                    drawRoughLine(-10, -20, 30, -20, 2, 1, dp);
                } else if (name.includes("Rocket")) {
                    drawRoughLine(0, -20, 25, -30, 4, 1, dp);
                    fillScribble(5, -35, 20, 10, runtime.COLORS.pencil, 3, dp);
                } else {
                    drawRoughLine(-5, -15, 40, -40, 4, 1, dp);
                }
            } else if (age === 4) {
                setSketchStyle(runtime.COLORS.blue, 2);
                drawRoughLine(-10, 0, 10, 0, 2, 3, dp);
                drawRoughLine(0, 0, 0, -20, 2, 3, dp);
                if (name.includes("Gatling")) {
                    drawRoughLine(0, -20, 30, -20, 2, 3, dp);
                    drawRoughLine(0, -15, 30, -15, 2, 3, dp);
                } else if (name.includes("Ion")) {
                    drawRoughCircle(0, -20, 15, 2, 3, dp);
                    drawRoughLine(15, -20, 40, -20, 3, 1, dp);
                } else {
                    drawRoughLine(-10, -30, 30, -40, 5, 1, dp);
                    fillScribble(0, -45, 20, 20, runtime.COLORS.blue, 4, dp);
                }
            } else if (age === 5) {
                setSketchStyle(runtime.COLORS.accent, 2);
                drawRoughCircle(0, -20, 15, 2, 5, dp);
                if (name.includes("Plasma")) {
                    drawRoughLine(0, -20, 40, -20, 4, 2, dp);
                } else if (name.includes("Black")) {
                    fillScribble(-15, -35, 30, 30, runtime.COLORS.pencil, 3, dp);
                } else {
                    drawRoughLine(-15, -20, 45, -20, 6, 1, dp);
                    drawRoughCircle(45, -20, 5, 2, 2, dp);
                }
            }
            runtime.ctx.restore();
        }

        function drawUnit(u) {
            runtime.ctx.save();
            runtime.ctx.translate(u.x, u.y);
            if (u.team === -1) runtime.ctx.scale(-1, 1);

            let bob = u.moving ? Math.abs(Math.sin((runtime.globalTime * 10) + u.animOffset)) * 5 : 0;
            let lunge = 0, armRot = 0, legRot = 0;

            if (u.isAttacking) {
                lunge = Math.sin(u.animTimer * Math.PI * 3) * 15;
                armRot = Math.sin(u.animTimer * Math.PI * 3) * Math.PI / 3;
            } else if (u.moving) {
                armRot = Math.sin((runtime.globalTime * 10) + u.animOffset) * Math.PI / 4;
                legRot = Math.sin((runtime.globalTime * 10) + u.animOffset) * Math.PI / 4;
            }

            runtime.ctx.translate(lunge, -bob);
            setSketchStyle(runtime.COLORS.pencil, 2);
            let s = u.size;
            let dp = u.drawProgress;

            if (u.age === 0) {
                if (u.type === 'heavy') {
                    drawRoughCircle(0, -s / 2, s / 3, 2, 3, dp);
                    drawRoughLine(s / 3, -s / 2, s / 1.5, -s * 0.8, 2, 4, dp);
                    drawRoughCircle(s / 1.5, -s * 0.8, 15, 2, 3, dp);
                    drawRoughLine(-s / 3, -s / 2, -s / 1.5, -s / 3, 2, 4, dp);
                    drawRoughLine(0, -s * 0.8, 0, -s * 1.2, 2, 3, dp);
                    drawRoughCircle(0, -s * 1.3, 8, 2, 3, dp);
                    drawRoughLine(0, -s, 15, -s * 0.9, 2, 3, dp);
                } else {
                    drawRoughCircle(0, -s + 10, 12, 2, 3, dp);
                    drawRoughLine(0, -s + 22, 0, -20, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(-legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.5); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 20, 10, 2, 3, dp);

                    if (u.type === 'melee') {
                        drawRoughLine(20, 10, 30, -10, 4, 3, dp);
                    } else {
                        drawRoughCircle(25, 15, 5, 2, 3, dp);
                    }
                    runtime.ctx.restore();
                }
            } else if (u.age === 1) {
                if (u.type === 'heavy') {
                    drawRoughLine(-20, -s / 2, 20, -s / 2, 2, 8, dp);
                    drawRoughLine(20, -s / 2, 30, -s * 0.8, 2, 4, dp);
                    drawRoughLine(0, -s / 2, 0, -s, 2, 3, dp);
                    drawRoughLine(-10, -s, 10, -s, 2, 3, dp);
                    drawRoughCircle(0, -s - 10, 10, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.2); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 40, 0, 2, 2, dp); runtime.ctx.restore();
                } else {
                    drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
                    drawRoughLine(-10, -s + 10, 10, -s + 10, 2, 3, dp);
                    drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(-legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.5); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 15, 10, 2, 3, dp);

                    if (u.type === 'melee') {
                        drawRoughLine(15, 10, 25, -15, 2, 1, dp);
                        drawRoughLine(5, -5, 5, 20, 3, 2, dp);
                    } else {
                        drawRoughLine(15, 10, 15, -20, 2, 3, dp);
                        drawRoughLine(15, -20, 25, 10, 2, 3, dp);
                    }
                    runtime.ctx.restore();
                }
            } else if (u.age === 2) {
                if (u.type === 'heavy') {
                    drawRoughCircle(0, -15, 15, 2, 3, dp);
                    drawRoughLine(-20, -15, 20, -15, 2, 2, dp);
                    runtime.ctx.save(); runtime.ctx.translate(0, -15); runtime.ctx.rotate(armRot * 0.2); drawRoughLine(-10, -10, 40, -15, 4, 2, dp); runtime.ctx.restore();
                } else {
                    drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
                    drawRoughLine(-15, -s, 15, -s, 2, 3, dp);
                    drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(-legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.5); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 15, 5, 2, 3, dp);

                    if (u.type === 'melee') drawRoughLine(15, 5, 30, -25, 2, 2, dp);
                    else drawRoughLine(10, 5, 35, 0, 2, 1, dp);

                    runtime.ctx.restore();
                }
            } else if (u.age === 3) {
                if (u.type === 'heavy') {
                    drawRoughLine(-40, -10, 40, -10, 3, 2, dp);
                    drawRoughLine(-30, 0, 30, 0, 3, 2, dp);
                    fillScribble(-35, -25, 70, 15, runtime.COLORS.pencilLight, 5, dp);
                    runtime.ctx.save(); runtime.ctx.translate(0, -25); runtime.ctx.rotate(armRot * 0.1); drawRoughLine(0, -5, 50, -5, 3, 1, dp); runtime.ctx.restore();
                } else {
                    drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
                    drawRoughLine(-12, -s + 5, 12, -s + 5, 2, 2, dp);
                    drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(-legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.5); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 15, 5, 2, 3, dp);

                    if (u.type === 'melee') drawRoughLine(15, 5, 25, -5, 2, 1, dp);
                    else drawRoughLine(10, 5, 30, 5, 3, 1, dp);

                    runtime.ctx.restore();
                }
            } else if (u.age === 4) {
                setSketchStyle(runtime.COLORS.blue, 2);
                if (u.type === 'heavy') {
                    drawRoughCircle(0, -s / 2, s / 2.5, 2, 4, dp);
                    fillScribble(-s / 3, -s * 0.8, s / 1.5, s / 1.5, runtime.COLORS.blue, 8, dp);
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 2); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 60, 0, 4, 1, dp); runtime.ctx.restore();
                } else {
                    drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
                    drawRoughLine(-5, -s + 10, 10, -s + 10, 2, 3, dp);
                    drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);

                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -20); runtime.ctx.rotate(-legRot); drawRoughLine(0, 0, 0, 20, 2, 3, dp); runtime.ctx.restore();
                    runtime.ctx.save(); runtime.ctx.translate(0, -s / 1.5); runtime.ctx.rotate(armRot); drawRoughLine(0, 0, 15, 5, 2, 3, dp);

                    if (u.type === 'melee') {
                        setSketchStyle(runtime.COLORS.accent, 2);
                        drawRoughLine(15, 5, 35, -15, 3, 1, dp);
                    } else drawRoughLine(10, 5, 30, 5, 3, 1, dp);

                    runtime.ctx.restore();
                }
            } else if (u.age === 5) {
                setSketchStyle(runtime.COLORS.accent, 2);
                if (u.type === 'heavy') {
                    drawRoughLine(-s / 2, -s / 2, s / 2, -s / 2, 3, 2, dp);
                    drawRoughLine(-s / 3, -s / 2, 0, -s, 3, 2, dp);
                    drawRoughLine(s / 3, -s / 2, 0, -s, 3, 2, dp);
                    fillScribble(-s / 4, -s * 0.8, s / 2, s / 2, runtime.COLORS.accent, 5, dp);
                    drawRoughCircle(0, -s / 2, 20, 2, 5, dp);
                } else if (u.type === 'melee') {
                    drawRoughLine(-20, -s / 2, 20, -s / 2, 3, 2, dp);
                    drawRoughCircle(0, -s / 2, 10, 2, 2, dp);
                    drawRoughLine(0, -s / 2, 15, -s / 2 + 10, 3, 2, dp);
                } else {
                    drawRoughLine(-15, -s / 2, 15, -s / 2, 2, 3, dp);
                    drawRoughLine(0, -s / 2, 30, -s / 2, 4, 1, dp);
                    fillScribble(-10, -s / 2 - 10, 20, 20, runtime.COLORS.accent, 3, dp);
                }
            }

            // Health Bars (Drawn slightly below units)
            if (u.drawProgress >= 1) {
                setSketchStyle(runtime.COLORS.pencil, 1);
                drawRoughLine(-15, -s - 20, 15, -s - 20, 1, 1);
                setSketchStyle(runtime.COLORS.green, 2);
                if (u.hp > 0) drawRoughLine(-15, -s - 20, -15 + (30 * (u.hp / u.maxHp)), -s - 20, 2, 1);
            }
            runtime.ctx.restore();
        }

        function drawProjectile(p) {
            runtime.ctx.save();

            // Lasers / Orbital Beams
            if (p.isSpecial && (p.type === 'laser' || p.type === 'orbital')) {
                let alpha = p.life > 0.5 ? 1 : p.life * 2;
                runtime.ctx.globalAlpha = alpha;

                if (p.type === 'laser') {
                    setSketchStyle(p.team === 1 ? runtime.COLORS.blue : runtime.COLORS.accent, 3);
                    let w = Math.min(150, (5 - p.life) * 50);
                    fillScribble(p.x - w / 2, 0, w, CANVAS_HEIGHT, p.team === 1 ? runtime.COLORS.blue : runtime.COLORS.accent, 15);
                    drawRoughLine(p.x - w / 2, 0, p.x - w / 2, CANVAS_HEIGHT, 3, 10);
                    drawRoughLine(p.x + w / 2, 0, p.x + w / 2, CANVAS_HEIGHT, 3, 10);
                } else {
                    setSketchStyle(runtime.COLORS.darkVoid, 4);
                    drawRoughCircle(p.x, p.y - 400, 150, 4, 30);
                    fillScribble(p.x - 150, p.y - 550, 300, 300, runtime.COLORS.darkVoid, 15);

                    setSketchStyle(runtime.COLORS.accent, 2);
                    for (let i = 0; i < 5; i++) drawRoughCircle(p.x, p.y - 400, 50 + i * 20 + Math.sin(runtime.globalTime * 5) * 10, 1, 10);
                    for (let i = 0; i < 10; i++) drawRoughLine(p.x + (Math.random() - 0.5) * 400, GROUND_Y, p.x, p.y - 400, 1, 5);
                }
                runtime.ctx.globalAlpha = 1.0;
                runtime.ctx.restore();
                return;
            }

            // Standard Projectile Trails
            if (p.trailCount > 1) {
                setSketchStyle(runtime.COLORS.pencilLight, 1);
                runtime.ctx.beginPath();
                runtime.ctx.moveTo(p.trailX[0], p.trailY[0]);
                for (let i = 1; i < p.trailCount; i++) runtime.ctx.lineTo(p.trailX[i], p.trailY[i]);
                runtime.ctx.stroke();
            }

            runtime.ctx.translate(p.x, p.y);
            let angle = Math.atan2(p.vy, p.vx);
            runtime.ctx.rotate(angle);
            setSketchStyle(runtime.COLORS.pencil, 2);

            if (p.type === 'meteor') {
                setSketchStyle(runtime.COLORS.fire, 3);
                drawRoughCircle(0, 0, 15, 3, 5);
                fillScribble(-30, -10, 30, 20, runtime.COLORS.fire, 4);
                drawRoughLine(0, 5, -50, 20, 2, 5);
                drawRoughLine(0, -5, -50, -20, 2, 5);
            } else if (p.type === 'arrow') {
                drawRoughLine(-15, 0, 10, 0, 1, 1);
                drawRoughLine(5, -5, 10, 0, 1, 1);
                drawRoughLine(5, 5, 10, 0, 1, 1);
            } else if (p.type === 'cannonball') {
                drawRoughCircle(0, 0, 10, 3, 2);
                fillScribble(-10, -10, 20, 20, runtime.COLORS.pencil, 3);
            } else if (p.type === 'bombDrop') {
                runtime.ctx.rotate(-angle + Math.PI / 2);
                drawRoughCircle(0, 10, 8, 2, 2);
                drawRoughLine(0, 10, 0, -15, 2, 2);
                drawRoughLine(-10, -15, 10, -15, 2, 2);
            } else if (p.type === 'arc') {
                if (p.speed > 450) {
                    drawRoughLine(-15, 0, 10, 0, 1, 1);
                    drawRoughLine(-15, -5, -15, 5, 1, 1);
                } else {
                    drawRoughCircle(0, 0, p.dmg > 100 ? 8 : 4, 2, 2);
                }
            } else if (p.type === 'straight') {
                drawRoughLine(-10, 0, 10, 0, 2, 1);
            } else if (p.type === 'laser') {
                setSketchStyle(p.team === 1 ? runtime.COLORS.blue : runtime.COLORS.accent, 3);
                runtime.ctx.rotate(-angle);
                drawRoughLine(0, 0, p.targetX - p.x, p.targetY - p.y, 1, 3);
            } else if (p.type === 'orb') {
                setSketchStyle(runtime.COLORS.accent, 2);
                drawRoughCircle(0, 0, 15 + Math.sin(p.life * 20) * 5, 3, 5);
            }
            runtime.ctx.restore();
        }

return { draw };
}
