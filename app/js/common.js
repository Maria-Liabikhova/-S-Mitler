// const { logError } = require("gulp-sass");

$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right', 'position-front'],
		navbar: {
			title: '<img src="img/logo.svg" alt="Салон красоты">'
		},
	});


  // let api = $('#my-menu').data('mmenu');
  
	// api.bind('open:start', function() {
	// 	$('.hamburger').addClass('is-active');
  //   });
	// api.bind('close:before', function() {
	// 	$('.hamburger').removeClass('is-active');
  //   });

 
  
  $('.carousel-services').owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items:3
      },
    }
  });

  function carouselService() {
    $('.carousel-services-item').each(function() {
      let ths = $(this),
        thsh = ths.find('.carousel-services-composition').outerHeight();
        ths.find('.carousel-services-image').css('min-height', thsh);
    });
  }carouselService();



  $('.carousel-services-composition .h3').each(function() {
    let ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

  $('.section-overley .h2').each(function() {
    let ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

  $('select').selectize();

  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    navContainer: false,

  });

  $('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2

      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });

  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });
  
	$("form.callback").submit(function() { 
		var th = $(this);
    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
    setTimeout(function() {
      $(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 3000);
  return false;
  });

});

$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');
})
