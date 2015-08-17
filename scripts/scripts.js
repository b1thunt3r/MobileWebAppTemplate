(function($, w, f, u) {
  $(document).ready(function() {
    $(".nav-icon-wrapper .nav-icon.menu").click(function() {
      $(".main-nav").toggleClass("show");
    });
    $(".main-wrapper").scroll(function () {
      var $top = $(".top-header", this);
      if ($(this).scrollTop() != 0)
        $top.addClass("glued");
      else
        $top.removeClass("glued");
    });
  });
})(jQuery, window, false);