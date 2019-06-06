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
    data: []
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    console.log("render", this.state.data);
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
