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

// toggle function add

const toggleBtn = document.querySelector(".navbar__toggleBtn");
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

// scroll to the section

const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const section = dataset.section;
  if (section === undefined) {
    return;
  }
  menu.classList.remove("show");
  scrollIntoView(section);
  selectNavItem(e.target);
});

// Handle click on contact button on home

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView(".contact");
  selectNavItem(menuList[sectionList.length - 1]);
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
  selectNavItem(menuList[0]);
});

// project filtering

function activateCategory(target) {
  const activated = document.querySelector(".category__btn.active");
  activated.classList.remove("active");
  target.classList.add("active");
}

const workBtns = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projectList = document.querySelectorAll(`.project`);
workBtns.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const value = dataset.value || e.target.parentNode.dataset.value;
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
  // activated btn update
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  activateCategory(target);
});

// intersection observer
const sectionClasses = [
  ".home",
  ".about",
  ".skills",
  ".work",
  ".testimonials",
  ".contact",
];
const sectionList = sectionClasses.map((className) => {
  return document.querySelector(className);
});

const menuList = sectionClasses.map((className) => {
  return document.querySelector(`[data-section="${className}"]`);
});

const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let selectedNavItem = menuList[0];
let selectedNavIndex = 0;

function selectNavItem(selected) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = selected;
  selectedNavItem.classList.add("active");
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionList.indexOf(entry.target);
      // scroll 아래로
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(callback, option);

sectionList.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.round(window.scrollY + window.innerHeight) ===
    document.body.clientHeight
  ) {
    selectedNavIndex = menuList.length - 1;
  }
  selectNavItem(menuList[selectedNavIndex]);
});
