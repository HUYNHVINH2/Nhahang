/* ================================== theme.js ===================================== */
(function( $ ){
    $.fn.digita_stickyMenu = function( options ) {
		
        var $this = this,
        defaults = {
            'left' : 0,
            'top' : 0,
            'menu_offset_top' : $this.offset().top
        },
        settings = $.extend({}, defaults, options);
        $(window).on('scroll.stickyMenu', function(){
            if ($(window).scrollTop() > settings.menu_offset_top)
            { 
                /*$this.css({ 
                    'position': 'fixed',
                    'top':settings.left,
                    'left':settings.top,
                    'zIndex':9999,
					'width':'100%'
                });*/
				$this.addClass('stickyMenu');
            }
            else
            {
                /*$this.css({ 
                    'position': 'relative',
                }); */
				$this.removeClass('stickyMenu');
            }
        });
        return $this;
    };
})(jQuery);


(function(a){a.fn.countTo=function(g){g=g||{};return a(this).each(function(){function e(a){a=b.formatter.call(h,a,b);f.html(a)}var b=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},g),j=Math.ceil(b.speed/b.refreshInterval),l=(b.to-b.from)/j,h=this,f=a(this),k=0,c=b.from,d=f.data("countTo")||{};f.data("countTo",d);d.interval&&clearInterval(d.interval);d.interval=
setInterval(function(){c+=l;k++;e(c);"function"==typeof b.onUpdate&&b.onUpdate.call(h,c);k>=j&&(f.removeData("countTo"),clearInterval(d.interval),c=b.to,"function"==typeof b.onComplete&&b.onComplete.call(h,c))},b.refreshInterval);e(c)})};a.fn.countTo.defaults={from:0,to:0,speed:1E3,refreshInterval:100,decimals:0,formatter:function(a,e){return a.toFixed(e.decimals)},onUpdate:null,onComplete:null}})(jQuery);


jQuery(document).ready(function($) {

	"use strict"; 
	
	 $(".main-nav>ul").tinyNav();
	 
	/*- Responsive Video -*/
	if(jQuery().fitVids) {
		$(".digita-video").fitVids();
	}

	
	/*- prettyPhoto Lightbox -*/
	if(jQuery().prettyPhoto){
		 $("a[rel^='prettyPhoto']").prettyPhoto({ deeplinking: false,  social_tools : false });
		 $("a[data-prettyphoto^='prettyPhoto']").prettyPhoto({ deeplinking: false,  social_tools : false });
	}

	
	/*- Blog Helper -*/
	$(".blog_entry:last").addClass("last");
	

	/*- smoothScroll -*/
	$('.main-nav a').smoothScroll({ speed: 1100, offset: -68, });


	/*- sticky Site header -*/
	$('#header').digita_stickyMenu();


	/*- Slideshow -*/
	$(".tallykit_slideshow .tk_slideshow_the_video").fitVids();
	$(".tk-slideshow-video-popup").fitVids();
	$('.tk-slideshow-video-popup-link').magnificPopup({type:'inline'});



	/*- Shortcodes -*/
	$(".tallykit-shortcode-accordion").accordion({heightStyle: "content"});
	$(".tallykit-shortcode-alert-close").click(function() { $( this ).parent( ".tallykit-shortcode-alert-block" ).hide( "slow"); });
	$(".tallykit-shortcode-tabs").tabs({
		fx: { opacity: 'toggle' },
		select: function(event, ui) {
			$(this).css('height', jQuery(this).height());
			$(this).css('overflow', 'hidden');
		},
		show: function(event, ui) {
			$(this).css('height', 'auto');
			$(this).css('overflow', 'visible');
		}	
	});
	
	$("h3.tallykit-shortcode-toggle-trigger").click(function(){$(this).toggleClass("active").next().slideToggle("fast");return false;});
	$('.tallykit-shortcode-tooltip').tooltip({track: true});
	
	if(jQuery().waypoint) {
		jQuery('.tallykit-shortcode-counterBox-wrapper').waypoint(function() {
			jQuery(this).find('.display-percentage').each(function() {
				var percentage = jQuery(this).data('percentage');
				jQuery(this).countTo({from: 0, to: percentage, speed: 3000});
			});
		}, {
			triggerOnce: true,
			offset: '100%'
		});
	}
	if(jQuery().waypoint) {
		jQuery('.tallykit-shortcode-progressBar').waypoint(function() {
			var percentage = jQuery(this).find('.tallykit-shortcode-progressBar-content').data('percentage');
			jQuery(this).find('.tallykit-shortcode-progressBar-content').css('width', '0%');
			jQuery(this).find('.tallykit-shortcode-progressBar-content').animate({
				width: percentage+'%'
			}, 'slow');
		}, {
			triggerOnce: true,
			offset: '100%'
		});
	}
	

	/*- Gallery -*/
	$('.tallykit_single_gallery').magnificPopup({ 
	 	delegate: '.magnificPopup-child',
		type:'image',
	 	gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	 });
	 
	 
	 
	 /* ----------------------------------------------------- */
  	 /* contact form ajax validate */	
	 $("#rsvpForm").validate({
		submitHandler:function(form){
			$.ajax({
				type: 'POST',
				url: 'php/sendrsvp.php',
				data: $("#rsvpForm").serialize(),
				beforeSend: function(){
					$("#rsvpForm").hide();
					$(".sending").show();
				},
				success: function(){
					$(".sending").hide();
					$(".formOK").show();
				},
				error: function(html){
					$(".sending").hide();
					$(".formNOK").show();
					$(".formNOK").append(html);
				}
			});
			return false;
		}
	});

});