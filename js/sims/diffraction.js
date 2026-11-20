/* Sim: diffraction through a gap or round an edge, computed with Huygens sources across the opening. */
WL.sims.diffraction = {
  title: 'Diffraction through a gap and round an edge', tank: true,
  c: [{ id: 'm', l: 'Obstacle', o: ['Gap', 'Edge (half wall)'], d: 0 }, { id: 'l', l: 'Wavelength λ', min: 8, max: 44, s: 1, d: 20, u: ' mm' }, { id: 'g', l: 'Gap width', min: 6, max: 140, s: 1, d: 60, u: ' mm' },
      { l: 'Gap = 4λ', run: (V, s) => s.g(Math.min(140, 4 * V.l)) }, { l: 'Gap = λ', run: (V, s) => s.g(V.l) }, { l: 'Gap = λ ÷ 2', run: (V, s) => s.g(Math.max(6, V.l / 2)) }],
  draw({ W, H, V, t }) {
    const T = WL.TAU, P = WL.tank, L = V.l, k = T / L, om = T * 200 / L, xw = 90, amp = Math.sqrt(k / T), edge = V.m === 1;
    const y1 = edge ? 100 : 110 - V.g / 2, y2 = edge ? 290 : 110 + V.g / 2, N = Math.ceil((y2 - y1) / (L / 3)), dy = (y2 - y1) / N, ys = [];
    for (let i = 0; i < N; i++) ys.push(y1 + (i + .5) * dy);
    P.fill(W, H, (x, y) => {
      WL.reg = 0; if (x < xw - 2) return Math.cos(k * x - om * t);
      if (x < xw + 2) { if (y > y1 && y < y2) return Math.cos(k * x - om * t); WL.reg = 2; return 0; }
      let u = 0; const dx = x - xw;
      for (let i = 0; i < N; i++) { const e = y - ys[i], r = Math.sqrt(dx * dx + e * e); u += Math.cos(k * (xw + r) - om * t - .7854) / Math.sqrt(r); }
      return u * dy * amp;
    }, t);
    const base = ((om * t) % T) / k, p1 = base + Math.ceil((10 - base) / L) * L;
    P.over(W, () => {
      if (p1 + L < xw - 6) WL.dim(p1, p1 + L, 205, 'λ', '#fff', 12);
      if (!edge) { WL.ln(xw - 10, y1, xw - 10, y2, '#ffe27a', 1); WL.ln(xw - 14, y1, xw - 6, y1, '#ffe27a', 1); WL.ln(xw - 14, y2, xw - 6, y2, '#ffe27a', 1); WL.txt('gap', xw - 16, 113, '#ffe27a', 11, 'right'); }
    });
    const r = V.g / L, f = 200 / L;
    if (edge) return 'Waves bend round the edge into the shadow. Longer λ bends more. (v = 200 mm/s, λ = ' + L + ' mm, so f = ' + f.toFixed(1) + ' Hz, the same before and after.)';
    return 'Gap ÷ λ = ' + r.toFixed(1) + '. ' + (r >= 2.5 ? 'Wide gap: waves go straight on, bending only a little at the edges.' : r > 1.3 ? 'Narrowing: the spreading grows.' : 'Gap about λ or smaller: maximum diffraction, nearly circular waves.') + ' λ, f and v are unchanged by diffraction.';
  }
};
