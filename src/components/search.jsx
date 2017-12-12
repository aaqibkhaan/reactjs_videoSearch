// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

type Props = {
  shows: Array<Show>
};

type State = {
  searchTerm: string
};

class Search extends Component<Props, State> {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget instanceof HTMLInputElement) {
      this.setState({ searchTerm: event.currentTarget.value });
    }
  };

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
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