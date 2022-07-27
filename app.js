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

var id = setInterval('plusSlides(1);', 5000); //call test every 1 seconds.
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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
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

//overlay part

function getData(x){
  if (x == 1){
    let data = {img : 'src/products/1.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 2){
    let data = {img : 'src/products/2.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 3){
    let data = {img : 'src/products/3.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 4){
    let data = {img : 'src/products/4.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 5){
    let data = {img : 'src/products/5.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 6){
    let data = {img : 'src/products/6.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
     return data;
  }
  else if (x == 7){
    let data = {img : 'src/products/7.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 8){
    let data = {img : 'src/products/8.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 9){
    let data = {img : 'src/products/9.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
    'and typesetting industry. Lorem Ipsum has been the industry\'s' +
     'standard dummy text ever since the 1500s,'};
    return data;
  }
  else if (x == 10){
    let data = {img : 'src/products/10.png', title: 'mamma basket', desc: 'Lorem Ipsum is simply dummy text of the printing' +
             'and typesetting industry. Lorem Ipsum has been the industry\'s' +
              'standard dummy text ever since the 1500s,'};
    return data;
  }
  else{
    let data = {img : '', title: '', desc: ''};
    return data;
  }
}


function on(a) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById('item-image').src = getData(a)['img'];
  document.getElementById('item-title').innerHTML = getData(a)['title'];
  document.getElementById('item-description').innerHTML = getData(a)['desc'];

}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}

function overlayBoth(a){
  on(a);
  on2();
}

function closeBothOverlays(){
  off();
  off2();
}

//Contact us secton to send email

// function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "andimamma2022@gmail.com",
//     Password : "andimammadave22",
//     To : "ddaavveeggeerrmmii@gmail.com",
//     From : document.getElementById('email').value,
//     Subject : "Contact from website",
//     Body : "Name: " + document.getElementById('fname').value 
//     + "\nEmail: " + document.getElementById('email').value
//     + "\nMessage: " + document.getElementById('message').value
// }).then(
//   message => alert("Message sent Successfully.")
// );
// }