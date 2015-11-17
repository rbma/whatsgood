'use strict';

const React = require('react');


const Detail = React.createClass({



	getInitialState: function(){
		return {
			entry: {}
		}
	},

	componentDidMount: function(){

		const self = this;
		const id = this.props.params.id;
		const slug = this.props.params.slug;



		// ------------------------------------------------
		// Fetch info here
		//

		if (this.props.entries.length > 1){
			this._parseEntries(this.props.entries);

		}
	
	},

	componentDidUpdate: function(oldProps){

		if (oldProps.entries.length !== this.props.entries.length){

			this._parseEntries(this.props.entries);
		}

	},


	_parseEntries: function(arr){

		let self = this;

		for (let i = 0; i < arr.length; i++ ){

			// ------------------------------------------------
			// Make sure ID is Number! (bugfix)
			//
			let numId = parseInt(self.props.params.id, 10);


			// ------------------------------------------------
			// Loop through all entries and find matching slug/id
			//
			
			if (arr[i].id === numId){


				self.setState({
					entry: arr[i]
				});
			}
		}

	},


	render: function(){

		console.log(this.state.entry);

		return (
			<div className="detail">
				<h1>{this.state.entry.recommender}</h1>
				<h1>{this.state.entry.recordArtist}</h1>
				<h1>{this.state.entry.recordTitle}</h1>
			</div>
		);
	}

});

module.exports = Detail;