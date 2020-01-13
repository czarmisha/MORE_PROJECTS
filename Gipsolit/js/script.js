$(function (){
    
    // wow js 
    new WOW().init();
    
    
    // ======
 $('.menu-go').on('click', function() {
     $('.menu-lio').toggleClass('active');
 })
 $('.ikon').on('click', function() {
     $('.menu-lio').toggleClass('active');
 })
 
//  Carousel
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
});
// carousel-2
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
 
});