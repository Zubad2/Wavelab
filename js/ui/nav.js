/* WaveLab UI: contents list, scroll tracking, visited ticks (kept in localStorage) and the mobile drawer. */
WL.nav = function (lessons) {
  const toc = document.getElementById('toc'), scrim = document.getElementById('scrim'); let seen = {};
  try { seen = JSON.parse(localStorage.getItem('wl-seen') || '{}'); } catch (e) {}
  toc.innerHTML = '<h3>Contents</h3>';
  lessons.forEach(l => {
    const a = document.createElement('a'); a.href = '#' + l.id; a.dataset.id = l.id;
    a.innerHTML = '<span>' + l.tag + '</span>' + l.title; if (seen[l.id]) a.classList.add('seen'); toc.appendChild(a);
  });
  const links = [...toc.querySelectorAll('a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; const id = e.target.id; seen[id] = 1;
    links.forEach(a => { a.classList.toggle('on', a.dataset.id === id); if (a.dataset.id === id) a.classList.add('seen'); });
    try { localStorage.setItem('wl-seen', JSON.stringify(seen)); } catch (x) {}
  }), { rootMargin: '-15% 0px -75% 0px' });
  lessons.forEach(l => io.observe(document.getElementById(l.id)));
  const open = v => { toc.classList.toggle('open', v); scrim.classList.toggle('on', v); };
  document.getElementById('menu').onclick = () => open(!toc.classList.contains('open'));
  scrim.onclick = () => open(false); toc.onclick = e => { if (e.target.closest('a')) open(false); };
};
