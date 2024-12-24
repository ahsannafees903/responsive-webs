$(document).ready(function() {
    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Parallax effect for hero section
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.hero-section').css({
            'background-position': 'center ' + (scroll * 0.5) + 'px'
        });
    });
});
