const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  //   document.querySelector(".fa-moon").style.display = "none";
  //   document.querySelector(".fa-sun").style.display = "block";
  var boDy = document.querySelector("body");
  boDy.classList.toggle("dark");
});
