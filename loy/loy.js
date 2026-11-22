/* LOY Perfume — language switch, opening hours, scent finder. No dependencies. */
(function () {
  'use strict';

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var lang = store.get('loy-lang') ||
    ((navigator.language || '').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');

  /* ---------- opening hours (New York time), Sunday first ---------- */
  var HOURS = [
    [[10, 0], [18, 0]],   // Sun
    [[8, 30], [21, 30]],  // Mon
    [[8, 30], [21, 30]],  // Tue
    [[8, 30], [21, 30]],  // Wed
    [[8, 30], [21, 30]],  // Thu
    [[17, 0], [21, 30]],  // Fri
    [[9, 0], [21, 30]]    // Sat
  ];
  var DAYS = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  };
  function fmt(t) {
    var h = t[0], m = t[1];
    if (lang === 'fr') return h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '');
    return ((h + 11) % 12 + 1) + ':' + String(m).padStart(2, '0') + ' ' + (h < 12 ? 'AM' : 'PM');
  }
  function nyNow() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
  }
  function openState() {
    var d = nyNow(), day = d.getDay(), mins = d.getHours() * 60 + d.getMinutes();
    var o = HOURS[day][0], c = HOURS[day][1];
    var om = o[0] * 60 + o[1], cm = c[0] * 60 + c[1];
    var open = mins >= om && mins < cm, text;
    if (open) {
      text = lang === 'fr' ? 'Ouvert maintenant · jusqu’à ' + fmt(c) : 'Open now · until ' + fmt(c);
    } else if (mins < om) {
      text = lang === 'fr' ? 'Ouvre aujourd’hui à ' + fmt(o) : 'Opens today at ' + fmt(o);
    } else {
      var n = (day + 1) % 7;
      text = lang === 'fr'
        ? 'Fermé · ouvre ' + DAYS.fr[n].toLowerCase() + ' à ' + fmt(HOURS[n][0])
        : 'Closed now · opens ' + DAYS.en[n] + ' at ' + fmt(HOURS[n][0]);
    }
    return { open: open, text: text, day: day };
  }
  function renderHours() {
    var body = document.getElementById('hours');
    if (!body) return;
    var st = openState(), open = st.open, text = st.text, day = st.day;
    document.getElementById('dot').classList.toggle('on', open);
    document.getElementById('statustext').textContent = text;
    body.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(function (i) {
      return '<tr' + (i === day ? ' class="today"' : '') + '><td>' + DAYS[lang][i] +
        '</td><td>' + fmt(HOURS[i][0]) + ' – ' + fmt(HOURS[i][1]) + '</td></tr>';
    }).join('');
  }

  /* ---------- scent finder ---------- */
  var SCENTS = {
    ameer: { house: 'Private Gold by Sky', name: 'Ameer Al Oud', price: 90, img: 'ameer-al-oud',
      en: 'Oud and amber parfum with real presence, from the ceremony to the last dance.',
      fr: 'Un parfum oud et ambre qui a de la présence, de la cérémonie à la dernière danse.' },
    vanille: { house: 'Private Gold by Sky', name: 'Baccarat Vanille', price: 95, img: 'baccarat-vanille',
      en: 'Warm, gourmand vanilla that stays close and comforting.',
      fr: 'Une vanille chaude et gourmande, douce et proche de la peau.' },
    taiga: { house: 'Deep Forest', name: 'Taiga Oud', price: 100, img: 'taiga-oud',
      en: 'Woody and green, made to be shared by anyone.',
      fr: 'Boisé et vert, fait pour être partagé par tous.' },
    m1: { house: 'Sky', name: 'Iconic Collection M1', price: 90, img: 'iconic-m1',
      en: 'Fresh and aromatic, easy to wear every day at work.',
      fr: 'Frais et aromatique, facile à porter tous les jours au travail.' },
    just4you: { house: 'Sky', name: 'Just 4 You', price: 95, img: 'just-4-you',
      en: 'Amber and woody parfum for days when you want to be noticed.',
      fr: 'Un parfum ambré et boisé pour les jours où l’on veut être remarqué.' },
    lualaba: { house: 'Sky', name: 'Lualaba', price: 110, img: 'lualaba',
      en: 'Floral and amber, elegant for weddings and big occasions.',
      fr: 'Floral et ambré, élégant pour les mariages et les grandes occasions.' },
    magic: { house: 'Sky', name: 'Magic Oriental', price: 75, img: 'magic-oriental',
      en: 'Oriental and spicy, bold for an evening out.',
      fr: 'Oriental et épicé, audacieux pour une soirée.' },
    moment: { house: 'Sky', name: 'The Moment – Girl Power', price: 90, img: 'the-moment',
      en: 'Fruity and floral, bright enough for every day.',
      fr: 'Fruité et floral, lumineux pour tous les jours.' }
  };
  var answers = {}, picked = null;

  function choose(a) {
    if (a.who === 'any') return 'taiga';
    if (a.who === 'her') {
      if (a.when === 'day') return 'moment';
      if (a.when === 'event') return 'lualaba';
      return a.loud === 'bold' ? 'magic' : 'lualaba';
    }
    if (a.when === 'day') return a.loud === 'bold' ? 'just4you' : 'm1';
    if (a.loud === 'soft') return 'vanille';
    return 'ameer';
  }
  function price(n) { return lang === 'fr' ? n + ' $' : '$' + n; }
  function renderMatch() {
    var img = document.getElementById('matchimg');
    if (!img) return;
    var s = SCENTS[picked || 'ameer'];
    img.src = 'img/scents/' + s.img + '.jpg';
    img.alt = s.name + ' bottle and box';
    document.getElementById('matchhouse').textContent = s.house;
    document.getElementById('matchname').textContent = s.name;
    document.getElementById('matchprice').textContent = price(s.price);
    document.getElementById('matchwhy').textContent = picked ? s[lang] :
      (lang === 'fr' ? 'Touchez vos réponses pour trouver votre parfum.' : 'Tap your answers to find your match.');
  }
  Array.prototype.forEach.call(document.querySelectorAll('.chips'), function (group) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      Array.prototype.forEach.call(group.querySelectorAll('.chip'), function (c) {
        c.setAttribute('aria-pressed', c === b ? 'true' : 'false');
      });
      answers[group.dataset.q] = b.dataset.v;
      picked = choose(answers);
      renderMatch();
    });
  });

  /* ---------- language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-fr]'), function (el) {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === 'fr' ? el.dataset.fr : el.dataset.en;
    });
    Array.prototype.forEach.call(document.querySelectorAll('.scent__price[data-usd]'), function (el) {
      el.textContent = price(el.dataset.usd);
    });
    var btn = document.getElementById('lang');
    if (btn) btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    renderHours();
    renderMatch();
    store.set('loy-lang', lang);
    listeners.forEach(function (fn) { fn(lang); });
  }
  var listeners = [];
  function weekText(l) {
    var keep = lang; lang = l;
    var t = [1, 2, 3, 4, 5, 6, 0].map(function (i) {
      return DAYS[l][i].slice(0, 3) + ' ' + fmt(HOURS[i][0]) + '–' + fmt(HOURS[i][1]);
    }).join(', ');
    lang = keep; return t;
  }
  window.LOY = {
    lang: function () { return lang; },
    scents: SCENTS,
    price: function (n, l) { return (l || lang) === 'fr' ? n + ' $' : '$' + n; },
    status: function (l) { var keep = lang; lang = l || lang; var st = openState(); lang = keep; return st; },
    week: weekText,
    onLang: function (fn) { listeners.push(fn); }
  };
  // Prices print as "$90" in the HTML; remember the number so French can show "90 $".
  Array.prototype.forEach.call(document.querySelectorAll('.scent__price'), function (el) {
    var n = el.textContent.replace(/[^0-9]/g, '');
    if (n && el.id !== 'matchprice') el.dataset.usd = n;
  });
  var toggle = document.getElementById('lang');
  if (toggle) toggle.addEventListener('click', function () {
    lang = lang === 'en' ? 'fr' : 'en';
    applyLang();
  });
  applyLang();
  setInterval(renderHours, 60000);
})();
