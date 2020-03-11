const uur=new Date().getHours(); 
//console.log(uur)
if(uur<12){
    document.getElementById('uur').innerText='Goede morgen'  
}
if(uur<18){
    document.getElementById('uur').innerText='Goede middag'  
}
else{document.getElementById('uur').innerText='Goede avond'}
