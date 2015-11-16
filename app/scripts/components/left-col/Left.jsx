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


	render: function(){

		let sortedArray = _.sortByOrder(this.props.entries, ['id'], ['asc']);



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