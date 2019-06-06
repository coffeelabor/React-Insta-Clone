import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        name="search"
        onChange={this.props.searchFilter}
        // onSubmit={this.props.searchFilter}
        placeholder="search..."
        type="text"
        // value={this.props.newSearch}
      />
    );
  }
}

export default SearchBar;
