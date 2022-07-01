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

function socials(number){
    switch(number){
        case 1:
            window.location.href="https://www.instagram.com/omargpax/";
            break;
        case 2:
            window.location.href="https://www.instagram.com/omargpax/";
            break;
        case 3:
            window.location.href="https://www.instagram.com/omargpax/";
            break;
    }
}

// img elements
var img1= document.getElementById("img-social");
var img2= document.getElementById("img-social1");
var img3=document.getElementById("img-social2");
var txtIg=document.getElementById("txt-ig");
// event listener
var btnSocial = document.getElementById("btn-social");
btnSocial.addEventListener("mouseover", func,false);
btnSocial.addEventListener("mouseout", desactivate1,false);
var btnSocial2=document.getElementById("btn-social1");
btnSocial2.addEventListener("mouseover",func1,false);
btnSocial2.addEventListener("mouseout",desactivate2,false);
var btnSocial3 = document.getElementById("btn-social2");
btnSocial3.addEventListener("mouseover",func2,false);
btnSocial3.addEventListener("mouseout",desactivate3,false);

function func(){
    img1.setAttribute("src","media/Facebook_perspective_matte.png");
    img1.style.transform="translateY(-10px)";
    img1.style.transition="transform .3s ease-in";
}
function desactivate1(){
    img1.setAttribute("src","media/Facebook_perspective_matte_s.png");
    img1.style.transform="translateY(0px)";
}

function func1(){
    img2.setAttribute("src","media/Instagram_perspective_matte.png");
    img2.style.transform="translateY(-10px)";
    img2.style.transition="transform .3s ease-in";
    txtIg.style.color="#eb138b";
}
function desactivate2(){
    img2.setAttribute("src","media/Instagram_perspective_matte_s.png");
    img2.style.transform="translateY(0px)";
    txtIg.style.color="black";
}

function func2(){
    img3.setAttribute("src","media/Twitter_perspective_matte.png");
    var tr = img3.style.transform="translateY(-10px)";
    img3.style.transition="transform .3s ease-in";
}
function desactivate3(){
    img3.setAttribute("src","media/Twitter_perspective_matte_s.png");
    img3.style.transform="translateY(0px)";
}