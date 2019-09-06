/*

INCREMENTATION & DECREMENTATION

*/

var nb1 = 1;
nb1 = nb1 + 1;
// Ecriture simplifiée
// La même chose que nb1 = nb1 + 1; Toujours par pas de 1
nb1++;

var nb1 = 1;
nb1 = nb1 + 2;
// Ecriture simplifiée
nb1 +=2; //J'ajoute +2 à nb1 = nb1 + 2;
nb1 +=5; //J'ajoute +5 à nb1 = nb1 + 5;


// DECREMENTATION


nb1 = 1;
nb1 = nb1 - 1;
//Ecriture simplifiée
nb1--;

//Ou encore
nb1 = nb1 - 2;
//Ecriture simplifiée
nb1-=2;
nb1-=5;

// SUBTILITE

nb1 = 0;
nb1++; // nb1 = nb1 + 1;
console.log(nb1); //1

nb1 = 0;
console.log(nb1++);// 0, ici JS affiche d'abord nb1 avant de faire l'incrémentation.
console.log(nb1); //1

nb1 = 0;
console.log(++nb1); // 1, ici JS fait l'incrémentation avant d'afficher nb1.

