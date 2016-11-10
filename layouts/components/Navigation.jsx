import React from 'react';
import { Link } from 'plasmajs/router/Router.jsx';

export default class Navigation extends React.Component {

	render() {
		
		return (
			<nav>

				<ul>

					<li><Link to='/'>Home</Link></li>

					<li><Link to='/about'>About Page</Link></li>

				</ul>

			</nav>
		);
	}
}