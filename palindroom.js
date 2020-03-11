/*document.getElementById('palindroom').onblur=function(){
woord=this.value;
count=0;
for (i=0;i!=woord.length;i++){
   if(woord[i]===woord[woord.length-i-1]) {
    count+=1;
    }
}
document.getElementById("isPalindroom").innerText=
count===woord.length ?
    "palindroom":"niet palindroom";
}*/


"use strict";
document.getElementById("palindroom").onblur = function () {
let omgekeerd = "";
for (const teken of this.value) {
omgekeerd = teken + omgekeerd;
}
document.getElementById("isPalindroom").innerText = omgekeerd === this.value ?
"Dit is een palindroom." : "Dit is geen palindroom.";
};