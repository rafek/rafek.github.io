$(function () {
  $(".hamburger > a").on("click", function (anchor) {
    if (anchor.preventDefault(), $("header .hamburger").toggleClass("is-active"), $(window).width() <= 991) {
      var nav = $("header nav");

      nav.is(":visible") ? nav.slideUp() : nav.slideDown();
    }
    console.log("HAMBURGER CLICK!");
  });
});
