"""Build a single self-contained page (assets inlined as data: URIs) for sharing
as a claude.ai Artifact. The Google Maps iframe is dropped, since artifacts
cannot embed other sites; the inline Niayes map and the Maps links remain."""
import base64, mimetypes, pathlib, re, sys

here = pathlib.Path(__file__).parent
html = (here / "index.html").read_text(encoding="utf-8")

def inline(m):
    path = here / m.group(2)
    mime = mimetypes.guess_type(path.name)[0]
    data = base64.b64encode(path.read_bytes()).decode()
    return f'{m.group(1)}="data:{mime};base64,{data}"'

html = re.sub(r'(src|poster)="(assets/[^"]+)"', inline, html)
html = re.sub(r"<!--MAP-EMBED-->.*?<!--/MAP-EMBED-->",
              '<a class="gmap-link" href="https://www.google.com/maps/search/?api=1&query=15.3012%2C-16.8264" target="_blank" rel="noopener"><span>Voir Diogo sur Google Maps</span></a>',
              html, flags=re.S)
# The artifact host supplies its own document skeleton.
head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
body = re.search(r"<body>(.*)</body>", html, re.S).group(1)
head = re.sub(r'<meta charset[^>]*>\s*<meta name="viewport"[^>]*>\s*', "", head)
out = sys.argv[1] if len(sys.argv) > 1 else str(here / "sesam-farms-artifact.html")
pathlib.Path(out).write_text(head.strip() + "\n" + body.strip() + "\n", encoding="utf-8")
print(out, len(head) + len(body))
