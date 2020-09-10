// const { logError } = require("gulp-sass");

$(function() {

// 	$('#my-menu').mmenu({
// 		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
// 		navbar: {
// 			title: '<img src="img/logo.svg" alt="Салон красоты">'
// 		},
// 		offCanvas: {
// 			position: "right"
// 		}
// 	});

// 	let api = menu.API.data('mmenu');
// 	let api = $('my-menu').data('mmenu');
// 	api.bind('openPanel:start', function(){
// 		$('.hamburger').addClass('is-active');
// 	});
// 	api.bind('closePanel', function(){
// 		$('.hamburger').removeClass('is-active');
// 	})

  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
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

});
