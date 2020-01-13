$(function(){
   
    // ========= параллакс =====
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
    });
    
    
    
  // ==========  Акардион ======
  $('.panel').css('display', 'none');
  $('.play').click(function(){
    $(this).toggleClass('in').next().slideToggle();
    $(".play").not(this).removeClass("in").next().slideUp();
    
});

  // wow js 
  new WOW().init();
    
  // === ???? Сова ????  ===
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    margin:  20,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0:{
        items : 0
      },
      320:{
        items : 1  
      },
      567:{
        items : 2  
      },
      768: {
          items: 4
      },
      900:{
          items: 4
      }
  },
});



// ===========
// Гамбургер
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('navi');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight*0.1;
var headingSize = windowWidth*0.1;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.1;
  headingSize = windowWidth*0.1;
  if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3; 
  
  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.6+'px';
  }

  // header.style.height = windowHeight+'px';
  // heading.style.fontSize = headingSize+'px';
  // heading.style.height = headingSize+'px';
  // heading.style.marginTop = '-'+headingSize*0.6+'px';
}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0); 
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}
window.onload = resize;
// ===========



// ======  Счетчик =========

// ==== Переменные 
var time = 4;
var cc = 1;
$(window).scroll(function(){
$('#rock').each(function(){
  var cPos = $(this).offset().top,
  topWindow = $(window).scrollTop();
  if(cPos < topWindow + 800){
    if(cc < 2){
      $('h2').addClass('viz'); 
      $('h2').each(function(){
        var 
        i = 1,
        num = $(this).data('num'),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
            clearInterval(int);
            cc = cc + 2;
          }
          i++;
        },step);
      });
    }
  }
});
});

// ========== 1) слидер ручной работы =) ========
// переменные для слидера

var prev = document.querySelector(".next");
var next = document.querySelector(".prev");
var img = document.querySelectorAll(".jon-dea");
var i = 0;

// ==== начало 
prev.onclick = function(){
  img[i].classList.remove('active');
  i++;
  if(i >= img.length){
    i = 0;
  }
  img[i].classList.add('active');
}
next.onclick = function () { 
  img[i].classList.remove('active')
  i--;
  if(i < 0){
    i = img.length - 1;
  }
  img[i].classList.add('active')
 }

// ============== конец

// ========== 2) слидер ручной работы =) ========
// переменные для слидера

var prevv = document.querySelector(".nextt");
var nextt = document.querySelector(".prevv");
var imgg = document.querySelectorAll(".jon-deaa");
var a = 0;

prevv.onclick = function(){
  imgg[a].classList.remove('kill');
  a++;
  if(a >= imgg.length){
    a = 0;
  }
  imgg[a].classList.add('kill');
}

nextt.onclick = function(){
    imgg[a].classList.remove('kill');
    a--;
    if(a < 0){
      a = imgg.length - 1;
    }
    imgg[a].classList.add('kill');
}

// ============== конец 

});