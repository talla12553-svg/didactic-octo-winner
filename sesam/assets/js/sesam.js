/* Sesam Digital — comportements de l'interface.
   Aucune dépendance. Sans JavaScript le site reste utilisable :
   les réponses de la FAQ sont dans le HTML (une règle .no-js les
   déplie), les mêmes liens de navigation figurent dans le pied de
   page, et .reveal n'est appliqué qu'aux éléments déjà visibles. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* --- Navigation mobile --- */
  var toggle = document.querySelector('.nav-toggle');
  var row = document.querySelector('.head-row');
  if (toggle && row) {
    toggle.addEventListener('click', function () {
      var open = row.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && row.classList.contains('nav-open')) {
        row.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* --- FAQ : un seul panneau ouvert à la fois --- */
  var items = document.querySelectorAll('.faq-item');
  Array.prototype.forEach.call(items, function (item) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('role', 'region');
    btn.addEventListener('click', function () {
      var wasOpen = item.getAttribute('data-open') === 'true';
      Array.prototype.forEach.call(items, function (other) {
        other.setAttribute('data-open', 'false');
        other.querySelector('.faq-a').style.maxHeight = null;
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.setAttribute('data-open', 'true');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* --- Apparition au défilement --- */
  var targets = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduced) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* --- Année du copyright --- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());
})();
