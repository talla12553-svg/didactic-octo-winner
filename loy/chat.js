/* LOY Perfume — Aïcha, a scripted scent-guide chat (EN + FR). Answers come from
   the page's own data (scents, prices, hours); no messages leave the browser. */
(function () {
  'use strict';
  var L = window.LOY;
  if (!L) return;

  var REVIEW = 'https://search.google.com/local/writereview?placeid=ChIJ8ZdhfyL3wokRIk7Julupmzw';
  var PHONE = '(347) 718-7453';
  var EMAIL = 'loyperfumecontact@gmail.com';
  var ADDRESS = '222 W 116th St #10, New York, NY 10026';

  var UI = {
    en: {
      open: 'Ask Aïcha', title: 'Aïcha', sub: 'LOY scent guide · automatic answers',
      close: 'Close chat', placeholder: 'Ask about a scent, hours, prices…', send: 'Send',
      hi: "Hi, I'm Aïcha from LOY. Tell me who the scent is for and the occasion, and I'll suggest one.",
      quick: ['Recommend a scent', 'Are you open now?', 'Prices', 'Directions', 'Wholesale', 'Leave a review']
    },
    fr: {
      open: 'Demandez à Aïcha', title: 'Aïcha', sub: 'Conseillère parfum LOY · réponses automatiques',
      close: 'Fermer', placeholder: 'Un parfum, les horaires, les prix…', send: 'Envoyer',
      hi: 'Bonjour, je suis Aïcha de LOY. Dites-moi pour qui est le parfum et pour quelle occasion, et je vous en propose un.',
      quick: ['Recommandez-moi un parfum', 'Êtes-vous ouverts ?', 'Prix', 'Itinéraire', 'Vente en gros', 'Laisser un avis']
    }
  };

  /* ---------- markup ---------- */
  var fab = document.createElement('button');
  fab.className = 'fab'; fab.type = 'button';
  fab.innerHTML = '<span class="face"><img src="img/aicha.jpg" alt=""></span><span class="fab__label"></span>';
  var box = document.createElement('div');
  box.className = 'chat'; box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.innerHTML =
    '<div class="chat__head"><span class="face"><img src="img/aicha.jpg" alt=""></span>' +
    '<span><b class="chat__title"></b><small class="chat__sub"></small></span>' +
    '<button type="button" class="chat__close">×</button></div>' +
    '<div class="chat__log" aria-live="polite"></div>' +
    '<div class="chat__quick"></div>' +
    '<form class="chat__form"><input autocomplete="off"><button type="submit"></button></form>';
  document.body.appendChild(fab);
  document.body.appendChild(box);

  var log = box.querySelector('.chat__log'), input = box.querySelector('input'),
      quick = box.querySelector('.chat__quick'), greeted = false;

  function paint(lang) {
    var t = UI[lang];
    fab.querySelector('.fab__label').textContent = t.open;
    fab.setAttribute('aria-label', t.open);
    box.setAttribute('aria-label', t.open);
    box.querySelector('.chat__title').textContent = t.title;
    box.querySelector('.chat__sub').textContent = t.sub;
    box.querySelector('.chat__close').setAttribute('aria-label', t.close);
    input.placeholder = t.placeholder;
    input.setAttribute('aria-label', t.placeholder);
    box.querySelector('.chat__form button').textContent = t.send;
    quick.innerHTML = t.quick.map(function (q) { return '<button type="button">' + q + '</button>'; }).join('');
  }
  paint(L.lang());
  L.onLang(paint);

  /* ---------- messages ---------- */
  function say(text, who, link) {
    var d = document.createElement('div');
    d.className = 'msg msg--' + (who || 'bot');
    d.textContent = text;
    if (link) {
      var a = document.createElement('a');
      a.href = link.href; a.textContent = link.label; a.rel = 'noopener';
      d.appendChild(document.createTextNode(' '));
      d.appendChild(a);
    }
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }
  function openChat() {
    box.hidden = false; fab.hidden = true;
    if (!greeted) { say(UI[L.lang()].hi); greeted = true; }
    input.focus();
  }
  function closeChat() { box.hidden = true; fab.hidden = false; fab.focus(); }
  fab.addEventListener('click', openChat);
  Array.prototype.forEach.call(document.querySelectorAll('[data-open-chat]'), function (b) {
    b.addEventListener('click', openChat);
  });
  box.querySelector('.chat__close').addEventListener('click', closeChat);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) closeChat(); });

  /* ---------- answers ---------- */
  var FR = /\b(bonjour|salut|bonsoir|ouvert|ouverts|horaires?|heures?|ferm\w*|prix|combien|gros|où|adresse|itinéraire|métro|mariage|soirée|aïd|tabaski|travail|bureau|léger|elle|femme|cadeau|parfums?|conseil\w*|recommand\w*|avis|je|vous|pour)\b/i;
  var S = L.scents;
  function line(k, fr) {
    var s = S[k];
    return s.name + ' (' + s.house + ', ' + L.price(s.price, fr ? 'fr' : 'en') + ')';
  }
  function reply(raw) {
    var fr = L.lang() === 'fr' || FR.test(raw);
    var q = raw.toLowerCase();

    var hit = Object.keys(S).filter(function (k) {
      var n = S[k].name.toLowerCase();
      return q.indexOf(n) > -1 || q.indexOf(n.split(' ')[0]) > -1 && n.split(' ')[0].length > 4;
    })[0];
    if (hit) {
      var s = S[hit];
      return { text: s.name + ' · ' + s.house + ' · ' + L.price(s.price, fr ? 'fr' : 'en') + '. ' + s[fr ? 'fr' : 'en'] +
        (fr ? ' Venez le sentir au comptoir sur la 116e Rue.' : ' Come smell it at the counter on 116th Street.') };
    }
    if (/review|avis|rate|note|google/.test(q)) {
      return { text: fr ? 'Merci ! Votre avis aide le quartier à nous trouver.' : 'Thank you! Your review helps the neighborhood find us.',
        link: { href: REVIEW, label: fr ? 'Laisser un avis Google' : 'Leave a Google review' } };
    }
    if (/open|hour|close|today|time|ouvert|horaire|heure|ferm/.test(q)) {
      return { text: L.status(fr ? 'fr' : 'en').text + '. ' + L.week(fr ? 'fr' : 'en') + '.' };
    }
    if (/price|cost|how much|\$|cheap|prix|combien|coût|cher/.test(q)) {
      return { text: fr
        ? 'Nos parfums vont de 75 $ à 110 $ : ' + ['magic', 'ameer', 'm1', 'moment', 'vanille', 'just4you', 'taiga', 'lualaba'].map(function (k) { return S[k].name + ' ' + L.price(S[k].price, 'fr'); }).join(', ') + '.'
        : 'Our scents run $75 to $110: ' + ['magic', 'ameer', 'm1', 'moment', 'vanille', 'just4you', 'taiga', 'lualaba'].map(function (k) { return S[k].name + ' ' + L.price(S[k].price, 'en'); }).join(', ') + '.' };
    }
    if (/wholesale|bulk|stock|resell|trade|gros|revend/.test(q)) {
      return { text: fr ? 'Oui, nous faisons de la vente en gros. Appelez le ' + PHONE + ' ou écrivez-nous pour la liste des prix.'
                        : 'Yes, we sell wholesale. Call ' + PHONE + ' or email us for the price list.',
        link: { href: 'mailto:' + EMAIL + '?subject=Wholesale%20price%20list', label: EMAIL } };
    }
    if (/reserve|hold|set aside|pick ?up|réserv|côté|retrait/.test(q)) {
      return { text: fr ? 'Appelez-nous au ' + PHONE + ' et nous le mettons de côté pour vous.'
                        : 'Call us at ' + PHONE + " and we'll set it aside for you." };
    }
    if (/where|address|direction|train|subway|map|find you|où|adresse|itinéraire|métro|plan/.test(q)) {
      return { text: ADDRESS + (fr ? '. À quelques pas de la station 116 St.' : '. A short walk from the 116 St station.'),
        link: { href: 'https://www.google.com/maps/dir/?api=1&destination=222+W+116th+St,+New+York,+NY+10026', label: fr ? 'Itinéraire' : 'Get directions' } };
    }
    if (/phone|call|email|contact|téléphone|appeler|mail/.test(q)) {
      return { text: (fr ? 'Téléphone : ' : 'Phone: ') + PHONE + ' · Email: ' + EMAIL + '.' };
    }
    var her = /\b(her|she|woman|women|wife|girlfriend|mom|mother|sister|elle|femme|épouse|maman|soeur|sœur)\b/.test(q);
    if (/wedding|eid|night|evening|party|date|bold|strong|mariage|soir|aïd|tabaski|fête|intense|fort/.test(q)) {
      return { text: fr
        ? 'Pour une grande occasion, essayez ' + (her ? line('lualaba', 1) + ' ou ' + line('magic', 1) : line('ameer', 1) + ' ou ' + line('taiga', 1)) + '.'
        : 'For a big night, try ' + (her ? line('lualaba') + ' or ' + line('magic') : line('ameer') + ' or ' + line('taiga')) + '.' };
    }
    if (/\bday\b|every ?day|work|office|light|soft|fresh|jour|travail|bureau|léger|doux|frais/.test(q)) {
      return { text: fr
        ? 'Pour tous les jours, commencez par ' + (her ? line('moment', 1) : line('m1', 1)) + '. Venez le sentir à côté de ' + (her ? S.lualaba.name : S.just4you.name) + '.'
        : 'For every day, start with ' + (her ? line('moment') : line('m1')) + '. Come try it next to ' + (her ? S.lualaba.name : S.just4you.name) + '.' };
    }
    if (/gift|present|cadeau|offrir/.test(q) || her) {
      return { text: fr
        ? 'Pour elle, sentez ' + line('lualaba', 1) + ' et ' + line('moment', 1) + ' au comptoir. Décrivez-nous son style et nous vous aiderons à choisir.'
        : 'For her, smell ' + line('lualaba') + ' and ' + line('moment') + " at the counter. Tell us her style and we'll help you pick." };
    }
    if (/\b(him|he|man|men|husband|boyfriend|dad|father|brother|lui|homme|mari|papa|frère)\b/.test(q)) {
      return { text: fr
        ? 'Pour lui, nos favoris sont ' + line('ameer', 1) + ' et ' + line('just4you', 1) + '. Plutôt tous les jours ou une occasion ?'
        : 'For him, our favorites are ' + line('ameer') + ' and ' + line('just4you') + '. Is it for every day or an occasion?' };
    }
    if (/recommend|suggest|scent|perfume|fragrance|oud|help|recommand|conseil|parfum|aide/.test(q)) {
      return { text: fr
        ? "C'est pour qui, et pour tous les jours ou une occasion ? Vous pouvez aussi essayer le guide en trois questions sur la page d'accueil."
        : 'Who is it for, and is it for every day or an occasion? You can also try the three-question scent finder on the home page.' };
    }
    if (/^(hi|hello|hey|salam|bonjour|salut|bonsoir)\b/.test(q)) {
      return { text: UI[fr ? 'fr' : 'en'].hi };
    }
    return { text: fr
      ? 'Je peux vous aider pour les parfums, les prix, les horaires, l’itinéraire et la vente en gros. Pour le reste, appelez-nous au ' + PHONE + '.'
      : 'I can help with scents, prices, hours, directions and wholesale. For anything else, call us at ' + PHONE + '.' };
  }
  function ask(text) {
    say(text, 'me');
    var r = reply(text);
    setTimeout(function () { say(r.text, 'bot', r.link); }, 400);
  }
  box.querySelector('.chat__form').addEventListener('submit', function (e) {
    e.preventDefault();
    var t = input.value.trim();
    if (!t) return;
    input.value = '';
    ask(t);
  });
  quick.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) ask(b.textContent);
  });
})();
