$(".button--menu-mobile").on("click", function () {
  $(".bg-dim").css("display", "block");
  $(".header").toggle();
  $("body").toggleClass("menu_mobile");
});
$(".button--close-mobile").on("click", function () {
  $(".bg-dim").css("display", "none");
  $(".header").toggle();
  $("body").toggleClass("menu_mobile");
});