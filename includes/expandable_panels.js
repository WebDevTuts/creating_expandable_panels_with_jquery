/*  JavaScript Document  */

$(document).ready(function() {

  inject_markup();

});

function inject_markup() {

  $('.expanding_panel').each(function() {

    var link_text = $(this).attr('data-link-text');
    var content = $(this).html();

    $(this).html('<div class="expanding_panel_content_container" style="height:0px;"><div class="expanding_panel_content">'+content+'</div></div>');

    $(this).append('<div class="expanding_panel_trigger">'+link_text+'</div>');

  });

}