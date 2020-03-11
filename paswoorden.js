document.getElementById("paswoord").onkeyup=function (){
    //const password = document.getElementById("paswoord").value;
    const paswordSpan=document.getElementById("paswoordFeedback");
    const password=this.value;
    paswordSpan.innerText=
    password.length>=6 ? "OK":"Te kort";
    /*
    if(password.length>=6){
        paswordSpan="Ok"
    } else{        
        paswordSpant="Te koort"
    }*/
}
document.getElementById("herhaal").onblur=function(){

    const herhaalPaswordSpan=document.getElementById("herhaalFeedback");
    herhaalPaswordSpan.innerText=this.value===document.getElementById("paswoord").value? 
        "OK":
        "Verschilt van password";

}