// De beeld van blad is geïdentificeerd met getal 1 en steen met 2 en schaar met 3

"use strict"

const pcImage=document.createElement("img"); // om de selectie van de pc te tonen

for (const image of document.getElementsByTagName("img")) {
    image.onclick = function () {
        let pc = Math.floor((Math.random() * 3) + 1);

        // tonen de bijhorende beeld van de wilkeurige getal 
        const pics = document.querySelectorAll("img");
        for (const pic of pics) {
            if (parseInt(pic.dataset.nummer, 10) === pc) {
                pcImage.src = pic.src;
                document.querySelector("h2").appendChild(pcImage)
            }
        }

        // bepal de winnar
        let user = parseInt(this.dataset.nummer, 10);
        if (user === pc) {
            DeWinnar("Gelijk spel");
        }
        if ((user === 1 && pc === 2) || (user === 2 && pc === 3) || (user === 3 && pc === 1)) {
            DeWinnar("Ik");
        }
        if ((user === 1 && pc === 3) || (user === 2 && pc === 1) || (user === 3 && pc === 2)) {
            DeWinnar("pc");
        }
    }
}

function DeWinnar(speeler){
    document.getElementById("winnar").innerText = speeler;
}