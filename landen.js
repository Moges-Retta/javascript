const prompt = require('prompt-sync')();

const landen=[];
let naam=prompt('geef land naam: ');

while(naam!="stop"){

    landen.push({
        Naam: naam,
        oppervlakte: Number(prompt('oppervlakete: '))     
    }), naam=prompt('geef land naam: ');
}

landenOppervlakte(landen)

function landenOppervlakte(landen) {
    som = 0;
    for (const land of landen) {
        som += land.oppervlakte;
    }
    if (landen.length != 0) {
        gemiddelde = som / landen.length;
        console.log("gemiddlede oppervlaakt is :", gemiddelde);
    }
    for (const land of landen) {

        if (land.oppervlakte < gemiddelde) {
            console.log(`${land.Naam} ${land.oppervlakte}`) // landen kleinder dan gemiddelde
        }

        if (land.oppervlakte >= gemiddelde) {
            console.log(`${land.Naam} ${land.oppervlakte}`) // namen en oppervlakte
        }
    }

}

