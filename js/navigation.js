

$(document).ready(function() {
	
	// WINDOW SIZE DECIDES WHICH ELEMENT HAS FIXED POSITION FOR NAVIGATION
	
	// if ($(window).width() > 991 ) {
	// 	// calculateHeight();
	// 	$('#header').toggleClass('navbar-fixed-top');
	// } else {
	// 		$('#mobile-header').toggleClass('navbar-fixed-top');
	// }

	// // Using the same process as above but for when window is resized after pageload
	// $(window).resize(function() {

	// 	if ($(window).width() > 991 ) {
	// 			// calculateHeight();
	// 			$('#header').toggleClass('navbar-fixed-top');
	// 		} else {
	// 				$('#mobile-header').toggleClass('navbar-fixed-top');
	// 			}
	// });


	// if ($(window).width() < 991 ) {
	// 	// calculateHeight();
	// 	$('#header').removeClass('navbar-fixed-top');
	// 	$('#mobile-header').addClass('navbar-fixed-top');
	// } else {
		
	// }

	// // Using the same process as above but for when window is resized after pageload
	// $(window).resize(function() {

	// 	if ($(window).width() > 991 ) {
	// 			// calculateHeight();
	// 			$('#header').addClass('navbar-fixed-top');
	// 			$('#mobile-header').removeClass('navbar-fixed-top');
	// 	}
			
	// });

	var hasMenu = $('.has-menu');
	
	hasMenu.on('click', function() {
		$(this).children('.sub-menu').toggle("slow");
	});
	// if ($(window).width() > 991 ) {
		
	// 	hasMenu.addClass('has-menu--hidden');
	// 	$('.has-menu--hidden').hover(function (){	// Select elements with "has-menu" class and then run function on hover
	// 		$(this).children('.sub-menu').fadeToggle("fast");
	// 	});	
	// }


	// $(window).on('resize', function() {

	// 	if ($(window).width() > 991 ) {
	// 		hasMenu.addClass('has-menu--hidden');
	// 	}

	// 	if ($(window).width() < 992 ) {
	// 		$('.has-menu').removeClass('has-menu--hidden');
			
	// 	}

	// 	if ($('.has-menu').hasClass('has-menu--hidden')) {

	// 		$('.has-menu--hidden').hover(function (){	// Select elements with "has-menu" class and then run function on hover
	// 			$(this).children('.sub-menu').fadeToggle("fast");
	// 		});
	// 	}

	// });

	// if (hasMenu.hasClass('has-menu--hidden')) {

	// 	$('.has-menu--hidden').on('hover', function() {	// Select elements with "has-menu" class and then run function on hover
	// 		$(this).children('.sub-menu').fadeToggle("fast");
	// 	});
	// }

	// NAV TOGGLE FOR MOBILE NAV DRAWER

	$('.nav-toggle').on('click', function(event) {
		event.preventDefault();
		$('.wrapper').toggleClass('menu-open');
		$('.nav-drawer').toggleClass('menu-open');
	});

}); // END OF DOCUMENT READY


// if ($(window).width() > 991 ) {
// 	$('.has-menu').addClass('has-menu-hidden');
// 	$('.sub-menu').addClass('sub-menu--hidden');
// }
