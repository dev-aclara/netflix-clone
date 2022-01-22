$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            slidesToShow: 1,
        },
        600:{
            slidesToShow: 3,
            slidesToScroll: 2,
        },
        1000:{
            items:6
        }
    }
})