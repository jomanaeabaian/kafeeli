const btn = document.querySelector(".menu-open");
const menu = document.querySelector(".mobile-menu");
const menu_list = document.querySelector(".mobile-menu ul");

btn.onclick = () => {
    menu.classList.remove("opacity-0", "invisible");
    menu_list.classList.remove("-translate-x-full");
};


menu.onclick = () => {
    menu.classList.add("opacity-0", "invisible");
    menu_list.classList.add("-translate-x-full");
};

menu_list.onclick = (e) => e.stopPropagation();