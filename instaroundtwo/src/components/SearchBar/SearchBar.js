import React from "react";
import "./SearchBar.scss";
import { Button } from "reactstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          name="search"
          onChange={this.props.searchFilter}
          // onSubmit={this.props.searchFilter}
          placeholder="search..."
          type="text"
          // value={this.props.newSearch}
        />
        <Button>Log In</Button>
      </div>
    );
  }
}

export default SearchBar;
