"use strict"

/*let i=1;

document.getElementById("button").onclick=function(){
    do{
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+i);
const textNode = document.createTextNode(date); 
const body=document.querySelector("body");
body.appendChild(textNode);
const input=document.createElement("input");
body.appendChild(input);
i+=1;
}while(i<=10)
}
*/
let i = 1;
while (i <= 10) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + i);
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow();
    const td = tr.insertCell();
    td.innerText = date;
    const td2 = tr.insertCell();
    td2.appendChild(document.createElement("input"))
    i+=1;
}
//td2.innerText=document.createElement("input");

