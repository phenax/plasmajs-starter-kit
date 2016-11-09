import React from 'react';

import Navigation from './components/Navigation.jsx';

export default class IndexLayout extends React.Component {

	constructor(props) {
		super(props);
		
		this.state= {
			clicks: 0
		};
	}

	_clickHandler() {

		this.setState({
			clicks: this.state.clicks + 1
		});
	}

	render() {

		return (
			<div>

				<h2>My index awesomeness</h2>

				<Navigation />

				<button onClick={this._clickHandler.bind(this)}>
					{this.state.clicks} clicks
				</button>
			</div>
		);
	}
}
