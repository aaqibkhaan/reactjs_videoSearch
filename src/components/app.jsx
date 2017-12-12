// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from 'react-router-dom';
import Landing from "./landing";
import Search from "./search";
import Details from "./Details";
import preload from '../data.json';

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={(props) => <Search shows={preload.shows} {...props}/>} />
				<Route
					exact
					path="/details/:id"
					component={(props: { match: Match }) => {
							const selectedShow= preload.shows.find(show =>
									props.match.params.id === show.imdbID
								);
							return (<Details show={selectedShow} {...props} />);
					}}
				/>
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;