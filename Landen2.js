"use strict";

for (const hyperlink of document.querySelectorAll("#landen a")) {
    hyperlink.onclick = 
    function(){
        document.getElementById("hoofdstaad").innerText =this.dataset.hoofdstaad;
        document.getElementById("oppervlaktte").innerText =this.dataset.oppervlaktte;    
    };
}

/*document.querySelectorAll("#landen a").forEach(hyperlink=>hyperlink.onclick = 
    function(){
        console.log(`${hyperlink.dataset.land}`)
        document.getElementById("info").innerText =
        `De hoofdstad van ${hyperlink.dataset.land} is ${hyperlink.dataset.hoofdstaad}, 
        de oppervlakte is ${hyperlink.dataset.oppervlaktte}`
    });*/