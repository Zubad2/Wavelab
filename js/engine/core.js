/* WaveLab engine: shared drawing helpers. Sizes are in screen pixels even inside scaled tank overlays. */
(function () {
  const TAU = Math.PI * 2;
  const W = (window.WL = { lessons: [], sims: {}, TAU, ctx: null, k: 1, reg: 0 });
  W.use = c => { W.ctx = c; };
  W.ln = (x1, y1, x2, y2, c, w, d) => {
    const g = W.ctx; g.strokeStyle = c; g.lineWidth = (w || 1) / W.k;
    g.setLineDash((d || []).map(v => v / W.k)); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.setLineDash([]);
  };
  W.dot = (x, y, r, c) => {
    const g = W.ctx; g.fillStyle = c; g.beginPath(); g.arc(x, y, r / W.k, 0, TAU); g.fill();
    g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 1 / W.k; g.stroke();
  };
  W.txt = (s, x, y, c, z, al, wt) => {
    const g = W.ctx; g.fillStyle = c || '#234'; g.font = (wt || 600) + ' ' + ((z || 13) / W.k) + 'px "Open Sans",Arial';
    g.textAlign = al || 'left'; g.fillText(s, x, y);
  };
  W.arrow = (x1, y1, x2, y2, c, w) => {
    const g = W.ctx; w = w || 2; W.ln(x1, y1, x2, y2, c, w);
    const a = Math.atan2(y2 - y1, x2 - x1), h = (w * 3 + 4) / W.k;
    g.fillStyle = c; g.beginPath(); g.moveTo(x2, y2);
    g.lineTo(x2 - h * Math.cos(a - .4), y2 - h * Math.sin(a - .4));
    g.lineTo(x2 - h * Math.cos(a + .4), y2 - h * Math.sin(a + .4)); g.fill();
  };
  W.dim = (x1, x2, y, s, c, z) => {
    c = c || '#fff'; const h = 4 / W.k;
    W.ln(x1, y, x2, y, c, 1); W.ln(x1, y - h, x1, y + h, c, 1); W.ln(x2, y - h, x2, y + h, c, 1);
    W.txt(s, (x1 + x2) / 2, y - 6 / W.k, c, z || 12, 'center');
  };
  W.paper = (w, h, y0) => {
    y0 = y0 || 0; const g = W.ctx; g.fillStyle = '#fdfdf6'; g.fillRect(0, y0, w, h);
    g.strokeStyle = '#d5e3f1'; g.lineWidth = 1; g.beginPath();
    for (let x = 0; x <= w; x += 20) { g.moveTo(x + .5, y0); g.lineTo(x + .5, y0 + h); }
    for (let y = 0; y <= h; y += 20) { g.moveTo(0, y0 + y + .5); g.lineTo(w, y0 + y + .5); }
    g.stroke();
  };
  /* shorter arc between two angles; returns the middle angle for labelling */
  W.arc = (cx, cy, r, a1, a2, c) => {
    let d = a2 - a1; d = Math.atan2(Math.sin(d), Math.cos(d));
    const g = W.ctx; g.strokeStyle = c; g.lineWidth = 1.5 / W.k; g.beginPath(); g.arc(cx, cy, r / W.k, a1, a1 + d, d < 0); g.stroke();
    return a1 + d / 2;
  };
})();
