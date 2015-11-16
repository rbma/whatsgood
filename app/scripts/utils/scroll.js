'use strict';

window.jQuery = window.$ = require('jquery');
require('velocity-animate');




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

};
