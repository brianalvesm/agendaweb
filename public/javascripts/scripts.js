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

    $('body').addClass('js');
    var $menu = $('#menu'),
    $menuToggle = $('.menu-toggle');
    
    $menuToggle.click(function() {
      $menuToggle.toggleClass('active');
      $menu.toggleClass('active');
      return false;
    });

  })(jQuery);
});
