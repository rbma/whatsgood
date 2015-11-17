'use strict';


const React = require('react');

const Left = require('./left-col/Left.jsx');
const Right = require('./right-col/Right.jsx');



const Columns = React.createClass({

	render: function(){
		return (
			<div>
				<div className="equal-overlay">
					<h1>=</h1>
				</div>
				<Left entries={this.props.entries} />
				<Right entries={this.props.entries} />
			</div>
		);
	}

});


module.exports = Columns;