import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.scss";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <div className="post">
                  <HeaderStyle>
                    <img
                      className="thumbnail"
                      src={post.thumbnailUrl}
                      alt="thumbnail"
                    />
                    <h3>{post.username}</h3>
                  </HeaderStyle>

                  <img src={post.imageUrl} alt="mainImage" />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </div>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header className="header">
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt="mainImage" />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </div>
    );
  }
}

export default PostContainer;
