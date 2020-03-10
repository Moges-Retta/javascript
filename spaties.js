document.getElementById("textvak").onkeyup=function(){

    document.getElementById("spaties").innerText=this.value.split(" ").length-1;
}