/* WaveLab UI: turns <div data-sim="name"> into a live simulation card (canvas, readout, controls, buttons). */
WL.mountSim = function (host) {
  const sim = WL.sims[host.dataset.sim]; if (!sim) return;
  const fig = document.createElement('figure'); fig.className = 'sim';
  fig.innerHTML = '<figcaption></figcaption><canvas role="img"></canvas><div class="readout" aria-live="polite"></div><div class="controls"></div>' +
    '<div class="bar"><button class="btn">Pause</button><button class="btn alt">Slow motion</button><button class="btn alt">Reset</button></div>';
  fig.querySelector('figcaption').textContent = 'Demonstration: ' + sim.title;
  const cv = fig.querySelector('canvas'), ctx = cv.getContext('2d'), ro = fig.querySelector('.readout');
  cv.setAttribute('aria-label', sim.title);
  const card = { el: fig, visible: false, playing: !matchMedia('(prefers-reduced-motion:reduce)').matches, slow: false, t: 0, V: {}, W: 700, H: 300, dpr: 1 };
  const ctl = WL.controls(fig.querySelector('.controls'), sim.c, card.V);
  const [bp, bs, br] = fig.querySelectorAll('.bar button');
  bp.textContent = card.playing ? 'Pause' : 'Play';
  bp.onclick = () => { card.playing = !card.playing; bp.textContent = card.playing ? 'Pause' : 'Play'; };
  bs.onclick = () => { card.slow = !card.slow; bs.classList.toggle('alt', !card.slow); };
  br.onclick = () => { card.t = 0; ctl.reset(); };
  card.size = () => {
    const W = Math.round(Math.max(280, Math.min(760, fig.clientWidth - 22)));
    const H = sim.tank ? Math.round(W * WL.tank.TH / WL.tank.TW) : sim.H(W), dpr = Math.min(2, window.devicePixelRatio || 1);
    Object.assign(card, { W, H, dpr }); cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
  };
  card.frame = dt => {
    if (card.playing) card.t += dt * (card.slow ? .3 : 1);
    ctx.setTransform(card.dpr, 0, 0, card.dpr, 0, 0); ctx.clearRect(0, 0, card.W, card.H);
    WL.use(ctx); WL.k = 1;
    ro.textContent = sim.draw({ W: card.W, H: card.H, V: card.V, t: card.t }) || '';
  };
  host.replaceWith(fig); card.size();
  new ResizeObserver(() => card.size()).observe(fig);
  WL.run.add(card);
};
