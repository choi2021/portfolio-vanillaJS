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
