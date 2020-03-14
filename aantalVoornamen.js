"use strict"
const naamArray=[];
let i=0;
document.getElementById("Versturen").onclick=function(){
    const li = document.createElement("li");
    li.dataset.value="1";
    const nieuweNaam=document.getElementById("naam").value;
    // eerste element van naamArray
    if(i===0){
        arrayInvullen(naamArray,nieuweNaam)
    } else{   //voeg de rest elementen van naamArray toe
        let teller=0;
        for ( const naam of naamArray) {
            console.log(naam)
            console.log(nieuweNaam)
            if(naam!=null && nieuweNaam!=null){
                if(naam.localeCompare(nieuweNaam)!==0){// 0: gelijk
                    teller+=1;                
                } 
            };
        }
        if(teller===naamArray.length){//nieuweNaam is uniek
            arrayInvullen(naamArray, nieuweNaam);
        }else {
            naamCount(nieuweNaam)
        }
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
            td2.id=nieuweNaam;
            li.innerText=nieuweNaam;
            naamArray[i]=nieuweNaam;
}
/*
function naamVergelijk(naam1,naam2){
    let count=0;
    let gelijk;
    if(naam1.length===naam2.length){
        for (let volgNummer=0;volgNummer!==naam1.length;volgNummer++){
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
*/
function naamCount(naam) {
        const rij=document.getElementById(naam);
        rij.innerText=parseInt((rij.innerText), 10) + 1;   
}