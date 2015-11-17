'use strict';

// -------------------------------------------------
//
// Individual entry item - Left Column
// 
// -------------------------------------------------

const React = require('react');
const ColImage = require('../column-image.jsx');



const LeftItem = React.createClass({

	propTypes: {
		//entry data
		item: React.PropTypes.object.isRequired,

	},


	// ------------------------------------------------
	// Render
	//
	
	render: function(){


		return (
			<div className="item item-l" ref="item">
				<ColImage
					imgSrc={this.props.item.recommenderImage}
					imgAlt={this.props.item.recommender}
					slug={this.props.item.slug}
					id={this.props.item.id}
				/>
				<h1>{this.props.item.recommender}</h1>
			</div>
			

			
		);
	}

});


module.exports = LeftItem;