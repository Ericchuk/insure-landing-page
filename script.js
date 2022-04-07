let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector("nav");

function hamburgerOpen(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        hamburger.style.display= "block";
        close.style.display = "none"
    }else{
        nav.style.display = "block",
        hamburger.style.display ="none",
        close.style.display = "block" 
    }
}

hamburger.addEventListener("click", hamburgerOpen);
close.addEventListener("click", hamburgerOpen);


// /function openHamburger(){
//     if(hamburgerContent.style.display === "block"){
//         hamburgerContent.style.display ="none";
//         hamburger.style.display = "block";
//         close.style.display = "none"
//     }else(
//         hamburgerContent.style.display = "block",
//         hamburger.style.display ="none",
//         close.style.display = "block" 
//     )
// }