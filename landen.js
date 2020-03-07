const prompt = require('prompt-sync')();

const landen=[];
let naam=prompt('geef land naam');

while(naam!="stop"){

    landen.push({
        Naam: naam,
        oppervlakte: Number(prompt('oppervlakete: '))
       
    }), naam=prompt('geef land naam')
}

// gemiddelde oppervlakten

som=0;
for (const land of landen) {
    som+=land.oppervlakte;
    }

gemiddelde=som/landen.length;
console.log("gemiddlede oppervlaakt is :", gemiddelde);

// landen kleinder dan gemiddelde

for (const land of landen) {
    if (land.oppervlakte<gemiddelde){
        console.log(`${land.Naam} ${land.oppervlakte}`)
    }
}
// namen en oppervlakte
for (const land of landen) {
    if (land.oppervlakte>=gemiddelde){
        console.log(`${land.Naam} ${land.oppervlakte}`)
    }
}