var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlides:"true",
    grabCursor:"true",
    fade:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:"true",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });