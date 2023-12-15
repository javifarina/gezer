$(document).ready(function() {
    var currentPosition = 0;
    var slideWidth = 400;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    
    // Mueve el carrusel al siguiente slide
    function moveSlide() {
      $('.carousel').animate({'marginLeft':-slideWidth}, 500, function(){
        $('.slide:first').appendTo('.carousel');
        $('.carousel').css('marginLeft', '');
        currentPosition++;
        if (currentPosition == numberOfSlides) {
          currentPosition = 0;
        }
      });
    }
    
    // Comenzar el carrusel
    var slideInterval = setInterval(moveSlide, 3000);
  });
  