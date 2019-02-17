var CreationTableauLangages = function () {
    let langages = ['Html', 'CSS', 'Java', 'PHP'];
    return langages;
}

var CreationTableauNombres = function () {
    let nombres = [0, 1, 2, 3, 4, 5];
    return nombres;

}

var RemplacementElement = function (langages) {
    langages[2] = 'Javascript';
    return langages;
}

var AjoutElementLangages = function (langages) {
    langages.push('Ruby', 'Python');
    return langages; /*push = ajouter un ou plusieurs éléments en fin d' un tableau*/
}

var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1);
    return nombres; /*unshift = ajouter un ou plusieurs éléments en début d'un tableau*/
}

var SuppressionPremierElement = function (langages) {
    langages.splice(0,1);
    return langages; /*splice(index, nombre d'élément/s à retirer)*/
}

var SuppressionDernierElement = function (langages) {
    langages.splice(langages.length - 1, 1);
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux; /*split = diviser une chaîne de caractères grâce ('séparateur')*/
}

var ConversionTableauChaine = function (langages) {
    return langages.join(); /*join = créer une chaîne de caractères à partir d'un tableau*/
}

var TriTableau = function (reseaux_sociaux) {
    return reseaux_sociaux.sort(); /*sort = trier les éléments d'un tableau*/
}

var InversionTableau = function (reseaux_sociaux){
    return reseaux_sociaux.reverse(); /*reverse = inverser les éléments d'un tableau*/
}
