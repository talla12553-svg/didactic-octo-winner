#!/usr/bin/env python3
"""Build a single self-contained HTML file from the three-page site.

Everything — CSS, JS, fonts, photographs — is inlined as data: URIs so the
page runs from one file with no network requests. The three pages become
client-side routes: the shared header, footer and order bar live in the shell,
and only <main> is swapped, which avoids the duplicate element ids that having
all three in the DOM at once would create.
"""
import base64, json, mimetypes, pathlib, re

ROOT = pathlib.Path(__file__).parent
OUT = ROOT / 'dist' / 'sene-fast-food.html'

def data_uri(path):
    p = ROOT / path
    mime = {'.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png'}.get(
        p.suffix, mimetypes.guess_type(p.name)[0] or 'application/octet-stream')
    return f"data:{mime};base64,{base64.b64encode(p.read_bytes()).decode()}"

# --- CSS with fonts inlined ---
css = (ROOT / 'assets/css/styles.css').read_text()
css = re.sub(r'url\("\.\./fonts/([^"]+)"\)',
             lambda m: f'url("{data_uri("assets/fonts/" + m.group(1))}")', css)

# --- JS ---
js = '\n'.join((ROOT / f).read_text() for f in
               ['assets/js/characters.js', 'assets/js/menu-data.js', 'assets/js/main.js'])

# --- Page bodies ---
def read(page):
    return (ROOT / page).read_text()

def grab(html, tag, attrs=''):
    m = re.search(rf'<{tag}{attrs}[^>]*>(.*?)</{tag}>', html, re.S)
    return m.group(0) if m else ''

home = read('index.html')
pages = {
    'home':    grab(home, 'main'),
    'menu':    grab(read('menu.html'), 'main'),
    'contact': grab(read('contact.html'), 'main'),
}

# Rewrite image srcs to data URIs inside the page bodies.
def inline_imgs(html):
    return re.sub(r'src="(assets/img/[^"]+)"',
                  lambda m: f'src="{data_uri(m.group(1))}"', html)

pages = {k: inline_imgs(v) for k, v in pages.items()}

# main.js builds the board stage from menu-data photo paths — inline those too.
photo_map = {}
for m in re.finditer(r"photo: '(assets/img/[^']+)'", (ROOT / 'assets/js/menu-data.js').read_text()):
    photo_map[m.group(1)] = data_uri(m.group(1))
for path, uri in photo_map.items():
    js = js.replace(f"'{path}'", f"'{uri}'")
boards_js = (ROOT / 'assets/js/menu-data.js').read_text()
for m in re.finditer(r"img: '(assets/img/[^']+)'", boards_js):
    js = js.replace(f"'{m.group(1)}'", f"'{data_uri(m.group(1))}'")

# --- Shell: header, footer and order bar, taken from the homepage ---
header = grab(home, 'header')
footer = grab(home, 'footer')
order_bar = grab(home, 'div', r' class="order-bar"')

# Nav hrefs become routes.
def to_routes(html):
    html = re.sub(r'href="index\.html#', 'href="#/home§', html)
    html = re.sub(r'href="index\.html"', 'href="#/home"', html)
    html = re.sub(r'href="menu\.html#', 'href="#/menu§', html)
    html = re.sub(r'href="menu\.html"', 'href="#/menu"', html)
    html = re.sub(r'href="contact\.html#', 'href="#/contact§', html)
    html = re.sub(r'href="contact\.html"', 'href="#/contact"', html)
    return html.replace('§', '@')

header, footer = to_routes(header), to_routes(footer)
pages = {k: to_routes(v) for k, v in pages.items()}

router = """
const PAGES = %s;
const app = document.getElementById('app');

function route() {
  const raw = (location.hash || '#/home').slice(2);
  const [name, anchor] = raw.split('@');
  const page = PAGES[name] ? name : 'home';

  app.innerHTML = PAGES[page];
  document.querySelectorAll('.nav a[href^="#/"]').forEach(a => {
    const target = a.getAttribute('href').slice(2).split('@')[0];
    a.toggleAttribute('aria-current', target === page);
    if (target === page) a.setAttribute('aria-current', 'page');
  });

  window.SENE.startCategory = anchor || null;
  window.SENE.initContent();

  if (anchor) {
    const el = document.getElementById(anchor);
    if (el) { el.scrollIntoView({ behavior: 'instant', block: 'start' }); return; }
  }
  window.scrollTo(0, 0);
}

addEventListener('hashchange', route);
route();
""" % json.dumps(pages)

shell = f"""<title>Sene Fast Food</title>
<meta name="description" content="Authentic Senegalese kitchen on 116th Street in Harlem. Menu, hours and how to order.">
<style>{css}</style>

<a class="skip-link" href="#app">Skip to content</a>
{header}
<div id="app"></div>
{footer}
{order_bar}

<script>{js}</script>
<script>{router}</script>
"""

OUT.parent.mkdir(exist_ok=True)
OUT.write_text(shell)
size = OUT.stat().st_size
print(f'wrote {OUT} — {size/1048576:.2f} MiB')
