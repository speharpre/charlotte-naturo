# Brief à coller dans la session Claude « therago »

Crée le profil thérapeute de Charlotte Seynhaeve en production, prêt à réserver, et renvoie-moi le snippet du widget.

**Compte**
- Nom : Charlotte Seynhaeve
- Email : info@charlotte-naturo.be
- Téléphone : +32476574129
- Rôle THERAPIST, locale fr. Mot de passe : aléatoire, jamais affiché (elle passera par « Mot de passe oublié »).
- CGU et attestation praticien : ne pas les fabriquer, laisser à null (elle verra l'invite à sa première connexion).

**Profil** (slug choisi : `charlotte-seynhaeve`, comme `audrey-delcourt`)
- Spécialité principale : naturopathie (slug `naturopathie`, position 0)
- Langues : fr
- Site : https://www.charlotte-naturo.be
- Registre : UNREGULATED
- Scénario OPEN_AGENDA, bookingMode SCHEDULE, confirmation INSTANT
- publicationIntent LISTED, status PUBLISHED, identityVerified true (Stéphane la connaît)
- Bio : « Naturopathe formée à l'IHMN (Namur), à l'École des plantes (Ath) et en santé fonctionnelle auprès de DFM Formations (Paris). Je vous reçois, enfants et adultes, pour chercher la source de vos troubles et y répondre avec des remèdes naturels, une alimentation qui vous correspond et un mode de vie qui vous ressemble : phytothérapie, aromathérapie, micronutrition, alimentation, hygiène de vie et lecture de bilans biologiques. La naturopathie complète la médecine générale, elle ne la remplace pas. »

**Lieu** : Centre Curati, Rue Provinciale 156, 1301 Wavre (coordonnées via `locationCoordinates`).

**Prestations** (prix à confirmer par Stéphane avant d'écrire)
- Première consultation, 90 min, __ €, « Votre histoire, surtout médicale, et les premières pistes. »
- Consultation de suivi, 60 min, __ €, « Évolution de votre bien-être, recommandations adaptées. »

**Disponibilités** : samedi 9h00 à 13h00 au Centre Curati (weekday 5, minutes depuis minuit).

**Abonnement** : PRO en essai 90 jours, comme `createTherapistProfileWithTrial`.

**Widget** : générer `embedToken` (`generateEmbedToken()` de `src/lib/embed.ts`) et me renvoyer :
- le token,
- l'id de la prestation « Première consultation »,
- l'URL publique `https://therago.be/fr/t/charlotte-seynhaeve`.

Côté site charlotte-naturo.be, il ne restera qu'à renseigner `THERAGO.token` et `THERAGO.service` en tête de `assets/js/main.js`.
