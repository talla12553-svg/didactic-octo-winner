# Sesam Farms — website

One-page site for Sesam Farms, an integrated 3.5 ha farm in Diogo (Niayes,
Senegal): sheep, chickens, tilapia, fruit trees and vegetables. It combines
the two earlier Sesam Farms drafts. Plain HTML/CSS/JS, no build step.

Served by the repo's GitHub Pages workflow at `/sesam-farms/`.

## Sections
Hero with farm video · key figures · products (moutons, poulets, tilapia,
fruits) · the farm cycle diagram · fruit orchards with a harvest calendar ·
Tabaski booking · who it's for · real farm photos · testimonials
(placeholders) · maps · visit & contact · WhatsApp chat assistant.

## Maps
- An inline SVG map of the Niayes coast placing Diogo (15.3012° N,
  16.8264° W) against Dakar, Thiès, Mboro and Tivaouane, with straight-line
  distances.
- A Google Maps embed, plus "Itinéraire" / "Ouvrir dans Google Maps" links.

## Photos
- `ferme.mp4`, `ferme-poster.jpg`, `bassin.jpg`, `remplissage.jpg`,
  `irrigation.jpg`, `terre.jpg`, `logo.jpg`: the farm's own media.
- `poulet.jpg`, `tilapia.jpg`: illustration photos from the earlier draft.
- `mouton.jpg`, `oranges.jpg`, `citrons.jpg`: illustration photos from the
  ImageNet sample set (github.com/EliSchwartz/imagenet-sample-images).

Every illustration photo is labelled "Photo d'illustration" on the page.
Replace them with the farm's own photos of its sheep and orchards when
available (same filenames, then nothing else changes).

## Single-file version
`python3 build-artifact.py out.html` inlines every asset as a data: URI and
swaps the Google Maps iframe for a link, for sharing as one self-contained
page.
