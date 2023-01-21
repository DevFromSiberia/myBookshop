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

const swiperButton1 = document.querySelector('.swiper-button-1')
const swiperButton2 = document.querySelector('.swiper-button-2')
swiperButton1.addEventListener('click', () => {
  swiper.slideTo(2, 1000, true)
})
swiperButton2.addEventListener('click', () => {
  swiper.slideTo(3, 1000, true)
})


export default swiper