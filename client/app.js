import React, { Component } from 'react';
import NavComponent from './components/nav';


export default class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="nav-con">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<NavComponent />
				</nav>
			</div>
				
				{this.props.children}
			</div>
	)
	}
}
