// Selects the burger menu button by its ID and adds a click event listener to it
document.getElementById("burger-menu").addEventListener("click", function () {

    // Selects the mobile menu container by its ID
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggles the "hidden" class on the mobile menu, showing or hiding it when the button is clicked
    mobileMenu.classList.toggle("hidden");
});
