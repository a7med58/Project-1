$(".change-color").click(function() {
    $(".color-option").fadeToggle();
});

$('html').niceScroll();

$(document).ready(function() {
    $('.backtotop').css({ 'display': 'none' });
    var offset = 200;
    var duration = 600;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.backtotop').fadeIn(duration);
        } else {
            $('.backtotop').fadeOut(duration);
        }
    });

    $('.backtotop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});

$(window).load(function() {
    $('.loading, .loading .sk-chase').fadeOut(2000);
});
window.document.title = 'The Eagle'