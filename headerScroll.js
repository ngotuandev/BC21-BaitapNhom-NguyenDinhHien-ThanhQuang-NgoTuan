document.getElementById("btn-open").addEventListener("click", function () {
  document.getElementsByClassName("header--top")[0].style.backgroundColor =
    "rgba(0, 0, 0, 0.7)";
});
document.getElementById("btn-close").addEventListener("click", function () {
  document.getElementsByClassName("header--top")[0].style.backgroundColor =
    "transparent";
});

window.addEventListener("scroll", function () {
  var headerTop = document.querySelector(".header--top");
  headerTop.classList.toggle("header--scroll", window.scrollY > 0);
  var brandScroll = document.querySelector(".navbar-brand");
  brandScroll.classList.toggle("brand--scroll", window.scrollY > 0);
  var navLinkScroll = document.querySelectorAll("a.nav-link");
  navLinkScroll[0].classList.toggle("nav-home-scroll", window.scrollY > 0);
  navLinkScroll[1].classList.toggle("nav-link-scroll", window.scrollY > 0);
  navLinkScroll[2].classList.toggle("nav-link-scroll", window.scrollY > 0);
  navLinkScroll[3].classList.toggle("nav-link-scroll", window.scrollY > 0);
  navLinkScroll[4].classList.toggle("nav-link-scroll", window.scrollY > 0);
  var iconMoon = document.querySelector(".fa-moon");
  iconMoon.classList.toggle("icon-moon-scroll", window.scrollY > 0);
});
