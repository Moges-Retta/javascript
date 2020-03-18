"use strict";
leesUser();
async function leesUser() {
const response = await fetch("https://reqres.in/api/users/1");
const user = await response.json(); 
console.log("leesUser opgeroepen.");
document.getElementById("nummer").innerText = user.data.id; 
document.getElementById("voornaam").innerText = user.data.first_name;
document.getElementById("familienaam").innerText = user.data.last_name;
document.getElementById("emailAdres").innerText = user.data.email;
document.getElementById("avatar").src = user.data.avatar;
}