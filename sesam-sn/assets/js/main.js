/* Sesam.sn — site behaviour. Vanilla JS, no dependencies. */

/* Where contact requests go. Leave empty until the real addresses are known:
   the form then shows a recap the visitor can copy instead of sending.
   - email:    e.g. "contact@exemple.sn"  → opens the visitor's mail app
   - whatsapp: international number, digits only, e.g. "221770000000" → opens WhatsApp */
const CONTACT = { email: '', whatsapp: '' };

const fcfa = n => n.toLocaleString('fr-FR').replace(/ | /g, ' ') + ' FCFA';
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Mobile navigation ---------- */
(() => {
  const btn = $('.nav-toggle'), nav = $('#nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus();
    }
  });
})();

$$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

/* ---------- Dates relative to today, in French ---------- */
const DAY = 864e5;
const fmtDay = d => d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
const fmtMonth = d => d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
const addDays = n => new Date(Date.now() + n * DAY);

/* ---------- SaaS demo: the client-final journey, per module ---------- */
const MODULES = {
  reservation: {
    label: 'Sesam Réservation',
    business: 'Salon Awa Beauté',
    place: 'Sicap Liberté, Dakar',
    slug: 'awa-beaute',
    blurb: "Une cliente choisit sa prestation, prend un créneau et verse un acompte. Le salon n'a plus de rendez-vous oubliés ni de places bloquées pour rien.",
    step1: 'Choisissez une prestation',
    items: [
      { name: 'Tresses africaines', price: 15000, meta: '3 h' },
      { name: "Pose d'extensions", price: 25000, meta: '2 h' },
      { name: 'Massage relaxant', price: 12000, meta: '1 h' },
      { name: 'Soin visage au lait de beauté', price: 8000, meta: '45 min' },
    ],
    step2: 'Choisissez un créneau',
    slots: () => {
      const out = [];
      [1, 2].forEach(d => ['09:00', '11:30', '15:00'].forEach((h, i) =>
        out.push({ label: `${fmtDay(addDays(d))}\n${h}`, full: `${fmtDay(addDays(d))} à ${h}`, off: d === 1 && i === 1 })));
      return out;
    },
    pay: 'acompte',
    reminder: 'Rappel envoyé la veille du rendez-vous.',
  },
  commande: {
    label: 'Sesam Commande',
    business: 'Atelier Couture Ndiaye',
    place: 'HLM, Dakar',
    slug: 'couture-ndiaye',
    blurb: 'Le client commande une tenue sur mesure, choisit sa date de retrait ou de livraison et paie un acompte. Ses mesures restent enregistrées pour la prochaine fois.',
    step1: 'Choisissez un modèle',
    items: [
      { name: 'Grand boubou homme', price: 35000, meta: 'sur mesure' },
      { name: 'Robe taille-basse', price: 25000, meta: 'sur mesure' },
      { name: 'Ensemble enfant', price: 12000, meta: 'sur mesure' },
    ],
    step2: 'Date de retrait ou de livraison',
    slots: () => [7, 10, 14].flatMap(d => [
      { label: `${fmtDay(addDays(d))}\nRetrait`, full: `retrait le ${fmtDay(addDays(d))}` },
      { label: `${fmtDay(addDays(d))}\nLivraison`, full: `livraison le ${fmtDay(addDays(d))}`, off: d === 7 },
    ]),
    pay: 'acompte',
    reminder: 'Rappel envoyé deux jours avant la date de retrait.',
  },
  loyer: {
    label: 'Sesam Loyer',
    business: 'Résidence Keur Yaay',
    place: 'Ouakam, Dakar',
    slug: 'keur-yaay',
    blurb: 'Le locataire retrouve son bien, voit son échéance et paie son loyer par mobile money. Le propriétaire suit qui a payé sans relancer à la main.',
    step1: 'Votre logement',
    items: [
      { name: 'Appartement F3 — 2e étage', price: 250000, meta: '/ mois' },
      { name: 'Studio meublé — RDC', price: 120000, meta: '/ mois' },
      { name: 'Local commercial', price: 400000, meta: '/ mois' },
    ],
    step2: 'Échéance à régler',
    slots: () => {
      const now = new Date(), out = [];
      for (let i = 0; i < 3; i++) {
        const d = new Date(now.getFullYear(), now.getMonth() + i, 5);
        out.push({ label: `Loyer\n${fmtMonth(d)}`, full: `loyer de ${fmtMonth(d)} (échéance le 5)` });
      }
      return out;
    },
    pay: 'total',
    reminder: "Rappel automatique cinq jours avant chaque échéance.",
  },
  inscription: {
    label: 'Sesam Inscription',
    business: 'École Les Baobabs',
    place: 'Grand Yoff, Dakar',
    slug: 'les-baobabs',
    blurb: "Les parents inscrivent leur enfant en ligne et règlent les frais de scolarité par tranches. L'école voit en un coup d'œil les tranches payées et en attente.",
    step1: 'Classe demandée',
    items: [
      { name: 'Maternelle — Moyenne section', price: 90000, meta: '/ trimestre' },
      { name: 'Primaire — CE1', price: 105000, meta: '/ trimestre' },
      { name: 'Primaire — CM2', price: 120000, meta: '/ trimestre' },
    ],
    step2: 'Tranche à régler',
    slots: () => [
      { label: '1re tranche\nOctobre', full: '1re tranche (octobre)' },
      { label: '2e tranche\nJanvier', full: '2e tranche (janvier)' },
      { label: '3e tranche\nAvril', full: '3e tranche (avril)' },
    ],
    pay: 'total',
    reminder: 'Rappel envoyé avant chaque tranche.',
  },
  garde: {
    label: 'Sesam Garde',
    business: 'Pharmacie du Plateau',
    place: 'Plateau, Dakar',
    slug: 'pharmacie-plateau',
    blurb: "Pour les pharmacies, l'essentiel est côté gestion : le calendrier des gardes et un stock qui signale lui-même les produits expirés ou bientôt périmés.",
    pharmacy: true,
  },
};

