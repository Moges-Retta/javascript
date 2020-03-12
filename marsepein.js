"use strict"
/*for (const lijst of document.getElementById("ingrediënten").children) {

    lijst.onclick = function () {
        lijst.style.backgroundColor = "yellow"
        siblingFinder(lijst, "ingrediënten")

    }
}
for (const lijst of document.getElementById("werkwijze").children) {

    lijst.onclick = function () {
        lijst.style.backgroundColor = "yellow"
        siblingFinder(lijst, "werkwijze")
    }
}

function siblingFinder(nameSibling,id){
    for (const lijst2 of document.getElementById(id).children){
        if(nameSibling!==lijst2){
            lijst2.style.backgroundColor="" ;  
        }
    }
}*/
for (const lijst of document.getElementsByTagName('li')){
    lijst.onclick=function(){
        lijst.classList.add("opvallend")
        siblingFinder(lijst)
    }

}

function siblingFinder(nameSibling){
    //for (const lijst2 of document.getElementsByTagName('li')){ // if only one list from both is opvallend
        for (const lijst2 of nameSibling.parentElement.children){
        if(nameSibling!==lijst2){
            lijst2.classList.remove("opvallend")
        }
    }
}