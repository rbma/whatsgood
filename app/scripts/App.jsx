'use strict';


// -------------------------------------------------
//
// Main App Export
// 
// -------------------------------------------------

const React = require('react');
const q = require('q');
const $ = require('jquery');
require('velocity-animate');


// ------------------------------------------------
// Utils
//

const Request = require('./utils/request');
const Scroll = require('./utils/scroll');
const Reset = require('./utils/reset-cols');


// ------------------------------------------------
// Components
//
const Left = require('./components/left-col/Left.jsx');
const Right = require('./components/right-col/Right.jsx');



const App = React.createClass({


	getInitialState: function(){
		return {
			//main data
			entries: [],
			//hash
			route: window.location.hash.substr(1),

			//initial route set
			initialRouteSet: false
		}
	},





	// ------------------------------------------------
	// Mount
	//
	componentDidMount: function(){

		let self = this;
		

		//bind hashchange
		window.addEventListener('hashchange', self._onHashChange);


		//fetch data with AJAX
		Request.index().then(function(response){
			
			self.setState({
				entries: response
			});
		});

	},






	// ------------------------------------------------
	// Update
	//
	componentDidUpdate: function(oldProps, oldState){

		//if new data comes in (ie. hasn't loaded on componentDidMount)
		//measure and set columns
		if (oldState.entries !== this.state.entries){
			this._init();
		}

	},





	// ------------------------------------------------
	// Call initial reset
	//
	
	_init: function(){

		//measure and set columns
		Reset();

		if (!this.state.initialRouteSet){
			//check for initial route
			this._handleInitialRoute();
		}
		
	},



	// ------------------------------------------------
	// Scroll to initial item if hash passed in
	//
	_handleInitialRoute: function(){

		console.log('INITIAL ROUTE CALLED');

		let self = this;
		let route = this.state.route;
		let frame = $('#frame');


		$('.item-l').each(function(){

			if (self.state.route === $(this).attr('id')){

				let offsetPos = $(this).offset().top;

				frame.scrollTop(offsetPos);

				return;
			}
		});

		this.setState({
			initialRouteSet: true
		});

		

	},
	




	// ------------------------------------------------
	// Watch for hash change
	//
	_onHashChange: function(){

		console.log('hashchange');

		this.setState({
			route: window.location.hash.substr(1)
		});


	},

	


	// -------------------------------------------------
	//
	// Render
	// 
	// -------------------------------------------------
	
	render: function(){
		return (
			<section className="container--scroll" ref="frame" id="frame" onScroll={Scroll}>
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