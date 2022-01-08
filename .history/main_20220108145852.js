// navbar background color
const navbar = document.querySelector(".navbar");
const navbarInfo = navbar.getBoundingClientRect();
console.log(navbarInfo.height);

document.addEventListener("scroll", (e) => {
  const positionY = window.scrollY;
  if (positionY > navbarInfo.height) {
    navbar.classList.add("withBGColor");
  }
});
