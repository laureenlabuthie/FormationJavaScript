/*

LES FONCTIONS

*/

/*
Les instructions ne seront executées que lorsque
ma fonction sera appelée.

*/

function bonjour() {
    // instruction JS
    alert('Bonjour !')
    // instruction JS
}


/*
J'execute ma fonction, et je 
déclenche ses instructions.

*/

bonjour();

/*
Ici, notre fonction "ditBonjour" définie 2 arguments.
Au moment de l'executer nous affecterons une valeur à chaque
arguments. Ainsi, prenom sera égal à "Laureen" et nom egal à "LABUTHIE".

*/


function ditBonjour( prenom , nom ) {

    console.log(prenom + ' ' + nom);
    document.write(
        'Bonjour <strong>'
        + prenom
        +' '
        + nom
        + '</strong> !<br>'
    );
}

ditBonjour( 'Laureen', 'LABUTHIE');


/*
EXERCICE:

Créez une fonction permettant d'effectuer l'addition
de deux nombres (nb1 et nb2).

*/
 


function addition(nb1 , nb2) {
    console.log (nb1+nb2)

};

addition(10, 30);


//Correction

function pomme(nb1, nb2) {
var resultat = nb1 + nb2; //55
return resultat; // c'est le mot "return" te fais sortir le résultat de la fonction.
                

};

var resultatDeMaFonction = pomme(50, 5);
console.log(resultatDeMaFonction);

/*
EXERCICE:

Créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT.
Sachant que le taux de la TVA peut varier: 5.5% 8.5% 10% 20%.
Retourner le montant TTC.

*/
HT= 100;

tva0=1.055;
tva1=1.085;
tva2=1.1;
tva3=1.2;

//Angelique:

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (100, 1.055);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (100, 1.085);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (100, 1.1);
console.log(resultat);

function calcul (ht, tva){
    var resultat = (ht * tva)
    return resultat;
}
var resultat = calcul (100, 1.1);
console.log(resultat);

//Correction:

function calculTva(montantHt, tauxTva = 8.5) {
return montantHt + (montantHt * (tauxTva / 100) );
// return montantHt * tauxTva; ou tauxTva = 1.085 pour 8.5%...

}

    var montantTtc1 = calculTva(10);
    var montantTtc2 = calculTva(10, 5.5);
    var montantTtc3 = calculTva(10, 20);

    console.log(montantTtc1);
    console.log(montantTtc2);
    console.log(montantTtc3);


    /*
    EXERCICE:

    Créez une fonction permettant d'effectuer la conversion
    d'un montant en EURO, en DOLLARS US. Et inversement.
    
    */

function dollars (euro) {
return euro * 1.1035

};

function euro (dollars) {
    return dollars * 0.9061
    
    };

var euro1 = dollars (100);
console.log (euro1);

var dollars1 = euro (90);
console.log (dollars1);


//CORRECTION: 

function convertEurToUsd(montantEuro, tauxConversionUsd = 1.1035) {
return montantEuro * tauxConversionUsd;
};

var montantEur = 20;
var montantUsd = convertEurToUsd(montantEur);
console.log(
    montantEur
    + ' € en dollars donne: '
    + montantUsd
    + '$'
);













