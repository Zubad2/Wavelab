/* WaveLab UI: multiple-choice self-check with instant feedback. items = [{q, o:[...], a:index, e:'why'}] */
WL.quiz = function (host, items, title) {
  host.className = 'quiz'; host.innerHTML = '<h3>' + (title || 'Check yourself') + '</h3>';
  let done = 0, right = 0; const sc = document.createElement('div'); sc.className = 'score';
  items.forEach((it, qi) => {
    const q = document.createElement('div'), ul = document.createElement('div'), fb = document.createElement('p');
    q.className = 'q'; ul.className = 'opts'; fb.className = 'fb';
    q.innerHTML = '<p><b>' + (qi + 1) + '.</b> ' + it.q + '</p>';
    it.o.forEach((o, oi) => {
      const b = document.createElement('button'); b.innerHTML = o;
      b.onclick = () => {
        if (q.dataset.d) return; q.dataset.d = 1; done++;
        ul.querySelectorAll('button').forEach((x, i) => { x.disabled = true; if (i === it.a) x.classList.add('right'); });
        if (oi === it.a) { right++; fb.textContent = 'Correct. ' + it.e; } else { b.classList.add('wrong'); fb.textContent = 'Not quite. ' + it.e; }
        sc.textContent = 'Score: ' + right + ' / ' + items.length;
        if (done === items.length) { const r = document.createElement('button'); r.className = 'btn alt'; r.style.marginLeft = '12px'; r.textContent = 'Try again'; r.onclick = () => WL.quiz(host, items, title); sc.appendChild(r); }
      };
      ul.appendChild(b);
    });
    q.append(ul, fb); host.appendChild(q);
  });
  host.appendChild(sc);
};
