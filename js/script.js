
//menu
function llamar() {
    let menu = document.getElementById("menu-headerId");
    let icono = document.getElementById("IconId");

    menu.classList.toggle("lista-open");

    if (menu.classList.contains("lista-open")) {
        icono.querySelector("i").classList.remove("fa-bars-staggered");
        icono.querySelector("i").classList.add("fa-x");
    } else {
        icono.querySelector("i").classList.remove("fa-x");
        icono.querySelector("i").classList.add("fa-bars-staggered");
    }
}



window.addEventListener("scroll", function() {
    let posy = window.pageYOffset;
    let containerHeader = document.getElementById("container-header");
    let menuLinks = document.querySelectorAll(".menu-header_link");
    let logoHeader = document.querySelector(".logo-header");
    let IconId = document.getElementById("IconId");
    let menuHeaderId = document.getElementById("menu-headerId");

    if (posy > 100) {
        containerHeader.style.backgroundColor = "white";
        menuLinks.forEach(link => link.style.color = "var(--primary-color)");
        logoHeader.style.color = "var(--primary-color)";
        IconId.style.color = "var(--primary-color)";
        
        // Solo aplicar estos cambios si la pantalla es <= 1250px
        if (window.matchMedia('(max-width: 1250px)').matches) {
            menuHeaderId.style.background = "white";
        }
    } else {
        containerHeader.style.backgroundColor = "inherit";
        menuLinks.forEach(link => link.style.color = "white");
        logoHeader.style.color = "white";
        IconId.style.color = "white";
        
        // Solo aplicar estos cambios si la pantalla es <= 1250px
        if (window.matchMedia('(max-width: 1250px)').matches) {
            menuHeaderId.style.background = "inherit";
        }
    }
});