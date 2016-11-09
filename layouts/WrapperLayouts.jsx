
import React from 'react';


export class HeadLayout extends React.Component {

	render() {
		return (
			<head>
				<title>{this.props.title || ""}</title>
				<style dangerouslySetInnerHTML={{
					__html: `
						:root {
							font-size: 16px;
							color: #333;
							font-family: 'Helvetica', 'Arial', 'sans-serif';
						}

						html, body {
							margin: 0;
							padding: 0;
						}
					`.replace(/\s+/gi, ' ') // For removing whitespaces
				}} />
			</head>
		);
	}
}


export class BodyLayout extends React.Component {

	render() {

		// #mainApp is for the client-side react to take over the component
		return (
			<body>
				<div id='mainApp'>
					{this.props.children}
				</div>

				<link rel='stylesheet' href='/public/css/style.css' />
				<script src='/public/js/script.js' defer async />
			</body>
		);
	}
}
