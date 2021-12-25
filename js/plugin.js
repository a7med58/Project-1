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


function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();




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