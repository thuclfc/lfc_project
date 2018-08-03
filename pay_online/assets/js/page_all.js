$(document).ready(function () {
    $('.slider-footer .flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 37,
        move: 1,
        itemMargin: 5
    });
    $('.navbar-toggle').click(function () {
       $('header').toggleClass('active');
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