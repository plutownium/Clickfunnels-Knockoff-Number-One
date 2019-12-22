import React from "react";

import classes from "./Banner.module.css";
import "./Banner.module.css";

const banner = () => {
	return (
		<div className={classes.Image}>
			<div className={classes.Cap}></div>
			<div className={classes.Upper}>
				<h1>
					Live Webcast: <br />
					New Ways to Mimic Websites For Maximum Learning Potential!
				</h1>
			</div>
			<div className={classes.Lower}>
				<h4>
					Saturday, December 21st, 2019
					<br />
					6:05 pm PST || 9:05 pm EST
					<br />
					Placeholder value
				</h4>
			</div>
		</div>
	);
};

export default banner;
