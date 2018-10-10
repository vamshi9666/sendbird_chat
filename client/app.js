import React, { Component } from 'react';
import NavComponent from './components/nav';


export default class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div className="nav-con">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<NavComponent {...this.props} />
					</nav>
				</div>

				{this.props.children}
			</div>
		)
	}
}
