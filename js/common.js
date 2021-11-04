$(document).ready(function () {
  new WOW().init();
  $(".phone").mask("+7 (999) 999-9999");
  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  


  let services = $('.services-block-slider');
  for (var i = services.length - 1; i >= 0; i--) {
    console.l
    services[i]
  }
  $('.btn-modal').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window').addClass('modal-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.dark-window').removeClass('dark-window-active');
    $('.modal-window').removeClass('modal-window-active');
  })
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

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    centerMode:true,
    variableWidth: true,
    prevArrow: $('.team-arrow__left'),
    nextArrow: $('.team-arrow__right'),
    responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            variableWidth: false,
            centerMode:false,
            dots: true,
          }
        }
      ]
   });

  $('.company-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 500,
   });
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    centerMode:true,
    variableWidth: true,
    focusOnSelect: true,
    prevArrow: $('.reviews-arrow__left'),
    nextArrow: $('.reviews-arrow__right'),
    responsive: [
        {
          breakpoint: 720,
          settings: {
            dots: true,
          }
        }
      ]
   });

  

  if ($(window).width() >= 720) {
      $('.projects-slick__slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          arrows: false,
          swipe: false,
         });
  }
  if ($(window).width() <= 720) {
      $('.certificates-row').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        dots: true,
        arrows: false,
        variableWidth: true,
        centerMode:true,
       });
      

      $('.projects-row').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        dots: true,
        arrows: false,
        variableWidth: true,
        centerMode:true,
       });
  }
})