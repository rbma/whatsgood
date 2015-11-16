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
// Utils
//

const Request = require('./utils/request');
const Scroll = require('./utils/scroll');


// ------------------------------------------------
// Components
//
const Left = require('./components/left-col/Left.jsx');
const Right = require('./components/right-col/Right.jsx');



const App = React.createClass({


	getInitialState: function(){
		return {
			//main data
			entries: []
		}
	},


	componentDidMount: function(){

		let self = this;

		//fetch data with AJAX
		Request.index().then(function(response){
			
			self.setState({
				entries: response
			});

			//kick off
			self._init();

		});

	},


	componentDidUpdate: function(oldProps, oldState){

		//if new data comes in (ie. hasn't loaded on componentDidMount)
		//measure and set columns
		if (oldState.entries !== this.state.entries){
			this._resetColumns();
		}

	},


	//set scroll listener
	_init: function(){
		let self = this;

		//measure and set columns
		this._resetColumns();

		

	},



	// ------------------------------------------------
	// Set column heights
	//
	
	_resetColumns: function(){

		let self = this;

		//set left and right
		let right = $('.column--content-r');
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

		//window.addEventListener('scroll', self._handleScroll, false);


		frame.bind('scroll', function(){
			self._handleScroll();
		});

	},


	_handleScroll: function(){
		Scroll();
	},

	render: function(){
		return (
			<section className="container--scroll" ref="frame" id="frame">
				<Left
					entries={this.state.entries}
				/>
				<Right
					entries={this.state.entries}
				/>
			</section>
		);
	}
});


module.exports = App;