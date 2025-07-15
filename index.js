const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});
const langBtn = document.getElementById("lang-btn");
const langOptions = document.getElementById("lang-options");

langBtn.addEventListener("click", () => {
    if (langOptions.classList.contains("hidden")) {
        langOptions.classList.remove("hidden");
        langOptions.style.display = "block"; 
    } else {
        langOptions.classList.add("hidden");
        langOptions.style.display = "none"; 
    }
});

langOptions.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const href = e.target.getAttribute("data-href");
        window.location.href = href;
    }
});