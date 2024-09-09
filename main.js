const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navlinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled");
        navbarBrand.classList.add("color-p");
        navbarBrand.classList.remove("color-s");
        navlinks.forEach((nl)=>{
            nl.classList.remove("color-s");
            nl.classList.add("color-p");
        })
    } else {
        navbar.classList.remove("nav-scrolled");
        navbarBrand.classList.remove("color-p");
        navbarBrand.classList.add("color-s");
        navlinks.forEach((nl)=>{
            nl.classList.add("color-s");
            nl.classList.remove("color-p");
        })
    }
})