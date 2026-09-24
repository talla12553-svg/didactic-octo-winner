# Sesam Digital — site web

Site de Sesam Digital (agence) et Sesam SaaS, construit à partir du
*Cahier des charges général*. HTML, CSS et JavaScript simples : aucune étape de
build, aucune dépendance, polices hébergées localement (léger en 3G).

| Page | Contenu |
| --- | --- |
| `index.html` | Présentation des deux activités, les 5 modules, articulation site → outil → gestion |
| `agence.html` | Positionnement, clientèle cible (et exclusion santé), formules Essentiel / Professionnel / Sur mesure, capacité de 5 projets par mois |
| `saas.html` | Modules sectoriels, démo interactive du parcours client (choix → créneau → paiement Wave / Orange Money → confirmation WhatsApp), vue pharmacie (garde + alertes de stock), fonctionnalités, exigences techniques |
| `contact.html` | Formulaire de demande de devis (pré-rempli via `?offre=` ou `?module=`) |

Les commerces de la démo et du tableau de bord sont fictifs.

## À compléter

Le cahier des charges ne donne ni e-mail ni numéro WhatsApp. Renseignez-les en
haut de `assets/js/main.js` :

```js
const CONTACT = { email: '', whatsapp: '' };
```

Tant qu'ils sont vides, le formulaire prépare un récapitulatif que le visiteur
peut copier. Une fois remplis, il propose « Envoyer sur WhatsApp » et/ou
« Envoyer par e-mail ».

## Lancer en local

```sh
python3 -m http.server   # puis ouvrir http://localhost:8000/sesam-digital/
```

Avec le déploiement GitHub Pages existant, le site est servi sous `/sesam-digital/`.
