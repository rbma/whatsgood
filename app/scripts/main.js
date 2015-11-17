'use strict';

// -------------------------------------------------
//
// Main entry export
// 
// -------------------------------------------------

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const IndexRoute = require('react-router').IndexRoute;


const App = require('./App.jsx');
const Columns = require('./components/columns/columns');
const Detail = require('./components/detail/detail.jsx');






ReactDOM.render((

	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Columns} />
			<Route path="detail/:id/:slug" component={Detail} />
		</Route>
	</Router>
	

), document.getElementById('mount'));