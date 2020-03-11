<<<<<<< HEAD
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
=======
document.querySelectorAll("#landen a").forEach(hyperlink=>hyperlink.onclick = 
    function(){
        document.getElementById("info").innerText =
        `De hoofdstad van ${this.dataset.land} is ${this.dataset.hoofdstaad}, de oppervlakte is ${this.dataset.oppervlaktte}`
    });

>>>>>>> 9fb905efdd4eb1bf9cc4dbd2bbf6ee7410507131
