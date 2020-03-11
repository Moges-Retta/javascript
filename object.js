'use strict';
const prompt= require("prompt-sync")(); // required if code contains user input

/*const rechthoek={lengte:3,breedte:2,kleur:'rood'};
console.log(rechthoek.lengte);
console.log(rechthoek.lengte,rechthoek.breedte,rechthoek.kleur);
const rechthoeken = [ 
    { lengte: 3, breedte: 2, kleur: "rood" }, 
    { lengte: 7, breedte: 4, kleur: "groen" } 
    ];
    for (const rechthoek of rechthoeken) { 
        console.log(rechthoek.lengte, rechthoek.breedte, rechthoek.kleur); 
        } 
        */  
const rechthoeken = [];
let lengte = Number(prompt("Lengte:"));
while (lengte !== 0) {
    rechthoeken.push({
        lengte: lengte,
        breedte: Number(prompt("Breedte:")),
        kleur: prompt("Kleur:")
    });
        lengte = Number(prompt("Lengte:"))
}
for (const rechthoek of rechthoeken) { 
    console.log(rechthoek.lengte, rechthoek.breedte, rechthoek.kleur); 
    } 