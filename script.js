/* ==================MENU TOGGLE================= */

let menu = document.querySelector(".header__menu")
let nav = document.querySelector(".navbar")
let close = document.querySelector(".close__icon")

menu.addEventListener("click",function(){
    nav.classList.add("active")
})
close.addEventListener("click",function(){
    nav.classList.remove("active")
})

const swiper = new Swiper('.testimonials__swiper', {
    loop: true,
    spaceBetween: 25,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });

/* ==================GSAP================= */

gsap.from(".main__herosection",{
    scale: 1.1,
    opacity: 0,
    duration: 1
})

gsap.from(".nav__items li",{
    y:30,
    opacity: 0,
    stagger: 0.2
})