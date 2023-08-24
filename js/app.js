$('.slider_container').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
});

$('.counter').counterUp({
    delay: 5,
    time: 500,
});
