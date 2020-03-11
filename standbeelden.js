"use strict";

document.getElementById("isHetWeekend").onclick = function () {
    const dagInWeek = new Date().getDay(); 
    document.getElementById("weekend").innerText =
        dagInWeek === 6 || dagInWeek === 0 ? "Ja" : "Nee";
};

function toonStandbeeld() { 
    //document.getElementById("afbeelding").src = `${this.id}.jpg`;
    const img = document.getElementById("afbeelding");
    img.title = this.dataset.plaats; 
    img.src = `${this.dataset.foto}.jpg`;
}

/*document.getElementById("vrijheidsbeeld").onclick=toonStandbeeld; 
document.getElementById("moederland").onclick=toonStandbeeld; 
document.getElementById("mannekepis").onclick=toonStandbeeld;*/

document.querySelectorAll("#standbeelden a")
.forEach(hyperlink => hyperlink.onclick = function () { 
document.getElementById("afbeelding").src = `${this.id}.jpg`;
});

for (const hyperlink of document.querySelectorAll("#standbeelden a")) {
    hyperlink.onclick = toonStandbeeld;
};
/*
const hyperlinks = document.getElementsByTagName("a"); 
for (const hyperlink of hyperlinks) { 
    hyperlink.onclick = toonStandbeeld;
};    
*/
