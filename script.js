// script.js - Interactive Element with jQuery
$(document).ready(function() {
    $('#toggle-info').click(function() {
        $('#extra-info').toggle();
    });
});
// script.js - Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for your message!");
    } else {
        alert("Please fill in all fields.");
    }
});
// script.js - Smooth Scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
