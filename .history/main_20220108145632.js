// navbar background color
const navbar = document.querySelector(".navbar");
const navbarInfo = navbar.getBoundingClientRect();
console.log(navbarInfo);
console.log(navbarInfo.height);

document.addEventListener("scroll", (e) => {
  const positionY = window.scrollY;
  console.log();
});
