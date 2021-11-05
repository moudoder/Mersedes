$(document).ready(function () {
  new WOW().init();
  $(".phone").mask("+7 (999) 999-9999");
  $(".scrol-to").on("click", function (event) {
    $('.modal-menu').removeClass('modal-menu-active');
    $('.dark-window').removeClass('dark-window-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  
  $('.nav-menu__btn').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
    $('.dark-window').addClass('dark-window-active');
  })
  $('.modal-menu-close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('.dark-window').removeClass('dark-window-active');
  })
  let services = $('.services-block-slider');
  for (var i = services.length - 1; i >= 0; i--) {
    let par_ser = $(services[i]).parent('.services-block-slider-wrapper');
    par_ser = $(par_ser).children('.services-block-arrows');

    let arrow_r = $(par_ser).children('.arrow__next')
    let arrow_l = $(par_ser).children('.arrow__prev')
    console.log(par_ser)
    $(services[i]).slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: arrow_l,
      nextArrow: arrow_r,
     });
  }
  $('.btn-modal').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window').addClass('modal-window-active');
    return false;
  })

  $('.btn-modal-1').on('click', function() {
    $('.modal-window__title').text('Получить расчет');
     $('.modal-window__text')[0].innerHTML = '  Или свяжитесь любым удобным для вас <br> способом и получите расчет <br> смоимости на тюнинг'
    $('.modal-window__form__btn').text('Получить расчет');
    return false;
  })

  $('.btn-modal-2').on('click', function() {
    $('.modal-window__title').text('Получить подарок');
    $('.modal-window__text')[0].innerHTML = '  Или свяжитесь любым удобным для вас <br> способом и получите подарок <br>'
    $('.modal-window__form__btn').text('Забрать подарок');
    return false;
  })

  $('.btn-modal-3').on('click', function() {
    $('.modal-window__title').text('Оставить заявку');
    $('.modal-window__text')[0].innerHTML = '  Или свяжитесь любым <br> удобным для вас  способом'
    $('.modal-window__form__btn').text('Оставить заявку');
    return false;
  })

  $('.btn-modal-4').on('click', function() {
    $('.modal-window__title').text('Обратный звонок');
    $('.modal-window__text')[0].innerHTML = 'Оставьте заявку и Вам перезвонят в течении <br> 10 минут или свяжитесь любым удобным <br> для вас способом'
    $('.modal-window__form__btn').text('Заказать обратный звонок');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.dark-window').removeClass('dark-window-active');
    $('.modal-window').removeClass('modal-window-active');
    $('.modal-menu').removeClass('modal-menu-active');
  })
  

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
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 4000,
   });

  $('.present-bottom_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
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
          swipe: true,
         });

    setInterval(function(){ 
        $('.projects-slick__slider').slick('slickNext');
    }, 5000);
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