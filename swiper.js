const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', //'vertical'
  loop: true,
  spaceBetween: 30,
  speed: 1000, 
  slidesPerView: 1, 


  effect: 'cards',
  //effect: 'cube',
  //effect: 'fade',
  //effect: 'flip',

  //effect: 'coverflow',
  //coverflowEffect: {
  //  rotate: 150, 
  //},
/*
  autoplay: {
    delay: 5000,
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },*/




  
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});