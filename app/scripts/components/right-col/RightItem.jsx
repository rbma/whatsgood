'use strict';


const React = require('react');


const RightItem = React.createClass({

	propTypes: {
		item: React.PropTypes.object.isRequired
	},


	// ------------------------------------------------
	// Only update if we have new item info
	//
	
	shouldComponentUpdate: function(nextProps){

		if (nextProps.item.slug !== this.props.item.slug){
			return true;
		}

		else{
			return false;
		}

	},




	render: function(){

		return (
			<div className="item">
				<h1>{this.props.item.recordArtist}</h1>
			</div>
		);
	}

});


module.exports = RightItem;