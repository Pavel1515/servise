window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    if(document.querySelector('#logo-golovne')){
      document.querySelector('#logo-golovne').classList.add('animate')
    }
    if(document.querySelector('.city')){
      document.querySelector('.city').classList.add('animate')
    }

  }, 500);
}

const swiper = new Swiper(".servis-centr", {
  loop: true,
  centerInsufficientSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    921: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const answer = new Swiper(".reviews", {
  loop: true,
  centerInsufficientSlides: true,
  slidesPerView: 1,
  spaceBetween: 1,
  autoplay: {
    delay: 4000,
  },
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    921: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
  },
});
