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
    $('.effect_border,.select_b').click(function () {
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
    var select_b=$('.select_b');
    $(item_input).on('change',function () {
        if($(this).val().length > 0){
            $(this).parent().addClass('filled');
        }else{
            $(this).parent().removeClass('filled');
        }
    });
    $(select_b).on('change',function () {
        if($(this).val().length > 0){
            $(this).addClass('filled');
        }else{
            $(this).removeClass('filled');
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
        $('.effect_border,.select_b').removeClass('focus');
    }
});

function tabs(tab,tab_content,tab_active,index_active) {
    $(tab_content).hide();
    $(tab).eq(tab_active).addClass('active');
    $(tab_content).eq(index_active).show();
    $(tab).click(function () {
        $(tab).removeClass('active');
        $(this).addClass('active');
        var tab_index=$(this).index();
        $(tab_content).hide(); $(tab_content).eq(tab_index).show();
    });
}