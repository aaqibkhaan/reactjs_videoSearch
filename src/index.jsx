// @flow

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
/* eslint no-undef: "off" */
const appId = (document.getElementById("app"): any);

const renderApp = () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		appId
	);
};

renderApp();

if (module.hot) {
	module.hot.accept("./components/app", () => {
		renderApp();
	});
}