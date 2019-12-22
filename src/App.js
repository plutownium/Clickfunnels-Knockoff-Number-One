import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Banner from "./components/Banner/Banner";
import SalesButton from "./components/SalesButton/SalesButton";
import Body from "./components/Body/Body";
import EmailCapture from "./components/EmailCapture/EmailCapture";

class App extends Component {
	state = {
		text1:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at varius nisi. Donec nulla orci, vulputate eu eleifend efficitur, blandit non velit.Proin volutpat malesuada urna in molestie.Sed efficitur orci a tellus porttitor pharetra. Donec eu iaculis mauris.Sed nec enim euismod, blandit quam non, condimentum mauris.",
		text2:
			"Fusce ac lorem est. Ut id dui id sem sollicitudin tristique. Mauris pellentesque mi id rutrum rhoncus.",
		text3:
			"Nunc at facilisis urna. Integer sed sollicitudin tortor. Nullam venenatis non nibh ut sagittis. Praesent lacinia, mi efficitur tristique dictum, lorem est porta dui, sed posuere tellus turpis et nunc.",
		text4: "Hope you will join us!"
	};

	render() {
		let containerStyle = {
			display: "flex",
			// overflow: "auto",
			margin: "auto",
			width: "900px"
		};
		let container2 = {
			// display: "flex",
			overflow: "auto",
			margin: "auto",
			width: "900px"
		};

		return (
			<div className="App">
				<div style={container2}>
					<div>Mackintosh Marketing Solutions</div>
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<SalesButton />
				</div>
				<Banner></Banner>
				<div>
					<h3>Market to who matters</h3>
				</div>

				<div style={containerStyle}>
					<Body
						text1={this.state.text1}
						text2={this.state.text2}
						text3={this.state.text3}
						text4={this.state.text4}
					/>

					<EmailCapture></EmailCapture>
				</div>
			</div>
		);
	}
}

export default App;

// https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css
