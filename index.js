const startButton=document.querySelector(".btn-start");
startButton.onclick=function(){
    document.querySelector(".instructions").style.display="none";
    startGame=true;
  
}


let modal=document.querySelector("#myModal")
let credit=document.querySelector(".credits")
let spanClose = document.getElementsByClassName("close")[0];

credit.onclick=function(){
    modal.style.display="block"
}

spanClose.onclick=function(){
    modal.style.display="none"
}
