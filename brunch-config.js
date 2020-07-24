// Charge les fichiers JS et CSS dont on a besoin dans notre projet
exports.files =
{
    javascripts:
    {
        // Il doit placer le fichier app.js dans un dossier JS
        // Dans le require du fichier index.html, il est impératif de pointer vers nom_du_dossier_JS/app.js

        // On lui indique qu'il doit placer les fichiers JS dans un dossier nommé JS
        // IMPORTANT : on doit require dans l'index.html/php le fichier JS initial
        // Ex: require(scripts/initialize) => "scripts" étant le nom du dossier qui contient nos scripts
        // Il est également impératif de link le script vendor.js dans l'index.html/php
        joinTo:
        {
            // Tous les scripts/dépendances qui ne sont pas les notres (comme jquery) doivent être compilés dans le fichier js/vendor.js
            // Par ailleurs, pour savoir ce qu'il doit compiler ou non, dans notre fichier vendor.js, on devra require() tous les scripts qu'on souhaite utiliser dans notre script app.js perso.
            // Par exemple, dans app.js, on écrira : var $ = jQuery = require('jquery');
            'js/vendor.js' : /^(?!app)/,
            // Concernant nos scripts persos, on lui dit de les compiler dans le fichier js/app.js
            'js/app.js' : /^app/
        }
    },
    stylesheets:
    {
        // Pour ce qui est des fichiers CSS, le fonctionne est le même
        joinTo:
        {
            // On récupère tous les fichiers CSS des dépendances dont on a besoin et on les compile dans le fichier vendor.css
            'css/vendor.css' : /^(?!app)/,
            // On compile notre fichier CSS dans le dossier css
            'css/style.css' : /^app/
        }
    }
}
