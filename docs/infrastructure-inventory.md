# charlotte-naturo.be : inventaire infrastructure

Site vitrine statique (HTML/CSS/JS, sans framework) de Charlotte Seynhaeve, naturopathe à Wavre. Remplace le site Wix.

## Azure

Tenant WIZE `6a608c76-405f-4bf8-93ca-2597c642540a`.
Souscription : **Microsoft Partner Network** `09d4272a-aebe-460c-8431-90d8d3c808b2` (la même que wize.be).

| Ressource | Nom | Groupe | Détail |
|---|---|---|---|
| Static Web App | `charlotte-naturo-web` | `rg-charlotte-prod` | **Free** (0 €), westeurope, `ambitious-bush-018ad6b03.3.azurestaticapps.net` |

Limites du plan Free : 2 domaines personnalisés, 250 Mo, 100 Go de bande passante/mois, pas de SLA.

## GitHub

- Repo : `speharpre/charlotte-naturo` (public), branche `main`. Tout push sur `main` déploie en production
  via `.github/workflows/deploy.yml` (~1 minute).
- Secret Actions : `AZURE_STATIC_WEB_APPS_API_TOKEN` (jeton de déploiement de `charlotte-naturo-web`).
  Rotation : `az staticwebapp secrets reset-api-key -n charlotte-naturo-web -g rg-charlotte-prod --subscription 09d4272a-aebe-460c-8431-90d8d3c808b2`,
  puis `gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN -R speharpre/charlotte-naturo` avec la nouvelle valeur.

## Domaine

`charlotte-naturo.be` pointe encore vers Wix. Pour basculer : ajouter le domaine dans la Static Web App
(`az staticwebapp hostname set -n charlotte-naturo-web -g rg-charlotte-prod --hostname www.charlotte-naturo.be`),
puis chez le registrar : `www` en CNAME vers `ambitious-bush-018ad6b03.3.azurestaticapps.net`, l'apex en A vers
l'IP stable de la SWA (voir `az staticwebapp show --query stableInboundIP`) ou en ALIAS si le DNS le permet.
Vérifier d'abord où sont le registrar et la zone DNS, et conserver les enregistrements e-mail.

## Anciennes URL Wix

`/home-1`, `/home-2`, `/blank-1`, `/blog` redirigent (301) vers les ancres de la page unique
(`staticwebapp.config.json`).

## Monitoring

Échec de déploiement = e-mail GitHub Actions. Pas de backend, donc pas de health-check.
