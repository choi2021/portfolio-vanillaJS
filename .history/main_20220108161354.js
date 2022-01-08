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

function scrollInto(className) {
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
  inActivate();
  e.target.classList.add("active");
  scrollInto(section);
  // switch (section) {
  //   case "home":
  //     home.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   case "about":
  //     about.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   case "skills":
  //     skills.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   case "work":
  //     work.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   case "testimonials":
  //     testimonials.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   case "contact":
  //     contact.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //     break;
  //   default:
  //     throw error(new Error("you clicked the wrong button"));
  // }
});
