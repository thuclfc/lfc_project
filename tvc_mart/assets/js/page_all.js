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