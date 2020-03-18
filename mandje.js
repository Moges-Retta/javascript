"use strict";

let mandje = JSON.parse(localStorage.getItem("mandjes"));

if (mandje===null){
    mandje=[];
}else{
    for(let item=0;item!=mandje.length;item++){
        const lijst = document.createElement("li");
        lijst.innerText=mandje[item];
        document.getElementById("mandje").appendChild(lijst)
    }
    document.getElementById("aantal").innerText=mandje.length;// aantal gezoken burgers
}

for (const link of document.querySelectorAll("#beschikbaar a")){
    link.onclick=function(){
        const li = document.createElement("li");
        document.getElementById("mandje").appendChild(li)
        li.innerText=link.innerText;
        const aantal=document.getElementById("aantal").innerText;
        document.getElementById("aantal").innerText=Number(aantal)+1;
        mandje.push(li.innerText)
        localStorage.setItem("mandjes", JSON.stringify(mandje))
    }
}
