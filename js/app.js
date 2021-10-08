var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    loop: true,
    slidesPerGroup: 2,
    centeredSlides: true,
    speed: 900,
    pagination: {
      el: ".special-offers__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".special-offers__next",
      prevEl: ".special-offers__prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      480: { 
        slidesPerView: 'auto',
        slidesPerGroup: 1, 
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 73,
        slidesPerGroup: 2,
      },
    },
  });


let btn = document.querySelector('.hero__btn-menu');
let nav = document.querySelector('.hero__nav');
let logo = document.querySelector('.hero__logo');

btn.addEventListener('click', function() {
  btn.classList.toggle('hero__btn-menu--active');
  nav.classList.toggle('hero__nav--active');
  logo.classList.toggle('hero__logo--active');
});