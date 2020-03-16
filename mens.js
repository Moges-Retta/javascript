"use strict";
document.getElementById("toevoegen").onclick = function () {
const verkeerdeElementen=
document.querySelectorAll("input:invalid,select:invalid"); 
for (const element of verkeerdeElementen) {
document.getElementById(`${element.id}Fout`).style.display = "inline"; 
}
const correcteElementen =
document.querySelectorAll("input:valid,select:valid"); 
for (const element of correcteElementen) {
document.getElementById(`${element.id}Fout`).style.display = ""; 
}
document.getElementById("toegevoegd").style.display = 
verkeerdeElementen.length === 0 ? "inline" : "";
};