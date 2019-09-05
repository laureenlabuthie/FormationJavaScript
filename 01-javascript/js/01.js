//alert('Mon fichier JS fonctionne !');

// deux slash commentaire sur une ligne

/* commentaire sur plusieurs
lignes

*/

// 1 : Déclarer une varible JS

var prenom;

// 2 : Affecter une valeur à la variable "prénom"

prenom = 'Laureen';

// 3 : Afficher la valeur de ma variable dans la console

console.log(prenom); //écrire de la même manière que nous l'avons déclarer dans le "var". car JS est sensible à la casse.
// pas d'accent dans les noms variables.




// LES TYPES DE VARIABLES

// typeof me permet de connaître le type de la valeur de ma variable.

console.log(typeof prenom); // Ma variable "prnom" contient une chaine de caractère (string).

// Déclaration et affectation d'un nombre sur une seule ligne, pas guillemets ou de quotes
var age = 21;

// Connaître son type
console.log(age);
console.log(typeof age);

// Les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// Les Booléens (vrai/faux)

var unBooleen = false; // or true
console.log(unBooleen);
console.log(typeof unBooleen);

// Les constantes

/* la declaration "const" me permet de créer une
constante accessible UNIQUEMENT en lecture.
Sa valeur ne pourra pas être modifiée par des 
réaffectations ultérieures.*/

const host = "localhost";
const user = "root";
const password = "mysql";

// je ne peux pas faire cela: 
// user = "Laureen";
// Uncaught TypeError: Assignment to constant variable.

var unNombre = '24';
console.log(unNombre);
console.log(typeof unNombre); // Petite subtilité, "unNombre" est ici de type "string" à cause des quotes,
// au moment de l'affection.


// Pour convertir un nombre entier (Integer ou Int)
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Pour convertir un nombre à virgule (Float)
unNombre = '12.55';
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


/* LA PORTEE DES  VARIABLES*/

/* Les variables déclarées directement à la racine du fichier JS sont appelées: 
variables GLOBALES.

Elles sont disponible dans l'ensemble de votre doc, y compris dans les fonctions.

Les variables déclarées à l'intérieur d'une fonction sont appelées:
variables LOCALES.

Elles sont disponible UNIQUEMENT dans le scope de la fonction.

 */
