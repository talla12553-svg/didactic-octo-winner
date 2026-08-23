# Sene Fast Food — website

A static marketing site for Sene Fast Food: charcoal-grilled chicken, burgers and
West African plates. No build step, no dependencies — plain HTML, CSS and
vanilla JavaScript.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Homepage: hero, featured dishes, combo deals, story, reviews, hours, CTA |
| `menu.html` | Full menu with category filters and deep links (`menu.html#chicken`) |
| `contact.html` | Address, hours, order-ahead form and FAQ |

## Running it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
assets/
  css/styles.css      all styling, design tokens at the top of the file
  js/menu-data.js     menu items, categories and combos — the data
  js/main.js          nav, menu rendering/filtering, form, hours, reveal
```

## Editing the menu

Everything on the menu lives in `assets/js/menu-data.js`. Both the homepage
highlights and the menu page read from it, so a change there updates both.

```js
{
  name: 'Sene Signature Burger',
  category: 'burgers',    // must match an id in SENE.CATEGORIES
  price: 8.50,
  desc: '…',
  tags: ['Bestseller'],   // a tag containing "spicy" renders in the hot style
  featured: true,         // shows on the homepage highlights row
  flag: 'Chef’s pick'     // optional corner ribbon on the card
}
```

`window.SENE.CURRENCY` at the top of that file sets the currency symbol used
everywhere.

## Notes on the content

The copy, dishes and prices are a plausible starting point, not real business
data. Before this goes live, replace:

- **Contact details** — `24 Market Street, City Centre`, `+1 555 0100` and
  `hello@senefastfood.example` are placeholders, repeated in the header/footer
  of all three pages and in the contact page body.
- **Opening hours** — the tables in `index.html` and `contact.html`.
- **Prices and currency** — in `assets/js/menu-data.js`.
- **Reviews** — the three quotes on the homepage are illustrative.
- **Social links** — the footer icons currently point at `#`.

## The order form

`contact.html` has an order-ahead form. It is **front-end only**: it validates
input and shows a confirmation message, but does not send anything anywhere.
Wiring it up means either pointing the `<form>` at a form service (Formspree,
Netlify Forms, etc.) or posting to your own endpoint from the submit handler in
`assets/js/main.js`.

## Browser support

Modern evergreen browsers. Layout uses CSS grid and flexbox; the site degrades
to readable content with JavaScript disabled, except the menu grid, which shows
a fallback message with the phone number.
