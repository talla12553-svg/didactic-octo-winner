/* Sene Fast Food — site behaviour.
 *
 * Progressive enhancement only: every page is readable with JS disabled,
 * except the menu grid, which has a <noscript> fallback with the phone number.
 *
 * Motion lives in motion.js. Translations live in i18n.js — this file holds
 * the small engine that applies them.
 */
(function () {
  'use strict';

  var SENE = window.SENE = window.SENE || {};

  /* ================================================================
   * Language
   * ================================================================
   * `data-i18n="key"`        replaces the element's contents
   * `data-i18n-attrs="content=key, aria-label=key2"`  replaces attributes
   *
   * The HTML ships in English, so a visitor with JavaScript off gets a
   * complete English page rather than a scaffold of empty elements.
   */

  var LANG_KEY = 'sene:lang';
  var decoder = null;

  function decode(str) {
    if (!decoder) decoder = document.createElement('textarea');
    decoder.innerHTML = str;
    return decoder.value;
  }

  function langIds() {
    return (SENE.LANGS || [{ id: 'en' }]).map(function (l) { return l.id; });
  }

  function preferredLang() {
    var ids = langIds();
    var saved;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { saved = null; }
    if (saved && ids.indexOf(saved) !== -1) return saved;

    var wanted = (navigator.languages || [navigator.language || 'en']);
    for (var i = 0; i < wanted.length; i++) {
      var two = String(wanted[i]).slice(0, 2).toLowerCase();
      if (ids.indexOf(two) !== -1) return two;
    }
    return 'en';
  }

  SENE.lang = 'en';

  function t(key, fallback) {
    var table = SENE.STRINGS || {};
    var here = table[SENE.lang] || {};
    if (here[key] != null) return here[key];
    var en = table.en || {};
    if (en[key] != null) return en[key];
    return fallback != null ? fallback : key;
  }

  SENE.t = t;

  // Translated dish copy, falling back to the English written into menu-data.
  function dishDesc(item) {
    var table = (SENE.DISH_STRINGS || {})[SENE.lang];
    return (table && table[item.name]) || item.desc || '';
  }

  function tag(label) {
    var table = (SENE.TAG_STRINGS || {})[SENE.lang];
    return (table && table[label]) || label;
  }

  function applyI18n(scope) {
    scope = scope || document;
    var restore = [];

    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      var next = t(el.dataset.i18n, null);
      if (next == null) return;

      if (el.tagName === 'TITLE') { document.title = decode(next); return; }

      // Replacing the contents wipes any word-splitting motion.js applied, so
      // the element has to be handed back for a fresh pass — and if it was
      // already revealed, put it straight back rather than leave it hidden
      // above the fold where no scroll will ever bring it in.
      var wasIn = el.classList.contains('is-in');
      el.innerHTML = next;
      el.removeAttribute('data-split');
      el.removeAttribute('data-anim');
      if (wasIn) restore.push(el);
    });

    scope.querySelectorAll('[data-i18n-attrs]').forEach(function (el) {
      el.dataset.i18nAttrs.split(',').forEach(function (pair) {
        var bits = pair.split('=');
        if (bits.length !== 2) return;
        el.setAttribute(bits[0].trim(), decode(t(bits[1].trim())));
      });
    });

    return restore;
  }

  function setLang(lang, initial) {
    if (langIds().indexOf(lang) === -1) lang = 'en';
    SENE.lang = lang;
    document.documentElement.setAttribute('lang', lang);

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }

    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });

    // On the first pass in English there is nothing to swap — the HTML already
    // ships in English — and skipping it leaves motion.js's word-splitting
    // intact rather than tearing it down and rebuilding it for no gain.
    var restore = [];
    if (!(initial && lang === 'en')) {
      restore = applyI18n(document);

      // Everything data-driven has to be rebuilt in the new language.
      if (!initial) {
        SENE.initContent();
        restore = restore.concat(applyI18n(document));
      }
    }

    if (SENE.motion) {
      SENE.motion.refresh(document);
      restore.forEach(function (el) { SENE.motion.show(el); });
    }
  }

  SENE.setLang = setLang;

  function initLangSwitch() {
    var host = document.querySelector('.lang-switch');
    if (!host || !SENE.LANGS) return;

    host.innerHTML = SENE.LANGS.map(function (l) {
      return '<button type="button" data-lang="' + l.id + '" aria-pressed="false"' +
             ' title="' + esc(l.name) + '"><span aria-hidden="true">' + esc(l.label) +
             '</span><span class="visually-hidden">' + esc(l.name) + '</span></button>';
    }).join('');

    host.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-lang]');
      if (btn) setLang(btn.dataset.lang);
    });
  }

  /* ================================================================
   * Mobile navigation
   * ================================================================ */

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        close();
        toggle.focus();
      }
    });

    // A tap outside the panel should dismiss it, the way a sheet does.
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (e.target.closest('#primary-nav') || e.target.closest('.nav-toggle')) return;
      close();
    });
  }

  /* ================================================================
   * Dish tiles
   * ================================================================
   * Dishes without a photograph get a typographic tile rather than an
   * illustration: the photographed boards carry the dish name too, so the two
   * read as one system instead of photo-vs-clipart. Each section rotates
   * through a small cast so a column never shows the same face six times.
   */
  var TINT = {
    breakfast: { bg: '#f3ede0', ink: '#7a5c2e', cast: ['gerte', 'kaani', 'ceeb'] },
    mains:     { bg: '#efe4da', ink: '#8a4a2c', cast: ['ceeb', 'jen', 'kaani'] },
    desserts:  { bg: '#e9eee7', ink: '#3f5c42', cast: ['bissap', 'gerte', 'ceeb'] }
  };

  function charFor(category, seed) {
    if (!SENE.charSvg) return '';
    var t2 = TINT[category] || TINT.mains;
    var i = (seed || 0) % t2.cast.length;
    return SENE.charSvg(t2.cast[i], { delay: ((seed || 0) % 5) * 0.4 });
  }

  function money(value) {
    return (SENE.CURRENCY || '$') + (value % 1 === 0 ? value : value.toFixed(2));
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function tileStyle(category) {
    var t2 = TINT[category] || TINT.mains;
    return 'background:' + t2.bg + ';color:' + t2.ink;
  }

  function dishMarkup(item, index) {
    var tags = (item.tags || []).map(function (label) {
      var hot = /peanut|spicy|gerte|arachide/i.test(label) ? ' tag--hot' : '';
      return '<span class="tag' + hot + '">' + tag(label) + '</span>';
    }).join('');

    // Only the breakfast special has a confirmed price. Everything else shows
    // no number at all — the note above each grid explains why, which reads
    // better than repeating "call for price" on every card.
    var price = item.price != null
      ? '<span class="dish__price">' + money(item.price) + '</span>'
      : '';

    var copy = dishDesc(item);
    var desc = copy
      ? '<p class="dish__desc">' + esc(copy) + '</p>'
      : '<p class="dish__desc dish__desc--tbc">' + t('dish.ask') + ' ' + esc(SENE.PHONE || '') + '.</p>';

    return '' +
      '<article class="dish" data-category="' + item.category + '">' +
        (item.photo
          ? '<div class="dish__media dish__media--photo">' +
              (item.flag ? '<span class="dish__flag">' + tag(item.flag) + '</span>' : '') +
              '<img src="' + esc(item.photo) + '" alt="' + esc(item.name) + '"' +
              ' loading="lazy" decoding="async" width="900" height="800">' +
            '</div>'
          : '<div class="dish__media dish__media--tile" style="' + tileStyle(item.category) + '">' +
              (item.flag ? '<span class="dish__flag">' + tag(item.flag) + '</span>' : '') +
              '<span class="dish__tile-inner">' +
                charFor(item.category, index) +
                '<span class="dish__tile-name">' + esc(item.name) + '</span>' +
              '</span>' +
            '</div>') +
        '<div class="dish__body">' +
          '<div class="dish__title">' +
            '<h3 data-nosplit>' + esc(item.name) + '</h3>' +
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

  // Any element with data-dishes="<category>" is filled with that category.
  function initSectionGrids() {
    if (!SENE.MENU) return;
    document.querySelectorAll('[data-dishes]').forEach(function (el) {
      var cat = el.dataset.dishes;
      renderDishes(el, SENE.MENU.filter(function (i) { return i.category === cat; }));
    });
  }

  /* ================================================================
   * The live menu du jour board
   * ================================================================
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
               '<img src="' + esc(b.img) + '" alt="' + decode(t('boards.alt')) + ' ' + esc(b.name) + '"' +
               ' loading="lazy" decoding="async" width="720" height="1080">' +
             '</figure>';
    }).join('');
  }

  /* ================================================================
   * The menu page
   * ================================================================ */

  function initMenuPage() {
    var grid = document.getElementById('menu-grid');
    var filterBar = document.getElementById('menu-filters');
    var count = document.getElementById('menu-count');
    if (!grid || !SENE.MENU) return;

    if (filterBar && SENE.CATEGORIES) {
      filterBar.innerHTML = SENE.CATEGORIES.map(function (c, i) {
        return '<button type="button" class="filter' + (i === 0 ? ' is-active' : '') +
               '" data-filter="' + c.id + '" aria-pressed="' + (i === 0) + '">' +
               t('cat.' + c.id, c.label) + '</button>';
      }).join('');
    }

    function apply(category) {
      var items = category === 'all'
        ? SENE.MENU
        : SENE.MENU.filter(function (i) { return i.category === category; });

      if (!items.length) {
        grid.innerHTML = '<div class="empty-state">' +
          (SENE.charSvg ? SENE.charSvg('kaani') : '') +
          '<p>' + t('menu.empty') + '</p></div>';
      } else {
        renderDishes(grid, items);
      }

      if (count) {
        count.textContent = items.length + ' ' +
          decode(t(items.length === 1 ? 'count.one' : 'count.many'));
      }

      if (SENE.motion) SENE.motion.refresh(grid.parentNode || document);
    }

    if (filterBar && !filterBar.dataset.bound) {
      filterBar.dataset.bound = 'on';
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
    var hash = SENE.currentCategory || SENE.startCategory || (location.hash || '').replace('#', '');
    SENE.startCategory = null;
    var known = (SENE.CATEGORIES || []).some(function (c) { return c.id === hash; });
    var start = known ? hash : 'all';
    SENE.currentCategory = start;

    if (known && filterBar) {
      filterBar.querySelectorAll('.filter').forEach(function (b) {
        var on = b.dataset.filter === start;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }

    apply(start);
  }

  /* ================================================================
   * Open / closed right now
   * ================================================================ */

  // Open every day 9:00 AM to 12:00 AM (midnight). This reads the *visitor's*
  // clock, not New York time — right for local customers, worth revisiting if
  // that ever stops being true.
  var OPEN_HOUR = 9;
  var CLOSE_HOUR = 24;

  function initOpenNow() {
    var slots = document.querySelectorAll('#open-now');
    if (!slots.length) return;

    var h = new Date().getHours();
    var open = h >= OPEN_HOUR && h < CLOSE_HOUR;

    slots.forEach(function (el) {
      el.className = 'status-pill ' + (open ? 'status-pill--open' : 'status-pill--shut');
      el.innerHTML = t(open ? 'status.open' : 'status.shut');
    });
  }

  /* ================================================================
   * Footer year
   * ================================================================ */

  function initYear() {
    document.querySelectorAll('#year').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* Everything that depends on the page's own content. Exposed so a host that
     swaps <main> without a reload (the single-file build) can re-run it. */
  SENE.initContent = function () {
    initCharacters();
    initLiveBoard();
    initSectionGrids();
    initBoards();
    initMenuPage();
    initOpenNow();
    initYear();
  };

  /* A host that swaps <main> without a reload — the single-file build — calls
     this after the swap. initContent() on its own is not enough: the new
     markup arrives in English and the motion layer has never seen it. */
  SENE.refreshPage = function () {
    SENE.initContent();
    var restore = applyI18n(document);
    if (SENE.motion) {
      SENE.motion.refresh(document);
      SENE.motion.open();
      restore.forEach(function (el) { SENE.motion.show(el); });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Bound once — the header and its nav persist across content swaps.
    initNav();
    initLangSwitch();
    SENE.initContent();
    setLang(preferredLang(), true);
  });
})();
