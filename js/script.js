//문서가 화면에 로드된 후 실행
window.addEventListener("load",function(){
    //메인뷰 제품슬라이드 영역
    const main_image = new Swiper('#main_image', {
        // Optional parameters
        loop: true,
    });

    const product_slider = new Swiper('#product_slider', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.pager',
            type: "fraction",
        },
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
    });


});//end:window.addEventListener(...


    
