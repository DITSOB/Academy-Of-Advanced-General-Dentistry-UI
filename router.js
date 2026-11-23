/* Hash router: swaps the .page between header and footer. Load AFTER script.js */
(function () {
  const pages = [...document.querySelectorAll('.page')];
  const names = pages.map(p => p.dataset.page);
  const navLinks = [...document.querySelectorAll('#primary-nav a[href^="#"]')];
  // Disable the old scroll-spy highlighter (it assumes all sections are visible)
  window.markCurrent = function () {};

  function show(name) {
    pages.forEach(p => p.classList.toggle('active', p.dataset.page === name));
    window.dispatchEvent(new Event('resize')); // lets reveal animations fire
  }

  function route() {
    const id = decodeURIComponent(location.hash.slice(1)) || 'home';
    let name = names.includes(id) ? id : null;
    const el = document.getElementById(id);
    if (!name && el) { const pg = el.closest('.page'); if (pg) name = pg.dataset.page; }
    const current = name || (document.querySelector('.page.active') || {dataset:{}}).dataset.page || 'home';
    show(current);
    if (names.includes(id) || (!el && !name)) window.scrollTo({ top: 0, behavior: 'instant' });
    else if (el) requestAnimationFrame(() => el.scrollIntoView());
    navLinks.forEach(a => {
      const h = a.getAttribute('href');
      if (h === '#' + current || h === '#' + id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }

  window.addEventListener('hashchange', route);
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (a) setTimeout(route, 0); // also handles clicking the current hash
  });
  route();
})();
