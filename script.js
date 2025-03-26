const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-icon");

menuButton.addEventListener("click", () => {
    navBar.classList.toggle("show-menu");
})