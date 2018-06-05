$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 9000,
    dots: true,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    appendDots: '.slick-dots'
});
$('.icon_search').click(function () {
    $('.search').addClass('active');
    $('.search input').focus();
    $(this).css('display','none');
});
$('.form_close').click(function () {
    $('.search').removeClass('active');
    $('.icon_search').css('display','block');
});