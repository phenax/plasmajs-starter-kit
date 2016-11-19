import React from 'react';

/**
 * Contents inside the head
 */
export class HeadLayout extends React.Component {

	render() {

		return (
			<head>

				<title>{this.props.title || ""}</title>

				{this.props.children}

				<style dangerouslySetInnerHTML={{

					// A little bit of inline css
					__html: `
						ul {
							list-style: none;
							margin: 0;
							padding: 0;
						}

						a {
							color: #369;
						}

						h2 {
							color: #555;
						}
					`.replace(/\s+/gi, ' ') // For removing whitespaces
				}} />
			</head>
		);
	}
}


/**
 * Contents inside the body
 */
export class BodyLayout extends React.Component {

	render() {

		// #mainApp is for the client-side react to take over the component
		// The link tags is in the body so that it doesnt block rendering
		return (

			<body>

				<div id='mainApp'>{this.props.children}</div>

				<script src='/public/js/script.js' defer async />
				<link rel='stylesheet' href='/public/css/style.css' />
			</body>
		);
	}
}
