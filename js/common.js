$(document).ready(function () {
  new WOW().init();

  $('.services-block-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.arrow__prev'),
    nextArrow: $('.arrow__next'),
   });

  $('.slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.header-arrow__left'),
    nextArrow: $('.header-arrow__next'),
   });
})