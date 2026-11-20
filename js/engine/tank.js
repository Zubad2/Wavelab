/* WaveLab engine: ripple-tank renderer. The tank is 320 x 220 units; 1 unit = 1 mm. */
(function () {
  const TW = 320, TH = 220, TAU = Math.PI * 2;
  const off = document.createElement('canvas'); off.width = TW; off.height = TH;
  const oc = off.getContext('2d'), img = oc.createImageData(TW, TH);
  const COL = [[24, 104, 160], [78, 156, 182], [108, 110, 116]]; /* 0 deep water, 1 shallow water, 2 barrier */
  WL.tank = {
    TW, TH,
    /* fn(x,y) returns displacement in [-1,1] and sets WL.reg to pick the region colour */
    fill(W, H, fn, t) {
      const d = img.data; let i = 0;
      for (let y = 0; y < TH; y++) for (let x = 0; x < TW; x++) {
        const u = fn(x, y, t), b = COL[WL.reg];
        if (WL.reg === 2) { d[i] = b[0]; d[i + 1] = b[1]; d[i + 2] = b[2]; }
        else { const a = u * 46; d[i] = b[0] + a * .8; d[i + 1] = b[1] + a; d[i + 2] = b[2] + a * .7; }
        d[i + 3] = 255; i += 4;
      }
      oc.putImageData(img, 0, 0); WL.ctx.imageSmoothingEnabled = true; WL.ctx.drawImage(off, 0, 0, W, H);
    },
    bg(W, H, c) { WL.ctx.fillStyle = c || '#eef6fb'; WL.ctx.fillRect(0, 0, W, H); },
    /* run f() in tank units (mm); sizes passed to WL helpers stay in screen px */
    over(W, f) { const g = WL.ctx, k = W / TW; g.save(); g.scale(k, k); WL.k = k; f(); WL.k = 1; g.restore(); },
    /* crest lines of a plane wave: phase = kx*x + ky*y + c - om*t */
    planes(kx, ky, c, om, t, col, lw) {
      const g = WL.ctx, K = Math.hypot(kx, ky), nx = kx / K, ny = ky / K, L = TAU / K, s0 = (om * t - c) / K;
      const m0 = Math.ceil((-500 - s0) / L), m1 = Math.floor((500 - s0) / L);
      g.strokeStyle = col; g.lineWidth = (lw || 1.3) / WL.k; g.beginPath();
      for (let m = m0; m <= m1; m++) {
        const s = s0 + m * L, px = nx * s, py = ny * s;
        g.moveTo(px + ny * 500, py - nx * 500); g.lineTo(px - ny * 500, py + nx * 500);
      }
      g.stroke();
    },
    rings(cx, cy, k, om, t, col, lw) {
      const g = WL.ctx, L = TAU / k, s0 = ((om * t) % TAU) / k;
      g.strokeStyle = col; g.lineWidth = (lw || 1.3) / WL.k; g.beginPath();
      for (let r = s0; r < 420; r += L) { g.moveTo(cx + r, cy); g.arc(cx, cy, r, 0, TAU); }
      g.stroke();
    }
  };
})();
