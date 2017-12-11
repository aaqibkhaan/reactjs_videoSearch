// @flow


import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

type Props = {
    name: string
};

type State = {
  searchTerm: string,
};

class Search extends Component<Props, State> {

  state = {
    searchTerm: ""
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget instanceof HTMLInputElement) {
    this.setState({ searchTerm: event.currentTarget.value });
  }
};


  render() {
    return (
      <div className="search">
        <header>
          <h1>Search Videos</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
