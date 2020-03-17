"use strict";

document.getElementById("Delen").onclick=function(){
    verbergAlleFoutMeldingen()
    let check=true;
    const getal1=document.getElementById("numerator").value;
    const getal2=document.getElementById("denomenator").value;
    
    const correcteElementen=document.querySelectorAll("input:valid");
    for(const elementen of correcteElementen){
        document.getElementById(`${elementen.id}Fout`).style.display=""
    }
    const verkerdeElementen=document.querySelectorAll("input:invalid");
    for(const elementen of verkerdeElementen){
        document.getElementById(`${elementen.id}Fout`).style.display="inline";
        check=false;
    }

    if(Number(getal2)===0){
        document.getElementById("denomenatorFout").style.display="inline"
        check=false;
    }
    
    if(check===true){document.getElementById("resultaat").innerText=getal1/getal2}
}
function verbergAlleFoutMeldingen() {
    for (const melding of document.querySelectorAll("span[class=fout]")) { 
    melding.style.display = "";
    }
}