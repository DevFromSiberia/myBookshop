import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

export default swiper