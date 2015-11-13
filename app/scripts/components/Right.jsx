'use strict';

const React = require('react');
const $ = require('jquery');



const Right = React.createClass({

	render: function(){

		let text = 'This is the right column';
		let collection = [];
		let repeats = 200;

		for (var i = 0; i < repeats; i++ ){
			collection.push(text);
		}


		return (
			<div className="column right" id="colRight">
				{collection.map(function(item, index){
					return <h2 key={index}>{item}</h2>;
				})
			}

			</div>
		);
	}

});

module.exports = Right;