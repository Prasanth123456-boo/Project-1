$(".menu").on('click', function () {

  var selector = $(".body")

  if (selector.hasClass('open')) {

    selector.removeClass('open');
  } else {

    selector.addClass('open');
  }
});


$(document).ready(function () {
  var allSliders = $('.responsive, .responsive-one, .responsive-two');

  $('.responsive').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.responsive-one, .responsive-two' // Connect to other sliders
  });

  $('.responsive-one').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    asNavFor: '.responsive, .responsive-two' // Connect to other sliders
  });

  $('.responsive-two').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    asNavFor: '.responsive, .responsive-one' // Connect to other sliders
  });

  $('.responsive, .responsive-one, .responsive-two').hover(
    function() {
      allSliders.slick('slickPause'); // Pause all sliders on hover
    },
    function() {
      allSliders.slick('slickPlay'); // Resume all sliders on hover out
    }
  );
});

// service
// Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // When window width is <= 576px
  450: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // When window width is <= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // When window width is <= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    }
    // Add more breakpoints as needed
  }
  
});

