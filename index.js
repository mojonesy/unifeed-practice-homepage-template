const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visibility");

    if (visibility === "false") {
        nav.setAttribute("data-visibility", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visibility", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});