/* Sene Fast Food — menu data.
 * Single source of truth for the homepage highlights and the full menu page.
 *
 * NOTE ON PRICES: only the $10 breakfast special has a confirmed price.
 * Lunch and dinner dishes deliberately carry no price — they render with a
 * "call for today's price" line instead of a number. Add `price:` to an item
 * as soon as the real figure is known and it will show automatically.
 */
window.SENE = window.SENE || {};

window.SENE.CURRENCY = '$';

window.SENE.PHONE      = '(917) 569-6057';
window.SENE.PHONE_TEL  = '+19175696057';
window.SENE.PHONE_ALT  = '(917) 569-6871';
window.SENE.PHONE_ALT_TEL = '+19175696871';

window.SENE.CATEGORIES = [
  { id: 'all',       label: 'Everything' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'mains',     label: 'Lunch & Dinner' },
  { id: 'desserts',  label: 'Desserts' }
];

window.SENE.MENU = [

  /* ---- Breakfast — served daily until 11:00 AM, $10 flat ---- */

  {
    name: 'Meat Sandwich',
    category: 'breakfast',
    price: 10,
    desc: 'A warm French bread roll piled with seasoned, grilled beef and sautéed onions in a light sauce — Senegal’s version of a steak sandwich.',
    tags: ['Breakfast special'],
    featured: true
  },
  {
    name: 'Chicken Sandwich',
    category: 'breakfast',
    price: 10,
    desc: 'Grilled, marinated chicken breast tucked into fresh French bread with onions and our house sauce — simple, savory and filling.',
    tags: ['Breakfast special'],
    featured: true
  },
  {
    name: 'Thon (Tuna)',
    category: 'breakfast',
    price: 10,
    desc: 'A cold tuna salad sandwich — flaked tuna mixed with onions, peppers and a creamy dressing on French bread. Light and tangy, a classic Senegalese breakfast.',
    tags: ['Breakfast special']
  },
  {
    name: 'Ndambé',
    category: 'breakfast',
    price: 10,
    desc: 'Black-eyed peas slow-simmered in a mild tomato-onion sauce until soft and creamy, often topped with a boiled egg — a hearty bean stew scooped up with French bread.',
    tags: ['Breakfast special', 'Vegetarian base'],
    featured: true
  },
  {
    name: 'Foie',
    category: 'breakfast',
    price: 10,
    desc: 'Thin-sliced beef liver, pan-seared with onions and warm spices and served on French bread — rich and savory, liver-and-onions tucked into a sandwich.',
    tags: ['Breakfast special']
  },

  /* ---- Lunch & dinner ----
   * Cooked fresh in-house and rotating through the day. Prices to be confirmed.
   * `needsCopy: true` marks a dish whose description still needs the kitchen's
   * own wording — it renders a neutral line rather than a guess.
   */

  {
    name: 'Thiebou Dienne',
    category: 'mains',
    desc: 'Senegal’s national dish — rice simmered in a rich tomato base with fish and seasonal vegetables.',
    tags: ['Senegalese classic'],
    flag: 'Senegalese classic',
    featured: true
  },
  {
    name: 'Thiebou Guinar',
    category: 'mains',
    desc: 'The same deep red rice, cooked with chicken in place of fish, and served hearty.',
    tags: ['Grilled & hearty'],
    flag: 'Grilled & hearty',
    featured: true
  },
  {
    name: 'Tiebou Naar',
    category: 'mains',
    desc: 'Rice cooked in the Moorish style with meat — served in a bowl, made to be shared.',
    tags: ['To share'],
    flag: 'Au bol · à partager'
  },
  {
    name: 'Mbakhal Yapp',
    category: 'mains',
    desc: 'Rice simmered with peanut and meat until thick and savory — a house favorite.',
    tags: ['House favorite'],
    flag: 'House favorite',
    featured: true
  },
  {
    name: 'Dibi',
    category: 'mains',
    desc: 'Meat grilled over the fire and served with onions — straight off the grill.',
    tags: ['On the grill'],
    flag: 'Sur le gril',
    featured: true
  },
  {
    name: 'Poulet Entier',
    category: 'mains',
    desc: 'A whole chicken, seasoned and roasted in the oven.',
    tags: ['Family size'],
    flag: 'Au four'
  },
  {
    name: 'C’est Bon',
    category: 'mains',
    desc: '',
    needsCopy: true,
    tags: ['Plated'],
    flag: 'En assiette'
  },
  {
    name: 'Tiere Sim',
    category: 'mains',
    desc: 'Steamed millet couscous, served as the evening special.',
    tags: ['Evening special'],
    flag: 'Spécial du soir'
  },

  /* ---- Desserts ---- */

  {
    name: 'Thiakry',
    category: 'desserts',
    desc: 'Fine steamed millet folded into sweetened yogurt and fresh milk, finished with raisins, vanilla and a dusting of nutmeg. Cool, creamy and lightly tangy — somewhere between rice pudding and a thick yogurt parfait.',
    tags: ['Sweet millet & yogurt'],
    flag: 'Sweet millet & yogurt',
    featured: true
  },
  {
    name: 'Ngalakh',
    category: 'desserts',
    desc: 'A rich, velvety pudding of ground millet blended with peanut butter and baobab fruit, sweetened and spiced. Nutty and mildly tart — traditionally shared with family and neighbors on holidays.',
    tags: ['Peanut & baobab', 'Contains peanut'],
    flag: 'Peanut & baobab'
  },
  {
    name: 'Lakhou Sow',
    category: 'desserts',
    desc: 'Warm, smooth millet porridge topped with fresh soured milk curd, raisins and a drizzle of honey. Comforting and gently sweet — a Senegalese breakfast-or-dessert bowl loved at any hour.',
    tags: ['Millet & fresh curd'],
    flag: 'Millet & fresh curd'
  }
];
