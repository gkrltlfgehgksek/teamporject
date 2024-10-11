window.addEventListener("load",function(){

    const sub_mainview = new Swiper('#main_view', {
        // Optional parameters
        
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    

    });


});

//문서가 화면에 로드된 후 실행
window.addEventListener("load",function(){
    // //메인뷰 제품슬라이드 영역
    // const main_image = new Swiper('#main_image', {
    //     // Optional parameters
    //     loop: true,
    //     effect:'fade',
    //     speed:200,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     navigation: {
    //         nextEl: '.main_next',
    //         prevEl: '.swiper-button-prev',
    //       },

    //       pagination: {
    //         el: '.main_pager',
    //         type: "fraction",
            
    //     },
    // });

    // const product_slider = new Swiper('#product_slider', {
    //     // Optional parameters
    //     loop: true,
    //     pagination: {
    //         el: '.pager',
    //         type: "fraction",
    //     },
    //     // autoplay: {
    //     //     delay: 5000,
    //     // },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
        
    // });

    // var content = document.querySelector('#brand_story');
    // var path = document.querySelector('.bg_line path');
    // var pathLength = path.getTotalLength();
    // path.style.strokeDasharray  = pathLength;
    // var absoluteTop = window.scrollY + content.getBoundingClientRect().top;
    // var content_h = content.offsetHeight;
   
    // function scrollHandler() {

    //   var point_Y = window.scrollY - absoluteTop + 500;
    //   var ratio = point_Y / content_h;
    //   var ratio_re = 0
    //   if(ratio<0) ratio_re = 0;
    //   else if(ratio>1) ratio_re =1;
    //   else ratio_re = ratio;
    //   var value = pathLength * ratio_re;
    //   path.style.strokeDashoffset = -1*(pathLength - value);
      
    // }


    // window.addEventListener('scroll', scrollHandler);
    // window.addEventListener('resize', function(){
    //   content_h = content.offsetHeight;
    //   absoluteTop = window.scrollY + content.getBoundingClientRect().top;
    //   scrollHandler();
    // }); 


    	
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
   


    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scrub: 1,
    //       //pin: true,
    //       trigger: "#brand_story_01",
    //       start: "20% 50%",
    //       endTrigger: "#brand_story_01",
    //       end: "100% 50%",
    //       markers: true, 
    //     },
    //   });
      
    // tl.to("#brand_story_01 .img", {
    //     y:-400, duration:0.2
    // });

    // gsap.to("#brand_story_01", {
    //     scrollTrigger: {
    //       trigger: "#brand_story_01",
    //       start: "20% 70%", 
    //       endTrigger: "#brand_story",
    //       end: "100% 0%",
    //       toggleClass: "active",
    //       //markers: true, 
    //     }
    // });
    // gsap.to("#brand_story_02", {
    //     scrollTrigger: {
    //       trigger: "#brand_story_02",
    //       start: "20% 70%",    
    //       endTrigger: "#brand_story",
    //       end: "100% 0%",
    //       toggleClass: "active",
    //      // markers: true, 
    //     }
    // });
    // gsap.to("#brand_story_03", {
    //     scrollTrigger: {
    //       trigger: "#brand_story_03",
    //       start: "20% 70%",    
    //       endTrigger: "#brand_story",
    //       end: "100% 0%",
    //       toggleClass: "active",
    //       //markers: true, 
    //     }
    // });
    // gsap.to("#brand_story_04", {
    //     scrollTrigger: {
    //       trigger: "#brand_story_04",
    //       start: "20% 70%",   
    //       endTrigger: "#brand_story",
    //       end: "100% 0%",
    //       toggleClass: "active",
    //       //markers: true, 
    //     }
    // });

    gsap.to("#gotoTop", {
      scrollTrigger: {
        trigger: "#gotoTop",
        start: "0% 90%",   
        endTrigger: "footer",
        end: "100% 0",
        toggleClass: "active",
        //markers: true, 
      }
    });

    //사이드메뉴 열기
    var side_btn = document.querySelector(".side_btn");
    var side_area = document.querySelector("#side_menu");

    side_btn.addEventListener("click",function(){
    side_area.classList.toggle("active");
    });

});//end:window.addEventListener(...
