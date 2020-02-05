

///////////////////////////////////////////////////////////////////////////////////////////////

(function($) { 
		  
$(document).ready(function(){
	$('.slide').prepend('<div class="patternOverlay"></div>');	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').animate({
			left:$(this).attr('data-percent')
		},6000);
	});
	
	$('.skillbar').each(function(){
		$(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
	});
	
	if($(window).width()>767){
		$('.navbar-wrapper').animate({
			opacity:0
		},200);
		$('.navbar-wrapper').addClass('default-menu');
		
	}	
	
	$('#nav-show').click(function(x){
		x.preventDefault();
		$('.wrapper').removeClass('noGap');
		$('.navbar-wrapper').animate({
			opacity:1
		},200);
		$('.navbar-wrapper').removeClass('default-menu');
		$(this).fadeOut();
	});
	
	$('.closeMenu').click(function(x){
		x.preventDefault();
		$('.navbar-wrapper').animate({
			opacity:0
		},50,function(){$('.navbar-wrapper').addClass('default-menu');});
		
		$('#nav-show').fadeIn();
	});
	
	
});	


	
/*===========================================================*/
	/*	Preloader 
/*===========================================================*/	
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})
//]]>
		  
// for mobile nav js	
$(window).load(function(){
	$('button.navbar-toggle').click(function(){
		$(this).toggleClass('active');
		$('.navbar-collapse').slideToggle();										 
	});					
});
// for banner height js
var windowWidth = $(window).width();
var windowHeight =$(window).height();
$('.banner').css({'height':windowHeight });


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



// for portfoli lightbox jquary
jQuery(function() {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});
});

// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -16
        }, 1000);
        return false;
      }
    }
  });
});


// Testimonial slider
$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "fade",
	animationLoop: true,
	slideshow: true,
	pauseOnAction: false,
	slideshowSpeed: 7000,
	controlNav: true,
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});


// we worked slider
$(window).load(function(){
      $('.worklogo').flexslider({
        animation: "slide",
		slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        
      });
    });

// Skill set

// Progress Bar
//  var pageProgress = function() {
//    $(window).scroll(function() {
 //     var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
      // console.log(wintop);
  //    var totalScroll = (wintop/(docheight-winheight))*100;
      // console.log("total scroll" + totalScroll);
 //     $(".KW_progressBar").css("width",totalScroll+"%");
   // });

 // };
// pageProgress();


//});
//
 
// Animation
var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
  	
    m.codeletters = "&#*+%?£@§$10";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Hello World.',
      'I am making some changes to the application',
      'and will be back in a couple of months!',
      'Atharva Raibagi.'
    ];
    
    setTimeout(m.animateIn, 200);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 800);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));

//Para animation
// Wrap every letter in a span
$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });

}(jQuery));



