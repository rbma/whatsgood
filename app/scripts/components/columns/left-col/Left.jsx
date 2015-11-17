'use strict';

const React = require('react');
const $ = require('jquery');
const _ = require('lodash');


// ------------------------------------------------
// Components
//
const LeftItem = require('./LeftItem.jsx');




const Left = React.createClass({

	propTypes: {
		entries: React.PropTypes.array.isRequired
	},






	// shouldComponentUpdate: function(nextProps){


	// 	if (this.props.entries.length > 0){
	// 		if (nextProps.entries[0].slug !== this.props.entries[0].slug){
	// 			return true;
	// 		}
	// 		else{
	// 			return false;
	// 		}
	// 	}

	// 	else{
	// 		return true;
	// 	}
		
	// },




	render: function(){

		let sortedArray = _.sortByOrder(this.props.entries, ['id'], ['asc']);

		let self = this

		return (
			<div className="column left">
				<div className="column--inner-l column--inner">
					<div className="column--content-l" id="colLeft">


						{sortedArray.map(function(item, index){
							return (
								<LeftItem
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

module.exports = Left;