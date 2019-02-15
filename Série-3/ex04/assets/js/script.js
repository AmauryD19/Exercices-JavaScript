button = document.getElementsByName("button");

button[0].addEventListener("click", resetForm);

function resetForm() {
    document.getElementById("nom").value ="";
    document.getElementById("prenom").value ="";
    document.getElementById("ville").value ="";
}