$(document).ready(function () { 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true, 
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    })

});