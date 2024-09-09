import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { onOpenHandle } from "./utilits";
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';



const accordion = new Accordion('.about-me__accord_list', {
  duration: 350,
  elementClass: 'about-me__accord_item',
  triggerClass: 'about-me__accord_trigger',
  panelClass: 'about-me__accord_panel',
  showMultiple: true,
  onOpen: onOpenHandle,
});

accordion.detachEvents();

accordion.open(0);

setTimeout(() => {
  accordion.attachEvents();
}, 1000);



const swiperAbout = new Swiper('.about-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-button-swip',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  simulateTouch: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
});

function updateActiveSlideColor() {
  document
    .querySelectorAll('#custom-swiper .about-swiper-skills')
    .forEach(slide => {
      slide.style.removeProperty('background-color');
    });

  const activeSlide = document.querySelector(
    '#custom-swiper .about-swiper-skills.swiper-slide-active'
  );
  if (activeSlide) {
    const selectedColor = localStorage.getItem('selectedColor') || '#c6e327';
    activeSlide.style.setProperty(
      'background-color',
      selectedColor,
      'important'
    );
  }
}

updateActiveSlideColor();

swiperAbout.on('slideChangeTransitionEnd', updateActiveSlideColor);
