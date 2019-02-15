button = document.getElementsByTagName("button");

button[0].addEventListener("click", verif);

function verif() {
    input = document.getElementsByTagName("input");
    password = document.getElementById("motdepasse").value;
    repassword = document.getElementById("confirmation").value;

    if (repassword===password) {
        input[0].style.border ="3px solid green";
        input[1].style.border ="3px solid green";
    }
    else {
        input[0].style.border ="3px solid red";
        input[1].style.border ="3px solid red";
    }
}