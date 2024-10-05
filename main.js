const navbar = document.querySelector(".navbar");
const navlinks = document.querySelectorAll(".nav-link-cus");
const navbarTogglerCus = document.querySelector(".navbar-toggler-cus");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled");
        navbarTogglerCus.classList.add("color-p")
        navbarTogglerCus.classList.remove("color-s")
        navlinks.forEach((nl)=>{
            nl.classList.remove("color-s");
            nl.classList.add("color-p");
        })
    } else {
        navbar.classList.remove("nav-scrolled");
        navbarTogglerCus.classList.remove("color-p")
        navbarTogglerCus.classList.add("color-s")
        navlinks.forEach((nl)=>{
            nl.classList.add("color-s");
            nl.classList.remove("color-p");
        })
    }
})