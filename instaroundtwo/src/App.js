import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import styled from "styled-components";

import "./App.css";

const WrapperDiv = styled.div`
  text-align: center;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

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
    const filtered = this.state.data.filter(
      post =>
        post.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.likes.toString().includes(e.target.value.toString())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    console.log("render", this.state.data);
    return (
      <div className="App">
        <div>
          <SearchBar
            // changeHandler={this.changeHandler}
            newSearch={this.state.search}
            searchFilter={this.searchFilter}
          />
        </div>
        <WrapperDiv>
          <PostContainer
            data={this.state.data}
            filteredPosts={this.state.filteredPosts}
            searchFilter={this.searchFilter}
          />
        </WrapperDiv>
      </div>
    );
  }
}

export default App;
