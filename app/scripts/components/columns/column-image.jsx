'use strict';


const React = require('react');
const classNames = require('classnames');


const DetailImage = React.createClass({


	propTypes: {
		imgSrc: React.PropTypes.string.isRequired,
		imgAlt: React.PropTypes.string.isRequired
	},

	getInitialState: function(){
		return {
			loaded: false
		};

	},

	componentDidMount: function(){

		let imgTag = this.refs.img;
		let imgSrc = imgTag.getAttribute('src');

		let img = new Image();
		img.onload = this._onImageLoad;
		img.src = imgSrc;

	},

	_onImageLoad: function(){

		console.log('load');

		if (this.isMounted()){
			this.setState({loaded: true});
		}
	},



	render: function(){

		let self = this;

		let cx = classNames({
			'item--image': true,
			'image-loaded': self.state.loaded
		});

		return (
			<div className="item--image-container">
				<img className={cx} ref="img" src={this.props.imgSrc} alt={this.props.imgAlt} />
			</div>
		);

	}



});


module.exports = DetailImage;