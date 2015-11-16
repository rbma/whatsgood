'use strict';

// -------------------------------------------------
//
// Individual entry item - Left Column
// 
// -------------------------------------------------

const React = require('react');



const LeftItem = React.createClass({

	propTypes: {
		//entry data
		item: React.PropTypes.object.isRequired,

		//current scrollPosition of frame
		scrollPos: React.PropTypes.number.isRequired

	},


	componentDidMount: function(){

		console.log(this.props.scrollPos);



	},

	componentDidUpdate: function(prevProps){
		
		//console.log($(this.refs.item).offset().top, this.props.scrollPos);

		let item = $(this.refs.item);

		console.log(item.offset().top, this.props.scrollPos);


		// if (item.offset().top <= this.props.scrollPos + 10 && item.offset().top + item.height() > this.props.scrollPos + 10){
		// 	console.log(this.props.item.slug);
		// }
	},



	_checkScroll: function(){
		console.log('scrolling');
	},








	// ------------------------------------------------
	// Render
	//
	
	render: function(){

		let imgSrc = this.props.item.recommenderImage;

		let style = {
			//background: 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1)',
			background: 'url(' + this.props.item.recommenderImage + ') no-repeat center center',
			backgroundSize: 'cover'
		};



		return (
			<div className="item item-l" style={style} ref="item" id={this.props.item.slug}>
				<h1>{this.props.item.recommender}</h1>
			</div>
			

			
		);
	}

});


module.exports = LeftItem;