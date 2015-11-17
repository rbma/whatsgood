'use strict';


const React = require('react');

const Video = React.createClass({

	propTypes: {
		videoId: React.PropTypes.string.isRequired
	},


	getDefaultProps: function(){

		return {
			videoId: ''
		};

	},


	render: function(){


		let src = 'http://youtube.com/embed/' + this.props.videoId +
			'?autoplay=0&loop=1&hd=1&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0'


		if (this.props.videoId){
			return (

				<div className="detail--video-outer-container">
					<div className="detail--video-inner-container">
						<h1>◎</h1>
						<iframe
							frameBorder="0"
							scrolling="no"
							seamless="seamless"
							webkitAllowFullScreen="webkitAllowFullScreen"
							mozAllowFullScreen="mozAllowFullScreen"
							allowFullScreen="allowFullScreen"
							width="640"
							height="360"
							src={src}
						>
						</iframe>
					</div>
				</div>
			);

		}

		else{
			return null;
		}
		
	}

});


module.exports = Video;