'use strict';


const React = require('react');
const classNames = require('classnames');
const Link = require('react-router').Link;



const DetailImage = React.createClass({


	propTypes: {
		imgSrc: React.PropTypes.string.isRequired,
		imgAlt: React.PropTypes.string.isRequired,
		slug: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired
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

		let link = 'detail/' + this.props.id + '/' + this.props.slug;

		return (
			<div className="item--image-container">
				<Link to={link}>
					<img className={cx} ref="img" src={this.props.imgSrc} alt={this.props.imgAlt} />
				</Link>
			</div>
		);

	}



});


module.exports = DetailImage;