$(function () {

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $(".star").rateYo({
    starWidth: "22px",
    ratedFill: "#ff3446",
    normalFill: "#f5abb2",
    readOnly: true,
    spacing: "10px",
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.js-collapse-btn').on('click', function () {
    $(this).siblings('.js-collapse-box').slideToggle();
    $(this).toggleClass('js-collapse-btn--active');
  });

  $('.content-images--product-card').slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="images/svg/slider-next.svg"alt="nextarrow"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/svg/slider-prev.svg"alt="prevarrow"></button>',
  });

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

  $('.content-images--product').slick({
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

  $('.select-style, .product-card__item-num').styler();

});