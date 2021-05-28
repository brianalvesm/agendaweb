$(document).ready(function(){
  (function ($) {

    var headerScroll = function() {
      if ($(".header").offset().top > 120) {
          $(".header").addClass("scrolling");
      } else {
          $(".header").removeClass("scrolling");
      }
    };

    headerScroll();
    $(window).scroll(headerScroll);

  })(jQuery);
});
