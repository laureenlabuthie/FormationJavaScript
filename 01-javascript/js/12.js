/*--------------------------------------------------------------

                    LES EVENEMENTS 

---------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------------------

Les évènements vont me permettre de déclencher une fonction; 
c-à-d, une série d'instruction suite à une action 
de mon utilisateur.

-l'OBJECTIF: être en mesure de capture ces evenements afin d'executer une fontion.



.Les Evenements: MOUSE (souris)


click: au clic sur un élément;
dblclick: au double clic;
mouseenter: la souris passe au dessus d'un élément;
mouseleave: la souris sors de l'élément;
mouseover: au passage de la souris;


.Les Evenements: KEYBOARD (clavier)

keyup: une touche du clavier a été relachée;
keydown: une touche du clavier a été enfoncée;

.Les Evenements: WINDOW (fenêtre)

scroll: défilement de la fenêtre;
resize: redimensionnement de la fenêtre;


.Les Evenements: FORM (formulaire)

change: pour les éléments <inpu>, <select> et <texarea>;
submit: à l'envoie (soumission) du formulaire;
input: pour capter la saisie d'un utilisateur sur le champ <input>;



#######################################LES ECOUTEURS D'EVENEMENTS #############################################


Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur 
d'évènements qui se chargera de déclencher une fonction, je vais utiliser la syntaxe
suivante:

*/

const p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
 p.style.color = "red";

}

function changerLaCouleurEnNoir(){
    p.style.color = "black";

}

//p.addEventListener('mouseover', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnNoir);
p.addEventListener('click', changerLaCouleurEnRouge);