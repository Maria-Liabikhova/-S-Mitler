const { logError } = require("gulp-sass");

$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.svg" alt="Салон красоты">'
		},
		offCanvas: {
			position: right
		}
	});

});
