/*'use strict';
function hoeLaatIsHet(){
    document.getElementById("nu").innerText=new Date().toLocaleTimeString();
}
document.getElementById('zegEens').onclick=hoeLaatIsHet;*/

"use strict"
document.getElementById("zegEens").onclick = function() { 
document.getElementById("nu").innerText = new Date().toLocaleTimeString();
};