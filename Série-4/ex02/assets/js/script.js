ancre = document.getElementsByTagName("a");

ancre[0].addEventListener("click", showText);

function showText() {
    document.getElementById("texte").style.display ="inline";
}

ancre[1].addEventListener("click", hideText);

function hideText() {
    document.getElementById("texte").style.display ="none";
}