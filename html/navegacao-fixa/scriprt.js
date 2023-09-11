const menu = document.querySelector(".material-symbols-outlined");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("hide-icon");
});