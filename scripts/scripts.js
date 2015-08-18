(function ($) {
    $(document).ready(function () {
        var $icons = $(".nav-icon-wrapper");
        $(".nav-icon.menu", $icons).click(function () {
            $(".main-nav").toggleClass("show");
        });
        $(".nav-icon.edit", $icons).click(function () {
            alert("Edit");
        });
        $(".nav-icon.save", $icons).click(function () {
            confirm("Save?");
        });
        $(".main-wrapper").scroll(function () {
            var $top = $(".top-header", this);
            if ($(this).scrollTop() == 0)
                $top.removeClass("glued");
            else
                $top.addClass("glued");
        });
    });
})(jQuery);