# charlotte-naturo.be

Site vitrine statique de Charlotte Seynhaeve, naturopathe à Wavre. Refonte du site Wix existant : une seule page, HTML/CSS/JS sans framework ni bundler.

Hébergé sur Azure Static Web Apps (plan Free) : tout push sur `main` est publié en production par GitHub Actions. Infra : `docs/infrastructure-inventory.md`.

## Structure

- `index.html` : la page (hero, motifs de consultation, à propos, la naturopathie, la consultation, contact).
- `assets/css/style.css` : feuille de style unique, mobile-first, tokens en tête de fichier.
- `assets/js/main.js` : menu mobile, lien actif, apparitions au scroll, feuille du hero, validation du formulaire.
- `assets/img/logo-mark.svg` (fleur de calendula, le logo), `assets/img/logo.svg` (fleur + nom), `assets/img/favicon.svg`, `assets/img/logo-original.png` (ancien logo Wix, pour mémoire).
- `404.html`, `staticwebapp.config.json` (en-têtes de sécurité, CSP, redirections des anciennes URL Wix, cache).

Polices : Syne (titres, charte Wix) et Instrument Sans (texte), chargées depuis Google Fonts.

## Développer

```bash
python3 -m http.server 4321
```

Puis ouvrir http://localhost:4321.

## À faire

- Remplacer l'illustration "Photo à venir" par un portrait.
- Réservation : liens directs vers l'agenda Thérago (https://therago.be/fr/t/charlotte-seynhaeve). Pour passer au widget intégré, renseigner `THERAGO.token` et `THERAGO.service` en tête de `assets/js/main.js` (Réglages > Widget de réservation).
- Basculer le domaine charlotte-naturo.be de Wix vers la Static Web App (voir `docs/infrastructure-inventory.md`).
