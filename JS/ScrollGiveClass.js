/*
    ScrollGiveClass 플러그인 
    최종수정일:2024.07.26
*/

function ScrollGiveClass(target="body", options={}){
                  
    var obj = {
        baseline:'top',
        class:'scrolled',
        add:0,
        limit:false,
        limitValue:0,
        addFunction:function(){},
        removeFunction:function(){}
    };
    
	let el_list; //DOM 객체를 넣을 배열
   	let el_All = new Array(); 
    let win_h = 0;
    let base = 0;
	
    let item_top = 0;
    //객체 병합
    Object.assign(obj, options);    
   
    window.addEventListener('load', function() {
        el_list = document.querySelectorAll(target); 
        el_list.forEach((item,i)=>{ 
            item_top = item.getBoundingClientRect().top + window.scrollY;
            if(!isNaN(obj.baseline)) item_top = obj.baseline;

            el_All.push({
                target:item,
                top: item_top,
            });                     
        });
        
        win_h = window.innerHeight;
        
        if(obj.baseline=='bottom') base += win_h;
        if(obj.baseline=='middle') base += win_h / 2;                     
        
        if( 1>obj.add && obj.add>-1 ){
            obj.add = win_h * obj.add;
        }                            

        base += obj.add;    
       	scrolled();
    } );

    window.addEventListener('scroll', scrolled);
    window.addEventListener("resize", scrolled);
    
    function scrolled(){                        
        var win_Y = window.scrollY; //window.pageYOffset;
        win_Y += base;
        el_All.forEach((item)=>{
        	if(win_Y > item.top){
                obj.addFunction();
                item.target.classList.add(obj.class);
            }else{
                obj.removeFunction();
                item.target.classList.remove(obj.class);
            }
        });       
    }    
};