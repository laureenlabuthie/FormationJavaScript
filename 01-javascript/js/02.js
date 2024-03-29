// Déclarer un tableau indexé


var monTableau = []; // autre notation, mais identique "var myArray = new Array;"

monTableau[0] = 'Hugo';
monTableau[1] = 'Lena';
monTableau[2] = 'Laureen';
monTableau[3] = 'Katy';

console.log(monTableau);
console.log(monTableau[2]); //Laureen
console.log(monTableau[3]); //Katy



var nosPrenoms = [
    'Nia',
    'Catherine',
    'Gaëlle',
    'Lena',
    'Astrid',
    'Tanély'
];

console.log(nosPrenoms);


// Créer un objet en JS.

var coordonnee = {
    // Propriété    :   Valeur  ,
    prenom          :   'Laureen',
    nom             :   'LABUTHIE',
    age             :   '21',
    tel             :   '0690 28 63 26'
};

console.log(coordonnee);
console.log(coordonnee ['prenom']);
console.log(coordonnee.prenom); // Ecriture à privilégier, mais les deux sont good ;).


//Ici, j'ai deux tableau dans un tableau
//Ou encore un tableau a deux dimensions.
var annuaireDesApprenantes = [
    ['Nia', 'VITALIS'],
    ['Angélique', 'JEAN-NOEL']

];

console.log(annuaireDesApprenantes[0][0]);
console.log(annuaireDesApprenantes[1][0]); // Pas très pratique...
console.log(annuaireDesApprenantes);


var annuaireDesApprenantes = [
    {
        prenom : 'Laureen',
        nom    : 'LABUTHIE'
    },

    {   prenom : 'Lena',
         nom    : 'BOISSERON'

    },

    { prenom : 'Katharyna',
      nom    : 'LUCINA'

    }

];

console.log(annuaireDesApprenantes);
console.log(annuaireDesApprenantes[0].prenom);
console.log(annuaireDesApprenantes[0].nom);

console.log(annuaireDesApprenantes[1].prenom);
console.log(annuaireDesApprenantes[1].nom);

console.log(annuaireDesApprenantes[2].prenom);
console.log(annuaireDesApprenantes[2].nom);



var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...



/*                                EXERCICE
Réaliser une structure JSON permettant de stocker des recettes de cuisine. */


var recettescrepe = [
    
    
        {ingredients: 'lait, oeufs, farine'}, 
        {ustensiles:  'poele a crepe, rateau repartiteur, louche'},
        {difficulte:'facile'},
        {preparation: 'melanger le tout'},
        {fin:'degustez'}
            
        
    
   
];

console.log( recettescrepe );


/* CORRECTION */

var recettes = [
    {
        nom: 'Tiramisu',
        categorie: 'Desserts',
        sousCategorie: 'Gateaux',
        difficulte: 'Facile',
        cout: 'Abordable',
        nbPersonnes: 8,
        specialite: 'Italien',
        cuisson: {
            preparation: 30,
            preparationUnite: 'minutes',
            duree: '',
            temperature: '',
            repos: 120,
            reposUnite: 'minutes',
            total: 150,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Sucre',
                quantite: 80,
                unite: 'g'
            },
            {
                nom: 'Mascarpone',
                quantite: 250,
                unite: 'g'
            },
            {
                nom: 'Café Expresso',
                quantite: 15,
                unite: 'cl'
            },
        ],
        ustensiles: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
           {
               description: 'Séparer les blancs des jaunes...',
               photoUrl: 'https://recettes.fr/monetape.jpg'
           },
           {
                description: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
            {
                description: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
        ]
    },


    {
        nom: 'Blaf',
        categorie: 'Plats',
        sousCategorie: 'Poissons',
        difficulte: 'Moyen',
        cout: 'Abordable',
        nbPersonnes: 4,
        specialite: 'Antillaise',
        cuisson: {
            preparation: 45,
            preparationUnite: 'minutes',
            duree: '30min',
            temperature: '',
            repos: 0,
            reposUnite: 'minutes',
            total: 75,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Poisson',
                quantite: 4,
                unite: ''
            },
            {
                nom: 'Figue',
                quantite: 12,
                unite: ''
            },
        ],
        ustensiles: [
            '1 Canarie',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
        ]
    }
];

/* NB: Un objet respecte toujours le format
{
    propriete   : valeur
}

Ou, la valeur peut-être de plusieurs types:

{
    unBooleen: true,
    unNombre: 18,
    unString: 'Je suis en string',
    unObjet: {
        propriete: valeur
    },
    unTableau: [
        'Matthieu', 'Marc', 'Luc', 'Hugo', 'Jean'
    ]
}

*/


/*
AJOUTER UN ELEMENT DANS UN TABLEAU

*/

var couleurs= ['Rouge', 'Jaune','Vert'];
console.log(couleurs);

couleurs.push('Bleu'); //Ajoute à la fin du tableau.
console.log(couleurs);

couleurs.unshift('Orange'); //Ajoute au début.
console.log(couleurs);


/*
SORTIR UN ELEMENT DU TABLEAU
*/

/*
La fonction pop() supprime le dernier élément d'un tableau et retourne cet element.
 */

var monDernierElement = couleurs.pop();
console.log(couleurs);
console.log(monDernierElement);

/*
La même chose est possible avec le premier élément en utilisant: shift().
La fonction splice () vous permet de faire sortir un ou
plusieurs éléments du tableau.
*/

































