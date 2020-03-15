"use strict"
const naamArray = [];
let i = 0;
document.getElementById("Versturen").onclick = function () {

    const nieuweNaam = document.getElementById("naam").value;
    // eerste element van naamArray
    if (i === 0) {
        arrayInvullen(naamArray, nieuweNaam)
    } else {   //voeg de rest elementen van naamArray toe
        let teller = 0;
        for (const naam of naamArray) {
            if (naam != null && nieuweNaam != null) {
                if (naam.localeCompare(nieuweNaam) !== 0) {// 0: gelijk
                    teller += 1;
                }
            };
        }
        if (teller === naamArray.length) {//nieuweNaam is uniek
            arrayInvullen(naamArray, nieuweNaam);
        } else {
            naamCount(nieuweNaam)
        }
    }

    document.getElementById("naam").value = "";
    document.getElementById("naam").focus();
    i += 1;

}


function arrayInvullen(naamArray, nieuweNaam) {
    const li = document.createElement("li");
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow();
    const td = tr.insertCell();
    const td2 = tr.insertCell();

    td.appendChild(li)
    td2.innerText = "1";
    td2.id = nieuweNaam;
    li.innerText = nieuweNaam;
    naamArray.push(nieuweNaam);

}

function naamCount(naam) {
    const rij = document.getElementById(naam);
    rij.innerText = parseInt((rij.innerText), 10) + 1;
}