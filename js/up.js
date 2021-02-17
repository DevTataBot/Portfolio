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




let l1 = document.getElementById("home")
let l2 = document.getElementById("info")
let l3 = document.getElementById("proyects")
let l4 = document.getElementById("contacto")

let bounding1 = l1.getBoundingClientRect();
let bounding2 = l2.getBoundingClientRect();
let bounding3 = l3.getBoundingClientRect();
let bounding4 = l4.getBoundingClientRect();

if(bounding1.top >= 0 ){
    location.replace('https://tatianabotia.github.io/Portfolio/#home')
    console.log("primis")
}else if(bounding2.top >= 0 ){
    location.replace('https://tatianabotia.github.io/Portfolio/#info')
    console.log('secus')
}else if(bounding2.top >= 0 ){
    location.replace('https://tatianabotia.github.io/Portfolio/#proyects')
    console.log('tercis')
}else if(bounding4.top >= 0 ){
    location.replace('https://tatianabotia.github.io/Portfolio/#contacto')
    console.log('cuartis')
}
