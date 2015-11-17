'use strict';

const React = require('react');
const $ = require('jquery');
const _ = require('lodash');


// ------------------------------------------------
// Components
//
const RightItem = require('./RightItem.jsx');




const Right = React.createClass({

	propTypes: {
		entries: React.PropTypes.array.isRequired
	},




	render: function(){

		
		let sortedArray = _.sortByOrder(this.props.entries, ['id'], ['desc']);

		
		

		return (
			
			<div className="column right">
				<div className="column--inner-r column--inner">
					<div className="column--content-r" id="colRight">
						{sortedArray.map(function(item, index){
							return (
								<RightItem
									key={index}
									item={item}
								/>
							);
						})
					}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Right;