document.getElementById("image1").addEventListener("mouseover", borderOn);

function borderOn() {
    document.getElementById("image1").style.border ="3px solid red";
}

document.getElementById("image1").addEventListener("mouseout", borderOff);

function borderOff() {
    document.getElementById("image1").style.border ="";
}