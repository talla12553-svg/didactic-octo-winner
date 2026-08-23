# Sene Fast Food — website

Website for Sene Fast Food, an authentic Senegalese kitchen at 151 W 116th St in
Harlem, NYC. Static HTML, CSS and vanilla JavaScript — no build step and no
dependencies.

## Design direction

**The site is designed from Sene's own menu du jour board** — the poster the
kitchen puts in the window every day — rather than from an outside reference.

The palette is measured from those boards: a warm charcoal ground (sampled
`#1c161a` / `#231515` / `#210e0e`), marigold header type, flame accents, white
dish names in italic. An earlier pass used cream and terracotta, which made the
boards look like foreign objects pasted onto a pale page.

The page alternates two grounds:

| Ground | Colour | Carries |
| --- | --- | --- |
| **Board** | ember `#191114` | appetite — hero, pull quote, the board wall, the call to act |
| **Counter** | bone `#f7f2e8` | practical — dishes, hours, address, allergens, FAQ |

Type is Bricolage Grotesque for display (heavy, slightly narrowed — the boards'
poster voice), Archivo for UI, and **Instrument Serif italic reserved for dish
names**, which is how the kitchen sets them on the boards. All three are
self-hosted from `assets/fonts/`, so the site makes no third-party request; all
are SIL Open Font License 1.1.

### The signature

The hero is a working reproduction of the board: gold `MENU DU JOUR` header,
the shop name, a cycling stage of recent dish photographs, and the real address
and both phone numbers at the foot. It rotates every 4.2s, pauses on hover and
focus, stops when the tab is hidden, and does not rotate at all under
`prefers-reduced-motion`. The copy says "recent boards — call to hear what's on
today", because claiming a specific dish is today's would not be true.

### Colour and contrast

`--flame` `#e2571f` is used for fills and on the ember ground (4.96:1). Text on
paper uses `--flame-ink` `#ad3d0e` instead (5.45:1) — the bright flame only
reaches 3.35:1 on bone, which fails AA for anything but large text. Focus rings
follow the ground via an inherited `--focus` token: gold on ember, flame-ink on
paper.

### The Ceeb Crew

The site has its own cast of characters, defined in `assets/js/characters.js`.
They are named in Wolof after ingredients the kitchen actually cooks with, so
they read as Sene's own rather than generic food mascots:

| Character | Is | Where it comes from |
| --- | --- | --- |
| **Kaani** | scotch bonnet | the heat in the mbakhal |
| **Lëmu** | charred lime | the wedge on the Thiebou Diaga |
| **Jën** | thiof | the fish under the thieboudienne |
| **Gerte** | groundnut | Senegal's peanut basin |
| **Bissap** | hibiscus | the jug by the counter |
| **Ceeb** | grain of rice | what the whole menu is built on |

*The Wolof spellings are worth a native check before this goes live.*

House style, deliberately not Sweetgreen's (theirs is outline-free, muted and
collage-ish):

- Bold 5px ink outlines, round caps and joins
- Flat fills only — no gradients, no shading
- Slight asymmetry; nothing is perfectly centred
- Faces are two dot eyes and one stroked smile, nothing more
- No detail stroke ever crosses a character's face box

They idle with a slow bob and blink on a stagger, so a row never moves in
lockstep. Both animations rest on their neutral pose, so the global
`prefers-reduced-motion` rule freezes them correctly.

To place one anywhere: `<span data-char="kaani" data-char-delay=".4"></span>`.
Menu tiles pull from a per-section cast automatically.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Hero, $10 breakfast special, story, what's cooking, desserts, hours/location/contact |
| `menu.html` | Full menu with section filters and deep links (`menu.html#desserts`) |
| `contact.html` | Hours, location, phone numbers, FAQ |

