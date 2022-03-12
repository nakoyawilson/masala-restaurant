const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelectorAll(".header .nav-link");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  document.querySelector("body").classList.toggle("lock-scroll");
  if (mobileNav.classList.contains("open")) {
    menuIcon.src = "images/close_black_24dp.svg";
  } else {
    menuIcon.src = "images/menu_black_24dp.svg";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileNav.classList.remove("open");
    document.querySelector("body").classList.remove("lock-scroll");
    menuIcon.src = "images/close_black_24dp.svg";
    e.preventDefault();
  });
});
