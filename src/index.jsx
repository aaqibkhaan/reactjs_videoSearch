import React from "react";
import { render } from "react-dom";
import App from "./components/app";
/* eslint no-undef: "off" */

const renderApp = () =>{
	render(<App />, document.getElementById("app"));	
};

renderApp();

if(module.hot){
	module.hot.accept('./components/app', () => {
		renderApp();
	});
}





