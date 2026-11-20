/* Sim: refraction at a straight boundary. Phase is continuous across the boundary, which gives Snell's law. */
WL.sims.refraction = {
  title: 'Refraction at a straight boundary', tank: true,
  c: [{ id: 'view', l: 'View', o: ['Water', 'Wavefronts'], d: 0 }, { id: 'th', l: 'Angle of incidence', min: 0, max: 70, s: 1, d: 40, u: '°' },
      { id: 'n', l: 'Speed in region 2 ÷ region 1', min: .4, max: 1.6, s: .05, d: .6 }, { id: 'f', l: 'Frequency f', min: 6, max: 14, s: 1, d: 10, u: ' Hz' }],
  draw({ W, H, V, t }) {
    const T = WL.TAU, P = WL.tank, g = WL.ctx, n = V.n, lam1 = 200 / V.f, k1 = T / lam1, k2 = k1 / n, om = T * V.f, B = 110, lt = V.view === 1, topDeep = n < 1;
    let th = V.th * Math.PI / 180, cap = ''; if (n > 1 && Math.sin(th) * n > .999) { th = Math.asin(.999 / n); cap = ' Angle capped: beyond it the wave would be totally reflected.'; }
    const s1 = Math.sin(th), c1 = Math.cos(th), s2 = n * s1, c2 = Math.sqrt(1 - s2 * s2), t2 = Math.asin(s2), d1 = Math.round(th * 180 / Math.PI), d2 = Math.round(t2 * 180 / Math.PI);
    if (!lt) P.fill(W, H, (x, y) => { if (y < B) { WL.reg = topDeep ? 0 : 1; return Math.cos(k1 * (x * s1 + y * c1) - om * t); } WL.reg = topDeep ? 1 : 0; return Math.cos(k2 * (x * s2 + (y - B) * c2) + k1 * B * c1 - om * t); }, t);
    else P.bg(W, H);
    P.over(W, () => {
      const tc = lt ? '#234' : '#fff', ia = lt ? '#d97706' : '#ffe27a', ra = lt ? '#15803d' : '#9cf08c';
      if (lt) {
        g.fillStyle = topDeep ? '#cfe3f1' : '#e2f0f8'; g.fillRect(0, 0, 320, B); g.fillStyle = topDeep ? '#e2f0f8' : '#cfe3f1'; g.fillRect(0, B, 320, 110);
        g.save(); g.beginPath(); g.rect(0, 0, 320, B); g.clip(); P.planes(k1 * s1, k1 * c1, 0, om, t, '#2b6cb0', 1.4); g.restore();
        g.save(); g.beginPath(); g.rect(0, B, 320, 110); g.clip(); P.planes(k2 * s2, k2 * c2, -k2 * c2 * B + k1 * B * c1, om, t, '#2b8a3e', 1.4); g.restore();
      }
      WL.ln(0, B, 320, B, tc, 1, [5, 4]); WL.ln(160, 22, 160, 198, tc, 1, [4, 3]);
      WL.arrow(160 - s1 * 85, B - c1 * 85, 160, B, ia, 1.8); WL.arrow(160, B, 160 + s2 * 85, B + c2 * 85, ra, 1.8);
      WL.txt('normal', 164, 32, tc, 11); WL.txt(topDeep ? 'deep water' : 'shallow water', 6, 16, tc, 12); WL.txt(topDeep ? 'shallow water' : 'deep water', 6, 214, tc, 12);
      if (d1 > 0) { const m1 = WL.arc(160, B, 30, -Math.PI / 2, Math.atan2(-c1, -s1), tc); WL.txt('θ1 = ' + d1 + '°', 160 + 52 * Math.cos(m1) - 2, B + 52 * Math.sin(m1), tc, 11, 'right', 700); }
      if (d2 > 0) { const m2 = WL.arc(160, B, 30, Math.PI / 2, Math.atan2(c2, s2), tc); WL.txt('θ2 = ' + d2 + '°', 160 + 52 * Math.cos(m2) + 4, B + 52 * Math.sin(m2) + 8, tc, 11, 'left', 700); }
    });
    return 'Region 1: v = 200 mm/s, λ = ' + lam1.toFixed(1) + ' mm. Region 2: v = ' + (200 * n).toFixed(0) + ' mm/s, λ = ' + (lam1 * n).toFixed(1) + ' mm. f = ' + V.f + ' Hz in both. θ1 = ' + d1 + '°, θ2 = ' + d2 + '°, so the ray bends ' + (n < 1 ? 'towards' : n > 1 ? 'away from' : 'neither way from') + ' the normal. Snell: sin θ1 ÷ sin θ2 = ' + (s1 > 0 ? (s1 / s2).toFixed(2) : '(0° gives no ratio)') + ' = v1 ÷ v2 = λ1 ÷ λ2 = ' + (1 / n).toFixed(2) + '.' + cap;
  }
};
