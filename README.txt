===========================================
PORTFOLIO - Bernice Folakè ADJIN
Projet Final Développement Web
===========================================

OBJECTIF
--------
Portfolio personnel responsive présentant mon profil,
mes compétences et mes projets de développement web.

STRUCTURE DU PROJET
-------------------
ProjetFinal_ADJIN_Bernice_Folakè/
├── wireframe/
│   ├── prompts/
│   │   ├── prompt_v1.txt
│   │   └── prompt_v2.txt
│   └── exports_stitch/
├── figma/
│   └── lien-prototype.txt
├── site/
│   ├── index.html
│   ├── projects.html
│   ├── css/style.css
│   ├── js/app.js
│   └── assets/images/
└── README.txt

LIEN FIGMA
----------
https://www.figma.com/proto/lbVkJSaNFZY1P4s6qAa6Eg/portefolio?node-id=19-225&p=f&t=5dbLGlkLmyq84bWt-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2

TECHNOLOGIES
------------
- HTML5 sémantique
- CSS3 (Flexbox, Grid, Variables)
- JavaScript Vanilla (ES6+)
- Mobile First
- Écoconception (0 librairie externe)

===========================================
SECTION QUALITÉ
===========================================

1) ACCESSIBILITÉ (a11y)
-----------------------
Problème : Absence de structure sémantique
Correction : Utilisation de header, nav, main, section, footer
Résultat : Navigation au clavier et lecteurs d'écran fonctionnels

Problème : Labels manquants sur le formulaire
Correction : Association label/input avec for/id
Résultat : Formulaire accessible

Problème : Messages d'erreur non explicites
Correction : Messages clairs pour chaque champ
Résultat : Feedback utilisateur compréhensible

2) PERFORMANCE & ÉCOCONCEPTION
------------------------------
Problème : Images lourdes potentielles
Correction : Placeholders CSS, 0 image chargée
Résultat : Poids de page minimal

Problème : Polices externes Google Fonts
Correction : Police système (-apple-system, BlinkMacSystemFont)
Résultat : 0 requête externe, chargement instantané

Problème : Scripts bloquants
Correction : Script placé en fin de body
Résultat : HTML parsé avant exécution JS

Vérification DevTools :
- Poids page : < 5 Ko
- Requêtes HTTP : 3 (HTML + CSS + JS)
- Aucune erreur Console
- Temps de chargement : < 100ms

3) CORRECTIONS & ROBUSTESSE
---------------------------
Problème : Validation email faible
Correction : Vérification format email (@ et .)
Résultat : Emails invalides détectés

Problème : Responsive non testé
Correction : Tests sur 375px, 768px, 1440px
Résultat : Affichage correct sur tous les appareils

Problème : Compatibilité navigateurs
Correction : Tests sur Chrome et Firefox
Résultat : Fonctionnel sur les 2 navigateurs

===========================================
AUTO-CONTRÔLE
===========================================
✅ HTML sémantique
✅ Hiérarchie H1/H2/H3 cohérente
✅ Images avec attributs alt
✅ Labels associés aux champs
✅ Navigation clavier fonctionnelle
✅ Contraste lisible
✅ Responsive 3 breakpoints
✅ Formulaire validation JS
✅ Feedback utilisateur
✅ 0 erreur Console
✅ Dossier structuré
===========================================