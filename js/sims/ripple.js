/* Sim: ripple tank with straight/spherical dipper, stroboscope and a ruler (1 unit = 1 mm). */
WL.sims.ripple = {
  title: 'Ripple tank with stroboscope and ruler', tank: true,
  c: [{ id: 'm', l: 'Dipper', o: ['Straight', 'Spherical'], d: 0 }, { id: 'view', l: 'View', o: ['Water', 'Wavefronts'], d: 0 },
      { id: 'f', l: 'Dipper frequency f', min: 4, max: 20, s: 1, d: 10, u: ' Hz' }, { id: 'v', l: 'Wave speed v (depth)', min: 100, max: 250, s: 10, d: 200, u: ' mm/s' },
      { id: 's', l: 'Strobe (0 = off)', min: 0, max: 25, s: .5, d: 0, u: ' Hz' }],
  draw({ W, H, V, t }) {
    const T = WL.TAU, P = WL.tank, lam = V.v / V.f, k = T / lam, om = T * V.f, te = V.s > 0 ? Math.floor(t * V.s) / V.s : t, straight = V.m === 0, lt = V.view === 1;
    if (!lt) P.fill(W, H, (x, y) => { WL.reg = 0; if (straight) return Math.cos(k * x - om * te); const r = Math.hypot(x - 60, y - 110); return Math.cos(k * r - om * te) * Math.min(1, Math.sqrt(30 / Math.max(r, 1))); }, te);
    else { P.bg(W, H); P.over(W, () => straight ? P.planes(k, 0, 0, om, te, '#2b6cb0') : P.rings(60, 110, k, om, te, '#2b6cb0')); }
    const tc = lt ? '#234' : '#fff', ac = lt ? '#d97706' : '#ffe27a'; let n = 0, D = 0;
    P.over(W, () => {
      if (straight) for (const y of [50, 110, 170]) WL.arrow(10, y, 52, y, ac, 1.5);
      else { for (let a = 0; a < T; a += Math.PI / 4) WL.arrow(60 + 9 * Math.cos(a), 110 + 9 * Math.sin(a), 60 + 40 * Math.cos(a), 110 + 40 * Math.sin(a), ac, 1.5); WL.dot(60, 110, 4, '#d9362b'); }
      const o = straight ? 0 : 60, base = ((om * te) % T) / k, p1 = o + base + Math.ceil(((straight ? 30 : 100) - o - base) / lam) * lam;
      n = Math.min(5, Math.floor((300 - p1) / lam) + 1);
      if (n >= 2) { D = (n - 1) * lam; WL.dim(p1, p1 + D, 196, 'D = ' + D.toFixed(0) + ' mm', tc, 12); }
      WL.ln(0, 208, 320, 208, tc, 1);
      for (let x = 0; x <= 320; x += 10) WL.ln(x, 208, x, x % 50 ? 212 : 216, tc, 1);
      WL.txt('ruler (mm)', 316, 205, tc, 10, 'right');
    });
    const frozen = Math.abs(V.s - V.f) < .05;
    if (frozen) return 'Waves frozen. Ruler: ' + (n - 1) + ' wavelengths = ' + D.toFixed(0) + ' mm, so λ = ' + lam.toFixed(1) + ' mm. v = f × λ = ' + V.f + ' × ' + lam.toFixed(1) + ' = ' + (V.f * lam).toFixed(0) + ' mm/s.';
    if (V.s > 0) return 'Strobe at ' + V.s + ' Hz: the pattern creeps. Set the strobe equal to the dipper frequency (' + V.f + ' Hz) to freeze it.';
    return 'λ = v ÷ f = ' + V.v + ' ÷ ' + V.f + ' = ' + lam.toFixed(1) + ' mm. Switch the strobe on and match it to f to freeze the pattern for measuring.';
  }
};
