const checkbox = document.getElementById("checkbox");
const iconSearch = document.querySelector(".btn--icon");
const iconClose = document.querySelector(".icon--close");
var boDy = document.querySelector("body");

checkbox.addEventListener("change", function () {
  boDy.classList.toggle("dark");
});

$(".area--icon").click(function () {
  $("body").addClass("icon--active");
  $(".input-search").focus();
});

$(".icon--close").click(function () {
  $("body").removeClass("icon--active");
});
