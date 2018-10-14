// library inits

jQuery(document).ready(function ($) {
    if(jQuery.browser.mobile) {
        // if mobile, turn off parallax
        $('.parallax img').css("opacity", 1)
    } else {
        // if desktop, turn on parallax
        $('.parallax').parallax();
    }
    // materialize init
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({throttle: -100, scrollOffset: 80.5});
    $('.collapsible').collapsible();
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
        // typewriter init
        new TypeIt('#typer', {
            strings: [ "Artificial Intelligence.", "Machine Learning.", "Distributed Systems.", "Web Development." ],
            speed: 50,
            breakLines: false,
            autoStart: false,
            loop: true,
            nextStringDelay: 2500
        });
    });
});