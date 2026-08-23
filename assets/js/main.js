/* Sene Fast Food — site behaviour.
 * Progressive enhancement only: every page is readable with JS disabled,
 * except the menu grid, which has a <noscript> fallback link.
 */
(function () {
  'use strict';

  var SENE = window.SENE || {};

  /* ---------------- Mobile navigation ---------------- */

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------------- Dish tiles ---------------- */

  // Dishes without a photograph get a typographic tile instead of an
  // illustration: the photographed boards carry the dish name too, so the two
  // read as one system rather than photo-vs-clipart.
  // Each section rotates through a small cast so a column of tiles never shows
  // the same face six times running.
  var TINT = {
    breakfast: { bg: '#f3ede0', ink: '#7a5c2e', cast: ['gerte', 'kaani', 'ceeb'] },
    mains:     { bg: '#efe4da', ink: '#8a4a2c', cast: ['ceeb', 'jen', 'kaani'] },
    desserts:  { bg: '#e9eee7', ink: '#3f5c42', cast: ['bissap', 'gerte', 'ceeb'] }
  };

  function charFor(category, seed) {
    if (!SENE.charSvg) return '';
    var t = TINT[category] || TINT.mains;
    var i = (seed || 0) % t.cast.length;
    return SENE.charSvg(t.cast[i], { delay: ((seed || 0) % 5) * 0.4 });
  }

  /* ---------------- Menu rendering ---------------- */

  function money(value) {
    return (SENE.CURRENCY || '$') + (value % 1 === 0 ? value : value.toFixed(2));
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function tileStyle(category) {
    var t = TINT[category] || TINT.mains;
    return 'background:' + t.bg + ';color:' + t.ink;
  }

  function dishMarkup(item, index) {
    var tags = (item.tags || []).map(function (t) {
      var hot = /peanut|spicy/i.test(t) ? ' tag--hot' : '';
      return '<span class="tag' + hot + '">' + esc(t) + '</span>';
    }).join('');

    // Only the breakfast special has a confirmed price. Everything else shows
    // no number at all — the note above each grid explains why, which reads
    // better than repeating "call for price" on every card.
    var price = item.price != null
      ? '<span class="dish__price">' + money(item.price) + '</span>'
      : '';

    var desc = item.desc
      ? '<p class="dish__desc">' + esc(item.desc) + '</p>'
      : '<p class="dish__desc dish__desc--tbc">Ask the kitchen — call ' + esc(SENE.PHONE || '') + '.</p>';

    return '' +
      '<article class="dish" data-category="' + item.category + '">' +
        (item.photo
          ? '<div class="dish__media dish__media--photo">' +
              (item.flag ? '<span class="dish__flag">' + esc(item.flag) + '</span>' : '') +
              '<img src="' + esc(item.photo) + '" alt="' + esc(item.name) + '"' +
              ' loading="lazy" decoding="async" width="900" height="800">' +
            '</div>'
          : '<div class="dish__media dish__media--tile" style="' + tileStyle(item.category) + '">' +
              (item.flag ? '<span class="dish__flag">' + esc(item.flag) + '</span>' : '') +
              '<span class="dish__tile-inner">' +
                charFor(item.category, index) +
                '<span class="dish__tile-name">' + esc(item.name) + '</span>' +
              '</span>' +
            '</div>') +
        '<div class="dish__body">' +
          '<div class="dish__title">' +
            '<h3>' + esc(item.name) + '</h3>' +
            price +
          '</div>' +
          desc +
          (tags ? '<div class="dish__meta">' + tags + '</div>' : '') +
        '</div>' +
      '</article>';
  }

  function renderDishes(target, items) {
    target.innerHTML = items.map(dishMarkup).join('');
  }

  // Any element with data-dishes="<category>" is filled with that category.
  function initCharacters() {
    if (SENE.flameSvg) {
      document.querySelectorAll('[data-flame]').forEach(function (el) {
        el.innerHTML = SENE.flameSvg();
      });
    }
    if (!SENE.charSvg) return;
    document.querySelectorAll('[data-char]').forEach(function (el, i) {
      el.innerHTML = SENE.charSvg(el.dataset.char, {
        delay: el.dataset.charDelay ? parseFloat(el.dataset.charDelay) : (i % 5) * 0.35
      });
    });
  }

  function initSectionGrids() {
    if (!SENE.MENU) return;
    document.querySelectorAll('[data-dishes]').forEach(function (el) {
      var cat = el.dataset.dishes;
      renderDishes(el, SENE.MENU.filter(function (i) { return i.category === cat; }));
    });
  }

  /* ---------------- The live menu du jour board ----------------
   * A working reproduction of the poster the kitchen puts in the window,
   * cycling through the dishes we have boards for. The copy stays honest:
   * these are recent boards, not a claim about what is on today.
   */
  function initLiveBoard() {
    var stage = document.getElementById('board-stage');
    if (!stage || !SENE.MENU) return;

    var dishes = SENE.MENU.filter(function (i) { return i.photo; });
    if (!dishes.length) return;

    stage.innerHTML = dishes.map(function (d, i) {
      return '<figure class="board__plate' + (i === 0 ? ' is-on' : '') + '">' +
               '<img src="' + esc(d.photo) + '" alt="' + esc(d.name) + '"' +
               (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') +
               ' decoding="async" width="900" height="800">' +
             '</figure>';
    }).join('');

    var plates = stage.querySelectorAll('.board__plate');
    if (plates.length < 2) return;

    var still = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (still.matches) return;

    var at = 0, timer = null;

    function step() {
      plates[at].classList.remove('is-on');
      at = (at + 1) % plates.length;
      plates[at].classList.add('is-on');
    }

    function start() { if (!timer) timer = setInterval(step, 4200); }
    function stop()  { clearInterval(timer); timer = null; }

    start();
    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', start);
    stage.addEventListener('focusin', stop);
    stage.addEventListener('focusout', start);
    document.addEventListener('visibilitychange', function () {
      document.hidden ? stop() : start();
    });
  }

  function initBoards() {
    var wrap = document.getElementById('board-grid');
    if (!wrap || !SENE.BOARDS) return;

    wrap.innerHTML = SENE.BOARDS.map(function (b) {
      return '<figure class="board">' +
               '<img src="' + esc(b.img) + '" alt="Menu du jour board for ' + esc(b.name) + '"' +
               ' loading="lazy" decoding="async" width="720" height="1080">' +
             '</figure>';
    }).join('');
  }

  function initMenuPage() {
    var grid = document.getElementById('menu-grid');
    var filterBar = document.getElementById('menu-filters');
    var count = document.getElementById('menu-count');
    if (!grid || !SENE.MENU) return;

    if (filterBar && SENE.CATEGORIES) {
      filterBar.innerHTML = SENE.CATEGORIES.map(function (c, i) {
        return '<button type="button" class="filter' + (i === 0 ? ' is-active' : '') +
               '" data-filter="' + c.id + '" aria-pressed="' + (i === 0) + '">' + esc(c.label) + '</button>';
      }).join('');
    }

    function apply(category) {
      var items = category === 'all'
        ? SENE.MENU
        : SENE.MENU.filter(function (i) { return i.category === category; });

      if (!items.length) {
        grid.innerHTML = '<div class="empty-state">' +
          (SENE.charSvg ? SENE.charSvg('kaani') : '') +
          '<p>Nothing in this section right now — give us a call.</p></div>';
      } else {
        renderDishes(grid, items);
      }

      if (count) {
        count.textContent = items.length + (items.length === 1 ? ' dish' : ' dishes');
      }
    }

    if (filterBar) {
      filterBar.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter');
        if (!btn) return;
        filterBar.querySelectorAll('.filter').forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        apply(btn.dataset.filter);
      });
    }

    // Deep link support: menu.html#desserts opens that category. The
    // single-file build routes as "#/menu@desserts" and sets startCategory
    // instead, since the hash no longer holds the category on its own.
    var hash = SENE.startCategory || (location.hash || '').replace('#', '');
    SENE.startCategory = null;
    var known = (SENE.CATEGORIES || []).some(function (c) { return c.id === hash; });
    var start = known ? hash : 'all';

    if (known && filterBar) {
      filterBar.querySelectorAll('.filter').forEach(function (b) {
        var on = b.dataset.filter === start;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }

    apply(start);
  }

  /* ---------------- Open / closed right now ---------------- */

  // Open every day 9:00 AM to 12:00 AM (midnight).
  var OPEN_HOUR = 9;
  var CLOSE_HOUR = 24;

  function initOpenNow() {
    var slots = document.querySelectorAll('#open-now');
    if (!slots.length) return;

    var h = new Date().getHours();
    var open = h >= OPEN_HOUR && h < CLOSE_HOUR;

    slots.forEach(function (el) {
      el.className = 'status-pill ' + (open ? 'status-pill--open' : 'status-pill--shut');
      el.textContent = open ? 'Open now' : 'Closed — opens 9:00 AM';
    });
  }

  /* ---------------- Scroll reveal ---------------- */

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Header shadow on scroll ---------------- */

  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Footer year ---------------- */

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* Everything that depends on the page's own content. Exposed so a host that
     swaps <main> without a reload (the single-file build) can re-run it. */
  window.SENE.initContent = function () {
    initCharacters();
    initLiveBoard();
    initSectionGrids();
    initBoards();
    initMenuPage();
    initOpenNow();
    initReveal();
    initYear();
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Bound once — the header and its nav persist across content swaps.
    initNav();
    initStickyHeader();
    window.SENE.initContent();
  });
})();
