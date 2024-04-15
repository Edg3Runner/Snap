const features = document.querySelector(".features");
const company = document.querySelector(".company");
const closeBtn = document.querySelector(".nav__menu--close");
const openBtn = document.querySelector(".nav__menu--open");
const nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("nav__menu--toggle");
});

openBtn.addEventListener("click", () => {
  nav.classList.toggle("nav__menu--toggle");
});

features.addEventListener("click", () => {
  const dropdown = document.querySelector("#features--list");
  dropdown.classList.toggle("show");
});

company.addEventListener("click", () => {
  const dropdown = document.querySelector("#company--list");
  dropdown.classList.toggle("show");
});
