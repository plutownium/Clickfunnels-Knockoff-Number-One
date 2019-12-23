import React, { Component } from "react";
import "./App.css";

import SalesButton from "./components/LandingPage/SalesButton/SalesButton";
import LandingPage from "./components/LandingPage/LandingPage";
import AuthContext from "./context/auth-context";
import Customizer from "./components/Customizer/Customizer";

class App extends Component {
	state = {
		bannerTextMain: "Live Webcast",
		bannerTextSubtitle:
			"New Ways to Mimic Websites For Maximum Learning Potential!",
		bannerTextDate: "Saturday, December 21st, 2019",
		bannerTextTime: "6:05 pm PST || 9:05 pm EST",
		bannerTextDuration: "Placeholder text",
		text1:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at varius nisi. Donec nulla orci, vulputate eu eleifend efficitur, blandit non velit.Proin volutpat malesuada urna in molestie.Sed efficitur orci a tellus porttitor pharetra. Donec eu iaculis mauris.Sed nec enim euismod, blandit quam non, condimentum mauris.",
		text2:
			"Fusce ac lorem est. Ut id dui id sem sollicitudin tristique. Mauris pellentesque mi id rutrum rhoncus.",
		text3:
			"Nunc at facilisis urna. Integer sed sollicitudin tortor. Nullam venenatis non nibh ut sagittis. Praesent lacinia, mi efficitur tristique dictum, lorem est porta dui, sed posuere tellus turpis et nunc.",
		text4: "Hope you will join us!"
	};

	modifyText = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	render() {
		let float = {
			// display: "flex",
			// overflow: "auto",
			float: "left"
		};
		let container2 = {
			// display: "flex",
			overflow: "auto",
			margin: "auto",
			width: "900px"
			// float: "left"
		};

		return (
			<div className="App">
				<div style={container2}>
					<div>Mackintosh Marketing Solutions</div>
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<SalesButton />
				</div>

				<div>
					<div style={float}>
						<Customizer
							bannerTextMain={this.state.bannerTextMain}
							bannerTextSubtitle={this.state.bannerTextSubtitle}
							bannerTextDate={this.state.bannerTextDate}
							bannerTextTime={this.state.bannerTextTime}
							text1={this.state.text1}
							text2={this.state.text2}
							text3={this.state.text3}
							text4={this.state.text4}
							changed={this.modifyText}
						></Customizer>
					</div>
					<div>
						<AuthContext.Provider
							value={{
								bannerTextMain: this.state.bannerTextMain,
								bannerTextSubtitle: this.state
									.bannerTextSubtitle,
								bannerTextDate: this.state.bannerTextDate,
								bannerTextTime: this.state.bannerTextTime,
								text1: this.state.text1,
								text2: this.state.text2,
								text3: this.state.text3,
								text4: this.state.text4
							}}
						>
							<LandingPage style={float}></LandingPage>
						</AuthContext.Provider>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

// https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css
