// Selects the burger menu button by its ID and adds a click event listener to it
document.getElementById("burger-menu").addEventListener("click", function () {

    // Selects the mobile menu container by its ID
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggles the "hidden" class on the mobile menu, showing or hiding it when the button is clicked
    mobileMenu.classList.toggle("hidden");
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
