// Selects the burger menu button by its ID and adds a click event listener to it
document.getElementById("burger-menu").addEventListener("click", function () {

    // Selects the mobile menu container by its ID
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggles the "hidden" class on the mobile menu, showing or hiding it when the button is clicked
    mobileMenu.classList.toggle("hidden");
});

// Toggle the mobile menu and prevent page scroll when it's open
function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const html = document.documentElement; // Seleciona o elemento <html>
    const body = document.body; // Seleciona o <body>

    // Toggle the hidden class to show/hide the menu
    mobileMenu.classList.toggle("hidden");

    // Disable scrolling when the menu is open
    if (!mobileMenu.classList.contains("hidden")) {
        html.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.width = "100%";

        // Prevenir eventos de scroll e touchmove
        window.addEventListener("scroll", preventScroll);
        window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
        html.style.overflow = "";
        body.style.position = "";
        body.style.width = "";

        // Reativar eventos de scroll e touchmove
        window.removeEventListener("scroll", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
    }
}

function preventScroll(event) {
    event.preventDefault();
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const mobileMenu = document.getElementById("mobile-menu");
    const burgerMenu = document.getElementById("burger-menu");

    if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileMenu.classList.add("hidden");
        document.documentElement.style.overflow = ""; 
        document.body.style.position = ""; 
        document.body.style.width = "";

        // Reativar eventos de scroll e touchmove
        window.removeEventListener("scroll", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
    }
});
