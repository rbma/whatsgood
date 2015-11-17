'use strict';



const $ = require('jquery');


// ------------------------------------------------
// Measures and sets height of columns
//

module.exports = function(){

	console.log('RESET CALLED');

	//set left and right
	let left = $('.column--content-l');
	let innerR = $('.column--inner-r');
	let frame = $('.container--scroll');

	//get inner scroll height of left and right
	let lDom = document.getElementById('colLeft');
	let rDom = document.getElementById('colRight');
	let lHeight = lDom.scrollHeight;
	let rHeight = rDom.scrollHeight;


	//find which one is bigger and set to equal heights

	if (lHeight > rHeight){
		lDom.style.height = lHeight + 'px';
		rDom.style.height = lHeight + 'px';
		
		frame.css({
			height: window.innerHeight + 'px'
		});

	}

	else{
		rDom.style.height = rHeight + 'px';
		lDom.style.height = rHeight + 'px';
		
		frame.css({
			height: window.innerHeight + 'px'
		});
	}

	let offset = left.innerHeight() - window.innerHeight;
	
	//invert right column
	innerR.css('top', '-' + offset + 'px');

};





