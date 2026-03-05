const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".menu a");
const header = document.getElementById("header");
const sections = document.querySelectorAll("section");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menu.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", () => {

  // Header efecto
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Link activo
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

});