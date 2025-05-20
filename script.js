
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

// GSAP
function PageOneAnim (){


gsap.from(".main__leftsection, .main__rightsection",{
    scale: 1.2,
    opacity: 0,
    duration: 2,
    delay: 0.6,
    ease: "power3.out"
},"same")

gsap.from(".nav__items li",{
    y:30,
    opacity: 0,
    duration:1,
    delay: 0.4,
    stagger: 0.2
},"same")

}

function PageSecondAnim (){
let timeline = gsap.timeline({
    scrollTrigger:{
        trigger: ".aboutsection",
        scroller: "body",
        start: "top 50%",
        end: "20px center"
    }
})

timeline.from(".about__image",{
    x:-50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

timeline.from(".about__rightsection",{
    x: 100,
    opacity: 0
},"=-1")
}

function PageThirdAnim (){
let tl = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".menusection",
        start: "top 20%"
    }
})

tl.from(".menu__image",{
    scale: 1.1,
    opacity: 0
})
}

function PagefourAnim (){
let tltestimonial = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".testimonialssection",
        start: "top 20%",
        end: "top top"
    }
})

tltestimonial.from(".testimonials__image",{
    y:100,
    opacity:0
})
}

if(window.innerWidth > 768){
    PageOneAnim();
    PageSecondAnim();
    PageThirdAnim();
    PagefourAnim();
}