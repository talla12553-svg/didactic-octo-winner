/* Sene Fast Food — the motion layer.
 *
 * House rules, in order of importance:
 *
 *   1. Nothing here is required to read the page. Every effect starts from a
 *      *visible* resting state unless `html.js` is set, and that class is set
 *      by an inline script in <head>. JavaScript off ⇒ a plain, complete page.
 *   2. Only `transform` and `opacity` are animated. No layout properties, so
 *      nothing here can trigger reflow while scrolling.
 *   3. One rAF loop for the whole page, and it idles itself when nothing
 *      scroll-linked is on screen. No per-element scroll listeners.
 *   4. `prefers-reduced-motion` is honoured by skipping the animation, never
 *      by hiding the content: every effect rests on its final state.
 *
 * Nothing is annotated in the HTML — the selectors below decide what animates,
 * so the markup stays clean and a new section inherits the motion for free.
 */
(function () {
  'use strict';

  var SENE = window.SENE = window.SENE || {};
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');

  /* Elements whose children should enter one after another, and how far apart
     to space them. Containers are matched, not tagged in the markup. */
  var STAGGER = [
    ['.menu-grid', '.dish'],
    ['.grid', ':scope > *'],
    ['.contact-cards', '.contact-card'],
    ['.board-grid', '.board'],
    ['.hero__stats', ':scope > div'],
    ['.hero__actions', '.btn'],
    ['.special__items', 'li'],
    ['.strip ul', 'li'],
    ['.footer-grid', ':scope > div'],
    ['.filters', '.filter']
  ];

  /* Headings get a per-word rise out of a mask. Capped so a long heading does
     not turn into a slow crawl. */
  var SPLIT = 'h1, h2, .pullquote blockquote, .special__price';
  var MAX_WORD_DELAY = 20;

  /* ---------------- Word splitting ----------------
   * Walks text nodes only, so inline markup inside a heading (the <em> in the
   * hero, a <br>) survives intact and keeps its styling.
   */
  function splitWords(el) {
    if (el.dataset.split || el.hasAttribute('data-nosplit')) return;

    var i = 0;

    (function walk(node) {
      var kids = Array.prototype.slice.call(node.childNodes);
      for (var k = 0; k < kids.length; k++) {
        var child = kids[k];

        if (child.nodeType === 3) {
          if (!child.nodeValue.trim()) continue;
          var frag = document.createDocumentFragment();
          var parts = child.nodeValue.split(/(\s+)/);

          for (var p = 0; p < parts.length; p++) {
            if (!parts[p]) continue;
            if (/^\s+$/.test(parts[p])) {
              frag.appendChild(document.createTextNode(parts[p]));
              continue;
            }
            var mask = document.createElement('span');
            mask.className = 'w';
            var inner = document.createElement('span');
            inner.className = 'w__i';
            inner.textContent = parts[p];
            inner.style.setProperty('--wi', Math.min(i++, MAX_WORD_DELAY));
            mask.appendChild(inner);
            frag.appendChild(mask);
          }
          node.replaceChild(frag, child);

        } else if (child.nodeType === 1 && child.className !== 'w') {
          walk(child);
        }
      }
    })(el);

    el.dataset.split = 'on';
  }

  /* ---------------- Entrance observer ----------------
   * A single observer drives every entrance on the page. Elements are marked
   * `.anim` (hidden only while html.js is set) and flip to `.is-in`.
   */
  var io = null;

  function observe(el) {
    if (el.dataset.anim === 'watching') return;
    el.dataset.anim = 'watching';
    if (io) io.observe(el); else show(el);
  }

  function show(el) {
    el.classList.add('is-in');
    el.classList.add('is-visible');   // the class the old CSS used
  }

  function initObserver() {
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        show(entries[i].target);
        io.unobserve(entries[i].target);
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });
  }

  /* ---------------- Wiring the page up ---------------- */

  function tagStaggers(scope) {
    for (var s = 0; s < STAGGER.length; s++) {
      var containers = scope.querySelectorAll(STAGGER[s][0]);
      for (var c = 0; c < containers.length; c++) {
        var box = containers[c];
        var kids = box.querySelectorAll(STAGGER[s][1]);
        if (!kids.length) continue;
        box.classList.add('anim', 'anim--stagger');
        for (var k = 0; k < kids.length; k++) {
          kids[k].style.setProperty('--i', Math.min(k, 12));
        }
        observe(box);
      }
    }
  }

  function tagSplits(scope) {
    var heads = scope.querySelectorAll(SPLIT);
    for (var i = 0; i < heads.length; i++) {
      splitWords(heads[i]);
      heads[i].classList.add('anim', 'anim--words');
      observe(heads[i]);
    }
  }

  function tagSimple(scope) {
    // Prose, images and the existing `.reveal` markers all fade and rise.
    var els = scope.querySelectorAll(
      '.reveal, .section-head .lede, .section-head .eyebrow, .note, ' +
      '.pullquote cite, .special__body p, .story-p, .cta p, .card, ' +
      '.page-head .lede, .page-head .crumbs'
    );
    for (var i = 0; i < els.length; i++) {
      if (els[i].closest('.anim--stagger')) continue;
      els[i].classList.add('anim', 'anim--rise');
      observe(els[i]);
    }
  }

  /* The hero poster, and only the hero poster, gets the curtain.
   *
   * Two reasons it is not used more widely. First, a clip that hides an
   * element also collapses it to zero height, so an IntersectionObserver
   * watching that element never fires — the effect would prevent its own
   * trigger. The hero is exempt because the opening sequence reveals it
   * outright rather than waiting for a scroll. Second, restraint: the dish
   * cards already enter on a stagger, and a curtain inside each of them as
   * well is one effect too many.
   */
  function tagMedia(scope) {
    var els = scope.querySelectorAll('.hero .board');
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('anim', 'anim--media');
    }
  }

  /* ---------------- Scroll-linked work ----------------
   * One loop, shared. Members are added and removed by an observer, so the
   * loop stops entirely when nothing scroll-linked is on screen.
   */
  var live = [];
  var ticking = false;
  var progress = null;

  function frame() {
    ticking = false;

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress.style.transform = 'scaleX(' + p + ')';
    }

    var vh = window.innerHeight;
    for (var i = 0; i < live.length; i++) {
      var el = live[i];
      var box = el.getBoundingClientRect();
      // -1 above the fold, +1 below it.
      var t = (box.top + box.height / 2 - vh / 2) / (vh / 2 + box.height / 2);
      el.style.setProperty('--p', t.toFixed(4));
    }
  }

  function tick() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  }

  function initScrollLoop() {
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    tick();
  }

  function tagParallax(scope) {
    if (reduce.matches) return;
    if (!('IntersectionObserver' in window)) return;

    // Scroll-linked work is the most expensive thing on the page, so it is
    // spent on the four boards in the gallery and nowhere else. Dish
    // photographs get a pointer-driven zoom in CSS instead, which costs
    // nothing while scrolling.
    var els = scope.querySelectorAll('.board-grid .board img');
    if (!els.length) return;

    var watch = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var el = entries[i].target;
        var at = live.indexOf(el);
        if (entries[i].isIntersecting && at === -1) live.push(el);
        else if (!entries[i].isIntersecting && at !== -1) live.splice(at, 1);
      }
      tick();
    }, { rootMargin: '40% 0px' });

    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('drift');
      watch.observe(els[i]);
    }
  }

  /* ---------------- Header ----------------
   * Condenses once you leave the top, and gets out of the way when you scroll
   * down a long menu — but comes straight back on any upward movement, so the
   * call button is never more than a flick away.
   */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    header.appendChild(progress);

    var last = window.scrollY;
    var pending = false;

    function read() {
      pending = false;
      var y = window.scrollY;
      header.classList.toggle('is-stuck', y > 8);
      header.classList.toggle('is-condensed', y > 120);

      var nav = document.getElementById('primary-nav');
      var navOpen = nav && nav.classList.contains('is-open');
      var down = y > last && y > 260 && !navOpen;
      header.classList.toggle('is-away', down);

      last = y;
    }

    window.addEventListener('scroll', function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(read);
    }, { passive: true });

    read();
  }

  /* ---------------- Magnetic call-to-action ----------------
   * Pointer devices only, and only on the buttons that matter. The offset is
   * tiny on purpose: it should register as responsiveness, not as a toy.
   */
  function initMagnetic(scope) {
    if (reduce.matches || !fine.matches) return;

    var btns = scope.querySelectorAll('.hero__actions .btn, .cta .btn, .order-bar .btn');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (b.dataset.magnetic) continue;
      b.dataset.magnetic = 'on';
      b.classList.add('is-magnetic');
      b.addEventListener('pointermove', onMove);
      b.addEventListener('pointerleave', onLeave);
    }
  }

  function onMove(e) {
    var box = this.getBoundingClientRect();
    var dx = (e.clientX - box.left - box.width / 2) / box.width;
    var dy = (e.clientY - box.top - box.height / 2) / box.height;
    this.style.setProperty('--mx', (dx * 8).toFixed(2) + 'px');
    this.style.setProperty('--my', (dy * 5).toFixed(2) + 'px');
  }

  function onLeave() {
    this.style.setProperty('--mx', '0px');
    this.style.setProperty('--my', '0px');
  }

  /* ---------------- Public entry points ---------------- */

  // Anything above the fold enters on load rather than waiting for a scroll,
  // and waits on the webfonts so a heading does not reveal in the fallback
  // face and then reflow.
  function openingSequence() {
    root.classList.add('is-ready');
    var hero = document.querySelector('.hero, .page-head');
    if (!hero) return;
    var els = hero.querySelectorAll('.anim');
    for (var i = 0; i < els.length; i++) show(els[i]);
  }

  SENE.motion = {
    // Used by the language switcher: an element whose text was replaced has to
    // be re-split, and anything already on screen has to come straight back
    // rather than wait for a scroll that may never come.
    show: show,
    refresh: function (scope) {
      scope = scope || document;
      tagStaggers(scope);
      tagSplits(scope);
      tagSimple(scope);
      tagMedia(scope);
      tagParallax(scope);
      initMagnetic(scope);
      tick();
    }
  };

  function boot() {
    initObserver();
    initHeader();
    initScrollLoop();
    SENE.motion.refresh(document);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(openingSequence);
      // Never let a font that fails to load hold the page hostage.
      setTimeout(openingSequence, 900);
    } else {
      openingSequence();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
