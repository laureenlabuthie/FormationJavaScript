// LES CONDITIONS

var majoriteLegaleFr = 18;

if(19 >= majoriteLegaleFr) {

    /*
    Comme 19 est bien supérieur à 18 (majoriteLegaleFr);
    alors les instructions de ma conditions sont executées.
    Ce qu'il y a entre les accolades.
    
    */
   alert('Bienvenue !');

}

var majoriteLegaleFr = 18;

if(14 >= majoriteLegaleFr) {

    /*
    Comme 14 est bien inférieur à 18 (majoriteLegaleFr);
    alors les instructions de ma conditions ne sont pas executées.
    
    
    */
   alert('Bienvenue !');

} else if ( 18 == majoriteLegaleFr) { // Le ELSE IF N'EST PAS OBLIGATOIRE
/*
Comme 18 est = majoriteLegaleFr,
la condition s'execute !

*/
alert ("C'est un peu juste non ?!");

} else { // Le ELSE N'EST PAS OBLIGATOIRE

/*
Si aucune des conditions si dessus n'ont été validés, 
alors je rentre dans le "else".

*/
alert("Va voir chez Google si j'y suis...")
}

/*
EXERCICE
Créer une fonction permettant de vérifier l'âge d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue,
sinon, je fais une redirection sur Google après lui avoir signalé le soucis.


*/


// 1 creer 1 fonction
/*
function age() {

// 2 demander l'age via un prompt
var age = parseInt(
    prompt("Bonjour" + ", Quel âge as-tu ?", 'Votre âge')
    );
console.log(age);
console.log(typeof age);

// 3 mettre une majoriteLegaleFr
var majoriteLegaleFr = 18;

if(age >= majoriteLegaleFr) {

   alert('Bienvenue !');

}

// 4 redirection si la majorité légale n'est pas respectée

 if ( age < majoriteLegaleFr) {

alert("Nous allons vous rediriger vers une autre page...");

}

 window.location.replace("http://exemple.com");

}

age(); //RESULTAT GOOD

// CORRECTION 

// 1 créer une fontion pour vérifier la majorité d'un utilisateur
const majoriteLegaleFr = 18;
function monUtilisateurEstMajeur(age) {

    if(age >= 18){
        return true;
    } else{
return false;

    }
}

// 2 Je demande l'âge de l'utilisateur

const age = parseInt(
    prompt("Bonjour, Quel âge avez-vous ?","Saisissez votre âge")
);

// 3 Vérification de l'âge (condition) 
if(monUtilisateurEstMajeur(age2) ) {     // condition dans la fonction
alert("Bienvenue sur mon site !");

} else {

// 4 Redirection
alert("Vous devez être majeur pour accéder à ce site.");
document.location.href = "https://google.fr";
} */

/*
LES OPERATEURS DE COMPARAISON
*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*
L'opérateur de comparaison "==" signifie: Egal à.
Il permet de vérifier que 2 variables sont identiques. 

L'opérateur de comparaison "===" signifie: strictement égal à.
Il va comparer la valeur, mais aussi le type !

exemples:
if(14== "14") {} = true
if(14=== "14") {} = false
if(14===14) {} = true


L'opérateur "!=" : différent de.
L'opérateur "!==" : strictement différent de.

exemples:
if(12 != 14) {} = true
if(12 !== "12") {} = true ; ici, 12 est bien différent de 12
à cause du type.


*/


/* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

//1 fonction

function seConnecter(email1, mdp1) {

    var email =(
    prompt("Bonjour!","Saisissez votre adresse email")
    
    );

    var mdp =(
        prompt("Saisissez votre mot de passe")
    );

    if(email1 === email && mdp1 === mdp){
        
         alert("Bienvenue !");

    } else{

alert("Email ou mot de passe incorrect");

    }
}

seConnecter();


// CORRECTION 

// -- 1. Demander à l'utilisateur son email / mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la Base de donnée.

// If imbriqué...
if ( email === emailPrompt ) {
    if(mdp === mdpPrompt) {
        alert("Bienvenue " + emailPrompt + " !");
    }
}

// Une seule condition
if ( email === emailPrompt && mdp === mdpPrompt ) {
    // -- 3. Tous est ok, l'utilisateur est authentifié
    alert("Bienvenue " + emailPrompt + " !");
} else {
    // -- 4. Erreur au niveau de l'authentification
    alert("ATTENTION, email / mdp incorrect.");
}

// -- Avec les fonctions
function connexion( emailUser, mdpUser ) {
    if ( email === emailUser && mdp === mdpUser ) {
        return true;
    } else {
        return false;
    }
}

if ( connexion( emailPrompt, mdpPrompt ) ) {
    alert("Bienvenue " + emailPrompt + " !");
} else {
    alert("ATTENTION, email / mdp incorrect.");
}






















