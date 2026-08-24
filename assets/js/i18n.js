/* Sene Fast Food — language switching (English / Français / Wolof).
 *
 * How it works
 * ------------
 * Any element carrying `data-i18n="some.key"` has its text replaced from the
 * dictionary below. Strings that contain markup (a phone link, an <em>) use
 * `data-i18n-html` instead. Attributes are translated with
 * `data-i18n-attrs="content=meta.home.desc, aria-label=nav.label"`.
 *
 * Everything falls back to English when a key is missing, and the page is
 * fully readable with JavaScript off — the HTML ships in English.
 *
 * ⚠️  WOLOF NEEDS A NATIVE READ-THROUGH BEFORE THIS GOES LIVE.
 * The `wo` strings are written in plain, everyday Wolof using the standard
 * orthography, but they have not been checked by a native speaker. French and
 * English are the safe defaults; French is the working second language of
 * Senegal and of most of the block. Have someone at the counter read the
 * Wolof column and correct it — it is one file and one column.
 */
window.SENE = window.SENE || {};

window.SENE.LANGS = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'fr', label: 'FR', name: 'Français' },
  { id: 'wo', label: 'WO', name: 'Wolof' }
];

window.SENE.STRINGS = {

  en: {
    'lang.label': 'Language',
    'skip': 'Skip to content',

    'brand.tagline': 'Fast Food · Harlem',

    'nav.label': 'Primary',
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.desserts': 'Desserts',
    'nav.story': 'Our story',
    'nav.visit': 'Visit',
    'nav.open': 'Menu',

    'cta.call': 'Call to order',
    'cta.text': 'Text to order',
    'cta.seeMenu': 'See the menu',
    'cta.callShort': 'Call',
    'cta.textShort': 'Text',
    'cta.directions': 'Get directions',
    'cta.orderBar': 'Quick order',

    'meta.home.title': 'Sene Fast Food — Authentic Senegalese Kitchen in Harlem, NYC',
    'meta.home.desc': 'Authentic Senegalese food on 116th Street in Harlem. $10 breakfast special until 11AM, thiebou dienne, dibi and traditional desserts. Open daily 9AM–12AM. Halal. Delivery available.',
    'meta.menu.title': 'Menu — Sene Fast Food, Harlem',
    'meta.menu.desc': 'The full Sene Fast Food menu: $10 Senegalese breakfast plates until 11AM, thiebou dienne, dibi, mbakhal yapp and traditional desserts. Halal kitchen in Harlem, NYC.',
    'meta.contact.title': 'Hours, Location & Contact — Sene Fast Food, Harlem',
    'meta.contact.desc': 'Sene Fast Food is at 151 W 116th St, Harlem NYC. Open daily 9AM–12AM. Call (917) 569-6057 or text to order delivery or pickup.',

    'hero.eyebrow': 'Little Senegal · 116th Street',
    'hero.title': 'Real Senegalese flavor, <em>fast &amp; fresh</em> every day.',
    'hero.lede': 'From sunrise sandwiches to slow-simmered stews, Sene Fast Food brings the taste of Dakar to 116th Street — cooked fresh, served fast, and always with soul.',
    'hero.hours': '9AM – 12AM',
    'hero.everyDay': 'Every day',
    'hero.breakfastUntil': 'Breakfast until 11',
    'hero.halal': 'Halal',
    'hero.deliveryPickup': 'Delivery &amp; pickup',

    'board.title': 'Menu du jour',
    'board.note': 'Recent boards. Call to hear what’s on today.',

    'strip.fresh': 'Made fresh daily',
    'strip.authentic': 'Authentic recipes',
    'strip.delivery': 'Delivery &amp; pickup',
    'strip.halal': 'Halal',
    'strip.dinein': 'Dine-in · takeout',

    'special.title': 'Breakfast special — served daily until 11 AM',
    'special.body': 'Every breakfast plate is $10 flat, made fresh every morning on French bread.',
    'special.bodyMenu': 'All breakfast specials are $10 flat — served fresh every morning on French bread.',

    'quote.text': '“Every dish carries a recipe passed down through generations — Sene is Harlem’s home for Senegalese comfort food.”',
    'quote.cite': '— Sene Fast Food Kitchen',

    'story.eyebrow': 'Our story',
    'story.title': 'Senegal on 116th Street',
    'story.p1': 'Sene Fast Food was built on one idea: real West African cooking shouldn’t take all day to get. We fire up our grills every morning to serve the Harlem community hearty breakfasts, hearty lunches, and slow-cooked dinners rooted in Senegalese tradition.',
    'story.p2': 'Whether you’re grabbing a $10 breakfast on your way to work or ordering a family-size Dibi for dinner, every plate is made fresh, seasoned generously, and served fast — no compromises.',
    'story.cta': 'See what we cook',

    'card.fresh.title': 'Made fresh daily',
    'card.fresh.desc': 'Grills on every morning. Nothing sits waiting under a lamp.',
    'card.authentic.title': 'Authentic recipes',
    'card.authentic.desc': 'Dishes cooked the way they are at home, passed down through generations.',
    'card.halal.title': 'Halal kitchen',
    'card.halal.desc': 'Everything we serve is prepared in a halal kitchen.',
    'card.delivery.title': 'Delivery &amp; pickup',
    'card.delivery.desc': 'Call or text ahead for delivery, or order for pickup on your way past.',

    'cooking.eyebrow': 'From our kitchen',
    'cooking.title': 'What’s cooking at Sene',
    'cooking.lede': 'Real plates, straight off our grill — this is what’s landing on the table today.',
    'cooking.note': 'Dishes rotate through the day, so this is a sample of our cooking rather than a fixed daily menu. Call <a href="tel:+19175696057">(917) 569-6057</a> and we’ll tell you what’s ready right now.',

    'desserts.eyebrow': 'Sweet endings',
    'desserts.title': 'Traditional Senegalese desserts',
    'desserts.lede': 'The sweet side of Senegal — millet, peanut and fresh milk desserts served the way they are at home.',

    'boards.eyebrow': 'From the kitchen board',
    'boards.title': 'What we post each day',
    'boards.lede': 'We put out a fresh board for the kitchen — a look at how we cook and plate. Dishes rotate, so call ahead to hear what’s on today.',
    'boards.note': 'These boards are a sample of our cooking, not a fixed daily menu — give us a call on <a href="tel:+19175696057">(917) 569-6057</a> and we’ll tell you what’s ready right now.',
    'boards.alt': 'Menu du jour board for',

    'visit.eyebrow': 'Visit us',
    'visit.title': 'Hours, location &amp; contact',
    'visit.lede': 'Open every day, late into the night — right in the heart of Harlem.',

    'hours.title': 'Hours',
    'hours.days': 'Monday – Sunday',
    'hours.daysValue': '9:00 AM – 12:00 AM',
    'hours.breakfast': 'Breakfast special',
    'hours.breakfastValue': 'Until 11:00 AM',
    'hours.delivery': 'Delivery',
    'hours.deliveryValue': 'All day',
    'hours.kitchen': 'Kitchen',
    'hours.kitchenValue': 'Halal',

    'loc.title': 'Location',
    'loc.address': 'Address',
    'loc.getting': 'Getting here',
    'loc.gettingValue': 'A short walk from the 2/3 and B/C trains on 116th St.',

    'phone.title': 'Call, text &amp; order',
    'phone.primary': 'Primary',
    'phone.alt': 'Alternate',
    'phone.delivery': 'Delivery &amp; pickup',
    'phone.deliveryValue': 'Call or text ahead, or order for pickup.',
    'phone.deliveryValueLong': 'Delivery available — call or text ahead, or place your order for pickup.',

    'cta.hungry.title': 'Hungry right now?',
    'cta.hungry.body': 'Call or text us directly to place a delivery or pickup order — fresh Senegalese food, right to your door.',
    'cta.hungry.bodyShort': 'Call or text us directly — fresh Senegalese food, right to your door.',
    'cta.family.title': 'Ordering for the family?',
    'cta.family.body': 'Family-size dishes and whole chicken are best ordered ahead. Give us a call.',

    'footer.about': 'Authentic Senegalese kitchen on 116th Street — breakfast, lunch and slow-cooked dinners, made fresh every day.',
    'footer.badges': 'Halal kitchen · Dine-in · Takeout · Delivery',
    'footer.menu': 'Menu',
    'footer.visit': 'Visit',
    'footer.order': 'Call, text &amp; order',
    'footer.breakfast': 'Breakfast special',
    'footer.mains': 'Lunch &amp; dinner',
    'footer.desserts': 'Desserts',
    'footer.full': 'Full menu',
    'footer.hoursLink': 'Hours &amp; location',
    'colophon.rights': 'Sene Fast Food · 151 W 116th St, Harlem, NYC',
    'colophon.hours': 'Open daily 9:00 AM – 12:00 AM · Halal',

    'menupage.crumb': 'Menu',
    'menupage.title': 'Breakfast, lunch &amp; dinner',
    'menupage.lede': 'Traditional Senegalese dishes, cooked fresh in-house from open to close.',
    'menupage.note': 'Lunch and dinner dishes rotate through the day and are priced at the counter. Call <a href="tel:+19175696057">(917) 569-6057</a> or <a href="sms:+19175696057">text us</a> to hear what’s ready right now.',
    'menupage.filterLabel': 'Filter menu by section',
    'menupage.goodEyebrow': 'Good to know',
    'menupage.goodTitle': 'Before you order',
    'menupage.allergens.title': 'Allergens',
    'menupage.allergens.desc': 'Peanut, fish and gluten are all used in this kitchen. Ask us and we’ll talk you through any dish.',
    'menupage.breakfastEnd.title': 'Breakfast until 11',
    'menupage.breakfastEnd.desc': 'The $10 breakfast plates come off the menu at 11:00 AM, then lunch starts.',
    'menupage.noscript': 'This menu is rendered with JavaScript. Please enable it, or call <a href="tel:+19175696057">(917) 569-6057</a> and we’ll read you the menu.',

    'cat.all': 'Everything',
    'cat.breakfast': 'Breakfast',
    'cat.mains': 'Lunch &amp; Dinner',
    'cat.desserts': 'Desserts',
    'count.one': 'dish',
    'count.many': 'dishes',
    'menu.empty': 'Nothing in this section right now — give us a call.',
    'dish.ask': 'Ask the kitchen — call',

    'contactpage.crumb': 'Visit',
    'contactpage.title': 'Hours, location &amp; contact',
    'contactpage.lede': 'Open every day, late into the night — right in the heart of Harlem. Call or text to place a delivery or pickup order.',

    'faq.eyebrow': 'Questions',
    'faq.title': 'Things people ask',
    'faq.q1': 'Do you deliver?',
    'faq.a1': 'Yes, all day. Call or text and we’ll take the order and your address.',
    'faq.q2': 'Is the food halal?',
    'faq.a2': 'Yes — everything we serve is prepared in a halal kitchen.',
    'faq.q3': 'How late are you open?',
    'faq.a3': 'Midnight, every night. We open at 9:00 AM the next morning.',
    'faq.q4': 'When does breakfast end?',
    'faq.a4': 'The $10 breakfast plates are served until 11:00 AM daily.',
    'faq.q5': 'Can I order ahead?',
    'faq.a5': 'Please do — call or text and we’ll have it ready for pickup.',
    'faq.q6': 'Where exactly are you?',
    'faq.a6': '151 W 116th St, between the 2/3 and B/C stops on 116th Street.',

    'status.open': 'Open now',
    'status.shut': 'Closed — opens 9:00 AM',

    'nf.eyebrow': '404',
    'nf.title': 'That page is off the menu.',
    'nf.lede': 'The link is wrong or the page has moved. Everything we actually serve is one tap away.',
    'nf.back': 'Back to the front'
  },

  fr: {
    'lang.label': 'Langue',
    'skip': 'Aller au contenu',

    'brand.tagline': 'Fast Food · Harlem',

    'nav.label': 'Principal',
    'nav.home': 'Accueil',
    'nav.menu': 'Carte',
    'nav.desserts': 'Desserts',
    'nav.story': 'Notre histoire',
    'nav.visit': 'Nous trouver',
    'nav.open': 'Menu',

    'cta.call': 'Appelez pour commander',
    'cta.text': 'Commandez par SMS',
    'cta.seeMenu': 'Voir la carte',
    'cta.callShort': 'Appeler',
    'cta.textShort': 'SMS',
    'cta.directions': 'Itinéraire',
    'cta.orderBar': 'Commande rapide',

    'meta.home.title': 'Sene Fast Food — cuisine sénégalaise authentique à Harlem, NYC',
    'meta.home.desc': 'Cuisine sénégalaise authentique sur la 116e rue à Harlem. Petit-déjeuner à 10 $ jusqu’à 11h, thiebou dienne, dibi et desserts traditionnels. Ouvert tous les jours de 9h à minuit. Halal. Livraison disponible.',
    'meta.menu.title': 'La carte — Sene Fast Food, Harlem',
    'meta.menu.desc': 'Toute la carte de Sene Fast Food : assiettes de petit-déjeuner sénégalaises à 10 $ jusqu’à 11h, thiebou dienne, dibi, mbakhal yapp et desserts traditionnels. Cuisine halal à Harlem, NYC.',
    'meta.contact.title': 'Horaires, adresse et contact — Sene Fast Food, Harlem',
    'meta.contact.desc': 'Sene Fast Food se trouve au 151 W 116th St, Harlem NYC. Ouvert tous les jours de 9h à minuit. Appelez le (917) 569-6057 ou écrivez-nous pour une livraison ou un retrait.',

    'hero.eyebrow': 'Petit Sénégal · 116e rue',
    'hero.title': 'Le vrai goût du Sénégal, <em>vite &amp; frais</em> chaque jour.',
    'hero.lede': 'Des sandwichs du matin aux plats mijotés, Sene Fast Food apporte le goût de Dakar sur la 116e rue — cuisiné frais, servi vite, et toujours avec le cœur.',
    'hero.hours': '9h – minuit',
    'hero.everyDay': 'Tous les jours',
    'hero.breakfastUntil': 'Petit-déj jusqu’à 11h',
    'hero.halal': 'Halal',
    'hero.deliveryPickup': 'Livraison &amp; retrait',

    'board.title': 'Menu du jour',
    'board.note': 'Menus récents. Appelez pour savoir ce qu’il y a aujourd’hui.',

    'strip.fresh': 'Préparé frais chaque jour',
    'strip.authentic': 'Recettes authentiques',
    'strip.delivery': 'Livraison &amp; retrait',
    'strip.halal': 'Halal',
    'strip.dinein': 'Sur place · à emporter',

    'special.title': 'Petit-déjeuner spécial — servi chaque jour jusqu’à 11h',
    'special.body': 'Chaque assiette de petit-déjeuner est à 10 $, préparée fraîche chaque matin sur du pain français.',
    'special.bodyMenu': 'Tous les petits-déjeuners sont à 10 $ — préparés frais chaque matin sur du pain français.',

    'quote.text': '« Chaque plat porte une recette transmise de génération en génération — Sene, c’est la maison de la cuisine sénégalaise à Harlem. »',
    'quote.cite': '— La cuisine de Sene Fast Food',

    'story.eyebrow': 'Notre histoire',
    'story.title': 'Le Sénégal sur la 116e rue',
    'story.p1': 'Sene Fast Food est né d’une idée simple : la vraie cuisine ouest-africaine ne devrait pas demander toute une journée d’attente. Nous allumons les grills chaque matin pour servir au quartier de Harlem des petits-déjeuners copieux, des déjeuners généreux et des dîners mijotés, enracinés dans la tradition sénégalaise.',
    'story.p2': 'Que vous preniez un petit-déjeuner à 10 $ en allant au travail ou un Dibi format famille pour le dîner, chaque assiette est préparée fraîche, assaisonnée généreusement et servie vite — sans compromis.',
    'story.cta': 'Voir ce qu’on cuisine',

    'card.fresh.title': 'Préparé frais chaque jour',
    'card.fresh.desc': 'Les grills tournent dès le matin. Rien n’attend sous une lampe.',
    'card.authentic.title': 'Recettes authentiques',
    'card.authentic.desc': 'Des plats cuisinés comme à la maison, transmis de génération en génération.',
    'card.halal.title': 'Cuisine halal',
    'card.halal.desc': 'Tout ce que nous servons est préparé dans une cuisine halal.',
    'card.delivery.title': 'Livraison &amp; retrait',
    'card.delivery.desc': 'Appelez ou écrivez pour une livraison, ou commandez à emporter en passant.',

    'cooking.eyebrow': 'De notre cuisine',
    'cooking.title': 'Ce qui mijote chez Sene',
    'cooking.lede': 'De vraies assiettes, tout droit sorties du grill — voilà ce qui arrive à table aujourd’hui.',
    'cooking.note': 'Les plats changent au fil de la journée : ceci est un aperçu de notre cuisine, pas une carte fixe. Appelez le <a href="tel:+19175696057">(917) 569-6057</a> et nous vous dirons ce qui est prêt maintenant.',

    'desserts.eyebrow': 'Douceurs',
    'desserts.title': 'Desserts sénégalais traditionnels',
    'desserts.lede': 'Le côté sucré du Sénégal — mil, arachide et lait frais, servis comme à la maison.',

    'boards.eyebrow': 'Le tableau de la cuisine',
    'boards.title': 'Ce que nous affichons chaque jour',
    'boards.lede': 'Nous sortons un nouveau tableau chaque jour — un aperçu de notre façon de cuisiner et de dresser. Les plats changent, alors appelez pour savoir ce qu’il y a aujourd’hui.',
    'boards.note': 'Ces tableaux sont un aperçu de notre cuisine, pas une carte fixe — appelez-nous au <a href="tel:+19175696057">(917) 569-6057</a> et nous vous dirons ce qui est prêt maintenant.',
    'boards.alt': 'Tableau du menu du jour pour',

    'visit.eyebrow': 'Nous trouver',
    'visit.title': 'Horaires, adresse &amp; contact',
    'visit.lede': 'Ouvert tous les jours, tard dans la nuit — en plein cœur de Harlem.',

    'hours.title': 'Horaires',
    'hours.days': 'Lundi – dimanche',
    'hours.daysValue': '9h00 – minuit',
    'hours.breakfast': 'Petit-déjeuner spécial',
    'hours.breakfastValue': 'Jusqu’à 11h00',
    'hours.delivery': 'Livraison',
    'hours.deliveryValue': 'Toute la journée',
    'hours.kitchen': 'Cuisine',
    'hours.kitchenValue': 'Halal',

    'loc.title': 'Adresse',
    'loc.address': 'Adresse',
    'loc.getting': 'Y aller',
    'loc.gettingValue': 'À quelques pas des lignes 2/3 et B/C, station 116th St.',

    'phone.title': 'Appeler, écrire &amp; commander',
    'phone.primary': 'Principal',
    'phone.alt': 'Secondaire',
    'phone.delivery': 'Livraison &amp; retrait',
    'phone.deliveryValue': 'Appelez ou écrivez à l’avance, ou commandez à emporter.',
    'phone.deliveryValueLong': 'Livraison disponible — appelez ou écrivez à l’avance, ou passez commande à emporter.',

    'cta.hungry.title': 'Faim tout de suite ?',
    'cta.hungry.body': 'Appelez-nous ou écrivez-nous pour une livraison ou un retrait — de la cuisine sénégalaise fraîche, livrée chez vous.',
    'cta.hungry.bodyShort': 'Appelez-nous ou écrivez-nous — de la cuisine sénégalaise fraîche, livrée chez vous.',
    'cta.family.title': 'Vous commandez pour la famille ?',
    'cta.family.body': 'Les plats format famille et le poulet entier se commandent à l’avance. Appelez-nous.',

    'footer.about': 'Cuisine sénégalaise authentique sur la 116e rue — petits-déjeuners, déjeuners et dîners mijotés, préparés frais chaque jour.',
    'footer.badges': 'Cuisine halal · Sur place · À emporter · Livraison',
    'footer.menu': 'La carte',
    'footer.visit': 'Nous trouver',
    'footer.order': 'Appeler, écrire &amp; commander',
    'footer.breakfast': 'Petit-déjeuner spécial',
    'footer.mains': 'Déjeuner &amp; dîner',
    'footer.desserts': 'Desserts',
    'footer.full': 'Toute la carte',
    'footer.hoursLink': 'Horaires &amp; adresse',
    'colophon.rights': 'Sene Fast Food · 151 W 116th St, Harlem, NYC',
    'colophon.hours': 'Ouvert tous les jours de 9h00 à minuit · Halal',

    'menupage.crumb': 'La carte',
    'menupage.title': 'Petit-déjeuner, déjeuner &amp; dîner',
    'menupage.lede': 'Des plats sénégalais traditionnels, cuisinés frais sur place de l’ouverture à la fermeture.',
    'menupage.note': 'Les plats du déjeuner et du dîner changent au fil de la journée et sont affichés au comptoir. Appelez le <a href="tel:+19175696057">(917) 569-6057</a> ou <a href="sms:+19175696057">écrivez-nous</a> pour savoir ce qui est prêt maintenant.',
    'menupage.filterLabel': 'Filtrer la carte par section',
    'menupage.goodEyebrow': 'Bon à savoir',
    'menupage.goodTitle': 'Avant de commander',
    'menupage.allergens.title': 'Allergènes',
    'menupage.allergens.desc': 'Arachide, poisson et gluten sont utilisés dans cette cuisine. Demandez-nous et nous vous détaillerons n’importe quel plat.',
    'menupage.breakfastEnd.title': 'Petit-déjeuner jusqu’à 11h',
    'menupage.breakfastEnd.desc': 'Les assiettes de petit-déjeuner à 10 $ quittent la carte à 11h00, puis le déjeuner commence.',
    'menupage.noscript': 'Cette carte s’affiche avec JavaScript. Activez-le, ou appelez le <a href="tel:+19175696057">(917) 569-6057</a> et nous vous lirons la carte.',

    'cat.all': 'Tout',
    'cat.breakfast': 'Petit-déjeuner',
    'cat.mains': 'Déjeuner &amp; dîner',
    'cat.desserts': 'Desserts',
    'count.one': 'plat',
    'count.many': 'plats',
    'menu.empty': 'Rien dans cette section pour le moment — appelez-nous.',
    'dish.ask': 'Demandez à la cuisine — appelez le',

    'contactpage.crumb': 'Nous trouver',
    'contactpage.title': 'Horaires, adresse &amp; contact',
    'contactpage.lede': 'Ouvert tous les jours, tard dans la nuit — en plein cœur de Harlem. Appelez ou écrivez pour une livraison ou un retrait.',

    'faq.eyebrow': 'Questions',
    'faq.title': 'Ce qu’on nous demande',
    'faq.q1': 'Vous livrez ?',
    'faq.a1': 'Oui, toute la journée. Appelez ou écrivez, nous prenons la commande et votre adresse.',
    'faq.q2': 'La nourriture est-elle halal ?',
    'faq.a2': 'Oui — tout ce que nous servons est préparé dans une cuisine halal.',
    'faq.q3': 'Jusqu’à quelle heure êtes-vous ouverts ?',
    'faq.a3': 'Minuit, tous les soirs. Nous rouvrons à 9h00 le lendemain matin.',
    'faq.q4': 'Quand s’arrête le petit-déjeuner ?',
    'faq.a4': 'Les assiettes de petit-déjeuner à 10 $ sont servies jusqu’à 11h00 tous les jours.',
    'faq.q5': 'Puis-je commander à l’avance ?',
    'faq.a5': 'Volontiers — appelez ou écrivez et ce sera prêt pour le retrait.',
    'faq.q6': 'Où êtes-vous exactement ?',
    'faq.a6': '151 W 116th St, entre les stations 2/3 et B/C de la 116e rue.',

    'status.open': 'Ouvert maintenant',
    'status.shut': 'Fermé — ouvre à 9h00',

    'nf.eyebrow': '404',
    'nf.title': 'Cette page n’est pas à la carte.',
    'nf.lede': 'Le lien est erroné ou la page a été déplacée. Tout ce que nous servons vraiment est à un clic.',
    'nf.back': 'Retour à l’accueil'
  },

  /* ⚠️  Unverified — see the note at the top of this file. */
  wo: {
    'lang.label': 'Làkk',
    'skip': 'Dem ci téere bi',

    'brand.tagline': 'Fast Food · Harlem',

    'nav.label': 'Yoon wi',
    'nav.home': 'Kër gi',
    'nav.menu': 'Menu bi',
    'nav.desserts': 'Suukar',
    'nav.story': 'Sunu jaar-jaar',
    'nav.visit': 'Fu ñu nekk',
    'nav.open': 'Menu',

    'cta.call': 'Wooal ngir komande',
    'cta.text': 'Bindal nu ngir komande',
    'cta.seeMenu': 'Xoolal menu bi',
    'cta.callShort': 'Wooal',
    'cta.textShort': 'Bindal',
    'cta.directions': 'Yoon wi',
    'cta.orderBar': 'Komande bu gaaw',

    'meta.home.title': 'Sene Fast Food — Lekk u Senegaal ci Harlem, NYC',
    'meta.home.desc': 'Lekk u Senegaal bu wóor ci 116th Street ci Harlem. Ndékki bu 10 $ ba 11h, ceebu jën, dibi ak suukar u réew mi. Ubbi bés bu nekk 9h ba 12h guddi. Halal. Am na yóbbu.',
    'meta.menu.title': 'Menu bi — Sene Fast Food, Harlem',
    'meta.menu.desc': 'Menu bi mat sëkk: ndékki bu 10 $ ba 11h, ceebu jën, dibi, mbaxal u yàpp ak suukar u réew mi. Waañ bu halal ci Harlem, NYC.',
    'meta.contact.title': 'Waxtu, barab ak jokkoo — Sene Fast Food, Harlem',
    'meta.contact.desc': 'Sene Fast Food nekk na ci 151 W 116th St, Harlem NYC. Ubbi bés bu nekk 9h ba 12h guddi. Wooal (917) 569-6057 walla bindal nu.',

    'hero.eyebrow': 'Senegaal bu ndaw · 116th Street',
    'hero.title': 'Ñam u Senegaal bu wóor, <em>gaaw te bees</em> bés bu nekk.',
    'hero.lede': 'Li dale ci tapalapa u suba ba ci ñam yu ñu togg yàgg, Sene Fast Food mu ngi indi ñam u Ndakaaru ci 116th Street — togg bees, jox gaaw, te dëkk ci xol.',
    'hero.hours': '9h – 12h guddi',
    'hero.everyDay': 'Bés bu nekk',
    'hero.breakfastUntil': 'Ndékki ba 11h',
    'hero.halal': 'Halal',
    'hero.deliveryPickup': 'Yóbbu ak jël',

    'board.title': 'Menu du jour',
    'board.note': 'Menu yu mujj. Wooal nu ngir xam lu am tey.',

    'strip.fresh': 'Togg bees bés bu nekk',
    'strip.authentic': 'Reset yu wóor',
    'strip.delivery': 'Yóbbu ak jël',
    'strip.halal': 'Halal',
    'strip.dinein': 'Lekk fi · yóbbaale',

    'special.title': 'Ndékki bu spesiyaal — bés bu nekk ba 11h',
    'special.body': 'Ndékki bu nekk 10 $ la, togg bees suba su nekk ci mburu u Fraas.',
    'special.bodyMenu': 'Ndékki yépp 10 $ lañu — togg bees suba su nekk ci mburu u Fraas.',

    'quote.text': '« Ñam bu nekk am na reset bu jóge ci maam ya — Sene mooy kër u ñam u Senegaal ci Harlem. »',
    'quote.cite': '— Waañ u Sene Fast Food',

    'story.eyebrow': 'Sunu jaar-jaar',
    'story.title': 'Senegaal ci 116th Street',
    'story.p1': 'Sene Fast Food dafa taxaw ci benn xalaat: ñam u Afrik u sowu-jant bu wóor waru koo yàgg ngir am ko. Bés bu nekk suba ci lañuy taal sunu tuuti, ngir jox waa Harlem ndékki bu neex, añ bu bare ak reer bu ñu togg yàgg, jóge ci aada u Senegaal.',
    'story.p2': 'Bu fekkee nga jënd ndékki bu 10 $ ci yoon u liggéey walla nga komande Dibi bu njabootu ngir reer, ñam bu nekk togg bees la, ñu def ko cuub bu bare, te ñu ko jox gaaw — dara du wàññiku.',
    'story.cta': 'Xoolal li ñuy togg',

    'card.fresh.title': 'Togg bees bés bu nekk',
    'card.fresh.desc': 'Tuuti yi dañuy taal suba su nekk. Dara du xaar ci ron làmp.',
    'card.authentic.title': 'Reset yu wóor',
    'card.authentic.desc': 'Ñam yu ñu togg ni ko ñuy defe ci kër ga, jóge ci maam ya.',
    'card.halal.title': 'Waañ bu halal',
    'card.halal.desc': 'Lépp lu ñuy jox halal la, ñu ko togg ci waañ bu halal.',
    'card.delivery.title': 'Yóbbu ak jël',
    'card.delivery.desc': 'Wooal walla bindal nu ngir yóbbu, walla komande te jël ko ci sa yoon.',

    'cooking.eyebrow': 'Ci sunu waañ',
    'cooking.title': 'Lu ñuy togg ci Sene',
    'cooking.lede': 'Ñam yu wóor, jóge ci tuuti bi — lii mooy li ñuy teg ci taabal bi tey.',
    'cooking.note': 'Ñam yi dañuy soppiku ci bés bi, kon lii ab misaal la ci sunu togg, du menu bu dëgër. Wooal <a href="tel:+19175696057">(917) 569-6057</a> te dinañu la wax lu paré léegi.',

    'desserts.eyebrow': 'Suukar',
    'desserts.title': 'Suukar u Senegaal',
    'desserts.lede': 'Wàll u suukar ci Senegaal — dugub, gerte ak meew bu bees, ni ko ñuy defe ci kër ga.',

    'boards.eyebrow': 'Ci tabloo u waañ bi',
    'boards.title': 'Li ñuy wone bés bu nekk',
    'boards.lede': 'Bés bu nekk dañuy génne tabloo bu bees ngir waañ bi — ngir nga gis ni ñuy togg te ni ñuy teg. Ñam yi dañuy soppiku, kon wooal nu ngir xam lu am tey.',
    'boards.note': 'Tabloo yii ab misaal lañu ci sunu togg, du menu bu dëgër — wooal nu ci <a href="tel:+19175696057">(917) 569-6057</a> te dinañu la wax lu paré léegi.',
    'boards.alt': 'Tabloo u menu du jour ngir',

    'visit.eyebrow': 'Ñëwal ci ñun',
    'visit.title': 'Waxtu, barab ak jokkoo',
    'visit.lede': 'Ubbi bés bu nekk, ba ci guddi — ci digg u Harlem.',

    'hours.title': 'Waxtu',
    'hours.days': 'Altine – Dibéer',
    'hours.daysValue': '9h00 – 12h guddi',
    'hours.breakfast': 'Ndékki bu spesiyaal',
    'hours.breakfastValue': 'Ba 11h00',
    'hours.delivery': 'Yóbbu',
    'hours.deliveryValue': 'Bés bépp',
    'hours.kitchen': 'Waañ',
    'hours.kitchenValue': 'Halal',

    'loc.title': 'Barab',
    'loc.address': 'Adres',
    'loc.getting': 'Ni ngay ñëwe',
    'loc.gettingValue': 'Tuuti tallal la ci saxaar 2/3 ak B/C ci 116th St.',

    'phone.title': 'Wooal, bindal &amp; komande',
    'phone.primary': 'Bu njëkk',
    'phone.alt': 'Beneen',
    'phone.delivery': 'Yóbbu ak jël',
    'phone.deliveryValue': 'Wooal walla bindal nu bu jëkk, walla komande te jël ko.',
    'phone.deliveryValueLong': 'Am na yóbbu — wooal walla bindal nu bu jëkk, walla komande te jël ko fi.',

    'cta.hungry.title': 'Xiif nga léegi?',
    'cta.hungry.body': 'Wooal walla bindal nu ngir yóbbu walla jël — ñam u Senegaal bu bees, ba ci sa kër.',
    'cta.hungry.bodyShort': 'Wooal walla bindal nu — ñam u Senegaal bu bees, ba ci sa kër.',
    'cta.family.title': 'Ngay komande ngir njaboot gi?',
    'cta.family.body': 'Ñam u njaboot ak ganaar gu mat war nañu ko komande bu jëkk. Wooal nu.',

    'footer.about': 'Waañ u Senegaal bu wóor ci 116th Street — ndékki, añ ak reer bu ñu togg yàgg, bees bés bu nekk.',
    'footer.badges': 'Waañ bu halal · Lekk fi · Yóbbaale · Yóbbu',
    'footer.menu': 'Menu bi',
    'footer.visit': 'Fu ñu nekk',
    'footer.order': 'Wooal, bindal &amp; komande',
    'footer.breakfast': 'Ndékki bu spesiyaal',
    'footer.mains': 'Añ &amp; reer',
    'footer.desserts': 'Suukar',
    'footer.full': 'Menu bi mat',
    'footer.hoursLink': 'Waxtu ak barab',
    'colophon.rights': 'Sene Fast Food · 151 W 116th St, Harlem, NYC',
    'colophon.hours': 'Ubbi bés bu nekk 9h00 – 12h guddi · Halal',

    'menupage.crumb': 'Menu bi',
    'menupage.title': 'Ndékki, añ &amp; reer',
    'menupage.lede': 'Ñam u Senegaal, ñu koy togg fi bees ba ubbi ba tëj.',
    'menupage.note': 'Ñam u añ ak reer dañuy soppiku ci bés bi, te njëg gi ci kontuwaar bi lañu koy wone. Wooal <a href="tel:+19175696057">(917) 569-6057</a> walla <a href="sms:+19175696057">bindal nu</a> ngir xam lu paré léegi.',
    'menupage.filterLabel': 'Tànn menu bi ci wàll',
    'menupage.goodEyebrow': 'Bu baax nga xam',
    'menupage.goodTitle': 'Balaa ngay komande',
    'menupage.allergens.title': 'Alerse yi',
    'menupage.allergens.desc': 'Gerte, jën ak gluten ñu ngi leen di jëfandikoo ci waañ bi. Laajal nu te dinañu la leeral ñam bu nekk.',
    'menupage.breakfastEnd.title': 'Ndékki ba 11h',
    'menupage.breakfastEnd.desc': 'Ndékki bu 10 $ dafay génn ci menu bi ci 11h00, ba noppi añ bi tàmbali.',
    'menupage.noscript': 'Menu bii JavaScript lay jëfandikoo. Ubbil ko, walla wooal <a href="tel:+19175696057">(917) 569-6057</a> te dinañu la ko jàngal.',

    'cat.all': 'Lépp',
    'cat.breakfast': 'Ndékki',
    'cat.mains': 'Añ &amp; reer',
    'cat.desserts': 'Suukar',
    'count.one': 'ñam',
    'count.many': 'ñam',
    'menu.empty': 'Dara amul ci wàll wii léegi — wooal nu.',
    'dish.ask': 'Laajal waañ bi — wooal',

    'contactpage.crumb': 'Fu ñu nekk',
    'contactpage.title': 'Waxtu, barab ak jokkoo',
    'contactpage.lede': 'Ubbi bés bu nekk, ba ci guddi — ci digg u Harlem. Wooal walla bindal nu ngir yóbbu walla jël.',

    'faq.eyebrow': 'Laaj yi',
    'faq.title': 'Li ñuy laaj',
    'faq.q1': 'Ndax dangeen di yóbbu?',
    'faq.a1': 'Waaw, bés bépp. Wooal walla bindal nu, dinañu jël komande bi ak sa adres.',
    'faq.q2': 'Ndax ñam bi halal la?',
    'faq.a2': 'Waaw — lépp lu ñuy jox ci waañ bu halal lañu ko togg.',
    'faq.q3': 'Ba kañ ngeen di ubbi?',
    'faq.a3': 'Ba 12h guddi, guddi gu nekk. Dañuy ubbi ci 9h00 ci suba si.',
    'faq.q4': 'Kañ la ndékki bi di jeex?',
    'faq.a4': 'Ndékki bu 10 $ ba 11h00 lañu koy jox, bés bu nekk.',
    'faq.q5': 'Ndax man naa komande bu jëkk?',
    'faq.a5': 'Waaw kay — wooal walla bindal nu te dina paré ba nga ñëw jël ko.',
    'faq.q6': 'Fan lañu nekk?',
    'faq.a6': '151 W 116th St, ci diggante saxaar 2/3 ak B/C ci 116th Street.',

    'status.open': 'Ubbi na léegi',
    'status.shut': 'Tëj na — dina ubbi 9h00',

    'nf.eyebrow': '404',
    'nf.title': 'Xët wi nekkul ci menu bi.',
    'nf.lede': 'Lien bi baaxul walla xët wi dafa toxu. Lépp lu ñuy jox ci benn tuuti la.',
    'nf.back': 'Dellu ci kër gi'
  }
};

