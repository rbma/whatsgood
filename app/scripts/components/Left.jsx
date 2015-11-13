'use strict';

const React = require('react');
const $ = require('jquery');



const Left = React.createClass({


	render: function(){


		let text = 'This is the left column';
		let collection = [];
		let repeats = 100;

		for (var i = 0; i < repeats; i++ ){
			collection.push(text);
		}


		return (
			<div className="column left" id="colLeft">
				{collection.map(function(item, index){
					return <h2 key={index}>{item}</h2>;
				})
			}

			</div>
		);
	}

});

module.exports = Left;