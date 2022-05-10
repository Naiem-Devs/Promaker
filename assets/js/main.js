(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
  $('.vm1').click( function (){ 
    $('.ofb1').toggleClass('offar_show');   
  }); 

  $('.vm2').click( function (){ 
    $('.ofb2').toggleClass('offar_show');   
  }); 

  $('.vm3').click( function (){ 
    $('.ofb3').toggleClass('offar_show');   
  }); 

  $('#triger').click( function (){ 
    $('.nosotros_list').toggleClass('active');   
  }); 

  // owlCarousel
  $(".ttml_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    navText: [
      '<img src="assets/img/left.png" alt="">',
      '<img src="assets/img/right.png" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: 'iframe',
    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

        id: 'v=HE7CBiTRK2w',

        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
      }
    }
    
  }); 

 
})(jQuery);
