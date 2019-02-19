document.getElementById('pendu').addEventListener('click', pendu)

function pendu() {
    let wordHidden = ["J", "E", "R", "R", "O", "M", "E"];
    let wordFound = [" ", " ", " ", " ", " ", " ", " "];
    let letter;
    
    startPendu ();

    function startPendu() {
        letter = window.prompt ('Choisis une lettre').toUpperCase();
        guessLetter();
    }

    function verif() {
        if (wordHidden.toString() == wordFound.toString()) {
            alert ('gg no re');
            return;
        }
        else {
            startPendu();
        };
    }

    function guessLetter() {
        if (letter === "J") {
            wordFound[0] = "J";
            alert (wordFound);
            verif();
        }
        else if (letter === "E") {
            wordFound[1] = "E";
            wordFound[6] = "E";
            alert(wordFound);
            verif();
        }
        else if (letter === "R") {
            wordFound[2] ="R";
            wordFound[3] ="R";
            alert(wordFound);
            verif();
        }
        else if (letter === "O") {
            wordFound[4] ="O";
            alert(wordFound);
            verif();
        }
        else if (letter === "M") {
            wordFound[5] = "M";
            alert(wordFound);
            verif();
        }
        else {
            alert('Tu as glissé?');
            startPendu();
        };
    }
}