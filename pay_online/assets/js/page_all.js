$(document).ready(function () {
    var width_view=$(window).width();
    if(width_view >= 320 && width_view <=767){
        $('.slider-logo').slick({
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerPadding: '0',
            arrows: true
        });
    }else if(width_view >=768){
        $('.slider-logo').slick({
            centerMode: false,
            slidesToShow: 15,
            slidesToScroll: 1,
            centerPadding: '0',
            arrows: true
        });
    }

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