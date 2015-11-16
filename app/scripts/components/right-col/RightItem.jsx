'use strict';


const React = require('react');


const RightItem = React.createClass({

	propTypes: {
		item: React.PropTypes.object.isRequired
	},


	render: function(){

		console.log(this.props.item);
		return (
			<div className="item">
				<h1>{this.props.item.recordArtist}</h1>
			</div>
		);
	}

});


module.exports = RightItem;