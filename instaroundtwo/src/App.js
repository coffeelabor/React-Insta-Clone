import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

import "./App.css";

class App extends React.Component {
  // constructor(props) {  //line 9-11 are unneeded since they are provided already
  //   super(props);
  //   this.
  state = {
    data: [],
    search: "",
    filteredPosts: []
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchFilter = e => {
    // const newFilter = this.state.data.filter(
    //   post => post.username === this.state.search
    // );
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    console.log("render", this.state.data);
    return (
      <div className="App">
        <SearchBar
          // changeHandler={this.changeHandler}
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />
        <PostContainer
          data={this.state.data}
          filteredPosts={this.state.filteredPosts}
          searchFilter={this.searchFilter}
        />
      </div>
    );
  }
}

export default App;
