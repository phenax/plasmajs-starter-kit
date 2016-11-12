import React from 'react';
import { Link } from 'plasmajs/router';

export default class Navigation extends React.Component {

	render() {
		
		return (
			<nav>

				<ul>

					<li><Link to='/'>Home</Link></li>

					<li><Link to='/about'>About</Link></li>

					<li><Link to='/this-page-doesnt-exist'>Error</Link></li>

				</ul>

			</nav>
		);
	}
}