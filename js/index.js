const aboutusbox = document.querySelector(".index__onas");
const ofertabox = document.querySelector(".index__oferta");
const kontaktbox = document.querySelector(".index__kontakt");
const elementsvisible = ()=>
{
aboutusbox.style.transform="translateX(0%)";
aboutusbox.style.transition="all 1s ease-in-out";

ofertabox.style.transform="translateX(0%)";
ofertabox.style.transition="all 1s  ease-in-out";

kontaktbox.style.transform="translateX(0%)";
kontaktbox.style.transition="all 1s ease-in-out";
}
window.addEventListener("load", elementsvisible);