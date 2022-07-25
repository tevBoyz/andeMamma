const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        //animate
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.opacity = '0';
                link.style.animation = '';
            }
            else{
                link.style.opacity = '1';
                link.style.animation = 'navLinkFade 0.5s ease-in forwards ${index / 7 + 1.5}s';
            }
    });
    //Burger animation
    burger.classList.toggle('toggle');
    });
}

navSlide();

//carousel part
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var id = setInterval('plusSlides(1);', 3000); //call test every 1 seconds.
var bestView = 8;
var bestViewSpace = 30;

var swiper = new Swiper(".mySwiper", {
  slidesPerView: bestView,
  spaceBetween: bestViewSpace,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function update(){
  window.addEventListener('resize', () =>{
    if(window.innerWidth <= 768){
      bestView = 3;
      bestViewSpace = 15;

      swiper = new Swiper(".mySwiper", {
        slidesPerView: bestView,
        spaceBetween: bestViewSpace,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    }else{
      bestView = 8;
      bestViewSpace = 30;

      swiper = new Swiper(".mySwiper", {
        slidesPerView: bestView,
        spaceBetween: bestViewSpace,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    }
  });
}

update();