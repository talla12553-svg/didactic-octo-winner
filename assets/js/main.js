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
    burgers:
      '<circle cx="60" cy="52" r="34" fill="#f6c177"/>' +
      '<rect x="22" y="52" width="76" height="12" rx="6" fill="#8a5a2b"/>' +
      '<path d="M20 66h80c0 6-4 9-10 9H30c-6 0-10-3-10-9z" fill="#6fae4e"/>' +
      '<rect x="22" y="74" width="76" height="11" rx="5" fill="#e2b25e"/>' +
      '<path d="M22 88h76c0 7-5 11-12 11H34c-7 0-12-4-12-11z" fill="#f6c177"/>',
    chicken:
      // Drumstick: meaty end, tapering shank, bone knuckle.
      '<path d="M42 30c14-14 38-13 50 2 11 14 8 34-6 43-7 5-11 9-13 16l-4 12-28-10 3-12c2-7 1-13-3-19-8-12-6-25 1-32z" fill="#d98a3e"/>' +
      '<path d="M50 39c8-8 20-9 28-2" stroke="#f0b271" stroke-width="5" stroke-linecap="round" fill="none"/>' +
      '<path d="M41 93l28 10-5 14c-2 5-8 8-13 6l-9-3c-5-2-8-8-6-13z" fill="#f2e3cd"/>' +
      '<circle cx="44" cy="112" r="9" fill="#f7efe1"/><circle cx="62" cy="118" r="9" fill="#f7efe1"/>',
    wraps:
      '<path d="M30 88l24-64c2-6 9-9 15-7l22 8c6 2 9 9 7 15L74 96z" fill="#e8cd9c"/>' +
      '<path d="M44 78l18-48 14 5-18 48z" fill="#e05b3a" opacity=".85"/>' +
      '<path d="M56 84l16-44 8 3-16 44z" fill="#6fae4e" opacity=".8"/>',
    sides:
      '<path d="M36 44h48l-6 48c-1 6-6 10-12 10H54c-6 0-11-4-12-10z" fill="#e05b3a"/>' +
      '<g fill="#f6c177"><rect x="42" y="16" width="8" height="34" rx="4" transform="rotate(-12 46 33)"/>' +
      '<rect x="56" y="12" width="8" height="38" rx="4"/>' +
      '<rect x="70" y="16" width="8" height="34" rx="4" transform="rotate(12 74 33)"/></g>',
    drinks:
      '<path d="M40 26h40l-5 66c-.5 6-5 10-11 10h-8c-6 0-10.5-4-11-10z" fill="#c23b6d" opacity=".85"/>' +
      '<rect x="36" y="20" width="48" height="10" rx="5" fill="#f2e3cd"/>' +
      '<rect x="66" y="4" width="7" height="28" rx="3.5" fill="#6fae4e" transform="rotate(14 69 18)"/>',
    sweets:
      '<path d="M32 60c0-16 13-28 28-28s28 12 28 28z" fill="#f2e3cd"/>' +
      '<rect x="28" y="60" width="64" height="12" rx="6" fill="#e05b3a"/>' +
      '<path d="M34 72h52l-5 22c-1 6-6 10-12 10H51c-6 0-11-4-12-10z" fill="#d98a3e"/>'
  };

  // A wash behind the artwork so categories read apart at a glance.
  var TINT = {
    burgers: '#fff3e2',
    chicken: '#fdeade',
    wraps:   '#f2f6e8',
    sides:   '#feeee9',
    drinks:  '#fbeaf1',
    sweets:  '#f6efe6'
  };

  // The drumstick is drawn taller than the rest, so it gets its own box.
  var VIEWBOX = { chicken: '0 0 120 132' };

  function dishArt(category) {
    var art = ART[category] || ART.sides;
    var box = VIEWBOX[category] || '0 0 120 110';
    return '<svg viewBox="' + box + '" role="img" aria-hidden="true" focusable="false">' + art + '</svg>';
  }

  /* ---------------- Menu rendering ---------------- */

  function money(value) {
    return (SENE.CURRENCY || '$') + value.toFixed(2);
  }

  function dishMarkup(item) {
    var tags = (item.tags || []).map(function (t) {
      var hot = /spicy/i.test(t) ? ' tag--hot' : '';
      return '<span class="tag' + hot + '">' + t + '</span>';
    }).join('');

    return '' +
      '<article class="dish" data-category="' + item.category + '">' +
        '<div class="dish__media" style="background:' + (TINT[item.category] || 'var(--surface-alt)') + '">' +
          (item.flag ? '<span class="dish__flag">' + item.flag + '</span>' : '') +
          dishArt(item.category) +
        '</div>' +
        '<div class="dish__body">' +
          '<div class="dish__title">' +
            '<h3>' + item.name + '</h3>' +
            '<span class="dish__price">' + money(item.price) + '</span>' +
          '</div>' +
          '<p class="dish__desc">' + item.desc + '</p>' +
          (tags ? '<div class="dish__meta">' + tags + '</div>' : '') +
        '</div>' +
      '</article>';
  }

  function renderDishes(target, items) {
    target.innerHTML = items.map(dishMarkup).join('');
  }

  function initHighlights() {
    var grid = document.getElementById('highlight-grid');
    if (!grid || !SENE.MENU) return;
    renderDishes(grid, SENE.MENU.filter(function (i) { return i.featured; }));
  }

  function initMenuPage() {
    var grid = document.getElementById('menu-grid');
    var filterBar = document.getElementById('menu-filters');
    var count = document.getElementById('menu-count');
    if (!grid || !SENE.MENU) return;

    if (filterBar && SENE.CATEGORIES) {
      filterBar.innerHTML = SENE.CATEGORIES.map(function (c, i) {
        return '<button type="button" class="filter' + (i === 0 ? ' is-active' : '') +
               '" data-filter="' + c.id + '" aria-pressed="' + (i === 0) + '">' + c.label + '</button>';
      }).join('');
    }

    function apply(category) {
      var items = category === 'all'
        ? SENE.MENU
        : SENE.MENU.filter(function (i) { return i.category === category; });

      if (!items.length) {
        grid.innerHTML = '<p class="empty-state">Nothing in this section right now — check back soon.</p>';
      } else {
        renderDishes(grid, items);
      }

      if (count) {
        count.textContent = items.length + (items.length === 1 ? ' item' : ' items');
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

    // Deep link support: menu.html#chicken opens that category.
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

  /* ---------------- Combos ---------------- */

  function initCombos() {
    var wrap = document.getElementById('combo-grid');
    if (!wrap || !SENE.COMBOS) return;

    wrap.innerHTML = SENE.COMBOS.map(function (c) {
      return '' +
        '<div class="combo__item' + (c.featured ? ' combo__item--featured' : '') + '">' +
          '<h3>' + c.name + '</h3>' +
          '<p class="combo__price">' + money(c.price) + '</p>' +
          '<p>' + c.blurb + '</p>' +
          '<ul class="combo__list">' +
            c.includes.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
          '</ul>' +
          '<a class="btn ' + (c.featured ? 'btn--primary' : 'btn--ghost') + '" href="contact.html#order">Order this</a>' +
        '</div>';
    }).join('');
  }

  /* ---------------- Opening hours ---------------- */

  function initHours() {
    var table = document.querySelector('[data-hours]');
    if (!table) return;
    var today = new Date().getDay(); // 0 = Sunday
    var row = table.querySelector('tr[data-day="' + today + '"]');
    if (row) {
      row.classList.add('is-today');
      var th = row.querySelector('th');
      if (th) th.insertAdjacentHTML('beforeend', ' <span class="visually-hidden">(today)</span>');
    }
  }

  /* ---------------- Reservation / order form ---------------- */

  function initForm() {
    var form = document.getElementById('order-form');
    if (!form) return;

    var status = document.getElementById('form-status');
    var dateField = form.querySelector('input[type="date"]');

    if (dateField) {
      var today = new Date();
      var iso = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
        .toISOString().slice(0, 10);
      dateField.min = iso;
      if (!dateField.value) dateField.value = iso;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var name = (form.elements.name && form.elements.name.value.trim()) || 'there';
      if (status) {
        status.hidden = false;
        status.textContent = 'Thanks ' + name + ' — this demo form is not connected to a backend yet. ' +
          'Call the shop on the number listed to confirm your order.';
        status.focus();
      }
      form.reset();
      if (dateField) dateField.value = dateField.min;
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
    initHighlights();
    initMenuPage();
    initCombos();
    initHours();
    initForm();
    initReveal();
    initYear();
  });
})();
