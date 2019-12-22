import React, { Component } from "react";

class Body extends Component {
	render() {
		return (
			<div>
				<div>
					<p>{this.props.text1}</p>
					<p>{this.props.text2}</p>
					<p>{this.props.text3}</p>
					<p>{this.props.text4}</p>
				</div>
				<div>
					<p>Trust Badges #1, ... #7 </p>
				</div>
			</div>
		);
	}
}

export default Body;
