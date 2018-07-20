function box_tab(tab,tab_content,tab_active,index_active) {
    $(tab_content).addClass('hidden_tab');
    $(tab).eq(tab_active).addClass('active');
    $(tab_content).eq(index_active).addClass('show_tab');
    $(tab).click(function () {
        $(tab).removeClass('active');
        $(this).addClass('active');
        var tab_index=$(this).index();
        $(tab_content).addClass('hidden_tab').removeClass('show_tab');
        $(tab_content).eq(tab_index).removeClass('hidden_tab').addClass('show_tab');
    });
}

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

/*function add like*/
var add_like = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        $('.statistical .tol_like').html(counter);
        return counter
    }
})();

/*function redirect link register*/
function goToLocation(val){
    if(val == "register_user"){
        var link_re_user = "Register-Enduser.html";
        $('.select_register a').attr('href',link_re_user);
    }else if(val == "register_service"){
        var link_re_s = "Register-Service.html";
        $('.select_register a').attr('href',link_re_s);
    }else{
        $('.select_register a').attr('href','Register-Enduser.html');
    }
}


$(document).ready(function () {
   $('.td_click').click(function () {
       $('.get_nf,.info_user').removeClass('active');
      $(this).parent().addClass('active');
   });

    // select register
    var select=$('.select_register .select');
    $(select).click(function () {
        $('.select_register .select').removeClass('active');
        $(this).addClass('active');
    });

    /*demo steps booking progress*/
    $('.step1 .next').click(function () {
        $('.booking_process .step').removeClass('active').css('display','none');
        $('.booking_process .step2').addClass('active');
    });
    $('.step2 .next').click(function () {
        $('.booking_process .step').removeClass('active');
        $('.booking_process .step3').addClass('active');
    });
    $('.step2 .back').click(function () {
        $('.booking_process .step').removeClass('active');
        $('.booking_process .step1').addClass('active');
    });

    $('.popup-book-calendar .next').click(function () {
        $('.book-calendar,.modal-backdrop').modal('hide');
        $('#booking-process').modal({backdrop: 'static', keyboard: false},'show');
    });

    /*call popup with id*/
    $('.detail-popup').on('click',function () {
        var id_post=$(this).data('id');
        $('#'+id_post+'').addClass('open_popup');
        $('.wrapper').addClass('modal-open');
    });
    $('.close-popup').click(function () {
        $('.popup,.modal-popup').removeClass('open_popup');
        $('.wrapper').removeClass('modal-open');
    });

    $('.popup-detail-post .book').click(function () {
        $('.popup,.modal-popup').removeClass('open_popup');
    });

    box_tab('.tab_login li','.content_login',0,0);
    box_tab('.tab_type_pay li','.content_type_pay',0,0);
    box_tab('.tab_method_pay li','.content_method_pay',0,0);
    box_tab('.tab_day_makeup li','.makeup_content',0,0);
});

$(document).mouseup(function(e){
    var container = $(".td_click");
    var popup_detail=$('.popup-detail-post');
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        $('.td_click').parent().removeClass('active');
    }
    if (!popup_detail.is(e.target) && popup_detail.has(e.target).length === 0)
    {
        $('.popup-detail-post').parent().removeClass('open_popup');
        $('.wrapper').removeClass('modal-open');
    }
});

/*
$(window).load(function () {
    var placeholder = $('.thumb'),
        small = $('.img-small');
    // 1: load small image and show it
    var link_image=$('.thumb').data('large');
    var imgLarge = "<img src='"+link_image+"'>";
    placeholder.append(imgLarge);
    // 2: load large image

});*/
