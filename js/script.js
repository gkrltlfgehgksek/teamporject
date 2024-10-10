//문서가 화면에 로드된 후 실행
window.addEventListener("load",function(){
    //메인뷰 제품슬라이드 영역
    const main_image = new Swiper('#main_image', {
        // Optional parameters
        loop: true,
        effect:'fade',
        speed:200,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          pagination: {
            el: '.pager',
            type: "fraction",
            
        },



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


    var content = document.querySelector('.bg_line_box');
    var path = document.querySelector('.bg_line path');
    var pathLength = path.getTotalLength();
    path.style.strokeDasharray  = pathLength;
    var absoluteTop = window.scrollY + content.getBoundingClientRect().top;
    var content_h = content.offsetHeight;
    // path.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.4, content1, path1Length)
  

    // function calcDashoffset(scrollY, element, length) {
    //   const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    //   const value = length - (length * ratio)
    //   return value < 0 ? 0 : value > length ? length : value
    // }

    function scrollHandler() {
      var point_Y = window.scrollY - absoluteTop + 500;
      var ratio = point_Y / content_h;
      var ratio_re = 0
      if(ratio<0) ratio_re = 0;
      else if(ratio>1) ratio_re =1;
      else ratio_re = ratio;
      var value = pathLength * ratio_re;
      path.style.strokeDashoffset = -1*(pathLength - value);
     
    }


    window.addEventListener('scroll', scrollHandler);


    	
	SmoothScroll({
		frameRate: 120,
		animationTime: 500,
		stepSize: 80,
		pulseAlgorithm: 1,
		pulseScale: 2,
		pulseNormalize: 1,
		accelerationDelta: 25,
		accelerationMax: 1,
		keyboardSupport: 1,
		arrowScroll: 50,
		fixedBackground: 0
	});
   

    

    let search = document.getElementById("burgerIcon");
    let open_btn = document.getElementsById("burgerIcon");
    //배열로 만들어짐
    let close_btn = document.querySelector("#closeIcon");


    open_btn[0].addEventListener("click",function(e){
        e.preventDefault(); //태그의 본래기능을 동작시키지 않음.
        search.classList.add("show");
      });

      //닫기버튼
    close_btn.addEventListener("click",function(){
    search.classList.remove("show");
      });










    
});//end:window.addEventListener(...



/*
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const fullMenu = document.getElementById('fullMenu');
  
    burgerIcon.addEventListener('click', function(e) {
      e.preventDefault();
      fullMenu.classList.add('show');  // 메뉴 열기
      burgerIcon.style.display = 'none';  // 햄버거 아이콘 숨기기
      closeIcon.style.display = 'inline-block';  // X 아이콘 보이기
    });
  
    closeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      fullMenu.classList.remove('show');  // 메뉴 닫기
      burgerIcon.style.display = 'inline-block';  // 햄버거 아이콘 보이기
      closeIcon.style.display = 'none';  // X 아이콘 숨기기
    });
  });*/