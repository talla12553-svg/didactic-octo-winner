# Updating the Sene Fast Food Website — Plain-Language Guide

You do **not** need to know how to code to update this site. Almost everything
you'll want to change lives in one file: `assets/js/menu-data.js`.

Open files with any plain text editor (Notepad, TextEdit, VS Code, or the
"Edit" option in most file managers) — never Microsoft Word, which adds
invisible formatting that breaks the file.

> **Note:** an earlier version of this guide described the site as a single
> `index.html` file with a marker called `EDIT MENU DATA HERE`. The site has
> since been rebuilt as three pages with the menu kept in its own data file.
> That marker no longer exists — use the instructions below instead.

---

## Where everything lives

| What you want to change | File to open |
| --- | --- |
| Dishes, descriptions, prices, sections | `assets/js/menu-data.js` |
| Phone numbers | `assets/js/menu-data.js` |
| The homepage breakfast list | `index.html` (see the warning in section 1) |
| Hours, address, FAQ answers | `index.html`, `menu.html`, `contact.html` |
| Dish photos | `assets/img/dishes/` + a line in `menu-data.js` |
| Menu du jour board photos | `assets/img/boards/` + a line in `menu-data.js` |

The three pages are `index.html` (home), `menu.html` (full menu) and
`contact.html` (hours, location, FAQ).

---

## 1. Changing the menu

Open `assets/js/menu-data.js`. Scroll to `window.SENE.MENU` — it's one long
list, and each dish looks like this:

```js
{
  name: 'Thiebou Guinar',
  category: 'mains',
  photo: 'assets/img/dishes/thiebou-guinar.jpg',
  desc: 'Deep red rice cooked in tomato under a whole roasted chicken, with mixed vegetables, green beans, pearl onions, olives, boiled egg and shrimp.',
  tags: ['Grilled & hearty'],
  flag: 'Grilled & hearty'
},
```

Only edit the text **between the quote marks**:

- `name` — the dish name as customers should read it.
- `category` — which section it appears in. Must be exactly one of
  `'breakfast'`, `'mains'` or `'desserts'`.
- `price` — a plain number, no dollar sign, e.g. `price: 10`. **Leave this
  line out entirely** if the price isn't fixed; the card then shows no number
  and the note above the grid tells customers to call.
- `desc` — one or two sentences describing the dish. If you delete the
  description, the card automatically shows *"Ask the kitchen — call (917)
  569-6057"* instead, which is a fine placeholder.
- `tags` — the small labels under the dish, in square brackets. You can have
  one or several: `tags: ['To share', 'Seafood']`. A tag containing the word
  "peanut" or "spicy" is highlighted automatically as an allergy/heat warning.
- `flag` — optional. The little ribbon in the corner of the photo, e.g.
  `flag: 'House favorite'`. Leave the line out for no ribbon.
- `photo` — optional. See section 3.

**To remove a dish**, delete its whole block, from the opening `{` down to the
`},` that closes it.

**To add a dish**, copy an existing block, paste it, and edit the text inside
the quotes. Make sure it still ends with `},`.

**Don't delete** the commas `,`, quote marks `'`, square brackets `[ ]` or
curly braces `{ }` — those are structure, and the menu won't load without
them. If the menu goes blank after an edit, undo your last change.

Both the homepage and the full menu page read from this one file, so a change
here updates both.

> ⚠️ **One exception — the homepage breakfast list.** The five breakfast
> plates listed on the homepage under "Breakfast special" are typed directly
> into `index.html` (search for `special__items`). Adding or renaming a
> breakfast dish in `menu-data.js` updates the **menu page** but not that
> homepage list — edit both so they match.

### A note about apostrophes

Names like `C'est Bon` use a curly apostrophe (`’`), not a straight one
(`'`). A straight apostrophe inside a name would end the text early and break
the file. Copy the curly one from an existing line if you need it.

---

## 2. Prices

Right now only the $10 breakfast plates have a confirmed price. Every lunch,
dinner and dessert item deliberately shows **no price at all**.

To add one, put a `price:` line into that dish:

```js
price: 18,
```

It appears on the card immediately — no other change needed. Use plain numbers
(`18` or `18.50`), never `$18`.

---

## 3. Photos

Four dishes have real photos: Thiebou Guinar, Thiebou Diaga, C'est Bon and
Mbakhal Yapp. Every other dish shows a **typographic tile** instead — its name
set large on a warm background with one of the site's characters. That's a
finished design, not a placeholder, so there's no rush to photograph
everything.

