/* WaveLab entry point: builds each lesson from js/content, mounts simulations and quizzes, then starts the loop. */
(function () {
  const root = document.getElementById('chapter'); let n = 0;
  WL.lessons.forEach(l => {
    const s = document.createElement('section'); s.className = 'lesson'; s.id = l.id;
    l.tag = l.tag || String(++n);
    s.innerHTML = '<h2><span class="num">' + l.tag + '</span>' + l.title + '</h2>' + l.html; root.appendChild(s);
    s.querySelectorAll('[data-sim]').forEach(h => WL.mountSim(h));
    s.querySelectorAll('[data-quiz]').forEach(h => WL.quiz(h, l.quiz[h.dataset.quiz], h.dataset.title));
  });
  WL.nav(WL.lessons); WL.run.start();
})();