const STOCK = [
  { name: 'Paracétamol 500 mg', lot: 'L2381', qty: 140, days: 210 },
  { name: 'Amoxicilline 1 g', lot: 'A0917', qty: 36, days: 24 },
  { name: 'Sirop toux enfant', lot: 'S4410', qty: 12, days: -3 },
  { name: 'SRO sachets', lot: 'R1203', qty: 80, days: 75 },
  { name: 'Ibuprofène 400 mg', lot: 'I5528', qty: 22, days: 9 },
];
const stockStatus = days => days < 0 ? ['Expiré', 's-bad'] : days <= 30 ? ['Bientôt', 's-warn'] : ['OK', 's-ok'];

(() => {
  const root = $('#demo');
  if (!root) return;
  const screen = $('#screen', root), copy = $('#demo-copy', root);
  const state = { key: 'reservation', step: 1, item: null, slot: null, method: null };

  const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7a11.8 11.8 0 0 1-4.6-4.1 5.2 5.2 0 0 1-1.1-2.8 3 3 0 0 1 1-2.2 1 1 0 0 1 .7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6a8.6 8.6 0 0 0 1.6 2 7.8 7.8 0 0 0 2.3 1.4c.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3a2.3 2.3 0 0 1-.2 1.4Z"/></svg>';

  function amounts() {
    const m = MODULES[state.key], it = state.item;
    if (!it) return {};
    const due = m.pay === 'acompte' ? Math.round(it.price * 0.3 / 500) * 500 : it.price;
    return { total: it.price, due, rest: it.price - due };
  }

  function header(m) {
    return `<div class="screen-top"><div class="url">sesam.sn/${m.slug}</div><strong>${esc(m.business)}</strong><span>${esc(m.place)}</span></div>`;
  }
  function stepper(n) {
    return `<div class="stepper" aria-label="Étape ${n} sur 4">${[1, 2, 3, 4].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`;
  }

  function renderPharmacy(m) {
    const garde = [0, 1, 2, 3].map(i => {
      const d = addDays(i * 7);
      return `<div><span>${fmtDay(d)} → ${fmtDay(addDays(i * 7 + 6))}</span><strong>${i === 0 || i === 3 ? 'De garde' : '—'}</strong></div>`;
    }).join('');
    const rows = STOCK.map(s => {
      const [txt, cls] = stockStatus(s.days);
      return `<div class="opt" style="cursor:default"><span>${esc(s.name)}<br><small>Lot ${s.lot} · ${s.qty} u. · exp. ${fmtDay(addDays(s.days))}</small></span><span class="status ${cls}">${txt}</span></div>`;
    }).join('');
    const counts = STOCK.reduce((a, s) => (a[stockStatus(s.days)[0]]++, a), { 'Expiré': 0, 'Bientôt': 0, 'OK': 0 });
    return header(m) + `<div class="screen-body">
      <h4>Tour de garde</h4>
      <div class="summary">${garde}</div>
      <h4>Stock — alertes de péremption</h4>
      <p class="muted" style="font-size:.85rem;margin:0">${counts['Expiré']} expiré · ${counts['Bientôt']} bientôt · ${counts['OK']} OK</p>
      ${rows}
    </div>`;
  }

  function render() {
    const m = MODULES[state.key];
    copy.innerHTML = `<span class="eyebrow">${esc(m.label)}</span><h3>${esc(m.business)}</h3><p class="lead">${esc(m.blurb)}</p>
      <p class="muted">Commerce fictif, pour la démonstration. Paiement et message WhatsApp simulés.</p>`;
    if (m.pharmacy) { screen.innerHTML = renderPharmacy(m); return; }

    const a = amounts();
    let body = '', cta = '';
    if (state.step === 1) {
      body = `<h4>${esc(m.step1)}</h4>` + m.items.map((it, i) =>
        `<button type="button" class="opt" data-item="${i}" aria-pressed="${state.item === it}"><span>${esc(it.name)}<br><small>${esc(it.meta)}</small></span><small>${fcfa(it.price)}</small></button>`).join('');
      cta = `<button type="button" class="btn btn-violet" data-next ${state.item ? '' : 'disabled'}>Continuer</button>`;
    } else if (state.step === 2) {
      const slots = m.slots();
      body = `<h4>${esc(m.step2)}</h4><div class="slots-grid">` + slots.map((s, i) =>
        `<button type="button" class="opt" data-slot="${i}" aria-pressed="${state.slot && state.slot.full === s.full}" ${s.off ? 'disabled aria-label="' + esc(s.full) + ' — complet"' : ''} style="white-space:pre-line;font-size:.82rem">${esc(s.label)}</button>`).join('') + '</div>';
      state._slots = slots;
      cta = `<button type="button" class="btn btn-back" data-back>Retour</button><button type="button" class="btn btn-violet" data-next ${state.slot ? '' : 'disabled'}>Continuer</button>`;
    } else if (state.step === 3) {
      body = `<h4>Récapitulatif</h4><div class="summary">
          <div><span>${esc(state.item.name)}</span><strong>${fcfa(a.total)}</strong></div>
          <div><span>Quand</span><strong style="text-align:right">${esc(state.slot.full)}</strong></div>
          ${m.pay === 'acompte' ? `<div><span>Acompte (30 %)</span><strong>${fcfa(a.due)}</strong></div><div><span>Reste à payer sur place</span><strong>${fcfa(a.rest)}</strong></div>` : ''}
        </div>
        <h4>Payer avec</h4>
        <div class="pay">
          <button type="button" class="opt" data-method="Wave" aria-pressed="${state.method === 'Wave'}"><span class="dot" style="background:var(--wave)"></span>Wave</button>
          <button type="button" class="opt" data-method="Orange Money" aria-pressed="${state.method === 'Orange Money'}"><span class="dot" style="background:var(--om)"></span>Orange Money</button>
        </div>`;
      cta = `<button type="button" class="btn btn-back" data-back>Retour</button><button type="button" class="btn btn-violet" data-next ${state.method ? '' : 'disabled'}>Payer ${fcfa(a.due)}</button>`;
    } else {
      const t = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      body = `<div class="success" role="status"><div class="big"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg></div>
          <strong>Paiement reçu via ${esc(state.method)}</strong></div>
        <div class="wa"><div class="from">${WA_ICON} ${esc(m.business)} · WhatsApp</div>
          Bonjour ! C'est confirmé : <b>${esc(state.item.name)}</b>, ${esc(state.slot.full)}.
          ${m.pay === 'acompte' ? `Acompte de ${fcfa(a.due)} bien reçu, reste ${fcfa(a.rest)}.` : `Paiement de ${fcfa(a.due)} bien reçu.`} Merci !
          <time>${t}</time></div>
        <p class="muted" style="font-size:.85rem;margin:0">${esc(m.reminder)}</p>`;
      cta = `<button type="button" class="btn btn-violet" data-restart>Recommencer</button>`;
    }
    screen.innerHTML = header(m) + `<div class="screen-body">${stepper(state.step)}${body}<div class="screen-cta">${cta}</div></div>`;
  }

  function focusScreen() { const f = $('.screen-body button:not([disabled])', screen); if (f) f.focus(); }

  screen.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    const m = MODULES[state.key];
    let refocus = false;
    if (b.dataset.item) state.item = m.items[+b.dataset.item];
    else if (b.dataset.slot) state.slot = state._slots[+b.dataset.slot];
    else if (b.dataset.method) state.method = b.dataset.method;
    else if ('next' in b.dataset) { state.step++; refocus = true; }
    else if ('back' in b.dataset) { state.step--; refocus = true; }
    else if ('restart' in b.dataset) { Object.assign(state, { step: 1, item: null, slot: null, method: null }); refocus = true; }
    const sel = b.dataset.item ? `[data-item="${b.dataset.item}"]` : b.dataset.slot ? `[data-slot="${b.dataset.slot}"]` : b.dataset.method ? `[data-method="${b.dataset.method}"]` : null;
    render();
    if (sel) $(sel, screen).focus(); else if (refocus) focusScreen();
  });

  const tabs = $$('.tab', root);
  function select(key, focus) {
    Object.assign(state, { key, step: 1, item: null, slot: null, method: null });
    tabs.forEach(t => {
      const on = t.dataset.module === key;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    render();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t.dataset.module));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      select(tabs[(i + d + tabs.length) % tabs.length].dataset.module, true);
    });
  });
  const wanted = new URLSearchParams(location.search).get('module');
  select(MODULES[wanted] ? wanted : 'reservation');
})();