### Replacing a photo that already exists

Save your new picture over the old one in `assets/img/dishes/`, keeping the
**exact same file name**. Nothing else to do.

### Adding a photo for a dish that doesn't have one

1. Crop the photo square (same width and height), about 900 pixels wide.
2. Save it as a `.jpg` into `assets/img/dishes/`, using a simple lowercase
   name with dashes, e.g. `poulet-entier.jpg`.
3. In `menu-data.js`, add a `photo:` line to that dish:

   ```js
   photo: 'assets/img/dishes/poulet-entier.jpg',
   ```

Unlike the old version of the site, the file name alone isn't enough — the
`photo:` line is what tells the page where to look.

### The menu du jour boards

The photos of the boards in the shop window are listed separately at the
bottom of `menu-data.js`, under `window.SENE.BOARDS`. Put new board photos in
`assets/img/boards/` and add a line:

```js
{ img: 'assets/img/boards/board-dibi.jpg', name: 'Dibi' },
```

Boards are portrait (taller than wide). These same photos also feed the
rotating board on the homepage.

Keep photos compressed — around 150KB each is plenty. Very large files make
the site slow on phones.

---

## 4. Phone numbers

Near the top of `menu-data.js`:

```js
window.SENE.PHONE      = '(917) 569-6057';
window.SENE.PHONE_TEL  = '+19175696057';
```

`PHONE` is what customers **see**. `PHONE_TEL` is what their phone **dials**,
so it needs the `+1` and no spaces or brackets. Change both together, and the
same for `PHONE_ALT` / `PHONE_ALT_TEL`.

The "Call to order" buttons in the page headers and footers have the number
written into them as well — search all four HTML files (`index.html`,
`menu.html`, `contact.html` and `404.html`) for `9175696057` and update those
too.

---

## 5. Hours and address

These are written directly into the pages. Search all three HTML files (plus
`404.html`) for:

- `9:00 AM – 12:00 AM` — the opening hours, in the footers and on the contact
  page.
- `151 W 116th` — the address, in the footers, on the contact page and in the
  Google Maps links.

Change every place it appears so nothing contradicts itself.

If the opening hours change, one more spot matters: the green "Open now" /
"Closed" badge is calculated in `assets/js/main.js`. Search for `OPEN_HOUR`
and you'll find:

```js
var OPEN_HOUR = 9;
var CLOSE_HOUR = 24;
```

These use the 24-hour clock — `9` is 9 AM, `24` is midnight, `22` would be
10 PM. Update these to match the real hours or the badge will be wrong.

---

## 6. Checking your changes before they go live

**Double-clicking `index.html` is not enough** — the site's fonts won't load
that way and the page will look wrong even when nothing is broken. You need to
serve the folder:

1. Open Terminal (Mac) or Command Prompt (Windows) in the site folder.
2. Run:

   ```sh
   python3 -m http.server 8000
   ```

3. Visit `http://localhost:8000` in your browser.
4. Press Ctrl+C in the terminal when you're done.

Check the homepage and the menu page. If the menu area is blank, there's a
typo in `menu-data.js` — undo your last edit and try again.

---

## 7. Publishing

The site is published with GitHub Pages, set up in
`.github/workflows/pages.yml`. Once your changes are committed and pushed to
the `main` branch, the site rebuilds and goes live on its own within a minute
or two. You can also trigger it by hand from the repository's **Actions** tab.

There's no server, database or build step — the files you edit are the files
that get published.

---

## 8. Things still worth filling in

- **Lunch and dinner prices** — eight main dishes and three desserts still
  show no price (section 2).
- **Dish descriptions** — the descriptions for the main dishes were written
  from what these traditional dishes generally are, not from the kitchen's own
  words. Worth reading through and correcting to how you'd describe them.
- **Lunch vs dinner** — all eight main dishes sit together under "Lunch &
  Dinner". If some are dinner-only, they should be split.
- **Social links** — there are none on the site yet. Send the handles and they
  can be added to the footers.
- **Photos** — nine dishes still use typographic tiles (section 3).

---

## If something breaks

Every change is tracked in version control, so nothing is ever permanently
lost — any edit can be undone. Still, the quickest fix is usually to undo your
last change in the text editor and re-save.

Before a big editing session, it doesn't hurt to keep a copy of
`menu-data.js` somewhere safe so you can put the old one back.

---

## Questions?

The technical details — colours, fonts, the character artwork, how the site is
put together — are documented in `README.md`. If you ever want a developer to
add features like real online ordering, this repository is a clean starting
point.
