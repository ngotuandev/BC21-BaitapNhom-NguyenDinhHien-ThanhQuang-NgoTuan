const header = document.querySelector("#header");
$(window).scroll(() => {
  if (window.scrollY >= 100) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
});
