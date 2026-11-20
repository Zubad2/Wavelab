/* WaveLab engine: animation loop. Only simulations that are on screen are drawn. */
(function () {
  const R = (WL.run = { cards: [], last: 0 });
  const io = new IntersectionObserver(es => es.forEach(e => { e.target._card.visible = e.isIntersecting; }), { rootMargin: '120px' });
  R.add = c => { R.cards.push(c); c.el._card = c; io.observe(c.el); };
  function loop(ts) {
    const dt = Math.min(.05, (ts - R.last) / 1000 || 0); R.last = ts;
    for (const c of R.cards) if (c.visible) c.frame(dt);
    requestAnimationFrame(loop);
  }
  R.start = () => requestAnimationFrame(loop);
})();
