let section = document.querySelector(".our-skill")
let spans = document.querySelectorAll(".prg span")
window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 200) {
        console.log("Reach");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

};
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
var textarea = document.getElementById('text_area'),
    count = document.getElementById('count'),
    txt_maxlength = textarea.getAttribute('maxlength');

textarea.oninput = function() {
    'use strict';
    count.textContent = txt_maxlength - this.value.length;

    if (count.textContent == 0) {
        count.classList.add('zero');
    } else {
        count.classList.remove('zero');
    }

}