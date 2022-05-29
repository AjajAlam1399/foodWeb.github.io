const sticy_header = () => {
  const container = document.querySelector(".container");
  window.addEventListener("scroll", () => {
    container.classList.toggle("sticky", window.scrollY > 0);
  });
};
sticy_header();
const nav_bar_click = () => {
  const nav_items = document.querySelector(".nav-items");
  const burger = document.querySelector(".burger");
  const nav_lines = document.querySelectorAll(".nav-items li");
  burger.addEventListener("click", () => {
    nav_items.classList.toggle("nav_click");
    nav_lines.forEach((lines, no) => {
      if (lines.style.animation) {
        lines.style.animation = "";
      } else {
        lines.style.animation = `nav-lines 0.5s ease forwards ${no / 3}s `;
      }
    });
  });
};
nav_bar_click();
