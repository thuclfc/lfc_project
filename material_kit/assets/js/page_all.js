$(document).ready(function () {
    $('.nav-link').click(function () {
        $(this).parent().toggleClass('show');
    });
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('nav-open');
    });

    $(window).scroll(function () {
        if($(this).scrollTop() > 100){
            $('header').removeClass('header-transparent');
        }else{
            $('header').addClass('header-transparent');
        }
    });
    $('.effect_border').click(function () {
        $(this).toggleClass('focus');
    });
    $('.effect_border').keydown(function(e) {
        var code = e.keyCode || e.which;
        if (code === 9) {
            $('.effect_border').removeClass('focus');
            $(this).next().addClass('focus');
        }
    });
    var item_input= $('.effect_border .form-control');
    $(item_input).on('change',function () {
        if($(this).val().length > 0){
            $(this).parent().addClass('filled');
        }else{
            $(this).parent().removeClass('filled');
        }
    });
});
$(document).mouseup(function(e){
    var sub_menu=$('.sub-menu');
    var navbar_collapse=$('.navbar-collapse,.navbar-toggler');
    if (!sub_menu.is(e.target) && sub_menu.has(e.target).length === 0)
    {
        $('.nav-item').removeClass('show');
    }
    if (!navbar_collapse.is(e.target) && navbar_collapse.has(e.target).length === 0)
    {
        $('body').removeClass('nav-open');
    }
});
$(document).mouseup(function(e){
    var form_group=$('wrapper');
    if (!form_group.is(e.target) && form_group.has(e.target).length === 0)
    {
        $('.effect_border').removeClass('focus');
    }
});