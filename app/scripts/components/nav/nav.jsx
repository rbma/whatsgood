'use strict';


const React = require('react');
const Link = require('react-router').Link;


const Nav = React.createClass({


	_handleFB: function(){

		console.log('FB');

	},

	_handleTwitter: function(){

		console.log('TW');

	},


	render: function(){
		return (
			<nav>
				<div className="nav--logo">
					<Link to="/">
						<div className="logo"></div>
					</Link>
				</div>
				<div className="nav--share">
					<div className="icon facebook" onClick={this._handleFB}></div>
					<div className="icon twitter" onClick={this._handleTwitter}></div>
				</div>
			</nav>
		);
	}

});



module.exports = Nav;