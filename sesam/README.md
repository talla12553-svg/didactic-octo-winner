# Sesam Digital — site

Site de **Sesam Digital**, studio digital de Talla Sylla : sites web et
applications sur mesure pour les entreprises de Dakar et de la diaspora,
conçus depuis New York. HTML, CSS et JavaScript statiques — aucune étape de
build, aucune dépendance, aucune requête vers un tiers.

Le site est en français, comme sa clientèle.

## Les pages

| Fichier | Ce que c'est |
| --- | --- |
| `index.html` | Accueil : héros, le problème en bref, la solution en bref, bénéfices, créations, avis, tarifs, FAQ |
| `probleme.html` | Le constat en entier : quatre points de friction, autodiagnostic en six signes |
| `solution.html` | Les quatre modules, le déroulé en quatre étapes, et **Notre histoire** (`#histoire`) |
| `systeme-de-design.html` | Le système de design : jetons, contraste, typographie, motifs, composants, règles |

`systeme-de-design.html` est un document interne. Il est atteignable depuis le
pied de page mais ne figure pas dans la navigation principale.

## Direction artistique

**Chaleureux, posé, lisible — et tiré du logo, pas d'une référence extérieure.**

Les six couleurs du système sont relevées sur `assets/img/logo.jpg` : le violet
et l'orange du sigle, l'ivoire du disque, et le vert, l'or et le rouge des coups
de pinceau. Le système n'en ajoute aucune.

Ce qui rend l'ensemble chaleureux tient à un déplacement : le fond n'est ni
blanc ni lavande, c'est l'ivoire du logo réchauffé (`#FBF7EC`), avec un grain de
papier très léger. L'orange devient l'accent principal, le violet passe en
second, et le vert, l'or et le rouge n'apparaissent que par touches.

La page alterne quatre fonds :

| Fond | Couleur | Porte |
| --- | --- | --- |
| **Ivoire** | `#FBF7EC` | le fond de page |
| **Papier** | `#FFFDF6` | les cartes posées dessus |
| **Sable** | `#F4EBDA` | une section sur deux |
| **Nuit** | `#2B1726` | la citation, l'histoire, l'appel à l'action |

Une section sombre porte `class="band band-night on-night"`. La classe
`.on-night` redéfinit les jetons (`--ink`, `--brand-ink`, `--plum-ink`, `--line`,
`--focus`) et **tous les composants qu'elle contient s'inversent seuls** — il n'y
a aucune règle `.on-night .quelque-chose` à écrire.

### Les trois signatures

Chacune cite un élément du logo :

- **Le coup de pinceau** (`.swash`) — vert, or, rouge, comme derrière le sigle.
  Séparateur entre deux sections, une à deux fois par page au maximum.
- **Les pixels en escalier** (`.steps`) — les trois carrés orange qui entrent
  dans le « D ». Ils précèdent le surtitre d'une section principale.
- **Le surligneur or** (`.mark`) — un trait penché derrière deux ou trois mots
  d'un titre. Un seul par titre, jamais dans un paragraphe.

### Typographie

**Fraunces** pour les titres — une antique douce, à empattements arrondis, qui
porte la chaleur. **Work Sans** pour tout le reste. Les deux sont sous licence
SIL OFL 1.1 et servies depuis `assets/fonts/`, donc le site ne contacte aucun
service tiers.

Parce que les fontes sont chargées en `@font-face`, **le site doit être servi en
HTTP** pour s'afficher correctement : ouvrir `index.html` depuis le disque
provoque une erreur CORS sur les fichiers de fonte et rabat la page sur Georgia
et une sans-serif système.

## Contraste

Chaque accent existe en trois versions, et le choix entre elles n'est pas
esthétique :

| Jeton | Valeur | Emploi |
| --- | --- | --- |
| `--brand` | `#E46812` | pastilles à icône blanche (3,3:1) — jamais de texte dessus |
| `--brand-solid` | `#C0530C` | fond des boutons principaux, texte blanc à 4,7:1 |
| `--brand-ink` | `#A34608` | texte orange sur fond clair (5,7:1 sur ivoire) |

