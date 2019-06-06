import React from "react";

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };
  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return (
            <>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </>
          );
        })}
        <p className="timestamp">{this.props.timestamp}</p>
        <input type="text" name="newComment" placeholder="add a comment ..." />
      </div>
    );
  }
}

export default CommentSection;
