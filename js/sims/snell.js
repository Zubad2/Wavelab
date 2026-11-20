/* Demo: Snell's law. Light goes from air into a chosen material; readings can be recorded and plotted as sin i against sin r. */
(function () {
  const pts = []; let lastM = -1;
  const deg = Math.PI / 180;
  WL.sims.snell = {
    title: "Snell's law, air into water, glass or diamond", H: () => 560,
    c: [
      { id: 'm', l: 'Second medium', o: WL.media.map(m => m.name), d: 1 },
      { id: 'i', l: 'Angle of incidence i', min: 0, max: 85, s: 1, d: 40, u: '°' },
      { l: 'Record reading', run: V => {
        const r = Math.round(Math.asin(Math.sin(V.i * deg) / WL.media[V.m].n) / deg);
        pts.push([Math.sin(r * deg), Math.sin(V.i * deg)]);
      } },
      { l: 'Clear points', run: () => { pts.length = 0; } }
    ],
    draw({ W, V, t }) {
      if (V.m !== lastM) { pts.length = 0; lastM = V.m; }
      const T = WL.TAU, g = WL.ctx, M = WL.media[V.m], n = M.n, th = V.i * deg;
      const s1 = Math.sin(th), c1 = Math.cos(th), s2 = s1 / n, c2 = Math.sqrt(1 - s2 * s2), r = Math.asin(s2);
      const B = 150, cx = W / 2, R = 125, k1 = T / 30, k2 = k1 * n, om = T * .5;
      WL.paper(W, 560);
      g.fillStyle = 'rgba(120,170,215,.28)'; g.fillRect(0, B, W, 150);
      g.save(); g.beginPath(); g.rect(0, 0, W, B); g.clip(); WL.tank.planes(k1 * s1, k1 * c1, 0, om, t, '#8fb0d4', 1); g.restore();
      g.save(); g.beginPath(); g.rect(0, B, W, 150); g.clip(); WL.tank.planes(k2 * s2, k2 * c2, k1 * B * c1 - k2 * c2 * B, om, t, '#5d8fc4', 1); g.restore();
      WL.ln(0, B, W, B, '#234', 1.5); WL.ln(0, 305, W, 305, '#b9c1ca', 1);
      WL.ln(cx, B - 135, cx, B + 135, '#234', 1, [4, 3]);
      WL.ln(cx, B, cx + R * s1, B - R * c1, 'rgba(217,119,6,.35)', 2);
      WL.arrow(cx - R * s1, B - R * c1, cx, B, '#d97706', 2.5);
      WL.arrow(cx, B, cx + R * s2, B + R * c2, '#15803d', 2.5);
      WL.txt('normal', cx + 6, B - 128, '#234', 11);
      WL.txt('air (n = 1.00)', 10, 20, '#234', 12, 'left', 700); WL.txt(M.name.toLowerCase() + ' (n = ' + n + ')', 10, 294, '#234', 12, 'left', 700);
      if (V.i > 0) {
        const m1 = WL.arc(cx, B, 40, -Math.PI / 2, Math.atan2(-c1, -s1), '#234'), m2 = WL.arc(cx, B, 40, Math.PI / 2, Math.atan2(c2, s2), '#234');
        WL.txt('i', cx + 58 * Math.cos(m1), B + 58 * Math.sin(m1) + 4, '#234', 14, 'center', 700);
        WL.txt('r', cx + 58 * Math.cos(m2), B + 58 * Math.sin(m2) + 4, '#234', 14, 'center', 700);
      }
      /* graph of sin i against sin r */
      const ox = 52, oy = 530, PW = W - 72, PH = 190, X = v => ox + v * PW, Y = v => oy - v * PH;
      WL.txt('Graph of sin i against sin r (the gradient is n)', 10, 326, '#1f4f86', 12.5, 'left', 700);
      WL.ln(ox, oy, ox, oy - PH - 6, '#234', 1.5); WL.ln(ox, oy, ox + PW + 6, oy, '#234', 1.5);
      for (let v = 0; v <= 1.001; v += .2) { WL.ln(X(v), oy - 3, X(v), oy + 3, '#234'); WL.txt(v.toFixed(1), X(v), oy + 16, '#234', 10, 'center'); WL.ln(ox - 3, Y(v), ox + 3, Y(v), '#234'); WL.txt(v.toFixed(1), ox - 7, Y(v) + 4, '#234', 10, 'right'); }
      WL.txt('sin r', ox + PW, oy + 30, '#234', 11, 'right'); WL.txt('sin i', 6, oy - PH - 8, '#234', 11);
      WL.ln(X(0), Y(0), X(1 / n), Y(1), 'rgba(43,108,176,.5)', 1.5, [5, 4]);
      pts.forEach(p => WL.dot(X(p[0]), Y(p[1]), 4, '#2b6cb0'));
      WL.dot(X(s2), Y(s1), 5, '#f0a30a');
      let out = 'i = ' + V.i + '°, r = ' + (r / deg).toFixed(1) + '°. sin i = ' + s1.toFixed(3) + ', sin r = ' + s2.toFixed(3) + ', so n = sin i ÷ sin r = ' + n.toFixed(2) +
        '. Speed in ' + M.name.toLowerCase() + ' = 3.0 × 10⁸ ÷ ' + n + ' = ' + (3 / n).toFixed(2) + ' × 10⁸ m/s. The wavelength shrinks by the same factor and the frequency stays the same.';
      if (pts.length > 1) { let sxy = 0, sxx = 0; pts.forEach(p => { sxy += p[0] * p[1]; sxx += p[0] * p[0]; }); out += ' Gradient of your points: ' + (sxy / sxx).toFixed(2) + '.'; }
      return out;
    }
  };
})();
