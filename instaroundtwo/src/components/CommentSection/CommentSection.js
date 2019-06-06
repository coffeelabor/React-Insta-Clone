import React from "react";
import "./CommentSection.scss";
import styled from "styled-components";

const CommentStyled = styled.div`
  display: flex;
  align-items: center;
`;

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Reed",
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return (
            <CommentStyled>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </CommentStyled>
          );
        })}
        <p className="timestamp">{this.props.timestamp}</p>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="add a comment ..."
            searchFilter={this.searchFilter}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
