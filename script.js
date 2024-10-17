// Selects the burger menu button by its ID and adds a click event listener to it
document.getElementById("burger-menu").addEventListener("click", function () {

    // Selects the mobile menu container by its ID
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggles the "hidden" class on the mobile menu, showing or hiding it when the button is clicked
    mobileMenu.classList.toggle("hidden");
});

function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const mobileMenu = document.getElementById("mobile-menu");
    const burgerMenu = document.getElementById("burger-menu");

    if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileMenu.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutUsSection = document.getElementById("aboutUs");

    // Observer to check if the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsSection.classList.add("fade-in", "animate-slideInLeft", "animate-slideInBottom"); // Apply all entry animations
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(aboutUsSection); // Start observing
});
