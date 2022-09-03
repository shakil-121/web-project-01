$(document).ready(function () {
    //  slaider js//
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
    //counter up// 
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });


});
