'use strict';

window.jQuery = window.$ = require('jquery');
require('velocity-animate');

const Reset = require('./reset-cols');




// -------------------------------------------------
//
// Scroll Handling
// 
// -------------------------------------------------
module.exports = function(){


	const innerR = $('.column--inner-r');
	const frame = document.getElementById('frame');


	// ------------------------------------------------
	// Get scrolltop of left column
	//

	
	let scrollPos = frame.scrollTop || frame.pageYOffset || 0;




	// ------------------------------------------------
	// Reverse it for right
	// multiplying by 2 to account for negative top position

	innerR.css({
		'transform': 'translate3d(0, ' + scrollPos * 2 + 'px, 0)'
	});


	// ------------------------------------------------
	// Check for slugs to update hash
	//
	// $('.item-l').each(function(){

	// 	// -------------------------------------------------
	// 	//
	// 	// THIS IS THE PROBLEM!!! MKAING A NEW REQUEST EACH SCROLL
	// 	// 
	// 	// -------------------------------------------------
		
	// 	if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10){
	// 		history.replaceState(null, null, '#' + $(this).attr('id'))
	// 	}
	// });

};
