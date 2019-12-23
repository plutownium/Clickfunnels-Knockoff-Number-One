import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import AuthContext from "../../context/auth-context";

import Banner from "./Banner/Banner";
import Body from "./Body/Body";
import EmailCapture from "./EmailCapture/EmailCapture";

class LandingPage extends Component {
	static contextType = AuthContext;

	render() {
		console.log("contextType: ", this.context);
		let containerStyle = {
			display: "flex",
			// overflow: "auto",
			margin: "auto",
			width: "900px"
		};
		return (
			<Aux>
				<Banner
					bannerTextMain={this.context.bannerTextMain}
					bannerTextSubtitle={this.context.bannerTextSubtitle}
					bannerTextDate={this.context.bannerTextDate}
					bannerTextTime={this.context.bannerTextTime}
				/>

				<div>
					<h3>Market to who matters</h3>
				</div>

				<div style={containerStyle}>
					<AuthContext.Consumer>
						{context => (
							<Body
								text1={context.text1}
								text2={context.text2}
								text3={context.text3}
								text4={context.text4}
							/>
						)}
					</AuthContext.Consumer>

					<EmailCapture></EmailCapture>
				</div>
			</Aux>
		);
	}
}

export default LandingPage;
