document.getElementById("nom").addEventListener("onkeypress", dialogue);

function dialogue() {
    name = document.getElementById("nom").value;
    alert(name);
}