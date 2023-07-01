// swiper

var swiper = new Swiper('.banner', {
  loop: true,
  autoplay: true,
  parallax: true,
  speed: 1000,
  slidesPerView: 1,
  centeredSlides: true,
});
var swiper2 = new Swiper(".company", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 29,
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
});
var swiper3 = new Swiper(".description", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
});
var swiper4 = new Swiper(".faqs", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});
ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});