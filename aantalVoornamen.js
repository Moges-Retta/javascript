"use strict"
const naamArray=[];
let i=0;
document.getElementById("Versturen").onclick=function(){
    const li = document.createElement("li");
    li.dataset.value="1";
    const nieuweNaam=document.getElementById("naam").value;
    // eerste element van array
    if(i===0){
        arrayInvullen(naamArray,nieuweNaam)
    } else{   
        
        for ( const naam of naamArray) {
            console.log(naamArray)
            console.log(naam)
            console.log(naam.localeCompare(nieuweNaam))
            console.log(naamArray)
            if(naam.localeCompare(nieuweNaam)!==0){// 0: gelijk
                arrayInvullen(naamArray, nieuweNaam);
            } else {
                naamCount(naam)
            }
        };
    }
    
    
    document.getElementById("naam").value="";
    document.getElementById("naam").focus(); 
    i+=1;

}


function arrayInvullen(naamArray,nieuweNaam){
            const li = document.createElement("li");
            li.dataset.value="1";
            li.dataset.name=nieuweNaam;
            const tbody=document.querySelector("tbody");
            const tr=tbody.insertRow();
            const td=tr.insertCell();
            const td2=tr.insertCell();
            
            td.appendChild(li)
            td2.innerText=li.dataset.value;

            li.innerText=nieuweNaam;
            naamArray[i]=nieuweNaam;
}
function naamVergelijk(naam1,naam2){
    let count=0;
    let gelijk;
    if(naam1.length===naam2.length){
        for (let volgNummer=0;volgNummer!==naam1.length;volgNummer++){
            //console.log(volgNummer)
            //console.log(naam2[volgNummer])
            if(naam1[volgNummer]===naam2[volgNummer]){
                count+=1;
            }
            if (naam1.length===count){
                gelijk="true";
            } else{
                gelijk="false";        
            };
        }
    } 

    return gelijk;
}

function naamCount(naam) {
        for (const rij of document.querySelectorAll("tr")){
            console.log(rij)
            const lijst=rij.querySelector("li");
            //console.log(lijst.dataset.name)
            if(lijst.dataset.name.localeCompare(naam)===0){
            lijst.dataset.value=parseInt((lijst.dataset.value), 10) + 1;
            }
            
        }
        
    
}