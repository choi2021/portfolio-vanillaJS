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
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const work = document.querySelector(".work");
const testimonials = document.querySelector(".testimonials");
const contact = document.querySelector(".contact");

const menu = document.querySelector(".navbar__menu");
menu.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const section = dataset.section;
  if (section === undefined) {
    return;
  }
  switch (section) {
    case "home":
      home.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    case "about":
      about.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    case "skills":
      skills.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    case "work":
      work.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    case "testimonials":
      testimonials.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    case "contact":
      contact.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    default:
      throw error(new Error("you clicked the wrong button"));
  }
});
