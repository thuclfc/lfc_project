/**
 * Created by Thuc-lfc on 5/17/2018.
 */
$(document).ready(function () {
    $('.toggle-bar').click(function () {
        $('header nav,.modal').addClass('active');
    });
    $('.close-menu,.modal').click(function () {
        $('header nav,.modal').removeClass('active');
    });
    $('.list-faq li,.list_pt li').click(function () {
        $(this).toggleClass('active');
    });
});
