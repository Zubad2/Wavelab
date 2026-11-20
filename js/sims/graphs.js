/* Sim: displacement-distance and displacement-time graphs, linked by v = f x lambda. */
WL.sims.graphs = {
  title: 'Displacement–distance and displacement–time graphs', H: () => 470,
  c: [{ id: 'a', l: 'Amplitude A', min: 1, max: 5, s: .5, d: 3, u: ' cm' }, { id: 'f', l: 'Frequency f (source)', min: .5, max: 3, s: .1, d: 1, u: ' Hz' }, { id: 'v', l: 'Speed v (medium)', min: 1, max: 4, s: .1, d: 2, u: ' m/s' }],
  draw({ W, V, t }) {
    const T = WL.TAU, g = WL.ctx, A = V.a, f = V.f, v = V.v, L = v / f, x0 = 50, PW = W - x0 - 14, X = x => x0 + x * PW / 10, Xt = s => x0 + s * PW / 4, sy = 14, y1 = 120, y2 = 352;
    WL.paper(W, 470);
    const axes = (y0, n, xl, title) => {
      WL.ln(x0, y0 - 92, x0, y0 + 92, '#234', 1.5); WL.ln(x0, y0, W - 8, y0, '#234', 1.5);
      WL.txt(title, x0 + 8, y0 - 96, '#1f4f86', 12.5, 'left', 700); WL.txt('cm', x0 - 8, y0 - 80, '#234', 11, 'right'); WL.txt(xl, W - 10, y0 + 30, '#234', 11, 'right');
      for (let i = 0; i <= n; i++) { const x = x0 + i * PW / n; WL.ln(x, y0 - 3, x, y0 + 3, '#234'); WL.txt(i, x, y0 + 16, '#234', 11, 'center'); }
      [-4, -2, 2, 4].forEach(c => { WL.ln(x0 - 3, y0 - c * sy, x0 + 3, y0 - c * sy, '#234'); WL.txt(c, x0 - 7, y0 - c * sy + 4, '#234', 10, 'right'); });
    };
    axes(y1, 10, 'distance / m', 'Displacement–distance (snapshot)'); axes(y2, 4, 'time / s', 'Displacement–time (one particle)');
    g.strokeStyle = '#2b6cb0'; g.lineWidth = 2.5; g.beginPath();
    for (let x = 0; x <= 10.001; x += .04) { const y = y1 - sy * A * Math.sin(T * (f * t - x / L)); x === 0 ? g.moveTo(X(x), y) : g.lineTo(X(x), y); } g.stroke();
    const tt = t % 4; g.strokeStyle = '#2b8a3e'; g.beginPath();
    for (let s = 0; s <= 4.001; s += .02) { const y = y2 - sy * A * Math.sin(T * f * s); s === 0 ? g.moveTo(Xt(s), y) : g.lineTo(Xt(s), y); } g.stroke();
    WL.dot(X(0), y1 - sy * A * Math.sin(T * f * t), 5, '#d9362b'); WL.dot(Xt(tt), y2 - sy * A * Math.sin(T * f * tt), 5, '#d9362b');
    const xc = L * ((((f * t - .25) % 1) + 1) % 1);
    if (xc < 10) { WL.arrow(X(xc) - 8, y1, X(xc) - 8, y1 - sy * A + 2, '#c33', 2); WL.txt('A', X(xc) - 14, y1 - sy * A / 2, '#c33', 13, 'right', 700); if (xc + L <= 10) WL.dim(X(xc), X(xc + L), y1 - sy * A - 14, 'λ', '#c33', 13); }
    const tc = 1 / (4 * f); WL.arrow(Xt(tc) - 8, y2, Xt(tc) - 8, y2 - sy * A + 2, '#c33', 2);
    if (tc + 1 / f <= 4) WL.dim(Xt(tc), Xt(tc + 1 / f), y2 - sy * A - 14, 'T', '#c33', 13);
    return 'T = 1/f = ' + (1 / f).toFixed(2) + ' s  |  λ = v/f = ' + L.toFixed(2) + ' m  |  v = f × λ = ' + f.toFixed(1) + ' × ' + L.toFixed(2) + ' = ' + v.toFixed(1) + ' m/s';
  }
};
