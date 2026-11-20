/* Sim: a wave passing along a row of particles; energy moves, particles only oscillate. */
WL.sims.basics = {
  title: 'Wave travelling along a row of particles', H: () => 300,
  c: [{ id: 'a', l: 'Amplitude', min: 10, max: 60, s: 1, d: 36 }, { id: 'f', l: 'Frequency', min: .2, max: 1.5, s: .05, d: .6, u: ' Hz' }],
  draw({ W, V, t }) {
    const T = WL.TAU, g = WL.ctx, m = 150, N = Math.round((W - 40) / 15), sp = (W - 40) / N, k = T / (W * .34), w = T * V.f;
    const y = x => m - V.a * Math.sin(k * (x - 20) - w * t), ri = Math.round(N / 2), rx = 20 + ri * sp;
    WL.paper(W, 300); WL.ln(10, m, W - 10, m, '#8a98a8', 1, [5, 4]);
    g.strokeStyle = '#9bb8d6'; g.lineWidth = 2; g.beginPath();
    for (let x = 20; x <= W - 20; x += 4) x === 20 ? g.moveTo(x, y(x)) : g.lineTo(x, y(x)); g.stroke();
    for (let i = 0; i <= N; i++) if (i !== ri) WL.dot(20 + i * sp, y(20 + i * sp), 5, '#3b6ea5');
    WL.ln(rx, m, rx, y(rx), '#c33', 1.5, [3, 3]); g.strokeStyle = '#c33'; g.lineWidth = 1.5; g.beginPath(); g.arc(rx, m, 8, 0, T); g.stroke();
    WL.dot(rx, y(rx), 7, '#d9362b');
    WL.arrow(30, 34, Math.min(190, W * .4), 34, '#2a8a3a', 3); WL.txt('energy travels this way', 30, 24, '#2a6a34', 12);
    WL.txt('Red particle: only up and down about its mean position', W / 2, 286, '#b02a20', 12, 'center');
    return 'Period T = 1/f = ' + (1 / V.f).toFixed(2) + ' s. The wave pattern moves right, yet the red particle never moves sideways: energy is transferred, matter is not.';
  }
};
