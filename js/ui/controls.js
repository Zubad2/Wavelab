/* WaveLab UI: builds sliders, segmented buttons and action buttons from a simulation's control list. */
(function () {
  let uid = 0;
  WL.controls = function (host, defs, V) {
    const set = {};
    defs.forEach(c => {
      const d = document.createElement('div'); d.className = 'row';
      if (c.run) {
        const b = document.createElement('button'); b.className = 'btn alt'; b.textContent = c.l; b.onclick = () => c.run(V, set); d.appendChild(b);
      } else if (c.o) {
        const l = document.createElement('label'), s = document.createElement('span'); l.textContent = c.l; s.className = 'seg';
        const bs = c.o.map((o, i) => { const b = document.createElement('button'); b.textContent = o; b.onclick = () => set[c.id](i); s.appendChild(b); return b; });
        set[c.id] = v => { V[c.id] = v; bs.forEach((b, i) => b.classList.toggle('on', i === v)); };
        set[c.id](c.d); d.append(l, s);
      } else {
        const id = 'ctl' + (++uid), l = document.createElement('label'), i = document.createElement('input'), o = document.createElement('output');
        l.htmlFor = id; l.textContent = c.l; i.id = id; i.type = 'range'; i.min = c.min; i.max = c.max; i.step = c.s;
        set[c.id] = v => { i.value = v; V[c.id] = +i.value; o.textContent = V[c.id] + (c.u || ''); };
        i.oninput = () => set[c.id](i.value); set[c.id](c.d); d.append(l, i, o);
      }
      host.appendChild(d);
    });
    return { set, reset: () => defs.forEach(c => c.id && set[c.id](c.d)) };
  };
})();
