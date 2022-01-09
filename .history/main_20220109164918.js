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

function activateCategory(value) {
  const activated = document.querySelector(".category__btn.active");
  activated.classList.remove("active");
  const willBeActivated = document.querySelector(`[data-set="${value}"]`);
  console.log(willBeActivated);
}

const workBtns = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projectList = document.querySelectorAll(`.project`);
workBtns.addEventListener("click", (e) => {
  const target = e.target;
  const dataset = e.target.dataset;
  const value = dataset.value || target.parentNode.dataset.value;
  if (value === undefined) {
    return;
  }
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
    projectList.forEach((item) => {
      if (value === "all" || value == item.dataset.value) {
        item.classList.remove("invisible");
      } else {
        item.classList.add("invisible");
      }
    });
  }, 300);
});

// activated btn update
workBtns.addEventListener("click", (e) => {
  const target = e.target;
  const dataset = e.target.dataset;
  const value = dataset.value || target.parentNode.dataset.value;
  activateCategory(value);
});
