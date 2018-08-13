// toggle mobile menu

$("#menu").click(function() {
  $(this).toggleClass("open");
  $("nav").toggleClass("opened");
});

// remove loader

$(window).on("load", function() {
  $("#loader-container").remove();
});
