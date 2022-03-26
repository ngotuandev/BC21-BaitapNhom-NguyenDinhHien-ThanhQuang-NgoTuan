const anglesLeft = document.querySelector(".fa-angles-left");
const anglesRight = document.querySelector(".fa-angles-right");
$("#icon--right--left").click(function () {
  if ($("#icon--right--left").hasClass("fa-angles-right")) {
    $(".right-menu").addClass("menu-item--slide-right");
    $(".right-menu").removeClass("menu-item--slide-left");
    $("#icon--right--left").addClass("fa-angles-left");
    $("#icon--right--left").removeClass("fa-angles-right");
  } else if ($("#icon--right--left").hasClass("fa-angles-left")) {
    $(".right-menu").addClass("menu-item--slide-left");
    $(".right-menu").removeClass("menu-item--slide-right");
    $("#icon--right--left").addClass("fa-angles-right");
    $("#icon--right--left").removeClass("fa-angles-left");
  }
});
