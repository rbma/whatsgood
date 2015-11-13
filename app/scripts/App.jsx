'use strict';


// -------------------------------------------------
//
// Main App Export
// 
// -------------------------------------------------

const React = require('react');
const q = require('q');
const $ = require('jquery');


// ------------------------------------------------
// Components
//
const Left = require('./components/Left.jsx');
const Right = require('./components/Right.jsx');



const App = React.createClass({


	getInitialState: function(){
		return {
			entries: []
		}
	},


	componentDidMount: function(){

		let self = this;

		this._getData().then(function(response){
			
			self.setState({
				entries: response
			});

			self._init();

		});

	},


	_init: function(){
		let self = this;

		this._resetColumns();

		$('.container--scroll').bind('scroll', function(event){
			self._handleScroll();
		});

	},



	// ------------------------------------------------
	// Fetch data
	//

	_getData: function(){

		let deferred = q.defer();

		$.ajax({
			url: 'data.json',
			type: 'GET',
			success: function(data){
				deferred.resolve(data);

			},
			error: function(res, status, err){
				console.log('DATA ERROR', status, err);
				deferred.reject(err);
			}

		});

		return deferred.promise;

	},
	

	// ------------------------------------------------
	// Set column heights
	//
	
	_resetColumns: function(){

		let right = $('.column.right');
		let left = $('.column.left');

		let lDom = document.getElementById('colLeft');
		let rDom = document.getElementById('colRight');
		let lHeight = lDom.scrollHeight;
		let rHeight = rDom.scrollHeight;


		//find which one is bigger

		if (lHeight > rHeight){
			lDom.style.height = lHeight + 'px';
			rDom.style.height = lHeight + 'px';
		}

		else{
			rDom.style.height = rHeight + 'px';
			lDom.style.height = rHeight + 'px';
		}

		let offset = left.innerHeight() - window.innerHeight;
		

		right.css('top', '-' + offset + 'px');

	},

	_handleScroll: function(){

		let left = $('.column.left');
		let right = $('.column.right');


		// ------------------------------------------------
		// Get scrolltop of left column
		//
		let scrollPos = left.offset().top;

		console.log(scrollPos);
		

		// ------------------------------------------------
		// Reverse it for right
		//


		//multiplying by 2 to account for negative top position
		right.css({
			'transform': 'translate3d(0, ' + (-scrollPos * 2) + 'px, 0)'
		});


	},

	render: function(){
		return (
			<section className="container--scroll">
				<Left/>
				<Right/>
			</section>
		);
	}
});


module.exports = App;