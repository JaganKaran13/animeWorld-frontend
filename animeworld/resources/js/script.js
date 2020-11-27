$(document).ready(function() {

    /** Sticky nav */
     $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
     }, {
         offset: '60px'
     });

     /**Scroll on buttons*/
     $('.js--scroll-to-plan').click(function() {
         console.log('clicked');
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    });
     
     $('.js--scroll-to-start').click(function() {
         console.log('clicked');
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000)
    });

    /**Navigation Scroll*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            console.log('test');
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              console.log('test2');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
              console.log('test3');
            return false;
          }
        }
      });
    });
});