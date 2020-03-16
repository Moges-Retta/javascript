"use strict"
const vanLinks=document.getElementById("links");
const vanRechts=document.getElementById("rechts");
const eenVanLinks=document.getElementById("eenNaarLinks");
const eenVanRechts=document.getElementById("eenNaarRechts");
const allesNaarLinks=document.getElementById("allesNaarLinks");
const allesNaarRechts=document.getElementById("allesNaarRechts");

vanLinks.onchange=function(){
    eenVanRechts.disabled=false;   
    allesNaarRechts.disabled=false;
}

eenVanRechts.onclick=function(){
    const gekozenOption=vanLinks.options[vanLinks.selectedIndex];
    vanLinks.remove(vanLinks.selectedIndex)

    const option = document.createElement("option");
    option.innerText=gekozenOption.innerText;
    vanRechts.appendChild(option)
    if(vanRechts.options.length>0){
        eenVanLinks.disabled=false; 
    }
}

allesNaarRechts.onclick=function(){
    
    for(const option of vanLinks.options){
        const optionRechts = document.createElement("option");
        optionRechts.innerText=option.innerText;
        vanRechts.appendChild(optionRechts)
    }
    const length = vanLinks.options.length;
    for (let i = length-1; i >= 0; i--) {
        vanLinks.options[i] = null;
    }
    allesNaarRechts.disabled=true;
    eenVanRechts.disabled=true; 
    eenVanLinks.disabled=false; 
    allesNaarLinks.disabled=false; 
}

eenVanLinks.onclick=function(){
    const gekozenOption=vanRechts.options[vanRechts.selectedIndex];
    vanRechts.remove(vanRechts.selectedIndex)

    const option = document.createElement("option");
    option.innerText=gekozenOption.innerText;
    vanLinks.appendChild(option)
}

allesNaarLinks.onclick=function(){
    
    for(const option of vanRechts.options){
        const optionLinks = document.createElement("option");
        optionLinks.innerText=option.innerText;
        vanLinks.appendChild(optionLinks)
    }
    const length = vanRechts.options.length;
    for (let i = length-1; i >= 0; i--) {
        vanRechts.options[i] = null;
    }
    allesNaarLinks.disabled=true;
    eenVanLinks.disabled=true; 
}
