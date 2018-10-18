// library inits

jQuery(document).ready(function ($) {
    // materialize init
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({throttle: -100, scrollOffset: 80.5});
    $('.collapsible').collapsible();

    // parallax init
    if(jQuery.browser.mobile) {
        // if mobile, turn off parallax
        $('.parallax img').css("opacity", 1)
    } else {
        // if desktop, turn on parallax
        $('.parallax').parallax();
    }

    // typewriter init
    new TypeIt('#typer', {
        strings: [ "Artificial Intelligence.", "Machine Learning.", "Distributed Systems.", "Web Development." ],
        speed: 50,
        breakLines: false,
        autoStart: false,
        loop: true,
        nextStringDelay: 2500
    });

    $(window).on("load", function () {
        // isotope portfolio init
        const $container = $('.portfolio');
        $container.isotope({
            percentPosition: true,
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
            const selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });

        // wow.js init
        const wow = new WOW({
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       -10,
            mobile:       true,
            live:         false
        });
        wow.init();
    });
});