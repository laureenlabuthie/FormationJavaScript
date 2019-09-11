/*------------------------------------------
                LE DOM

----------------------------------------------*/

/*---------------------------------------------------------------------------

Le DOM est une interface de développement en JS pour html.
Grâce au DOM , je vais être en mesure d'accéder/modifer mon code html.

L'objet du "document", c'est le point d'entrée vers mon contenu html.

Chaque page chargée dans le navigateur, a un objet "document".

-------------------------------------------------------------------------------*/

/*
- Comment puis-je faire pour récupérer les 
différentes infos de ma page web html ?

*/

/*-----------------------------------------------------------------------------------
                                document.getElementById
------------------------------------------------------------------------------------ */
/*-----------------------------------------------------------------------------------
document.getElementById() est une fonction qui va
 permettre de récupérer un élément html
à partir de son identifiant unique: ID
------------------------------------------------------------------------------------*/



const bonjour = document.getElementById('bonjour');
console.log(bonjour);


/*-----------------------------------------------------------------------------------
                                document.getElementsByClassName
------------------------------------------------------------------------------------ */
/*-----------------------------------------------------------------------------------
document.getElementsByClassName(): C'est une fonction qui va
 permettre de récupérer un ou plusieurs éléments (une liste) html
à partir de leur classe.
------------------------------------------------------------------------------------*/

const contenu = document.getElementsByClassName('contenu');
console.log(contenu);

//-- !!! Me renvoi un tableau JS avec mes éléments html. !!!


/*-----------------------------------------------------------------------------------
                                document.getElementsByTagName
------------------------------------------------------------------------------------ */
/*-----------------------------------------------------------------------------------
document.getElementsByClassName(): C'est une fonction qui va
 permettre de récupérer un ou plusieurs éléments (une liste) html
à partir de leur balise.
------------------------------------------------------------------------------------*/

const p = document.getElementsByTagName('p');
console.log(p);

// NB: querySelector document.querySelector()
/*Nous avons également le querySelector:
https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
 -------------------------------------------------------------------*/

console.log(document.querySelector('#bonjour') );
console.log(document.querySelectorAll('.contenu') );
console.log(document.querySelectorAll('p') );