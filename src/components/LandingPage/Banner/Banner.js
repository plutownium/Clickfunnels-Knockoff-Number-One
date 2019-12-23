import React from "react";

import classes from "./Banner.module.css";
// import "./Banner.module.css";

const banner = props => {
	return (
		<div className={classes.Image}>
			<div className={classes.Cap}></div>

			<div className={classes.Upper}>
				<h1>
					{props.bannerTextMain}: <br />
					{props.bannerTextSubtitle}
				</h1>
			</div>
			<div className={classes.Lower}>
				<h4>
					{props.bannerTextDate}
					<br />
					{props.bannerTextTime}
					<br />
					Placeholder value
				</h4>
			</div>
		</div>
	);
};

export default banner;
