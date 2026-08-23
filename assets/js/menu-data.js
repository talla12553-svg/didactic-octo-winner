/* Sene Fast Food — menu data.
 * Single source of truth for both the homepage highlights and the full menu page.
 * Edit prices/items here and both pages update.
 *
 * Change CURRENCY once to switch the symbol shown everywhere.
 */
window.SENE = window.SENE || {};

window.SENE.CURRENCY = '$';

window.SENE.CATEGORIES = [
  { id: 'all',     label: 'Everything' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'wraps',   label: 'Wraps & Rice' },
  { id: 'sides',   label: 'Sides' },
  { id: 'drinks',  label: 'Drinks' },
  { id: 'sweets',  label: 'Desserts' }
];

window.SENE.MENU = [
  {
    name: 'Sene Signature Burger',
    category: 'burgers',
    price: 8.50,
    desc: 'Flame-grilled beef patty, smoked cheddar, caramelised onion and our house yassa sauce in a toasted brioche bun.',
    tags: ['Bestseller'],
    featured: true,
    flag: 'Chef’s pick'
  },
  {
    name: 'Double Fire Burger',
    category: 'burgers',
    price: 11.00,
    desc: 'Two beef patties, pepper jack, jalapeños and scotch-bonnet mayo. Built for a serious appetite.',
    tags: ['Spicy'],
    spicy: true
  },
  {
    name: 'Garden Bean Burger',
    category: 'burgers',
    price: 7.50,
    desc: 'Black bean and sweet potato patty, avocado, crisp lettuce and lime aioli.',
    tags: ['Vegetarian']
  },
  {
    name: 'Crispy Chicken Sandwich',
    category: 'chicken',
    price: 8.00,
    desc: 'Buttermilk-marinated chicken thigh, pickles and honey-mustard slaw.',
    tags: ['Bestseller'],
    featured: true
  },
  {
    name: 'Dibi Grilled Chicken',
    category: 'chicken',
    price: 12.50,
    desc: 'Half chicken marinated overnight in garlic, mustard and lemon, grilled over charcoal and served with onion relish.',
    tags: ['Grilled'],
    featured: true,
    flag: 'House speciality'
  },
  {
    name: 'Wings Basket (8 pcs)',
    category: 'chicken',
    price: 9.00,
    desc: 'Eight wings tossed in your choice of mild barbecue, sticky honey or scotch-bonnet glaze.',
    tags: ['Spicy option'],
    spicy: true,
    featured: true
  },
  {
    name: 'Chicken Yassa Wrap',
    category: 'wraps',
    price: 7.00,
    desc: 'Onion-and-lemon braised chicken, rice, salad and mustard sauce rolled in a warm flatbread.',
    tags: ['Quick lunch']
  },
  {
    name: 'Thieboudienne Bowl',
    category: 'wraps',
    price: 11.50,
    desc: 'Jollof-style rice cooked in tomato and fish stock, with seasonal vegetables and a fillet of the day.',
    tags: ['Weekend only'],
    flag: 'Fri – Sun'
  },
  {
    name: 'Veggie Rice Bowl',
    category: 'wraps',
    price: 8.50,
    desc: 'Spiced rice, roasted vegetables, black-eyed peas, herb salad and peanut dressing.',
    tags: ['Vegan']
  },
  {
    name: 'Hand-Cut Fries',
    category: 'sides',
    price: 3.20,
    desc: 'Fresh potatoes cut in-house every morning, twice-fried and salted.',
    tags: ['Vegan']
  },
  {
    name: 'Attieke & Plantain',
    category: 'sides',
    price: 4.50,
    desc: 'Steamed cassava couscous with sweet fried plantain and chilli oil on the side.',
    tags: ['Vegetarian'],
    featured: true
  },
  {
    name: 'Pastels (4 pcs)',
    category: 'sides',
    price: 5.00,
    desc: 'Golden fried pastries stuffed with spiced fish and herbs, served with tomato dip.',
    tags: ['Sharing']
  },
  {
    name: 'Bissap Iced Tea',
    category: 'drinks',
    price: 3.00,
    desc: 'Hibiscus steeped with mint and a hint of vanilla. Sweetened or unsweetened.',
    tags: ['House made'],
    featured: true
  },
  {
    name: 'Ginger Bouye',
    category: 'drinks',
    price: 3.50,
    desc: 'Baobab fruit blended with fresh ginger and lime. Cold, thick and refreshing.',
    tags: ['House made']
  },
  {
    name: 'Soft Drinks',
    category: 'drinks',
    price: 2.20,
    desc: 'Chilled cans and bottled water. Ask for the day’s selection.',
    tags: []
  },
  {
    name: 'Thiakry Cup',
    category: 'sweets',
    price: 4.00,
    desc: 'Sweet millet couscous with yoghurt, nutmeg and raisins. Served cold.',
    tags: ['House made']
  },
  {
    name: 'Banana Beignets',
    category: 'sweets',
    price: 3.80,
    desc: 'Warm banana fritters dusted with sugar, six to a portion.',
    tags: ['Sharing']
  }
];

window.SENE.COMBOS = [
  {
    name: 'Solo Deal',
    price: 11.50,
    blurb: 'Lunch sorted in under ten minutes.',
    includes: ['Any burger or wrap', 'Regular hand-cut fries', 'Any soft drink'],
    featured: false
  },
  {
    name: 'Sene Box',
    price: 16.90,
    blurb: 'Our most popular plate, front to back.',
    includes: ['Signature burger or crispy chicken', 'Large fries + plantain', 'Bissap iced tea', 'Banana beignets'],
    featured: true
  },
  {
    name: 'Family Platter',
    price: 42.00,
    blurb: 'Feeds four comfortably. Order ahead for pickup.',
    includes: ['Dibi grilled chicken (whole)', '16 wings, two sauces', 'Large attieke & plantain', '1.5L bissap jug'],
    featured: false
  }
];
