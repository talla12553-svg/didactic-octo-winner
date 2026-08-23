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

  /* ---------------- Dish artwork ---------------- */

  var ART = {
    // Baguette sandwich — the $10 breakfast plates are all served this way.
    breakfast:
      '<path d="M14 74c-4-8 0-17 9-21l58-27c9-4 19-1 23 7 4 8 0 17-9 21l-58 27c-9 4-19 1-23-7z" fill="#e8c98f"/>' +
      '<path d="M20 66l60-28" stroke="#d9b271" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M26 62c14 6 30 5 44-2 8-4 16-4 23 0l-9 5c-6-3-12-3-18 0-15 7-32 8-47 2z" fill="#8a5a2b"/>' +
      '<path d="M30 56c13 5 28 4 41-2" stroke="#6fae4e" stroke-width="6" stroke-linecap="round" fill="none"/>',
    // Bowl of rice with fish/meat and vegetables — thiebou and mbakhal.
    // GARNISH swaps the centre and vegetable colours so a row of bowls varies.
    mains:
      '<path d="M16 52h88c0 26-20 44-44 44S16 78 16 52z" fill="#f2f2f2"/>' +
      '<path d="M22 52c0-14 17-24 38-24s38 10 38 24z" fill="{rice}"/>' +
      '<ellipse cx="60" cy="40" rx="17" ry="8" fill="{centre}"/>' +
      '<circle cx="38" cy="45" r="5" fill="{veg}"/><circle cx="84" cy="45" r="5" fill="{veg}"/>' +
      '<rect x="14" y="50" width="92" height="7" rx="3.5" fill="#cfcfcf"/>',
    // Cup of thiakry / ngalakh with a spoon.
    desserts:
      '<path d="M30 44h60l-7 46c-1 7-7 12-14 12H51c-7 0-13-5-14-12z" fill="#f7efe1"/>' +
      '<path d="M31 52h58l-2 14H33z" fill="#e8d3a8"/>' +
      '<circle cx="46" cy="60" r="3.5" fill="#8a5a2b"/><circle cx="60" cy="58" r="3.5" fill="#8a5a2b"/>' +
      '<circle cx="74" cy="61" r="3.5" fill="#8a5a2b"/>' +
      '<rect x="26" y="40" width="68" height="9" rx="4.5" fill="#e0d2b8"/>'
  };

  // A wash behind the artwork so sections read apart at a glance.
  var TINT = {
    breakfast: '#fff5e3',
    mains:     '#fdeade',
    desserts:  '#f4f1e6'
  };

  var GARNISH = [
    { rice: '#e06a3a', centre: '#d98a3e', veg: '#6fae4e' },
    { rice: '#d4552c', centre: '#e8a460', veg: '#3f8f57' },
    { rice: '#e8843f', centre: '#c96a2c', veg: '#7cb85f' },
    { rice: '#c85a30', centre: '#eab173', veg: '#5aa15c' }
  ];

  function dishArt(category, seed) {
    var art = ART[category] || ART.mains;
    if (art.indexOf('{rice}') !== -1) {
      var g = GARNISH[(seed || 0) % GARNISH.length];
      art = art.replace(/\{rice\}/g, g.rice)
               .replace(/\{centre\}/g, g.centre)
               .replace(/\{veg\}/g, g.veg);
    }
    return '<svg viewBox="0 0 120 110" role="img" aria-hidden="true" focusable="false">' + art + '</svg>';
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
        '<div class="dish__media" style="background:' + (TINT[item.category] || 'var(--surface-alt)') + '">' +
          (item.flag ? '<span class="dish__flag">' + esc(item.flag) + '</span>' : '') +
          dishArt(item.category, index) +
        '</div>' +
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
  function initSectionGrids() {
    if (!SENE.MENU) return;
    document.querySelectorAll('[data-dishes]').forEach(function (el) {
      var cat = el.dataset.dishes;
      renderDishes(el, SENE.MENU.filter(function (i) { return i.category === cat; }));
    });
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
        grid.innerHTML = '<p class="empty-state">Nothing in this section right now — give us a call.</p>';
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

    // Deep link support: menu.html#desserts opens that category.
    var hash = (location.hash || '').replace('#', '');
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

  /* ---------------- Footer year ---------------- */

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSectionGrids();
    initMenuPage();
    initOpenNow();
    initReveal();
    initYear();
  });
})();