/* Dish descriptions, tags and section ribbons. Dish NAMES are never
 * translated — Thiebou Dienne is Thiebou Dienne in every language, and that
 * is how customers ask for it at the counter. */
window.SENE.DISH_STRINGS = {
  fr: {
    'Meat Sandwich': 'Un pain français chaud garni de bœuf grillé assaisonné et d’oignons revenus dans une sauce légère — la version sénégalaise du sandwich au steak.',
    'Chicken Sandwich': 'Blanc de poulet mariné et grillé, glissé dans du pain français frais avec des oignons et notre sauce maison — simple, savoureux et nourrissant.',
    'Thon (Tuna)': 'Un sandwich au thon froid — thon émietté mélangé aux oignons, poivrons et une sauce crémeuse, sur pain français. Léger et relevé, un classique du petit-déjeuner sénégalais.',
    'Ndambé': 'Des niébés mijotés longuement dans une sauce tomate-oignon douce jusqu’à devenir fondants, souvent surmontés d’un œuf dur — un ragoût de haricots généreux, à saucer au pain français.',
    'Foie': 'Foie de bœuf en fines tranches, saisi à la poêle avec des oignons et des épices chaudes, servi sur pain français — riche et savoureux, le foie aux oignons en sandwich.',
    'Thiebou Dienne': 'Le plat national du Sénégal — du riz mijoté dans une base de tomate riche avec du poisson et des légumes de saison.',
    'Thiebou Guinar': 'Riz rouge profond cuit à la tomate sous un poulet entier rôti, avec légumes variés, haricots verts, petits oignons, olives, œuf dur et crevettes.',
    'Thiebou Diaga': 'Couscous de mil sous du poulet et du bœuf braisés lentement avec petits pois, poivrons et crevettes, relevé d’un citron grillé.',
    'Tiebou Naar': 'Riz cuit à la mauresque avec de la viande — servi au bol, fait pour être partagé.',
    'Mbakhal Yapp': 'Couscous de mil mijoté à l’arachide avec du bœuf tendre, servi avec piment antillais, citron et un condiment frais de poivrons et d’oignons.',
    'Dibi': 'Viande grillée au feu et servie avec des oignons — tout droit sortie du gril.',
    'Poulet Entier': 'Un poulet entier, assaisonné et rôti au four.',
    'C’est Bon': 'Un poisson entier grillé sur du riz, garni de crevettes, de crabe et d’une salsa fraîche de concombre, tomate et poivron avec une sauce au piment vert. Fait pour être partagé.',
    'Tiere Sim': 'Couscous de mil à la vapeur, servi en spécial du soir.',
    'Thiakry': 'Mil fin cuit à la vapeur, mêlé à un yaourt sucré et du lait frais, fini aux raisins secs, à la vanille et à la noix de muscade. Frais, crémeux et légèrement acidulé — entre le riz au lait et un parfait au yaourt épais.',
    'Ngalakh': 'Un pudding riche et velouté de mil moulu mêlé à la pâte d’arachide et au fruit du baobab, sucré et épicé. Noisetté et légèrement acidulé — traditionnellement partagé en famille et entre voisins les jours de fête.',
    'Lakhou Sow': 'Bouillie de mil tiède et onctueuse, garnie de lait caillé frais, de raisins secs et d’un filet de miel. Réconfortante et douce — un bol sénégalais du petit-déjeuner ou du dessert, aimé à toute heure.'
  },
  /* ⚠️  Unverified — see the note at the top of this file. */
  wo: {
    'Meat Sandwich': 'Mburu u Fraas bu tàng bu ñu def ci yàppu nag wu ñu grille ak soble ci saas bu woyof — moom la Senegaal defe sandwich u yàpp.',
    'Chicken Sandwich': 'Yàppu ganaar wu ñu marine te grille ko, ñu ko def ci mburu u Fraas bu bees ak soble ak sunu saas — bu yomb, bu neex te bu suur.',
    'Thon (Tuna)': 'Sandwich u ton bu sedd — ton wu ñu jaxase ak soble, kaani ak saas bu ndaw. Woyof te am tuuti soow — ndékki bu am solo ci Senegaal.',
    'Ndambé': 'Ñebbe yu ñu togg yàgg ci saas u tamaate ak soble ba ñu nooy, ñu teg ci nen bu ñu lakk — mu ngi ànd ak mburu u Fraas.',
    'Foie': 'Res u nag wu ñu dagg ndaw, ñu ko togg ak soble ak cuub yu tàng, ñu ko def ci mburu u Fraas — bu bare te neex.',
    'Thiebou Dienne': 'Ñam u réew mi — ceeb bu ñu togg ci tamaate ak jën ak legum yi.',
    'Thiebou Guinar': 'Ceeb bu xonq bu ñu togg ci tamaate ci ron ganaar gu mat gu ñu lakk, ak legum, haricots verts, soble yu ndaw, olive, nen ak sipax.',
    'Thiebou Diaga': 'Cere u dugub ci ron ganaar ak yàppu nag wu ñu togg yàgg, ak petit pois, kaani ak sipax, ñu teg ci limoŋ bu ñu lakk.',
    'Tiebou Naar': 'Ceeb bu ñu togg ci anam u Naar ak yàpp — ci bool, ngir ñu ko séddoo.',
    'Mbakhal Yapp': 'Cere u dugub bu ñu togg ak gerte ak yàppu nag wu nooy, ñu ko jox ak kaani, limoŋ ak saas u kaani ak soble.',
    'Dibi': 'Yàpp wu ñu lakk ci safara, ñu ko jox ak soble — jóge ci tuuti bi.',
    'Poulet Entier': 'Ganaar gu mat, ñu ko def cuub te lakk ko ci four bi.',
    'C’est Bon': 'Jën wu mat wu ñu lakk ci kaw ceeb, ak sipax, njaxal ak salaat u koncoom, tamaate ak kaani, ànd ak saas u kaani bu wert. Ngir ñu ko séddoo.',
    'Tiere Sim': 'Cere u dugub bu ñu togg ci taw — spesiyaal u ngoon.',
    'Thiakry': 'Dugub bu ndaw bu ñu togg ci taw, ñu ko jaxase ak soow bu suukar ak meew bu bees, ñu teg ci raisin, wanil ak muskad. Sedd, ndaw te am tuuti soow.',
    'Ngalakh': 'Suukar bu bare bu ñu def ak dugub bu ñu wal ak gerte ak buy, ñu ko def suukar ak cuub. Am na gerte te am tuuti soow — ci bés u xew lañu koy séddoo ak njaboot ak dëkkandoo.',
    'Lakhou Sow': 'Laax bu tàng bu nooy, ñu teg ci sow bu bees, raisin ak lem. Bu neex te suukar bu ndaw — bool u Senegaal bu ñuy lekk ci suba walla ci ngoon.'
  }
};

