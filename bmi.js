const prompt= require("prompt-sync")(); 
 let Naam=prompt('geef uw naam');
 personen=[];
while(Naam!="stop"){
personen.push ({naam:Naam,
        weight:Number(prompt('geef uw weight')),
        length:Number(prompt('geef uw lengte'))});
        Naam=prompt('geef uw naam');
}
for (const person of personen){
    console.log(person.naam,'BMI=',person.weight*100/(person.length*person.length));
}

