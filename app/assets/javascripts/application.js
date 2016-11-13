// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function(){
    $("#navbar-checkbox").click(function(){
        $("#toggle-mobile-menu").toggle();
    });

    setTimeout(function() {
    $("#message-holder").fadeOut("slow");
	}, 3000);

    $("#use-ful-drop").click(function(){
        $("#use-ful-links").slideToggle("fast");
    });

    $("#time-tab-drop").click(function(){
        $("#time-tab-list").slideToggle("fast");
    });

    $("#sem-dropdown").click(function(){
        $("#sem-list").slideToggle("fast");
    });

    $('#sem1').click(function(){
        $('#sem-selected-container').show();
        $('#sem-dropdown').html('Semester 1 - Winter 2014 <i class="fa fa-angle-down"></i>');
        $("#sem-list").slideToggle("fast");
        $('#id-sem1').show();
        $('#id-sem2').hide();
        $('#id-sem3').hide();
        $('#id-sem4').hide();
        $('#id-sem5').hide();
    });

    $('#sem2').click(function(){
        $('#sem-selected-container').show();
        $('#sem-dropdown').html('Semester 2 - Spring 2015 <i class="fa fa-angle-down"></i>');
        $("#sem-list").slideToggle("fast");
        $('#id-sem1').hide();
        $('#id-sem2').show();
        $('#id-sem3').hide();
        $('#id-sem4').hide();
        $('#id-sem5').hide();
    });

    $('#sem3').click(function(){
        $('#sem-selected-container').show();
        $('#sem-dropdown').html('Semester 3 - Winter 2015 <i class="fa fa-angle-down"></i>');
        $("#sem-list").slideToggle("fast");
        $('#id-sem1').hide();
        $('#id-sem2').hide();
        $('#id-sem3').show();
        $('#id-sem4').hide();
        $('#id-sem5').hide();
    });

    $('#sem4').click(function(){
        $('#sem-selected-container').show();
        $('#sem-dropdown').html('Semester 4 - Spring 2016 <i class="fa fa-angle-down"></i>');
        $("#sem-list").slideToggle("fast");
        $('#id-sem1').hide();
        $('#id-sem2').hide();
        $('#id-sem3').hide();
        $('#id-sem4').show();
        $('#id-sem5').hide();
    });

    $('#sem5').click(function(){
        $('#sem-selected-container').show();
        $('#sem-dropdown').html('Semester 5 - Winter 2016 <i class="fa fa-angle-down"></i>');
        $("#sem-list").slideToggle("fast");
        $('#id-sem1').hide();
        $('#id-sem2').hide();
        $('#id-sem3').hide();
        $('#id-sem4').hide();
        $('#id-sem5').show();
    });
});	