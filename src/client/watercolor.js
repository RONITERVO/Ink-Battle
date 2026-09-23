import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createWatercolor(runtime) {
const WatercolorEngine = {
    canvases: [],
    generateAll() {
        return new Promise(resolve => {
            let index = 0;
            const bar = document.getElementById('loading-bar');

            const step = () => {
                if (index < AGES.length) {
                    this.canvases.push(this.renderWash(index));
                    if (bar) bar.style.width = `${((index + 1) / AGES.length) * 100}%`;
                    index++;
                    requestAnimationFrame(step);
                } else {
                    resolve();
                }
            };
            step();
        });
    },
    renderWash(ageIndex) {
        const wc = document.createElement('canvas');
        wc.width = CANVAS_WIDTH; wc.height = CANVAS_HEIGHT;

        // Exact Iteration 1 implementation (No alpha:false, source-over blending)
        const xctx = wc.getContext('2d');
        xctx.globalCompositeOperation = 'source-over';

        const theme = AGES[ageIndex].theme;
        let hslBg = `hsl(${theme.bg})`;
        let hslAcc = `hsl(${theme.accent})`;

        for (let i = 0; i < 45; i++) {
            let isCorner = Math.random() > 0.3;
            let cx = isCorner ? (Math.random() > 0.5 ? Math.random() * 400 : CANVAS_WIDTH - Math.random() * 400) : Math.random() * CANVAS_WIDTH;
            let cy = isCorner ? (Math.random() > 0.5 ? Math.random() * 300 : CANVAS_HEIGHT - Math.random() * 300) : Math.random() * CANVAS_HEIGHT;
            let radius = 100 + Math.random() * 250;

            this.drawWatercolorBlob(xctx, cx, cy, radius, hslBg, 0.08);
            if (Math.random() < 0.25) {
                this.drawWatercolorBlob(xctx, cx, cy, radius * 0.6, hslAcc, 0.04);
            }
        }

        for (let i = 0; i < 15; i++) {
            this.drawWatercolorBlob(xctx, Math.random() * CANVAS_WIDTH, GROUND_Y - 100 + Math.random() * 200, 200 + Math.random() * 400, hslBg, 0.04);
        }
        return wc;
    },
    drawWatercolorBlob(ctx, x, y, r, color, alpha) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;

        ctx.beginPath();
        const points = 14;
        for (let i = 0; i <= points; i++) {
            let angle = (i / points) * Math.PI * 2;
            let radiusVariation = r + (Math.random() - 0.5) * r * 0.4;
            let px = x + Math.cos(angle) * radiusVariation;
            let py = y + Math.sin(angle) * radiusVariation;

            if (i === 0) ctx.moveTo(px, py);
            else ctx.bezierCurveTo(x + Math.cos(angle - 0.2) * radiusVariation, y + Math.sin(angle - 0.2) * radiusVariation, px, py, px, py);
        }
        ctx.fill();
        ctx.lineWidth = 1.5 + Math.random() * 2;
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * 1.5;
        ctx.stroke();
        ctx.restore();
    }
};

// --- DOM CACHING AND DIRTY-CHECKING SYSTEM ---

return { WatercolorEngine };
}
