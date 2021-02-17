window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector(".goto").classList.add("show");
    }else{
        document.querySelector(".goto").classList.remove("show");
    }
}


const navSlide = ()=>{    
    const burger = document.querySelector(".menu__responsive");
    const nav = document.querySelector(".menu");
    var activeNav = document.querySelectorAll(".items li");
    burger.addEventListener('click',()=>{
        nav.classList.toggle('menu-active'); 
        for(var i = 0; i<activeNav.length; i++){
            activeNav[i].addEventListener('click',()=>{
                nav.classList.remove('menu-active');
            });
        }
    }); 
}
navSlide();

