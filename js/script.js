// Toggle
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamaburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// KLIK DILUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
