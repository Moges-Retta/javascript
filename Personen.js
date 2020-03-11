const prompt=require('prompt-sync')();

function naamLengte(naam){
    NamenEnLengte=[];
    while(naam!="stop"){
        NamenEnLengte.push(
            {Naamen:naam,
            Lengten:Number(prompt("geef lengte: "))});
        naam=prompt("geef naam: ")
    }
    return NamenEnLengte;
}
// klienste en grootste
NamenEnLengte=naamLengte(prompt("geef naam: "));

function watIsMin(NamenEnLengte){
return NamenEnLengte.map(lengte=>lengte.Lengten)
.reduce((klien,getal)=>{if(klien<getal) return klien; return getal;})
}

function watIsMax(NamenEnLengte){
return NamenEnLengte.map(lengte=>lengte.Lengten)
.reduce((grootste,getal)=>{if(grootste>getal) return grootste; return getal;})
}


console.log("Wat is min: ",watIsMin(NamenEnLengte))
console.log("wat is max: ",watIsMax(NamenEnLengte))

NamenEnLengte.filter(persoon=>persoon.Lengten===watIsMin(NamenEnLengte))
.forEach(persoon=>console.log(`Kleinste persoon is : ${persoon.Naamen}:${persoon.Lengten}`))
NamenEnLengte.filter(persoon=>persoon.Lengten===watIsMax(NamenEnLengte))
.forEach(persoon=>console.log(`Grootste persoon is : ${persoon.Naamen}:${persoon.Lengten}`))


/*console.log(NamenEnLengte.reduce(
    (kleinste, getal)=> {if (kleinste < getal) return kleinste; return getal;}));*/

/*
for(naamLengte of NamenEnLengte){
    if(naamLengte.Lengten>max){
        max=naamLengte.Lengten;
    } 
    if(naamLengte.Lengten<min){
        min=naamLengte.Lengten;
    } 
}
if(min!=max){
    console.log('Min is', min);
    console.log('MAX is', max);
}else{ prompt( "min = max", max)};

for(naamLengte of NamenEnLengte){
    if(naamLengte.Lengten==min){
        console.log("Min lengte is van",naamLengte.Naamen)
    }
    if(naamLengte.Lengten==max){
        console.log("Max lengte is van",naamLengte.Naamen)
    }
}
*/


