//EXERCICE POUR LUNDI 9 SEPT

/*
Réaliser une fonction permettant à un internaute de:
- Saisir son prénom dans un Prompt
-Retourner à l'utilisateur: Bonjour "PRENOM", Quel âge as-tu?
-Saisir son âge
-Retourner à l'utilisateur: Tu es donc né en "ANNEE DE NAISSANCE".
-Afficher ensuite un récapitulatif dans la page:
"BONJOUR (PRENOM), tu as (AGE) !"

*/

function form( prenom , age ) {
    
    résultat = window.prompt(Bonjour , défaut);
        
};
        
      


//CORRECTION

// 1) création d'une fonction
function presentation() {


// 2) demande à l'utilisateur son prénom via un prompt
var prenom = prompt("Quel est votre prénom ?", 'Votre prenom');
console.log(prenom);

// 3) je lui demande son âge
var age = parseInt(
    prompt("Bonjour"+ prenom + ", Quel âge as-tu ?", 'Votre âge')
    );
console.log(age);
console.log(typeof age); //ParseInt = conversion d'un string en nombre

// 4) calculer l'année de naissance
var objetDate = new Date();
var dateDeNaissance = objetDate.getFullYear() - age;
alert("Tu es né en " + dateDeNaissance);

// 5) afficher le récapitulatif
document.write("Bonjour " + prenom + " tu as " + age + " ans !");

}

presentation();