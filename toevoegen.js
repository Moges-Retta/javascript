"use strict";
document.getElementById("toevoegen").onclick = async function () {
const user = { 
first_name: document.getElementById("voornaam").value, 
last_name: document.getElementById("familienaam").value 
};
const response = await fetch("https://reqres.in/api/users", 
{ method: "POST", body: JSON.stringify(user) });
const foutDiv = document.getElementById("fout");
if (response.ok) {
foutDiv.style.display = "none"; 
const data = await response.json(); 
document.getElementById("nummer").innerText = data.id; 
document.getElementById("toegevoegd").style.display = "block";
} else {
foutDiv.style.display = ""; 
}
};