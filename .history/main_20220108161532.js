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

// scroll to the section

function inActivate() {
  const activated = document.querySelector(".navbar__menu__item.active");
  activated.classList.remove("active");
}

function activeControl(target) {
  const activated = document.querySelector(".navbar__menu__item.active");
  activated.classList.remove("active");
  target.classList.add("active");
}

function scrollInto(className) {
  console.log(className);
  const section = document.querySelector(className);
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const section = dataset.section;
  if (section === undefined) {
    return;
  }
  activeControl(e.target);
  scrollInto(section);
});
