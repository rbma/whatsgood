'use strict';


// -------------------------------------------------
//
// Main App Export
// 
// -------------------------------------------------

const React = require('react');
const q = require('q');




// ------------------------------------------------
// Utils
//

const Request = require('./utils/request');
const Scroll = require('./utils/scroll');
const Reset = require('./utils/reset-cols');




// ------------------------------------------------
// App
//

const App = React.createClass({


	getInitialState: function(){
		return {
			//main data
			entries: [],

			//initial route set
			initialRouteSet: false
		}
	},





	// ------------------------------------------------
	// Mount
	//
	componentDidMount: function(){

		let self = this;
	


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
		
	},



	// -------------------------------------------------
	//
	// Render
	// 
	// -------------------------------------------------
	
	render: function(){
		return (
			<section className="container--scroll" ref="frame" id="frame" onScroll={Scroll}>
				{this.props.children && React.cloneElement(this.props.children, {
					entries: this.state.entries
				})}
			</section>
		);
	}
});


module.exports = App;