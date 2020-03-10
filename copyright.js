'use-strict';
const vdabHyperlink = document.getElementById("vdab");
console.log(vdabHyperlink.href);
const vandaag = new Date();
const jaar=vandaag.getFullYear();
const jaarSpan = document.getElementById('jaar');
jaarSpan.innerText=jaar;
//console.log(jaarSpan.innerText);
// korter
document.getElementById('jaar').innerText=new Date().getFullYear();
console.log(jaarSpan.innerText);

