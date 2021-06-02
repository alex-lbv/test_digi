//= ../../node_modules/swiper/swiper-bundle.esm.browser.min.js

const offersBurn = new Swiper('.offers-burn', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next--offers-burn',
    prevEl: '.swiper-button-prev--offers-burn',
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 64,
      slidesPerView: 4,
    }
  },
});

const offersAll = new Swiper('.offers-all', {
  init: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next--offers-all',
    prevEl: '.swiper-button-prev--offers-all',
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 64,
      slidesPerView: 4,
    }
  },
});

export const tabFirstClickHandler = () => {
  offersAll.disable();
  offersBurn.enable();
};

export const tabSecondClickHandler = () => {
  offersAll.init();
  offersAll.enable();
  offersBurn.disable();
};
