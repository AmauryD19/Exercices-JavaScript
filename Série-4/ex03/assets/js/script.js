color = document.getElementsByClassName("color");

color[0].addEventListener("click", greenText);
color[1].addEventListener("click", redText);
color[2].addEventListener("click", blueText);

function greenText() {
    document.getElementById("texte").style.color ="green";
}

function redText() {
    document.getElementById("texte").style.color ="red";
}

function blueText() {
    document.getElementById("texte").style.color ="blue";
}