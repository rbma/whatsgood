'use strict';

const React = require('react');
const Link = require('react-router').Link;
const classNames = require('classnames');

// ------------------------------------------------
// Other component requires
//

const Video = require('./video.jsx');
const Nav = require('../nav/nav.jsx');


const Detail = React.createClass({



	getInitialState: function(){
		return {
			entry: {},
			next: {},
			prev: {},
			current: '',
			textVisible: false
		}
	},

	componentDidMount: function(){

		const self = this;
		const id = this.props.params.id;
		const slug = this.props.params.slug;




		// ------------------------------------------------
		// Fetch info here if already loaded
		//

		if (this.props.entries.length > 1){
			this._parseEntries(this.props.entries);

		}
	
	},

	componentDidUpdate: function(oldProps, oldState){


		if (oldProps.params.id !== this.props.params.id){
			this._parseEntries(this.props.entries);
		}

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
			
			let nextId = numId + 1;
			let prevId = numId - 1;

			// ------------------------------------------------
			// Keep infinite
			//





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

	// ------------------------------------------------
	// Return HTML
	//
	_rawMarkup: function(){
		return {
			__html: this.state.entry.recommenderText
		}
	},



	// ------------------------------------------------
	// Handle Text Toggle
	//
	_handleTextToggle: function(){

		console.log('click');

		this.setState({
			textVisible: !this.state.textVisible
		});

	},
	


	// ------------------------------------------------
	// Render
	//
	
	render: function(){

		// let nextLink = 'detail/' + this.state.next.id + '/' + this.state.next.slug;
		// let prevLink = 'detail/' + this.state.prev.id + '/' + this.state.prev.slug;
		let nextLink = '/';
		let prevLink = '/';


		let cx = classNames({
			'detail--text': true,
			'active': this.state.textVisible
		});

		let cxOverlay = classNames({
			'detail--overlay': true,
			'active': this.state.textVisible
		});




		return (
			<div className="detail">

				<Nav />


				<div className="detail--prev detail--nav">
					<Link to={prevLink}>
						⥢
					</Link>
				</div>

				<div className="detail--next detail--nav">
					<Link to={nextLink}>
						⥤
					</Link>
				</div>


				<div className={cxOverlay}></div>

				<div className="detail--container">
					<h1 className="detail--title">{this.state.entry.recommender}</h1>
					
					<Video videoId={this.state.entry.recommenderVideoId} />

					<h2 className="detail--record-artist">{this.state.entry.recordArtist}</h2>
					<h2 className="detail--record-title">{this.state.entry.recordTitle}</h2>

					<div className={cx}>
						<div className="detail--text-toggle" onClick={this._handleTextToggle}>⥣</div>
						<div 
							className="detail--text-paragraph"
							dangerouslySetInnerHTML={this._rawMarkup()}>
						</div>

						<a href={this.state.entry.recommenderLink}>
							{this.state.entry.recommender} on SoundCloud
						</a>
					</div>
					
				</div>

				
			</div>
		);
	}

});


//<Link to="/">
//	<div className="exit">↩</div>
//</Link>



module.exports = Detail;