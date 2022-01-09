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

// make home fade to transparent as the window scrolls down
const home = document.querySelector(".home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const ratio = 1 - window.scrollY / homeHeight;
  if (ratio < 0) {
    home.style.opacity = 0;
    upBtn.classList.add("visible");
  } else if (ratio >= 0.5) {
    home.style.opacity = 1;
    upBtn.classList.remove("visible");
  } else {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    upBtn.classList.remove("visible");
  }
});

// upBtn added

const upBtn = document.querySelector(".upBtn");
upBtn.addEventListener("click", () => {
  scrollIntoView(".home");
});

// project filtering

function activateCategory(btn) {
  const activated = document.querySelector(".category__btn.active");
  activated.classList.remove("active");
  btn.classList.add("active");
}

function filterCategory(value) {
  console.log(value);
  const projectList = document.querySelectorAll(`.project`);
}

const categories = document.querySelector(".work__categories");
categories.addEventListener("click", (e) => {
  const target = e.target;
  const dataset = e.target.dataset;
  const value = dataset.value;
  if (value === undefined && target.parentNode.dataset.value === undefined) {
    return;
  } else if (value === undefined) {
    const parent = target.parentNode;
    const parentValue = parent.dataset.value;
    activateCategory(parent);
    filterCategory(parentValue);
  }
  activateCategory(target);
  filterCategory(value);
});
