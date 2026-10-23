# charlotte-naturo.be

Site vitrine statique de Charlotte Seynhaeve, naturopathe à Wavre. Refonte du site Wix existant : une seule page, HTML/CSS/JS sans framework ni bundler.

## Structure

- `index.html` : la page (hero, motifs de consultation, à propos, la naturopathie, la consultation, contact).
- `assets/css/style.css` : feuille de style unique, mobile-first, tokens en tête de fichier.
- `assets/js/main.js` : menu mobile, lien actif, apparitions au scroll, feuille du hero, validation du formulaire.
- `assets/img/favicon.svg`, `assets/img/logo-original.png` (logo du site Wix, conservé en attendant un vectoriel).

Polices : Syne (titres, charte Wix) et Instrument Sans (texte), chargées depuis Google Fonts.

## Développer

```bash
python3 -m http.server 4321
```

Puis ouvrir http://localhost:4321.

## À faire avant mise en ligne

- Brancher le formulaire sur un service d'envoi (Formspree, Azure Function ou similaire) : aujourd'hui il utilise `mailto:`.
- Remplacer l'illustration "Photo à venir" par un portrait.
- Fournir un logo vectoriel.
