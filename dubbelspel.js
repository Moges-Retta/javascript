//"use strict"
/*const InvoerVaaks=document.getElementsByTagName("input");
for (const InvoerVaak of InvoerVaaks) {
    InvoerVaak.onblur = function () {
        if (this.value === "") {
            document.getElementById("error").innerText = "error vak is leeg"
        };
    }
}*/

"use strict";
const foutDiv = document.getElementById("fout");
for (const input of document.querySelectorAll("#speeler input")) {
    input.onblur = function () {
        foutDiv.style.display = this.value === "" ? "block" : "";
    };
}
