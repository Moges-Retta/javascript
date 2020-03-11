countKlinker=0;
klinkers=["a","e","i","o","u"];
document.getElementById("klinkers").onkeyup=function(){
    input_=this.value;
    if(klinkers.includes(input_[input_.length-1])===true){countKlinker+=1;}
    document.getElementById("checkKlinker").innerText=countKlinker;
}

/*"use strict";
document.getElementById("klinkers").onkeyup = function () {
let aantalKlinkers = 0;
for (const teken of this.value) {
if ("aeiou".includes(teken)) {
aantalKlinkers++;
}
}
document.getElementById("checkKlinker").innerText = aantalKlinkers;
};*/