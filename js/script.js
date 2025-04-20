
let menuAbierto = false;

function llamar() {
    let menu = document.getElementById("menu-headerId");
    let icono = document.getElementById("IconId");

    menu.classList.toggle("lista-open");
    menuAbierto = menu.classList.contains("lista-open");

    if (menuAbierto) {
        icono.querySelector("i").classList.remove("fa-bars-staggered");
        icono.querySelector("i").classList.add("fa-x");
    } else {
        icono.querySelector("i").classList.remove("fa-x");
        icono.querySelector("i").classList.add("fa-bars-staggered");
    }
}


function cerrarMenu() {
    if (menuAbierto) {
        let menu = document.getElementById("menu-headerId");
        let icono = document.getElementById("IconId");
        
        menu.classList.remove("lista-open");
        icono.querySelector("i").classList.remove("fa-x");
        icono.querySelector("i").classList.add("fa-bars-staggered");
        menuAbierto = false;
    }
}

window.addEventListener('scroll', function() {
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(cerrarMenu, 100);
});

document.addEventListener('click', function(e) {
    let menu = document.getElementById("menu-headerId");
    let icono = document.getElementById("IconId");
    
    if (!menu.contains(e.target) && e.target !== icono && !icono.contains(e.target)) {
        cerrarMenu();
    }
});


window.addEventListener("scroll", function() {
    let posy = window.pageYOffset;
    let containerHeader = document.getElementById("container-header");
    let menuLinks = document.querySelectorAll(".menu-header_link");
    let logoHeader = document.querySelector(".logo-header");
    let IconId = document.getElementById("IconId");
    let menuHeaderId = document.getElementById("menu-headerId");

    if (posy > 100) {
        containerHeader.style.backgroundColor = "white";
        containerHeader.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)"
        menuLinks.forEach(link => link.style.color = "var(--primary-color)");
        logoHeader.style.color = "var(--primary-color)";
        IconId.style.color = "var(--primary-color)";
        
        if (window.matchMedia('(max-width: 1250px)').matches) {
            menuHeaderId.style.background = "white";
        }
    } else {
        containerHeader.style.backgroundColor = "inherit";
        containerHeader.style.boxShadow = "none"
        menuLinks.forEach(link => link.style.color = "white");
        logoHeader.style.color = "white";
        IconId.style.color = "white";
        menuHeaderId.style.background = "none";
        
        if (window.matchMedia('(max-width: 1250px)').matches) {
            menuHeaderId.style.background = "inherit";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll('.progreso');
    barras.forEach(barra => {
      const width = barra.style.width;
      barra.style.width = '0';
      setTimeout(() => {
        barra.style.width = width;
      }, 800);
    });
  });
