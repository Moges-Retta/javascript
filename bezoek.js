"use strict";
let aantalbezoek=localStorage.getItem("aantalBezoeken");
if(aantalbezoek===null){
     aantalbezoek=1
}else{
    aantalbezoek=Number(aantalbezoek)+1;
}

localStorage.setItem("aantalBezoeken",aantalbezoek)

const today= new Date();
const date = today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();

localStorage.setItem("dateVisited", date);// last date van bezoek

const visitedRecords=localStorage.getItem("dateVisited");

document.getElementById("lastVisited").innerText=visitedRecords;
document.getElementById("aantalBezoeken").innerText=`${aantalbezoek} times`;