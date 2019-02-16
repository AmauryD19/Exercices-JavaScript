/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.substring(4, 5);
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();   
}
var IsString = function (texte) {
    return typeof texte === "string";
}

var AfficherExtensionString = function (texte) {
    return texte.substr(texte.lastIndexOf('.') + 1);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y); /*Math.pow (valeur, exposant)*/
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre); /*Math.abs = valeur absolue de (nombre)*/
}
var valeurAbsolueArray = function (array) {
    for (i=0; i<array.length; i++) {
        array[i]= Math.abs(array[i]); 
    }
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * (Math.pow(rayon, 2))); /*Math.round = valeur arrondie à l'entier le plus proche*/
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2)); /*Math.sqrt racine carrée d'un nombre*/
}
var calculIMC = function (poids, taille) {
    tailleSquare= Math.pow(taille, 2);
    return Number(((poids)/(tailleSquare)).toFixed(2));
}
