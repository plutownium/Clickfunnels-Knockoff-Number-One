import React from "react";

import classes from "./EmailCapture.module.css";

const emailCapture = () => {
	return (
		<div className={classes.EmailCapture}>
			<div>
				<p>Register Today</p>

				<p>First name</p>
				<input type="text"></input>
				<br />
				<p>Last name</p>
				<input type="text"></input>
				<br />
				<p>Company</p>
				<input type="text"></input>
				<br />
				<p>Email</p>
				<input type="email"></input>
				<br />
				<p>Phone number</p>
				<input type="tel"></input>
				<br />

				<button className={classes.button}>Register</button>
			</div>
		</div>
	);
};

export default emailCapture;
