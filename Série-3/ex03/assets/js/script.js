document.getElementById("nom").addEventListener("keyup", dialogue);

function dialogue() {
    name = alert(document.getElementById("nom").value);
}