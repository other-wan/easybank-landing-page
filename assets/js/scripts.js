const navButtonToggle = document.querySelector("[data-nav-btn-toggle]");
const navbar = document.querySelector("[data-navbar]");
const main = document.querySelector("[data-main]");

navButtonToggle.addEventListener("click", function() {
    [this, navbar, main].forEach(_element => _element.classList.toggle("active"));
});