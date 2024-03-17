
window.addEventListener("load",()=>{
  let preloader = document.querySelector(".load_page");
  let ims_zoom = document.querySelectorAll(".img_mid img");
  let left_home_tags = document.querySelectorAll(".left_home")

  left_home_tags.forEach(left_home_tag=>{
    left_home_tag.classList.add("home_mid_smooth_left")
  })
  ims_zoom.forEach(im_zoom=>{
    im_zoom.classList.add("images_zoom")
  })
  preloader.style.display = "none"

})
window.addEventListener("scroll",()=>{
  let navbar = document.querySelector("nav");
  if(window.scrollY >= navbar.offsetHeight+30){
    navbar.classList.add("navbar_fixed")
  }
  else{
      navbar.classList.remove("navbar_fixed")      
  }
  

})
var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 60,
          },
    },    
  });


  AOS.init(
    {
      duration: 700,
      useClassNames: false,
      disableMutationObserver: false,
      initClassName: 'aos-init',
      once: true,
      anchorPlacement: 'top-bottom',
    }
  );



  let tic_support_aoss = document.querySelectorAll(".te_ic");

  tic_support_aoss.forEach(tic_support_aos =>{
    window.addEventListener("scroll",()=>{
    let offT = tic_support_aos.getBoundingClientRect().top + 140
    
    let scrY = window.innerHeight
    if (offT < scrY) {
      tic_support_aos.classList.add("aos_for_support")
    }
  })
   
  if (tic_support_aos.getBoundingClientRect().top + 30 < window.innerHeight) {
    tic_support_aos.classList.add("aos_for_support")
  }
})

