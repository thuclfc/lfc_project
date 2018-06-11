function box_tab(tab,tab_content,tab_active,index_active) {
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

function open_popup(btn,popup) {
    $(btn).click(function (e) {
        e.preventDefault();
        $(popup).addClass('show');
    });
    $('.close_popup').click(function () {
        $(popup).removeClass('show');
    });
}
var modal = document.getElementsByClassName('modal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}