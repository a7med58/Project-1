window.document.title = 'The Eagle'

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

// Handle Active State
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");

}




// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);

    });

});
// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-cogs").onclick = function() {

    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");

};


$(".change-color").click(function() {
    $(".color-option").fadeToggle();
});

// Set the date we're counting down to
var countDownDate = new Date("Apr 2, 2022 12:00:00").getTime(); // CHANGE DATE AND TIME HERE

// Update the count down every 1 second
var countdown = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // If the difference is less than 0, stop countdown
    if (difference < 0) {
        clearInterval(countdown);
        days = 0, hours = 0, minutes = 0, seconds = 0;
    }

    // Output the result
    document.getElementById("days").children[0].innerText = days;
    document.getElementById("hours").children[0].innerText = hours;
    document.getElementById("minutes").children[0].innerText = minutes;
    document.getElementById("seconds").children[0].innerText = seconds;
}, 1000);


// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

    // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
    // console.log(localStorage.getItem("color_option"));

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active");

        }

    });

}

document.querySelector(".reset-options").onclick = function() {

    // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();

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

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener("click", function(e) {

    if (e.target.className == 'close-button') {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});


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