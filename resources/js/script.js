
    /* For the stick navigation */
    $(document).ready(function(){
      /* For the stick navigation */
      var waypoint = new Waypoint({
          element: document.querySelector('.section-features'),
          handler: function(direction) {
            if(direction == "down"){
                $('nav').addClass('stick');
            }else{
                $('nav').removeClass('stick');
            }
          },
          offset: 60
        });
            
          /* Buttin Clivk */
          $('.js--scroll-to-plan').click(function(){
            $('html, body').animate({scrollTop: $('.js--section-plans').offset().top - 50}, 1000);
          });

          /* Animate */

          $('.js_wp_1').waypoint(function(){
              $('.js_wp_1').addClass('animate_animated animate_Fadein')
          },{ offset: '70%'});

          
      /* Mobile nav */
      $('mobile-nav-icon').click(function(){
        var nav = $('.main-nav');
        var icon = document.querySelector('.mobile-nav-icon-btn');

        nav.slideToggle(200);

        if (icon.name == 'menu-outline') {
          icon.name = 'close-outline';
        }else{
          icon.name = 'menu-outline';
        }

      });
});

    
    