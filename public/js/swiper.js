// http://idangero.us/swiper/api/


// http://idangero.us/swiper/api/



var swiper = new Swiper('.swiper-container-images', {
  // Default parameters
  slidesPerView: 2.5,
  speed: 2000,
  autoplay: 2000,
  pagination: '.swiper-pagination-images',
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
    },
    // when window width is <= 760px
    760: {
      slidesPerView: 1,
      paginationClickable: true,
    }
  }
})


