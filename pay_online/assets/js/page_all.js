$(document).ready(function () {
    $('.slider-footer .flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 37,
        itemMargin: 5
    });

    $('.btn-support').click(function () {
        $('.box-support').addClass('active');
    });
    $('.close_support').click(function () {
        $('.box-support').removeClass('active');
    });

    $('.sub-menu').mouseenter(function () {
        $(this).parent().css('background','#022a4e');
    });
    $('.sub-menu').mouseleave(function () {
        $(this).parent().css('background','none');
    });
});