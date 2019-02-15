document.getElementById("nom").addEventListener("keypress", dialogue);

function dialogue() {
    name = alert(document.getElementById("nom").value);
}