L'or `#E2B51A` ne tient que 1,8:1 sur l'ivoire : **aplats uniquement**, jamais
de texte. Sur la bande nuit, le violet de marque tombe à 2,0:1 et doit céder la
place à `--plum-ink` `#B98AD8`.

Après toute modification d'un jeton de couleur, reporter la nouvelle valeur dans
`tools/contraste.py` et lancer :

```sh
python3 sesam/tools/contraste.py
```

Le script vérifie chaque encre sur chaque fond ainsi que le texte blanc sur
chaque aplat, et sort en code 1 si un seuil AA n'est pas atteint. C'est lui qui
a fait descendre le bouton principal de `#E46812` à `#C0530C` : l'orange vif ne
donnait que 3,3:1 avec du blanc.

Les ratios affichés dans `systeme-de-design.html` sont figés dans le HTML — rien
ne les recalcule au chargement, il faut les reporter à la main.

## Accessibilité

- Un lien d'évitement en tête de chaque page.
- Un anneau de focus visible partout, dont la couleur suit le fond via `--focus`.
- Les décorations SVG portent `aria-hidden="true"`.
- `prefers-reduced-motion` coupe transitions et apparitions au défilement.
- Sans JavaScript, le site reste utilisable : les réponses de la FAQ sont dans
  le HTML et une règle `html:not(.js)` les laisse dépliées, les mêmes liens de
  navigation figurent dans le pied de page, et rien n'est masqué.

## Lancer le site

```sh
python3 -m http.server 8000
# puis http://localhost:8000/sesam/
```

## Structure

```
sesam/
  index.html
  probleme.html
  solution.html
  systeme-de-design.html
  assets/
    css/sesam.css               tout le système ; les jetons sont en tête de fichier
    css/systeme-de-design.css   styles de la page de documentation uniquement
    js/sesam.js                 nav mobile, FAQ, apparition au défilement
    fonts/*.woff2               Fraunces + Work Sans, latin et latin-ext
    img/                        logo, affiche du héros, publications
  tools/contraste.py            vérificateur de contraste WCAG
```

Tous les chemins sont relatifs, pour que le site fonctionne aussi bien à la
racine d'un domaine que dans un sous-dossier. **Ne jamais écrire `/assets/…`
avec une barre initiale** — cela casserait l'hébergement en sous-dossier.

## Informations de l'entreprise

Elles sont écrites directement dans le HTML des quatre pages :

- **Téléphone / WhatsApp** — 917-569-6871
- **E-mail** — sesamgroupllc@gmail.com
- **Devise** — Innover · Développer · Réussir
- **Signature** — « Des idées en solutions digitales »

## À confirmer avant mise en ligne

Le contenu vient du dossier de marque existant. Quelques points restent ouverts,
et il vaut mieux les traiter avant de publier :

- **Les avis clients sont fictifs.** Les trois témoignages de la page d'accueil
  portent une étiquette « Exemple » et un avertissement explicite. Les remplacer
  par de vrais avis dès que possible — ou retirer la section entière.
- **Les tarifs sont indicatifs.** 150 000 et 300 000 FCFA sont repris tels quels
  du dossier ; à confirmer avant qu'un client s'appuie dessus.
- **Notre histoire attend le récit personnel.** Le paragraphe d'origine, dans
  `solution.html`, est écrit à partir de ce que la marque affirme déjà — sans
  inventer de date de création, de chiffre ni d'anecdote. Un commentaire HTML
  marque l'endroit exact à remplacer par les mots de Talla Sylla.
- **Aucun réseau social n'est lié.** Le dossier mentionne une présence Instagram
  mais ne donne pas l'identifiant ; l'ajouter au pied de page.
- **Pas d'adresse postale.** Si Sesam Group LLC en communique une, elle a sa
  place dans le pied de page et dans un balisage `LocalBusiness`.
- **Le nom de domaine.** Les métadonnées `og:` utilisent des chemins relatifs ;
  y mettre des URL absolues une fois le domaine connu, sans quoi les aperçus de
  partage n'afficheront pas l'image.
