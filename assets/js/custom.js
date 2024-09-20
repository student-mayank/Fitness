/*----------

Theme Name: GYM Fitness Club - Responsive HTML5 Template
Theme Version: 1.0

----------*/

/*====================
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader JS JS
3.Wow Animation JS JS
4.Banner Slider JS
5.Our Classes Slider JS
6.Testimonial Slider JS
7.Blog Slider JS
8.Sticky Header JS
9.Smooth Scrolling JS
10.Scroll To Top JS
11.Toogle Menu Mobile JS
12.Gallery Slider For Mobile JS
13.Trainers Slider For Mobile JS
====================*/

$(document).ready(function(){

	// Whole Script Strict Mode Syntax
	"use strict";

	// Loader JS Start
	$('#loader').fadeOut();
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS Start

	// Banner Slider JS Start
	$('.banner-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 1800,
	  autoplay: true,
  	  autoplaySpeed: 3000,
	  dots: false,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  responsive: [
  	  {
  	  	breakpoint: 992,
  	  	settings: {
  	  		dots: true,
  	  		arrows: false,
  	  	}
  	  }]
	});
	// Banner Slider JS End

	// Our Classes Slider JS Start
	$('.classes-slider').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: false,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  responsive: [
  	  {
  	  	breakpoint: 992,
  	  	settings: {
  	  		dots: true,
  	  		arrows: false,
  	  	}
  	  },
  	  {
  	  	breakpoint: 768,
  	  	settings: {
  	  		slidesToShow: 1,
  	  		dots: true,
  	  		arrows: false,
  	  	}
  	  }
    ]
	});
	// Our Classes Slider JS End

	// Testimonial Slider JS Start
	$('.testimonial-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: false,
	  nextArrow: false,
	  autoplay: true,
  	  autoplaySpeed: 3000,
	});
	// Testimonial Slider JS End

	// Blog Slider JS Start
	$('.blog-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	  responsive: [
  	  {
  	  	breakpoint: 992,
  	  	settings: {
  	  		slidesToShow: 2,
  	  		dots: true,
  	  		arrows: false,
  	  	}
  	  },
  	  {
  	  	breakpoint: 768,
  	  	settings: {
  	  		slidesToShow: 1,
  	  		dots: true,
  	  		arrows: false,
  	  	}
  	  }
    ]
	});
	// Blog Slider JS End

	// Sticky Header JS Start
	$(window).on( 'scroll', function(){
	  if ($(window).scrollTop() >= 200) {
	    $('.site-header').addClass('sticky-header');
	   }
	   else {
	    $('.site-header').removeClass('sticky-header');
	   }
	});
	// Sticky Header JS End

	// Smooth Scrolling JS Start
	$( '#scroll-to-top, .main-navigation ul li a' ).on( 'click', function(e){		
	  	  var target = this.hash,
          $target = $(target);	  
		  jQuery( 'html, body' ).animate({
				scrollTop: $target.offset().top-100
		  }, 1000, 'swing', function (){
		  		window.location.hash = target;
		});

	});
	// Smooth Scrolling JS End

	// Scroll To Top JS Start
	$(window).on( 'scroll', function() {
	  if ($(window).scrollTop() > 300) {
	    $("#scroll-to-top").fadeIn('500');
	  } else {
	    $("#scroll-to-top").fadeOut('500');
	  }
	});
	// Scroll To Top JS End

	// Toogle Menu Mobile JS Start
	$(".toggle-button").on( 'click', function(){
		$(".main-navigation").toggleClass('toggle-menu');
	});
	$(".main-navigation ul li a").on( 'click', function(){
		$(".main-navigation").removeClass('toggle-menu');
	});
	// Toogle Menu Mobile JS End

});

jQuery(window).on('load resize', function() {
		var window_size = jQuery(window).width();
		if (window_size <= 991) {
			// Gallery Slider For Mobile JS Start
		   $('.gallery-slider').not('.slick-initialized').slick({
			  infinite: true,
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  prevArrow: false,
			  nextArrow: false,
			  dots: true,
			  autoplay: true,
		  	  autoplaySpeed: 2000,	
		  	  responsive: [
		  	  {
		  	  	breakpoint: 768,
		  	  	settings: {
		  	  		slidesToShow: 1
		  	  	}
		  	  }
		    ]
		  });
		  // Gallery Slider For Mobile JS End

		  // Trainers Slider For Mobile JS Start
	   $('.trainers-slider').not('.slick-initialized').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  prevArrow: false,
		  nextArrow: false,
		  dots: true,
		  autoplay: true,
	  	  autoplaySpeed: 2000,	
	  	  responsive: [
	  	  {
	  	  	breakpoint: 768,
	  	  	settings: {
	  	  		slidesToShow: 1
	  	  	}
	  	  }
	    ]
	  });
	  // Trainers Slider For Mobile JS End

		}else{
			if($(".gallery-slider, .trainers-slider").hasClass('slick-slider')){            
	            $('.gallery-slider, .trainers-slider').slick('destroy');
	        }
			// $('.gallery-slider, .trainers-slider').slick('destroy');
		}
	});