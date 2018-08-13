$(document).ready(function() {
  $(window).scroll(function() {
    $('.image').each(function() {
      if(($(this).offset().top - ($(window).height() / 1.2)) < $(window).scrollTop()) {
          $(this).addClass('showing');
      }
    })
  })
})