/* Tags and ribbons are a small closed set, so they translate by lookup rather
 * than being repeated on every dish. */
window.SENE.TAG_STRINGS = {
  fr: {
    'Breakfast special': 'Petit-déj spécial',
    'Vegetarian base': 'Base végétarienne',
    'Senegalese classic': 'Classique sénégalais',
    'Grilled & hearty': 'Grillé &amp; généreux',
    'Slow braised': 'Braisé lentement',
    'Menu du jour': 'Menu du jour',
    'To share': 'À partager',
    'Au bol · à partager': 'Au bol · à partager',
    'House favorite': 'Le préféré de la maison',
    'On the grill': 'Sur le gril',
    'Sur le gril': 'Sur le gril',
    'Family size': 'Format famille',
    'Au four': 'Au four',
    'Seafood': 'Fruits de mer',
    'En assiette': 'En assiette',
    'Evening special': 'Spécial du soir',
    'Spécial du soir': 'Spécial du soir',
    'Sweet millet & yogurt': 'Mil sucré &amp; yaourt',
    'Peanut & baobab': 'Arachide &amp; baobab',
    'Contains peanut': 'Contient de l’arachide',
    'Millet & fresh curd': 'Mil &amp; lait caillé frais'
  },
  /* ⚠️  Unverified — see the note at the top of this file. */
  wo: {
    'Breakfast special': 'Ndékki bu spesiyaal',
    'Vegetarian base': 'Amul yàpp',
    'Senegalese classic': 'Ñam u Senegaal',
    'Grilled & hearty': 'Lakk te suur',
    'Slow braised': 'Togg yàgg',
    'Menu du jour': 'Menu du jour',
    'To share': 'Ngir séddoo',
    'Au bol · à partager': 'Ci bool · ngir séddoo',
    'House favorite': 'Li gën a neex',
    'On the grill': 'Ci tuuti bi',
    'Sur le gril': 'Ci tuuti bi',
    'Family size': 'Ngir njaboot',
    'Au four': 'Ci four bi',
    'Seafood': 'Jën ak sipax',
    'En assiette': 'Ci asiet',
    'Evening special': 'Spesiyaal u ngoon',
    'Spécial du soir': 'Spesiyaal u ngoon',
    'Sweet millet & yogurt': 'Dugub ak soow',
    'Peanut & baobab': 'Gerte ak buy',
    'Contains peanut': 'Am na gerte',
    'Millet & fresh curd': 'Dugub ak sow bu bees'
  }
};
