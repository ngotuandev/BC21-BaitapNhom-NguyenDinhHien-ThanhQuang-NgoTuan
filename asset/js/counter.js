var runAlready;
var counting;
function startCounter(a) {
  runAlready = true;
  counting = true;
  $(".counter-value").each(function () {
    var $this = $(this);
    $this.text(a);
    countTo = $this.attr("data-count");
    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          counting = false;
        },
      }
    );
  });
  counted = true;
}

$(window).scroll(function () {
  var oTop = $("#counter").offset().top;
  var a = 0;
  let counted = false;
  if (
    (!runAlready && $(window).scrollTop() > oTop && !counted) ||
    (!counting && $(window).scrollTop() < oTop - 900)
  ) {
    startCounter(a);
    counted = false;
  }
});
