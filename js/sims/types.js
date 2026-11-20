/* Sim: transverse vs longitudinal waves, with a particle-density curve for the longitudinal case. */
WL.sims.types = {
  title: 'Transverse and longitudinal waves compared', H: () => 490,
  c: [{ id: 'a', l: 'Amplitude', min: 8, max: 28, s: 1, d: 20 }, { id: 'f', l: 'Frequency', min: .2, max: 1.2, s: .05, d: .5, u: ' Hz' }],
  draw({ W, V, t }) {
    const T = WL.TAU, g = WL.ctx, L = Math.max(W * .3, 90), k = T / L, w = T * V.f, A = V.a, a = Math.min(A * .4, .5 / k), ym = 108;
    WL.paper(W, 215); WL.paper(W, 275, 215);
    const each = (x0, fn) => { const b = ((x0 % L) + L) % L; for (let p = b; p < W; p += L) if (p > 45 && p < W - 45) fn(p); };
    WL.ln(0, ym, W, ym, '#8a98a8', 1, [5, 4]);
    const N = Math.round((W - 40) / 10), sp = (W - 40) / N, ri = Math.round(N * .35);
    g.strokeStyle = '#9bb8d6'; g.lineWidth = 2; g.beginPath();
    for (let x = 20; x <= W - 20; x += 4) { const y = ym - A * Math.sin(k * x - w * t); x === 20 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke();
    for (let i = 0; i <= N; i++) { const x = 20 + i * sp; WL.dot(x, ym - A * Math.sin(k * x - w * t), 3.6, i === ri ? '#d9362b' : '#3b6ea5'); }
    each((Math.PI / 2 + w * t) / k, p => WL.txt('crest', p, ym - A - 12, '#c33', 11, 'center'));
    each((3 * Math.PI / 2 + w * t) / k, p => WL.txt('trough', p, ym + A + 22, '#2a5fa8', 11, 'center'));
    WL.txt('Transverse wave', 10, 20, '#1f4f86', 14, 'left', 700);
    WL.arrow(Math.max(W * .5, W - 190), 30, W - 20, 30, '#2a8a3a', 3); WL.txt('energy', W - 20, 20, '#2a6a34', 12, 'right');
    WL.txt('vibration is at 90° to energy transfer', W - 10, 204, '#234', 11, 'right');
    /* longitudinal */
    const N2 = Math.round((W - 40) / 11), sp2 = (W - 40) / N2, ri2 = Math.round(N2 * .35), rows = [272, 298, 324, 350];
    rows.forEach((y, r) => { for (let i = 0; i <= N2; i++) { const x0 = 20 + i * sp2; WL.dot(x0 + a * Math.sin(k * x0 - w * t), y, 3.3, r === 0 && i === ri2 ? '#d9362b' : '#3b6ea5'); } });
    each((Math.PI + w * t) / k, p => { WL.txt('compression', p, 252, '#c33', 11, 'center'); WL.ln(p, 256, p, 264, '#c33', 1.5); });
    each(w * t / k, p => { WL.ln(p, 358, p, 366, '#2a5fa8', 1.5); WL.txt('rarefaction', p, 380, '#2a5fa8', 11, 'center'); });
    WL.txt('Longitudinal wave', 10, 234, '#1f4f86', 14, 'left', 700);
    WL.txt('Particle density', 10, 402, '#234', 11); WL.ln(20, 445, W - 20, 445, '#8a98a8', 1, [4, 4]);
    g.strokeStyle = '#c33'; g.lineWidth = 2; g.beginPath();
    for (let x = 20; x <= W - 20; x += 3) { const rho = 1 / (1 + a * k * Math.cos(k * x - w * t)), y = 445 - 34 * (rho - 1); x === 20 ? g.moveTo(x, y) : g.lineTo(x, y); } g.stroke();
    WL.txt('vibration is parallel (0°) to energy transfer', W - 10, 478, '#234', 11, 'right');
    return 'Top: particles move up and down (perpendicular). Bottom: particles move back and forth (parallel); the density curve peaks at compressions and dips at rarefactions.';
  }
};
