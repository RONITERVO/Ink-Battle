import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../core/constants.js';

// The notebook, including its HTML controls, uses the renderer's coordinates.
// Only the outer scale depends on the browser; no game state changes on resize.
export function fitBrowserViewport() {
  const root = document.documentElement;
  const viewport = document.getElementById('viewport');
  const visual = window.visualViewport;
  root.style.setProperty('--page-width', `${CANVAS_WIDTH}px`);
  root.style.setProperty('--page-height', `${CANVAS_HEIGHT}px`);
  root.style.setProperty('--page-vw', `${CANVAS_WIDTH / 100}px`);
  root.style.setProperty('--page-vmin', `${Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 100}px`);

  const fit = (width, height) => {
    const scale = Math.max(0, Math.min(width / CANVAS_WIDTH, height / CANVAS_HEIGHT));
    viewport.style.setProperty('--game-scale', scale);
  };
  let pending = 0;
  const update = () => {
    pending = 0;
    root.style.setProperty('--viewport-width', `${visual?.width ?? window.innerWidth}px`);
    root.style.setProperty('--viewport-height', `${visual?.height ?? window.innerHeight}px`);
    root.style.setProperty('--viewport-left', `${visual?.offsetLeft ?? 0}px`);
    root.style.setProperty('--viewport-top', `${visual?.offsetTop ?? 0}px`);
    const style = getComputedStyle(viewport);
    fit(viewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight),
      viewport.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom));
  };
  const schedule = () => { if (!pending) pending = requestAnimationFrame(update); };
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  visual?.addEventListener('resize', schedule);
  visual?.addEventListener('scroll', schedule);
  // Safe-area changes can resize the content box without a window resize.
  if (typeof ResizeObserver === 'function') {
    const observer = new ResizeObserver(([entry]) => fit(entry.contentRect.width, entry.contentRect.height));
    observer.observe(viewport);
  }
  update();
}
