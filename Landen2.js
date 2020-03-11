document.querySelectorAll("#landen a").forEach(hyperlink=>hyperlink.onclick = 
    function(){
        document.getElementById("info").innerText =
        `De hoofdstad van ${this.dataset.land} is ${this.dataset.hoofdstaad}, de oppervlakte is ${this.dataset.oppervlaktte}`
    });