## Running it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
assets/
  css/styles.css        all styling, design tokens at the top of the file
  js/characters.js      the Ceeb Crew — character artwork and builder
  js/menu-data.js       dishes, sections and contact numbers — the data
  js/main.js            nav, menu rendering/filtering, open-now pill, reveal
  img/hero.jpg          hero band photograph
  img/dishes/*.jpg      dish photos, cropped from the menu du jour boards
  img/boards/*.jpg      the full boards as posted
  fonts/*.woff2         Fraunces + Inter, latin subsets
```

Because the fonts are loaded with `@font-face`, the site must be **served over
HTTP** to look right — opening `index.html` straight off disk gives a CORS error
on the font files and falls back to Georgia and a system sans. Use the
`python3 -m http.server` command above.

## Business details

These are set in `assets/js/menu-data.js` (phone numbers) and directly in the
HTML of all three pages:

- **Address** — 151 W 116th Street, Harlem, New York, NY 10026
- **Hours** — Monday to Sunday, 9:00 AM – 12:00 AM
- **Breakfast special** — $10 flat, served until 11:00 AM
- **Phone** — (917) 569-6057 primary, (917) 569-6871 alternate
- **Halal kitchen**, dine-in, takeout and delivery

The "Open now / Closed" pill in the header stats and on the contact page is
computed in `initOpenNow()` in `assets/js/main.js` from `OPEN_HOUR` and
`CLOSE_HOUR`. It reads the *visitor's* clock, not New York time — fine for local
customers, worth revisiting if that matters.

## Editing the menu

Everything on the menu lives in `assets/js/menu-data.js`. The homepage sections
and the menu page both read from it, so a change there updates both.

```js
{
  name: 'Thiebou Dienne',
  category: 'mains',       // breakfast | mains | desserts
  price: 10,               // omit entirely if the price is not fixed
  desc: '…',
  tags: ['Senegalese classic'],
  flag: 'Senegalese classic',  // optional corner ribbon
  needsCopy: true          // renders "ask the kitchen" instead of a description
}
```

An item with no `price` shows no number at all — the note above each grid tells
customers to call. Add `price:` and the figure appears automatically.

## Photos

Four dishes have real photos, taken from the shop's "menu du jour" boards:
Thiebou Guinar, Thiebou Diaga, C'est Bon and Mbakhal Yapp. Each one is used
twice — cropped to the plate for its menu card, and in full on the homepage
board gallery.

To add a photo for another dish: crop it square, save it into
`assets/img/dishes/` at about 900px wide, and add a `photo:` path to that item
in `menu-data.js`. A dish with no `photo` renders a typographic tile instead —
its name set large on a warm tint — which matches the photographed boards
(those carry the dish name too), so the two mix without looking half-finished.

Source images are around 1MB total. If more are added, keep them compressed —
JPEG quality 80ish at 900px wide is roughly 150KB per photo.

## Still to confirm

Content taken from the business; a few gaps remain:

- **Lunch and dinner prices.** Only the $10 breakfast special has a confirmed
  price. The eight lunch/dinner dishes and three desserts currently show no
  price. Add `price:` to each in `menu-data.js` when the figures are known.
- **Lunch vs dinner split.** The source listed separate lunch and dinner
  sections, but only breakfast was itemised, so the eight main dishes are
  grouped as "Lunch & Dinner". Split the `mains` category in two if they belong
  to different services.
- **Dish descriptions.** Descriptions for the mains are written from what these
  traditional dishes generally are, not from the kitchen's own wording — worth
  a read-through. `C'est Bon` has `needsCopy: true` and shows "ask the kitchen"
  because it appears to be a house name rather than a standard dish.
- **Photos for the other dishes.** Nine dishes still use typographic tiles:
  Thiebou Dienne, Tiebou Naar, Dibi, Poulet Entier, Tiere Sim, the five
  breakfast plates and the three desserts.
- **Social links.** None are in the site; add them to the footer if the business
  has accounts.
- **The Senegal vs Soudan promo video is not on the site.** It advertises a match
  screening on "Samedi 3 janvier" — that date has passed — and it carries a
  visible Sora watermark, so it reads as AI-generated rather than footage of the
  shop. It is worth publishing once it points at an upcoming date, ideally
  without the watermark.

## Ordering

There is no online ordering form. Every call to action is a `tel:` or `sms:`
link to the shop's real numbers, which is how orders are actually taken.

## Browser support

Modern evergreen browsers. Layout uses CSS grid and flexbox; the site degrades
to readable content with JavaScript disabled, except the dish grids, which show
a fallback message with the phone number.
