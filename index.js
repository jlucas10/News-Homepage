const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
const half = document.getElementById("half");

openMenu.addEventListener("click", () => {
  navbar.classList.add("open");
  half.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("open");
  half.style.display = "none";
});

