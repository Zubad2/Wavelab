/* Demo: critical angle and total internal reflection, plus a ray guided along an optical fibre. */
(function () {
  const deg = Math.PI / 180, crit = V => Math.asin(1 / WL.media[V.m].n) / deg;
  WL.sims.tir = {
    title: 'Critical angle and total internal reflection', H: () => 490,
    c: [
      { id: 'm', l: 'Material the light is in', o: WL.media.map(m => m.name), d: 1 },
      { id: 'i', l: 'Angle of incidence i', min: 0, max: 85, s: .5, d: 30, u: '°' },
      { l: 'Just below critical angle', run: (V, s) => s.i(Math.floor(crit(V) * 2) / 2) },
      { l: 'Just above critical angle', run: (V, s) => s.i(Math.ceil(crit(V) * 2) / 2) },
      { id: 'a', l: 'Fibre: ray angle to axis', min: 0, max: 60, s: 1, d: 20, u: '°' }
    ],
    draw({ W, V, t }) {
      const g = WL.ctx, M = WL.media[V.m], n = M.n, c = crit(V), th = V.i * deg, s = Math.sin(th), co = Math.cos(th), se = n * s, tir = se >= 1;
      const B = 140, cx = W / 2, R = 120;
      WL.paper(W, 490); g.fillStyle = 'rgba(120,170,215,.28)'; g.fillRect(0, B, W, 150);
      WL.ln(0, B, W, B, '#234', 1.5); WL.ln(0, 295, W, 295, '#b9c1ca', 1); WL.ln(cx, B - 125, cx, B + 135, '#234', 1, [4, 3]);
      WL.txt('air (n = 1.00)', 10, 20, '#234', 12, 'left', 700); WL.txt(M.name.toLowerCase() + ' (n = ' + n + ')', 10, 286, '#234', 12, 'left', 700);
      WL.txt(tir ? 'i > c : total internal reflection' : 'i < c : refraction with a little reflection', W - 10, 20, tir ? '#b02a20' : '#2a6a34', 12.5, 'right', 700);
      const frac = tir ? 1 : .2 + .6 * Math.pow(Math.min(1, V.i / c), 8);
      WL.arrow(cx, B, cx + R * s, B + R * co, 'rgba(217,119,6,' + frac + ')', 2.5);
      WL.arrow(cx - R * s, B + R * co, cx, B, '#d97706', 2.5);
      const m1 = V.i > 0 ? WL.arc(cx, B, 40, Math.PI / 2, Math.atan2(co, -s), '#234') : 0;
      if (V.i > 0) WL.txt('i', cx - 58 * Math.abs(Math.cos(m1)), B + 58 * Math.sin(m1) + 4, '#234', 14, 'center', 700);
      let r = 0;
      if (!tir) {
        const ce = Math.sqrt(1 - se * se); r = Math.asin(se) / deg;
        WL.arrow(cx, B, cx + R * se, B - R * ce, '#15803d', 2.5);
        if (r > 0) { const m2 = WL.arc(cx, B, 40, -Math.PI / 2, Math.atan2(-ce, se), '#234'); WL.txt('r', cx + 58 * Math.cos(m2), B + 58 * Math.sin(m2) + 4, '#234', 14, 'center', 700); }
      }
      /* optical fibre */
      const y0 = 350, y1 = 430, ym = 390, al = V.a * deg, tn = Math.tan(al), wall = Math.cos(al) * n >= 1;
      WL.txt('Light in a fibre made of the same material', 10, 322, '#1f4f86', 12.5, 'left', 700);
      g.fillStyle = 'rgba(120,170,215,.28)'; g.fillRect(20, y0, W - 40, y1 - y0); WL.ln(20, y0, W - 20, y0, '#234', 1.5); WL.ln(20, y1, W - 20, y1, '#234', 1.5);
      let x = 20, y = ym, dy = -1; g.strokeStyle = '#d97706'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(x, y);
      if (tn < 1e-6) g.lineTo(W - 20, ym);
      else for (let k = 0; k < 60; k++) {
        const wy = dy < 0 ? y0 : y1, dx = Math.abs(wy - y) / tn;
        if (x + dx >= W - 20) { g.lineTo(W - 20, y + dy * tn * (W - 20 - x)); break; }
        x += dx; y = wy; g.lineTo(x, y);
        if (!wall) break; dy = -dy;
      }
      g.stroke();
      if (!wall && tn > 1e-6) {
        const sx = n * Math.cos(al), cx2 = Math.sqrt(1 - sx * sx);
        WL.arrow(x, y, x + 45 * sx, y + dy * 45 * cx2, '#15803d', 2.5);
      }
      WL.txt(wall ? 'guided along the fibre' : 'escapes through the side', W - 22, 448, wall ? '#2a6a34' : '#b02a20', 12, 'right', 700);
      return M.name + ': n = ' + n + ', critical angle c = ' + c.toFixed(1) + '° (sin c = 1 ÷ n). ' +
        (tir ? 'i = ' + V.i + '° is bigger than c so every bit of the light is reflected back into the ' + M.name.toLowerCase() + '. ' : 'i = ' + V.i + '° is smaller than c so most of the light leaves into air at r = ' + r.toFixed(1) + '°. ') +
        'In the fibre the ray hits the wall at ' + (90 - V.a) + '°: ' + (wall ? 'total internal reflection, so it stays inside.' : 'that is below c, so it leaks out.');
    }
  };
})();
