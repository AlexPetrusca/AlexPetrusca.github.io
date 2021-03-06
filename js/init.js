// library inits

// materialize init
$('.sidenav').sidenav();
$('.scrollspy').scrollSpy({throttle: -100, scrollOffset: 80.5});
$('.collapsible').collapsible();
$('.modal').modal();

// parallax init
if(jQuery.browser.mobile) {
    // if mobile, turn off parallax
    $('.parallax img').css("opacity", 1)
} else {
    // if desktop, turn on parallax
    $('.parallax').parallax();
}

// typewriter init
let typeIt = new TypeIt('#typer', {
    strings: [ "Artificial Intelligence.", "Machine Learning.", "Distributed Systems.", "Web Development." ],
    speed: 50,
    breakLines: false,
    autoStart: false,
    loop: true,
    nextStringDelay: 2500
});

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

document.getElementById('connect4-video').playbackRate = 0.5;

// wow.js init
new WOW().init();