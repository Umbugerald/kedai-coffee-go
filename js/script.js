// Toggle
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamaburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (event) => {
  searchForm.classList.toggle('active');
  event.preventDefault();
}

// KLIK DILUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
