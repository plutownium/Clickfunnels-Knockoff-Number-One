import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import classes from "./Customizer.module.css";

class Customizer extends Component {
	render() {
		return (
			<Aux>
				<div className={classes.Banner}>
					<p>Headline</p>
					<input
						type="text"
						name={"bannerTextMain"}
						defaultValue={this.props.bannerTextMain}
						onChange={this.props.changed}
					></input>
					<br />
					<p>Subtitle</p>
					<input
						type="text"
						name={"bannerTextSubtitle"}
						defaultValue={this.props.bannerTextSubtitle}
						onChange={this.props.changed}
					></input>
					<br />
					<p>Date</p>
					<input
						type="text"
						name={"bannerTextDate"}
						defaultValue={this.props.bannerTextDate}
						onChange={this.props.changed}
					></input>
					<br />
					<p>Time</p>
					<input
						type="text"
						name={"bannerTextTime"}
						defaultValue={this.props.bannerTextTime}
						onChange={this.props.changed}
					></input>
				</div>
				<div className={classes.Spacer}></div>
				<div className={classes.Body}>
					<p>Paragraph 1</p>
					<input
						name="text1"
						defaultValue={this.props.text1}
						onChange={this.props.changed}
					></input>
					<p>Paragraph 2</p>
					<input
						name="text2"
						defaultValue={this.props.text2}
						onChange={this.props.changed}
					></input>
					<p>Paragraph 3</p>
					<input
						name="text3"
						defaultValue={this.props.text3}
						onChange={this.props.changed}
					></input>
					<p>Paragraph 4</p>
					<input
						name="text4"
						defaultValue={this.props.text4}
						onChange={this.props.changed}
					></input>
				</div>
			</Aux>
		);
	}
}

export default Customizer;
