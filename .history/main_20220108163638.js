"use strict";

// navbar background color
const navbar = document.querySelector(".navbar");
const navbarInfo = navbar.getBoundingClientRect();
console.log(navbarInfo.height);

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbarInfo.height) {
    navbar.classList.add("withBGColor");
  } else {
    navbar.classList.remove("withBGColor");
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// scroll to the section

function activeControl(target) {
  const activated = document.querySelector(".navbar__menu__item.active");
  activated.classList.remove("active");
  target.classList.add("active");
}

const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const section = dataset.section;
  if (section === undefined) {
    return;
  }
  activeControl(e.target);
  scrollIntoView(section);
});

// Handle click on contact button on home

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView(".contact");
});

// transparent home

document.addEventListener("scroll", () => {
  const home = document.querySelector(".home");
  const homeHeight = home.getBoundingClientRect().height;
  if (1 - window.scrollY / homeHeight < 0) {
    home.style.opacity = 0;
  }
  home.style.opacity = 1 - window.scrollY / homeHeight;
};
