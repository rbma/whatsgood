'use strict';

// -------------------------------------------------
//
// Individual entry item - Left Column
// 
// -------------------------------------------------

const React = require('react');


const LeftItem = React.createClass({

	propTypes: {

		item: React.PropTypes.object.isRequired

	},

	render: function(){

		let imgSrc = 'http://img.youtube.com/vi/' + this.props.item.videoUrl + '/0.jpg';

		let style = {
			background: 'url(' + imgSrc + ') no-repeat center center',
			backgroundSize: 'cover'
		};



		return (
			<div className="item" style={style}>
				<h1>{this.props.item.recommender}</h1>
			</div>

			
		);
	}

});


module.exports = LeftItem;