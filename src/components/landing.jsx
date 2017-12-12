// @flow

import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
	<div className="landing">
		<h1 className="lheading">Search Videos</h1>
		<input className="lInput" type="text" placeholder="Search" />
		<Link to="/search">or Browse All</Link>
	</div>
);

export default Landing;
