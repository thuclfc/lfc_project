var prev = $('.prevl');
next = $('.nextnss');
inner = $('.month_year');
datetime = $('.cld_body');
var html_custom_date=""
html_custom_date +='<div class="custom_date">',
    html_custom_date +='<ul class="half_day">',
    html_custom_date +='<li class="morning">',
    html_custom_date +='<h4>Sáng</h4>',
    html_custom_date +='<input type="radio" name="check">',
    html_custom_date +='<span class="checked"></span>',
    html_custom_date +='</li>',
    html_custom_date +='<li class="afternoon">',
    html_custom_date +='<h4>Chiều</h4>',
    html_custom_date +='<input type="radio" name="check">',
    html_custom_date +='<span class="checked"></span>',
    html_custom_date +='</li>',
    html_custom_date +='</ul>',
    html_custom_date +='<ul class="full_day">',
    html_custom_date +='<li>',
    html_custom_date +='<input type="checkbox">',
    html_custom_date +='<span class="checked"></span>',
    html_custom_date +='</li>',
    html_custom_date +='</ul>',
    html_custom_date +='<div class="day_selected"><ion-icon ios="ios-close" md="md-close"></ion-icon></div>',
    html_custom_date +='<div class="wait_pay">',
    html_custom_date +='<span>Liên hệ hotline: 0162 345 6699</span>',
    html_custom_date +='<ion-icon ios="ios-time" md="md-time"></ion-icon>',
    html_custom_date +='</div>',
    html_custom_date +='</div>';
function renderCalendar(month,year){
    var c_month = month;
    c_year = year;
    html="";
    day_of_month = 0;
    flagy = false;//false la ko ket thuc = 00; true la ket thuc bang 00
    flagm = false;//false la sai thang, true la dung thang
    nhuan = false;// false la ko nhuan, true la nhuan
    dowen = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(c_year.length == 4 && c_year.toString().substring(0,2) != "00"){
        flagy = false;
        if( parseInt(c_year) % 4 == 0 ){
            nhuan = true;
        }else{
            nhuan = false;
        }
    }else{
        flagy = true;
        if(parseInt(c_year.toString().substring(0, 2)) % 4 == 0){
            nhuan = true;
        }else{
            nhuan = false;
        }
    }

    if(c_month >0 && c_month<=12){
        flagm = true;
    }else{
        flagm = false;
    }

    switch (c_month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day_of_month = 31;
            break;
        case 2:
            if(nhuan){
                day_of_month = 29;
            }else{
                day_of_month = 28;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day_of_month = 30;
            break;
    }
    var nToday = new Date();
    var dNow = nToday.getDate();
    var mNow = nToday.getMonth()+1; //January is 0!
    var yNow = nToday.getFullYear();

    if(flagm){
        li = "";
        for(var i=1; i<=day_of_month; i++){
            if(i==1){
                datetmp = new Date(c_year+"-"+c_month+"-"+i);
                num_start = datetmp.getDay();
                if(num_start == 0){
                    for(var j = 0; j<num_start;j++){
                        li+="<li></li>";
                    }
                }else{
                    for(var j = 0; j<num_start;j++){
                        li+="<li></li>";
                    }
                }
            }
            var classActive = '';
            if(yNow == c_year && mNow == c_month && dNow  == i){
                classActive = 'active';
            }

            li+='<li class="day day_'+i+' '+classActive+'"><span class="time">'+i+'</span>'+html_custom_date+'</li>';
            if(i == day_of_month){
                datetmp = new Date(c_year+"-"+c_month+"-"+i);
                num_start = datetmp.getDay();
                for(j = 0; j<6-num_start;j++){
                    li+="<li></li>";
                }
            }

        }
        datetime.html(li);
    }
}

setDateTimeButton();
prev.click(function(e){
    e.preventDefault();

    month = parseInt($(this).attr('month'));
    year = parseInt($(this).attr('year'));
    setDateTimeButton(month,year);
});
next.click(function(e){
    e.preventDefault();

    month = parseInt($(this).attr('month'));
    year = parseInt($(this).attr('year'));
    setDateTimeButton(month,year);
});

function setDateTimeButton(month,year){
    if(typeof month === 'undefined' || typeof year === 'undefined'){
        var now = new Date();
        current_month = now.getMonth();
        current_month = parseInt(current_month)+1;
        current_month = (current_month.toString().length <2) ? '0'+current_month : current_month;
        current_year = now.getFullYear();
        CalTime(current_month,current_year,next,prev);
    }else{
        CalTime(month,year,next,prev);
    }
}

function CalTime(month,year,c_next,c_prev){
    month = parseInt(month);
    year = parseInt(year);
    if(month>0 && month<=12){
        if(month == 1){
            c_prev.attr({
                month:12,
                year:parseInt(year)-1
            });
            c_next.attr({
                month:parseInt(month)+1,
                year:year
            })
        }else if(month == 12){
            c_prev.attr({
                month:11,
                year:year
            });
            c_next.attr({
                month:01,
                year:parseInt(year)+1
            })
        }else{
            c_prev.attr({
                month:(month.toString().length <2) ? '0'+(month-1) : month-1,
                year:year
            });
            c_next.attr({
                month:(month.toString().length <2) ? '0'+(month+1) : month+1,
                year:year
            })
        }
        m = (month.toString().length <2) ? '0'+month : month;
        inner.text('Tháng '+m+' '+year+'');
        renderCalendar(month,year);
    }
}
$(document).ready(function () {
    var item_c=$('.half_day li');
    var time_select=$('.select_time li');
    var select_day=$('.select_number_day li');
    $(item_c).click(function () {
        $('.half_day li').removeClass('active');
        $(this).addClass('active');
    });
    $('.full_day li').click(function () {
        $(this).toggleClass('active');
    });
    if($.trim($(".cld_body li").length)==0){
        $(this).addClass('empty');
    }

    $(time_select).click(function () {
        $('.select_time li').removeClass('active');
        $(this).addClass('active');
        checktime();
    });

    $(select_day).click(function () {
        $('.select_number_day li').removeClass('active');
        $(this).addClass('active');
    });

});
function checktime() {
    if( $('.select_time .half_day').hasClass('active')){
        $('.custom_date .half_day').css('display','block');
        $('.custom_date .full_day').css('display','none');
        $('.cld_body .day').addClass('sl_half_day');
    }else{
        $('.custom_date .half_day').css('display','none');
        $('.custom_date .full_day').css('display','block');
        $('.cld_body .day').removeClass('sl_half_day');
    }
}