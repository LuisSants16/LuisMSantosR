window.addEventListener("scroll", function() {
    let posy = window.pageYOffset;
    let containerHeader = document.getElementById("container-header");
    let menuLinks = document.querySelectorAll(".menu-header_link");
    let logoHeader = document.querySelector(".logo-header");

    if (posy > 100) {
        containerHeader.style.backgroundColor = "white";
        menuLinks.forEach(link => link.style.color = "var(--primary-color)");
        logoHeader.style.color = "var(--primary-color)";
    } else {
        containerHeader.style.backgroundColor = "inherit";
        menuLinks.forEach(link => link.style.color = "white");
        logoHeader.style.color = "white";
    }
});