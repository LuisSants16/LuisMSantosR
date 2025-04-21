
document.querySelectorAll('.menu-header_link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que aparezca el hash en la URL

    const targetId = this.getAttribute('href').substring(1); // Quita el "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    // También puedes actualizar clases .active aquí si necesitas
  });
});

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
      containerHeader.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
      menuLinks.forEach(link => link.style.color = "var(--primary-color)");
      logoHeader.style.color = "var(--primary-color)";
      logoHeader.style.textShadow = "none";
      IconId.style.color = "var(--primary-color)";
      document.body.classList.add("scroll-activo");

      if (window.matchMedia('(max-width: 1250px)').matches) {
          menuHeaderId.style.background = "white";
      }
  } else {
      containerHeader.style.backgroundColor = "inherit";
      containerHeader.style.boxShadow = "none";
      menuLinks.forEach(link => link.style.color = "white");
      logoHeader.style.color = "white";
      logoHeader.style.textShadow = "0 0 calc(var(--font-size) * 0.625) var(--primary-color), 0 0 calc(var(--font-size) * 0.625) var(--primary-color),0 0 calc(var(--font-size) * 0.625) var(--primary-color)";
      IconId.style.color = "white";
      document.body.classList.remove("scroll-activo");

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

  window.onload = function () {
    const testimonios = [
      {
        nombre: "Ana Rodríguez",
        cargo: "Diseñadora Gráfica",
        mensaje: "Excelente trabajo, muy profesional.",
        foto: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        nombre: "Carlos Pérez",
        cargo: "CEO - DevCompany",
        mensaje: "Rápido, eficiente y con una estética impecable.",
        foto: "https://randomuser.me/api/portraits/men/36.jpg"
      },
      {
        nombre: "Luisa Méndez",
        cargo: "Emprendedora",
        mensaje: "Me encantó el resultado final.",
        foto: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      {
        nombre: "Mario Díaz",
        cargo: "Gerente Comercial",
        mensaje: "El proyecto fue entregado con excelente calidad.",
        foto: "https://randomuser.me/api/portraits/men/85.jpg"
      }
    ];
  
    const slider = document.querySelector('.slider-testimonios');
    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor-slider');
  
    testimonios.forEach((persona) => {
      const div = document.createElement('div');
      div.className = 'testimonio';
      div.innerHTML = `
        <div class="testimonio-info">
          <img src="${persona.foto}" alt="${persona.nombre}">
          <div>
            <h4>${persona.nombre}</h4>
            <span>${persona.cargo}</span>
          </div>
        </div>
        <p>"${persona.mensaje}"</p>
      `;
      contenedor.appendChild(div);
    });
  
    slider.appendChild(contenedor);
  
    let index = 0;
    setInterval(() => {
      index = (index + 1) % testimonios.length;
      contenedor.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
  };