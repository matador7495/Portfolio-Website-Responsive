let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
const sr=ScrollReveal({
    distance:'60px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text',{delay:200,origin:'top'})
sr.reveal('.home-img',{delay:400,origin:'top'})
sr.reveal('.about,.services,.cta,.resume,.contact,.copyright',{delay:200,origin:'top'})