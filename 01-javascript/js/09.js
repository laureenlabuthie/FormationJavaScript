/*----------------
    LES BOUCLES
  ---------------*/
  
/*
Pour i = 0 ; Tant que i est strictement
inférieur ou = à 10; alors j'incrémente i de 1 (avec ++)

*/  

/*for (let i = 0 ; i <= 10 ; i++) {
document.write( '<p>Instruction executée : <strong>' + i + '</strong></p>');

}

document.write('<hr>'); 

let j = 0;
/*
Tant que j est inférieur à 10 ;
j'execute ma boucle.
*/
/*while (j <= 10) {

document.write( '<p>Instruction executée : <strong>' + j + '</strong></p>');
j++; // ATTENTION A NE PAS OUBLIER L'INCREMENTATION !

}

document.write('<hr>');


/*----------------------------
        EXERCICE
------------------------------*/

/*const Prenoms = ['Jean', 'Marc','Matthieu','Paul','Luc','Hugo','Jacques'];



/*----CONSIGNE--------------------------------------------------------

Grâce à une boucle FOR ou autre..., affichez la liste des prénoms 
du tableau ci-dessus
dans la console, ou sur votre page.

----------------------------------------------------------------------*/

/*for (let i = 0  ; i < Prenoms.length ; i++ ) {
    document.write( '<p>Instruction executée : <strong>' + Prenoms[i] + '</strong></p>')
}

document.write('<hr>'); //GOOD


//CORRECTION

// Automatique avec une boucle dans la console

//for (let i = 0 ; i <= 6 ; i++) {
//console.log(Prenoms[i]);


}

//Variante, calcul automatique de la dimension du tableau.
/*console.log('--------');
for(let i= 0; i < Prenoms.lenght ; index++) {
 console.log(Prenoms[i] );

}*/

/*---------------------------------------------------------------------------

            EXERCICE ADDITION

Créer un tableau qui contient des valeurs suivantes: 1,2,3,4,5,6,7,8,9
Faire une boucle qui permet d'additionner toutes ces valeurs.

1. Prendre chaque élément séparément.
2. Additionner le 1 avec le 2 et ainsi
de suite...

-----------------------------------------------------------------------------*/

/*nb1 = 10;
nb2 = 5;

/*
L'ADDITION
*/

//resultat = nb1 + nb2;
//console.log("L'addition de nb1 et nb2 = " + resultat);


/*const addition = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let resultat = 0;

for (let i=0; i< addition.length; i++) {

resultat = resultat + addition[i];

// Ou  resultat += addition[i];


}

console.log(resultat);
//EXERCICE BON






/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contetient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/

/*const acteurs = ['Zendaya', 'Chadwick Boseman', 'Michael B.Jordan'];
const quantieme = ['Premier', 'Deuxième', 'Troisième']; //Bonus


for (let i = 0 ; i < acteurs.length ; i++ ) {

    document.write( '<p>Le numero '  + [i+1] + ' est <strong>' + acteurs[i] + '</strong></p>')

    document.write( '<p>Le '  + quantieme [i] + ' est <strong>' + acteurs[i] + '</strong></p>') //BONUS
}

document.write('<hr>'); 


/*
    EXERCICE :

    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/


const month =(new Date).getMonth();
console.log(month);


const months = ['Janvier','Fevrier', 'Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];

for (let i = 0 ; i < months.length ; i++ ) {
alert(  [i] + ' pour ' + months[i] );



}

console.log(months[month]);





