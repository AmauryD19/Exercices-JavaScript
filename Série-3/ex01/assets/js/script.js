document.getElementById("image1").addEventListener("mouseover", change);

function change(){
    document.getElementById("image1").src ="assets/img/image1_2.jpg";
}

document.getElementById("image1").addEventListener("mouseout", rechange);

function rechange() {
    document.getElementById("image1").src ="assets/img/image1.jpg";
}