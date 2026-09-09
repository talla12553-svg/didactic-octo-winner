#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Vérifie les ratios de contraste du système de design Sesam Digital.

Les valeurs affichées dans systeme-de-design.html sont figées dans le HTML.
Après toute modification d'un jeton de couleur dans assets/css/sesam.css,
mettre à jour les constantes ci-dessous, relancer ce script, et reporter
les ratios obtenus dans le tableau de la page.

    python3 sesam/tools/contraste.py

Le script sort en code 1 si une couleur employée en texte descend sous AA.
"""
import sys

# --- Jetons, tenus à jour avec assets/css/sesam.css ---------------------
FONDS = {
    'ivoire': '#FBF7EC',   # --ground
    'papier': '#FFFDF6',   # --surface
    'sable':  '#F4EBDA',   # --surface-2
    'nuit':   '#2B1726',   # --night
}

# (jeton, valeur, seuil exigé, fonds sur lesquels il sert de TEXTE)
TEXTES = [
    ('--ink',        '#2A1D18', 4.5, ('ivoire', 'papier', 'sable')),
    ('--ink-2',      '#6E5B4E', 4.5, ('ivoire', 'papier', 'sable')),
    ('--brand-ink',  '#A34608', 4.5, ('ivoire', 'papier', 'sable')),
    ('--plum-ink',   '#7524A5', 4.5, ('ivoire', 'papier', 'sable')),
    ('--leaf-ink',   '#177734', 4.5, ('ivoire', 'papier', 'sable')),
    # Sur la bande nuit, .on-night remonte les accents :
    ('--ink (nuit)',       '#FBF7EC', 4.5, ('nuit',)),
    ('--ink-2 (nuit)',     '#CBB9BE', 4.5, ('nuit',)),
    ('--brand-ink (nuit)', '#F0842F', 4.5, ('nuit',)),
    ('--plum-ink (nuit)',  '#B98AD8', 4.5, ('nuit',)),
    ('--leaf-ink (nuit)',  '#5CC585', 4.5, ('nuit',)),
    ('--focus (nuit)',     '#F0C94A', 3.0, ('nuit',)),
]

# Aplats portant du texte blanc (libellés de boutons, badges) : seuil 4.5.
APLATS_TEXTE = [
    ('--brand-solid', '#C0530C', 'bouton principal'),
    ('--plum',        '#7524A5', 'badge « le plus choisi », avatars'),
    ('--leaf',        '#177734', 'pastille verte'),
]

# Aplats portant une icône blanche (élément graphique) : seuil 3.0.
APLATS_ICONE = [
    ('--brand', '#E46812', 'pastille orange'),
]

# Couleurs d'aplat uniquement : jamais employées en texte sur fond clair.
APLATS = [('--gold', '#E2B51A'), ('--clay', '#B71D1D')]


def _lin(c):
    c /= 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(h):
    h = h.lstrip('#')
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * _lin(r) + 0.7152 * _lin(g) + 0.0722 * _lin(b)


def ratio(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def main():
    echecs = []
    print('Contraste WCAG 2.1 — système de design Sesam Digital\n')
    for jeton, valeur, seuil, fonds in TEXTES:
        for nom in fonds:
            r = ratio(valeur, FONDS[nom])
            ok = r >= seuil
            if not ok:
                echecs.append((jeton, nom, r, seuil))
            print('  %-20s %s sur %-7s %5.2f:1  (seuil %.1f)  %s'
                  % (jeton, valeur, nom, r, seuil, 'ok' if ok else 'ÉCHEC'))
    print('\nTexte blanc sur aplat (seuil 4.5) :')
    for jeton, valeur, emploi in APLATS_TEXTE:
        r = ratio('#FFFFFF', valeur)
        ok = r >= 4.5
        if not ok:
            echecs.append((jeton + ' + blanc', 'aplat', r, 4.5))
        print('  %-14s %s  %5.2f:1  %-34s %s'
              % (jeton, valeur, r, emploi, 'ok' if ok else 'ÉCHEC'))

    print('\nIcône blanche sur aplat (seuil 3.0) :')
    for jeton, valeur, emploi in APLATS_ICONE:
        r = ratio('#FFFFFF', valeur)
        ok = r >= 3.0
        if not ok:
            echecs.append((jeton + ' + blanc', 'aplat', r, 3.0))
        print('  %-14s %s  %5.2f:1  %-34s %s'
              % (jeton, valeur, r, emploi, 'ok' if ok else 'ÉCHEC'))

    print('\nAplats seulement (à ne jamais employer en texte sur fond clair) :')
    for jeton, valeur in APLATS:
        rs = '  '.join('%s %.2f:1' % (n, ratio(valeur, f)) for n, f in FONDS.items())
        print('  %-10s %s   %s' % (jeton, valeur, rs))

    if echecs:
        print('\n%d échec(s) :' % len(echecs))
        for jeton, nom, r, seuil in echecs:
            print('  %s sur %s : %.2f:1 < %.1f' % (jeton, nom, r, seuil))
        return 1
    print('\nTous les jetons de texte atteignent leur seuil.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
