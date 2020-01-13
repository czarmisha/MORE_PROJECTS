$(function(){
  
    // ===========
  $('.gamb').click(function(){
     $('.header-menu').toggleClass('active_header-menu');
     $('.gamb').hide();
  });
  
  
  // ===========
    $('.close').click(function(){
        $('.header-menu').toggleClass('active_header-menu');
        $('.gamb').show(); 
    });
    
      // ===========
      $(window).resize(function(){
        if($(window).width() > 768){
            $('.gamb').removeAttr('style');
        }
    })
   
    // ===========
    $('.menu-link').click(function(e){
        e.preventDefault();
        
        $('.menu-link').removeClass('active-link')
        var attr = $(this).attr('href') //#home
        var target = $(attr).offset().top
        $('body, html').animate({
            scrollTop: target
        },1000)
    })
    
    // ===========
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        
        $('.menu-link').each(function(){
            var id = $(this).attr('href')
            var selector = $(id).offset().top
            
            if(scroll >= selector){
                $('.menu-link').removeClass('active-link')
                $(this).addClass('active-link')
            }
        })
    })
    
    var $grid = $('.tab-content').isotope({
        itemSelector: '.tab-item'
    })
    
    $('.nav-link').click(function(e){
        e.preventDefault();
        $('.nav-link').parent().removeClass('nav-active')
        $(this).parent().addClass('nav-active')
        var attr = $(this).attr('data-filter')
        $grid.isotope({
            filter: attr
        })
    })
    
    
    // ===========
    $('.slider').owlCarousel({
        items: 4,
        loop: true,
        margin: 25,
        responsive: {
            0:{
              items : 2  
            },
            767: {
                items: 3
            },
            900:{
                items: 4
            }
        },
        autoplay: true,
        autoplayTimeout: 3000
    });
    

    
    
});