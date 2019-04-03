jQuery(function ($) {

	'use strict';


    // -------------------------------------------------------------
    //  1. Menu Sticky
    //  2. Menu Click Easily Scrolling
    //  3. Home page two Couple single Image Scrolling
    //  4. Image parallax Staller.js
    //  5. Revolution Slider
    //  6. Pretty photo (Lightshot)
    //  7. Date Counter
    //  8. Home Page One Hours Car moveing
    //  9. Footer Heart effect for home-page-One surprise section
    // -------------------------------------------------------------



	// -------------------------------------------------------------
    //      Sticky Menu
    // -------------------------------------------------------------
	    
	    (function () {
	        var nav = $('.navbar');
	        var scrolled = false;

	        $(window).scroll(function () {

	            if (110 < $(window).scrollTop() && !scrolled) {
	                nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

	                scrolled = true;
	            }

	            if (110 > $(window).scrollTop() && scrolled) {
	                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

	                scrolled = false;
	            }
	        });

	    }());



	// -------------------------------------------------------------
    // 		Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

		(function () {
	     	$('a.page-scroll').bind('click', function(event) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		             scrollTop: $($anchor.attr('href')).offset().top
		        }, 1500, 'easeInOutExpo');
		        event.preventDefault();
	     	});
	    }());



    // -------------------------------------------------------------
    // 		Single-item-Parallax
    // -------------------------------------------------------------

        (function () {
            $.fn.isOnScreen = function(){
                var element = this.get(0);
                var bounds = element.getBoundingClientRect();
                return bounds.top < window.innerHeight && bounds.bottom > 0;
            }

            $('.section-caption,.caption-parallex').each(function(){
              $(this).attr('data-offset',$(this).offset().top);
            });

            $(window).scroll(function(){
                $('.section-caption,.caption-parallex').each(function(i){
                    var $obj = $(this);
                    var $window = $(window);
                    if($obj.isOnScreen()){
                        var scroll = $window.scrollTop();
                        var winHeight = $window.height();
                        var offsetTop = Number($obj.attr('data-offset'));
                        var lag = $obj.data('lag');
                        var max = $obj.data('max');
                        var pos = offsetTop - (offsetTop - (scroll*lag));
                        //pos = Math.round(pos);
                        if(i == 0){// console.log(pos,offsetTop,scroll,winHeight);
                        }
                        //var pos = (scroll + winHeight - offsetTop) * lag;
                        pos = (pos > max)? max : pos;
                        
                        $obj.css({
                            'transform':'translate3d(0,'+pos+'px,0)'
                        });
                    }
                });
            });
        }());


    // -------------------------------------------------------------
    //      Parallax
    // -------------------------------------------------------------
		
        $(window).stellar();

        // $('.slider-second-section').parallax({imageSrc: 'assets/images/slider-2/slider.jpg'});
        
        $('.reserve-form-two').parallax({imageSrc: 'assets/images/r-bg.jpg'});



	// -------------------------------------------------------------
    // 		Revulation Slider
    // -------------------------------------------------------------
    	(function () {
            $('.tp-banner').revolution({
                startwidth:700,
                startheight:600,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                onHoverStop:"off",
                navigationType:"none",
                navigationStyle:"preview4",
                spinner:"off",
                hideTimerBar:"on",
                parallax:"mouse",
     			parallaxBgFreeze:"on",
     			parallaxLevels:[10,7,4,3,2,5,4,3,2,1]
            });
        }());



	// -------------------------------------------------------------
    // 		Light-shot
    // ------------------------------------------------------------

        (function () { 
            $("a[rel^='prettyPhoto']").prettyPhoto();
        }());
        



	// -------------------------------------------------------------
    //  	Countdown
    // -------------------------------------------------------------
        $("#countdown").countdown({
            date: "30 Dec 2017 12:00:00",
            format: "on"
        });



    // -------------------------------------------------------------
    //      Main-Page Hours Car
    // -------------------------------------------------------------
        (function () {
            var $car = $('.horse-car');
            var $wheel = $('.round');

            var $win = $(window);

            $win.bind('scroll', function () {
              var to = $win.scrollTop() / 5;  // if u want to change spreed //
              $car.css('transform', 'translateX(' + to + 'px)');

              var to = $win.scrollTop() / 3;  // if u want to change spreed //
              $wheel.css('transform', 'rotate(' + to + 'deg)');
            });
        }());



    // -------------------------------------------------------------
    //  	Wedding Team Slider
    // -------------------------------------------------------------

        $('.wed-team').slick({
            centerMode: true,
            autoplaySpeed: 5000,
            centerPadding: '0px',
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    autoplay: true,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    autoplay: true,
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                  }
                }
            ]
        });




	// -------------------------------------------------------------
    // 		Tab-Slider
    // -------------------------------------------------------------

        $('.loveline-slider').slick({
            centerMode: true,
            // autoplay: true,
            autoplaySpeed: 5000,
            centerPadding: '0px',
            slidesToShow: 4,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                  }
                }
            ]
        });



	// -------------------------------------------------------------
    // 		Flute-Music
    // -------------------------------------------------------------
    	$('.flute').easyAudioEffects({
            mp3 : "./assets/audio/love.mp3",
            eventType : "click"
        });




	// -------------------------------------------------------------
    // 		Blog-One-Slider
    // -------------------------------------------------------------  

        $('.blog-one-wrapper').owlCarousel({
            items:3,
            loop:true,
            // autoplay:true,
            margin:40,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })



    // -------------------------------------------------------------
    // 		Footer-Heart-Effect  for Surprise section
    // -------------------------------------------------------------
    	$(function(){
	    	$('.button').click(function() {
			$(this).hide();
			$('.front').addClass('front-open');
			$('.back').addClass('back-open');
			$('.opened').addClass('opened-open');
			$('.modal').show();

			setTimeout(function() {
				$('.modal').addClass('shadow');
			}, 1000);

			setTimeout(function() {
				$('.front').removeClass('front-open');
				$('.back').removeClass('back-open');
				$('.opened').removeClass('opened-open');
			}, 1200);

			$('.wrapper').delay(500).fadeIn();
			});


			$('.close').click(function() {
		  	$('.wrapper').fadeOut(300);
		  	$('.modal').removeClass('shadow');
		  	$('.front').addClass('front-close');
		  	$('.back').addClass('back-close');
		  	$('.opened').addClass('opened-close');

		  		setTimeout(function() {
			    	$('.modal').hide();
			    	$('.button').show();
			    	$('.front').removeClass('front-close');
			    	$('.back').removeClass('back-close');
			    	$('.opened').removeClass('opened-close');
			  	}, 1100)
			})


			$('.wrapper').click(function() {
		  	$('.wrapper').fadeOut(300);
		  	$('.modal').removeClass('shadow');
		  	$('.front').addClass('front-close');
		  	$('.back').addClass('back-close');
		  	$('.opened').addClass('opened-close');
			  	setTimeout(function() {
				    $('.modal').hide();
				    $('.button').show();
				    $('.front').removeClass('front-close');
				    $('.back').removeClass('back-close');
				    $('.opened').removeClass('opened-close');
			  	}, 1100)
			})
		});



		$(function(){
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-36251023-1']);
			_gaq.push(['_setDomainName', 'jqueryscript.net']);
			_gaq.push(['_trackPageview']);
		});




	// -------------------------------------------------------------
    // 		Google map Show Effect
    // -------------------------------------------------------------

    	$(".check").click(function(){
            $(".overlap").fadeOut(3000);
            $(".check").fadeOut(500);
        });


    // -------------------------------------------------------------
    //      Back To Top
    // -------------------------------------------------------------
      	$(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });




	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------
        // (function () {
        //     $('#status').fadeOut();
        //     $('#preloader').delay(500).fadeOut('slow');
        // }());

        $(window).load(function() {
            Pace.on('done', function() {
              $('#preloader').delay(300).fadeOut(800);
            });
        });

});   // Jquery-End