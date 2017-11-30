import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./landing";

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route path="/" component={Landing} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
