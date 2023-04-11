$(function () {

  $('.js-collapse-btn').on('click', function () {
    $(this).siblings('.js-collapse-box').slideToggle();
    $(this).toggleClass('js-collapse-btn--active');
  });


  // $('.engraving-list__title').on('click', function () {
  //   $(this).siblings().slideToggle();
  //   $(this).toggleClass('engraving-list__title--active');
  // });

  $('.video-slider__item').slick({
    dots: false,
    arrows: true,
    fade: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    nextArrow: '<button type="button" class="slick-next next-video"><img src="images/svg/slider-next.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev prev-video"><img src="images/svg/slider-prev.svg"alt="prevarrow"></button>',
    infinite: true,
  });

  $('.slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1600,
    nextArrow: '<button type="button" class="slick-next"><img src="images/svg/slider-next.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/svg/slider-prev.svg"alt="prevarrow"></button>',
    infinite: false,
  });

  $('.content-images--work').slick({
    pagination: false,
    arrows: true,
    fade: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    nextArrow: '<button type="button" class="slick-next"><img src="images/svg/slider-next.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/svg/slider-prev.svg"alt="prevarrow"></button>',
    infinite: true,
  });

  $('.product-related__content').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="images/iconssvg/next.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/iconssvg/prev.svg"alt="prevarrow"></button>',
  });

});