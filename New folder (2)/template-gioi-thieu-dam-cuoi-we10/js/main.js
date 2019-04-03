(function($) {
"use strict";
	$(document).ready(function(){

/*--------------------------------------------------------------
  WEDZ - SUPERSLIDER INIT
--------------------------------------------------------------*/
$('#wedz-hero-slides').superslides({
  animation: 'fade',
  play: 7000,
  pagination: false,
  animation_speed: 3000
});
$(function () {
  $('#hero_over_link, .invite-button a').click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-59;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, 'easeInExpo');
    e.preventDefault();
  });
});


/*--------------------------------------------------------------
  WEDZ - TOOGLE MENU INIT
--------------------------------------------------------------*/
$(function(){
  $( window ).load(function() {
    var stickyHeaderTop = $('#stick-menu').offset().top;
    $(window).scroll(function(){
      if( $(window).scrollTop() > stickyHeaderTop ) {
          $('#pixiefy-wedz-main-menu').addClass('fixed-menu');
          $('.stick-logo').addClass('logoSticked');
      } else {
          $('#pixiefy-wedz-main-menu').removeClass('fixed-menu');
        $('.stick-logo').removeClass('logoSticked');
      }
    });
  });
});



$(function(){
  $('.responsive-trigger').click(function(){
    $('.main-menu').slideToggle('slow', 'easeOutExpo');
  });
  $( window ).load(function() {
    var winW = $(window).width();
    var winH = $(window).height();
    $(window).resize(function(){ 
      if(winH < 302) {
        $('.main-menu').addClass('overflowScroll');
      }
    });
  });
});



/*--------------------------------------------------------------
  WEDZ - PRELOADER INIT
--------------------------------------------------------------*/
$( window ).load(function() {
  jQuery("#wedz-preloader").delay(500).fadeOut(600);
});


/*--------------------------------------------------------------
  WEDZ - LIGHBOX INIT
--------------------------------------------------------------*/
$('a').nivoLightbox({
  effect: 'fall'
});
var gal = $('.wedz-popup');
gal.magnificPopup({
  type:'inline',
  midClick: true 
});

$('.single-popup-close').click(function(e){
    e.preventDefault();
    $.magnificPopup.close();
});

$('.popup-vimeo').magnificPopup({type:'iframe'});


/*--------------------------------------------------------------
  WEDZ - OWL SLIDER INIT
--------------------------------------------------------------*/
var owl = $("#gift-reg-slider");
  owl.owlCarousel({
  autoPlay : true,
  slideSpeed : 1000,
  items : 5,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [979,2],
  itemsTablet: [768,1],
  itemsMobile: [479,1],
  navigation : false,
  pagination: false
});



/*--------------------------------------------------------------
  WEDZ - MENU ACTIVE INIT
--------------------------------------------------------------*/
$(function () {

  var lastId,
  topMenu = $(".main-menu"),
  topMenuHeight = topMenu.outerHeight()+69,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
  });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-59;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, 'easeInExpo');
    e.preventDefault();

  });

  $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active-menu")
           .end().filter("[href=#"+id+"]").parent().addClass("active-menu");
     }
  });

});



/*--------------------------------------------------------------
  WEDZ - COUNTER INIT
--------------------------------------------------------------*/
$('.number-animate').appear();
$(document.body).on('appear', '.numeric-count', function () {
    $('.number-animate').each(function () {
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
    });
});

$('.number-animate2').appear();
$(document.body).on('appear', '.numeric-count2', function () {
    $('.number-animate2').each(function () {
        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));
    });
});

$('.appear').appear();
$.fn.animateNumbers = function (stop, commas, duration, ease) {
    return this.each(function () {
        var $this = $(this);
        var start = parseInt($this.text().replace(/,/g, ""));
        commas = (commas === undefined) ? true : commas;
        $({
            value: start
        }).animate({
                value: stop
            }, {
                duration: duration == undefined ? 500 : duration,
                easing: ease == undefined ? "swing" : ease,
                step: function () {
                    $this.text(Math.floor(this.value));
                    if (commas) {
                        $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    }
                },
                complete: function () {
                    if (parseInt($this.text()) !== stop) {
                        $this.text(stop);
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    }
                }
            });
    });
};


/*--------------------------------------------------------------
  WEDZ - GALLERY INIT
--------------------------------------------------------------*/
$(function () {
  new Photostack( document.getElementById( 'photostack-3' ), {
      callback : function( item ) {
          //console.log(item)
      }
  } );
});

/*--------------------------------------------------------------
  CONTACT FORM INIT
--------------------------------------------------------------*/
 $(document).ready(function(){

    $('#wedz-rsvp-form').submit(function(e){
        
        //Stop form submission & check the validation
        e.preventDefault();
        
        // Variable declaration
        var error       = false,
          name          = $('#wedz_name').val(),
          email         = $('#wedz_email').val(),
          guests       = $('#wedz_guests').val(),
          message       = $('#wedz_message').val(),
          mail_fail     = $('#mail_fail'),
          mail_success  = $('#mail_success'),
          submit_btn    = $('#wedz_rsvp_btn');
        
      // Form field validation
        if(name.length <= 1){
            var error = true;
            $('#wedz_name').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
        }else{
            $('#wedz_name').next('.field_error').remove();
        }
        if(email.length <= 6 || email.indexOf('@') == '-1'){
            var error = true;
            $('#wedz_email').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
        }else{
            $('#wedz_email').next('.field_error').remove();
        }
        if(message.length <= 0){
            var error = true;
            $('#wedz_message').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
        }else{
            $('#wedz_message').next('.field_error').remove();
        }

        if (error == true) {
          $(mail_success).fadeOut(500);
          $(mail_fail).slideDown(800);
        };

        // If there is no validation error, next to process the mail function
        if(error == false){

            $(mail_success).hide();
            $(mail_fail).hide();
            $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function() {
              $('.single-form-item input, .single-form-item textarea').val('');
              $(mail_fail).fadeOut(500);
              $(mail_success).slideDown(800);
              $('.filed_error').remove();
            },
            error: function() {
              $(mail_success).fadeOut(500);
              $(mail_fail).slideDown(800);
            }
            });

        }
    });    
});


/*--------------------------------------------------------------
  WEDZ - GOOGLEMAP INIT
--------------------------------------------------------------*/
function init() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
// How to get LatLng for more info visit : http://www.latlong.net/convert-address-to-lat-long.html
  var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

  var mapOptions = {
      zoom: 15,
      center: myLatLng,
      disableDefaultUI: true,
      scrollwheel: false,
      navigationControl: true,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
        featureType: 'water',
        stylers: [{
            color: '#DEABAA'
        }, {
            visibility: 'on'
        }]
    }, {
        featureType: 'landscape',
        stylers: [{
            color: '#f2f2f2'
        }]
    }, {
        featureType: 'road',
        stylers: [{
            saturation: -100
        }, {
            lightness: 45
        }]
    }, {
        featureType: 'road.highway',
        stylers: [{
            visibility: 'simplified'
        }]
    }, {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{
            visibility: 'off'
        }]
    }, {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#444444'
        }]
    }, {
        featureType: 'transit',
        stylers: [{
            visibility: 'off'
        }]
    }, {
        featureType: 'poi',
        stylers: [{
            visibility: 'off'
        }]
    }]
}

// Get the HTML DOM element that will contain your map 
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('map-canvas');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(22.402789, 91.822156),
    map: map,
    icon: 'images/map-marker.png',
});

}
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
      

	});
})(jQuery);

