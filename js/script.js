document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

var ind = 0;

carousel();

function carousel(){
    var i;
    var x= document.getElementsByClassName("slide");
    for(i=0; i<x.length;i++){
        x[i].style.display="none";
    }
    ind++;
    if(ind >x.length){
        ind=1;
    }
    x[ind-1].style.display="block";
    setTimeout(carousel,5000);

}