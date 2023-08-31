$(document).ready(function($) {
    $('.card-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 786,
         settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }]
  });
});

