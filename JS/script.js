var up = new EzenScroll(".top");




//프로덕트
const swiper = new Swiper('#product .inner', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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





  //모바일
  var sgc2 = new ScrollGiveClass("#mobile",{
    class:"show",
    baseline:"middle",
    add:0.4
});



