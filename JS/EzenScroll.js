function EzenScroll(tag="",options={}){
    
    var obj = {
        useValue:false,
        value:0
    };
    
    //객체 병합
    Object.assign(obj, options);

    var btn = document.querySelector(tag);
    btn.addEventListener('click',function(e){
        e.preventDefault(); //본래의 기능을 하지 않음.
        var el = document.querySelector(this.getAttribute("href"));
        console.log(el);
        var el_top = el.getBoundingClientRect().top;
        el_top = (obj.useValue) ? obj.value : el_top ;
        window.scroll({
            top: el_top,
            //left: 100,
            behavior: "smooth",
        });
    });
}