/* ---------- Contact / devis form ---------- */
(() => {
  const form = $('#devis');
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const out = $('#form-result');
  const agenceBlock = $('#bloc-agence'), saasBlock = $('#bloc-saas');
  const secteur = $('#secteur'), santeNote = $('#sante-note');

  // Preselect from links such as contact.html?offre=professionnel or ?module=loyer
  const offre = params.get('offre'), mod = params.get('module');
  if (offre) { const r = form.querySelector(`[name="formule"][value="${CSS.escape(offre)}"]`); if (r) { r.checked = true; form.interet.value = 'agence'; } }
  if (mod) { const r = form.querySelector(`[name="module"][value="${CSS.escape(mod)}"]`); if (r) { r.checked = true; form.interet.value = offre ? 'les-deux' : 'saas'; } }

  function sync() {
    const v = form.interet.value;
    agenceBlock.hidden = !(v === 'agence' || v === 'les-deux');
    saasBlock.hidden = !(v === 'saas' || v === 'les-deux');
    santeNote.hidden = secteur.value !== 'sante';
  }
  form.addEventListener('change', sync);
  sync();

  function setError(field, msg) {
    const el = form.elements[field], err = $(`#err-${field}`);
    if (el && el.setAttribute) el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) err.textContent = msg || '';
    return !msg;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = form.elements;
    const tel = f.telephone.value.replace(/[\s.-]/g, '');
    const checks = [
      setError('nom', f.nom.value.trim() ? '' : 'Indiquez votre nom.'),
      setError('commerce', f.commerce.value.trim() ? '' : 'Indiquez le nom de votre commerce.'),
      setError('telephone', /^\+?\d{9,15}$/.test(tel) ? '' : 'Numéro invalide — ex. 77 123 45 67.'),
      setError('email', !f.email.value || f.email.checkValidity() ? '' : 'Adresse e-mail invalide.'),
      setError('secteur', secteur.value === 'sante'
        ? "Sesam.sn n'accompagne pas les cliniques et établissements de santé."
        : secteur.value ? '' : 'Choisissez votre secteur.'),
    ];
    if (checks.includes(false)) {
      const first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    const picked = name => { const r = form.querySelector(`[name="${name}"]:checked`); return r ? $('b', r.parentNode).textContent : ''; };
    const interet = { agence: 'Site web (Agence)', saas: 'Outil Sesam SaaS', 'les-deux': 'Site web + outil SaaS' }[f.interet.value];
    const lines = [
      `Nom : ${f.nom.value.trim()}`,
      `Commerce : ${f.commerce.value.trim()}`,
      `Secteur : ${secteur.options[secteur.selectedIndex].text}`,
      `Téléphone / WhatsApp : ${f.telephone.value.trim()}`,
      f.email.value && `E-mail : ${f.email.value}`,
      `Demande : ${interet}`,
      !agenceBlock.hidden && picked('formule') && `Formule : ${picked('formule')}`,
      !agenceBlock.hidden && `Site actuel : ${f.site.value.trim() || 'aucun'}`,
      !saasBlock.hidden && picked('module') && `Module : ${picked('module')}`,
      f.message.value.trim() && `Message : ${f.message.value.trim()}`,
    ].filter(Boolean);
    const text = `Demande de devis — Sesam.sn\n\n${lines.join('\n')}`;

    let actions = '';
    if (CONTACT.whatsapp) actions += `<a class="btn btn-violet" href="https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">Envoyer sur WhatsApp</a>`;
    if (CONTACT.email) actions += `<a class="btn btn-ghost" href="mailto:${CONTACT.email}?subject=${encodeURIComponent('Demande de devis — ' + f.commerce.value.trim())}&body=${encodeURIComponent(text)}">Envoyer par e-mail</a>`;
    if (!actions) actions = `<button type="button" class="btn btn-violet" id="copy">Copier ma demande</button>`;

    out.hidden = false;
    out.innerHTML = `<h3 tabindex="-1">Votre demande est prête</h3>
      <p>Vérifiez le récapitulatif ci-dessous${CONTACT.whatsapp || CONTACT.email ? ', puis envoyez-le.' : '.'}</p>
      <pre style="white-space:pre-wrap;font:inherit;background:#fff;padding:14px;border-radius:10px;margin:0 0 14px">${esc(text)}</pre>
      <div class="btn-row" style="margin-top:0">${actions}</div>`;
    $('h3', out).focus();
    const copyBtn = $('#copy', out);
    if (copyBtn) copyBtn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text); copyBtn.textContent = 'Copié ✓'; }
      catch { copyBtn.textContent = 'Sélectionnez le texte pour le copier'; }
    });
  });
})();
