/* Sim: plane waves reflecting from a straight barrier. Field = incident + mirror-image wave. */
WL.sims.reflection = {
  title: 'Reflection of plane waves at a straight barrier', tank: true,
  c: [{ id: 'view', l: 'View', o: ['Water', 'Wavefronts'], d: 0 }, { id: 'p', l: 'Barrier tilt', min: 20, max: 70, s: 1, d: 45, u: '°' }, { id: 'f', l: 'Frequency f', min: 6, max: 14, s: 1, d: 10, u: ' Hz' }],
  draw({ W, H, V, t }) {
    const T = WL.TAU, P = WL.tank, g = WL.ctx, lam = 200 / V.f, k = T / lam, om = T * V.f, ph = V.p * Math.PI / 180, s = Math.sin(ph), c = Math.cos(ph), cx = 170, cy = 110, lt = V.view === 1;
    const q = (x, y) => (y - cy) * c - (x - cx) * s, i = 90 - V.p, rd = [Math.cos(2 * ph), Math.sin(2 * ph)], nn = [-s, c];
    if (!lt) P.fill(W, H, (x, y) => { const d = q(x, y); if (d <= 0) { WL.reg = 2; return 0; } WL.reg = 0; return .5 * (Math.cos(k * x - om * t) + Math.cos(k * (x + 2 * d * s) - om * t)); }, t);
    else P.bg(W, H);
    const half = sg => { g.beginPath(); g.moveTo(cx - c * 500, cy - s * 500); g.lineTo(cx + c * 500, cy + s * 500); g.lineTo(cx + c * 500 + sg * nn[0] * 500, cy + s * 500 + sg * nn[1] * 500); g.lineTo(cx - c * 500 + sg * nn[0] * 500, cy - s * 500 + sg * nn[1] * 500); g.closePath(); };
    P.over(W, () => {
      if (lt) {
        g.save(); half(1); g.clip(); P.planes(k, 0, 0, om, t, '#2b6cb0', 1.4); P.planes(k * rd[0], k * rd[1], k * (2 * s * s * cx - 2 * s * c * cy), om, t, '#2b8a3e', 1.4); g.restore();
        g.fillStyle = '#c9cdd3'; half(-1); g.fill();
      }
      WL.ln(cx - c * 400, cy - s * 400, cx + c * 400, cy + s * 400, lt ? '#6b7078' : '#e4e6e9', 3);
      const ia = lt ? '#d97706' : '#ffe27a', ra = lt ? '#15803d' : '#9cf08c', tc = lt ? '#234' : '#fff';
      WL.ln(cx, cy, cx + nn[0] * 80, cy + nn[1] * 80, tc, 1, [4, 3]); WL.txt('normal', cx + nn[0] * 80, cy + nn[1] * 80 + 12, tc, 11, 'center');
      WL.arrow(cx - 100, cy, cx - 3, cy, ia, 1.8); WL.arrow(cx + rd[0] * 3, cy + rd[1] * 3, cx + rd[0] * 95, cy + rd[1] * 95, ra, 1.8);
      WL.txt('incident', cx - 100, cy - 8, ia, 11); WL.txt('reflected', cx + rd[0] * 95, cy + rd[1] * 95 + 12, ra, 11, 'center');
      const an = Math.atan2(nn[1], nn[0]), m1 = WL.arc(cx, cy, 28, an, Math.PI, tc), m2 = WL.arc(cx, cy, 38, an, 2 * ph, tc);
      WL.txt('i', cx + 46 * Math.cos(m1), cy + 46 * Math.sin(m1), tc, 13, 'center', 700); WL.txt('r', cx + 54 * Math.cos(m2), cy + 54 * Math.sin(m2) + 4, tc, 13, 'center', 700);
    });
    return 'Law of reflection: i = r = ' + i + '°, both measured from the normal. Before and after: λ = ' + lam.toFixed(1) + ' mm, f = ' + V.f + ' Hz, v = 200 mm/s. Only the direction changes.';
  }
};
