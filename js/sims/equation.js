/* Sim: who controls what? The source sets f and the medium sets v so lambda follows. */
WL.sims.equation = {
  title: 'Wave speed lab: v = f × λ', H: () => 270,
  c: [{ id: 'f', l: 'Source frequency f', min: .5, max: 3, s: .1, d: 1, u: ' Hz' }, { id: 'v', l: 'Medium speed v', min: 1, max: 5, s: .1, d: 2, u: ' m/s' }],
  draw({ W, V, t }) {
    const T = WL.TAU, g = WL.ctx, f = V.f, v = V.v, L = v / f, sc = (W - 60) / 12, X = m => 40 + m * sc, m0 = 110;
    WL.paper(W, 270); WL.ln(40, m0, W - 20, m0, '#8a98a8', 1, [5, 4]);
    g.strokeStyle = '#2b6cb0'; g.lineWidth = 2.5; g.beginPath();
    for (let x = 0; x <= 12.001; x += .05) { const y = m0 - 42 * Math.sin(T * (f * t - x / L)); x === 0 ? g.moveTo(X(x), y) : g.lineTo(X(x), y); } g.stroke();
    WL.dot(40, m0 - 42 * Math.sin(T * f * t), 8, '#d9362b'); WL.txt('source (sets f)', 14, 28, '#b02a20', 12);
    WL.txt('medium (sets v)', W - 14, 28, '#2a6a34', 12, 'right');
    const xc = L * ((((f * t - .25) % 1) + 1) % 1);
    if (xc + L <= 12) WL.dim(X(xc), X(xc + L), m0 - 56, 'λ = ' + L.toFixed(2) + ' m', '#c33', 12);
    WL.txt('v = f × λ', W / 2, 205, '#1f4f86', 22, 'center', 700);
    WL.txt(v.toFixed(1) + ' m/s = ' + f.toFixed(1) + ' Hz × ' + L.toFixed(2) + ' m', W / 2, 238, '#234', 15, 'center');
    return 'Change f (the source): λ changes, v does not. Change v (the medium): λ changes, f does not. Wavelength just follows: λ = v ÷ f.';
  }
};
