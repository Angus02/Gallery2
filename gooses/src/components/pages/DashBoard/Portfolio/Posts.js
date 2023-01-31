import React from "react";
import "./Portfolio.css"

const Posts = (props) => {
  //creating an array of JSX for each post, using the map array method
  const postsJSX = props.posts.map((post, index) => (
    <div className="PostContainerPort" onClick={() => props.select(post)}>
      <h1>{post.title}</h1>
      <img src={post.image} width="550px" />
      <p>{post.date}</p>
      <p>{post.body}</p>

    </div>
  ));

  return <div className="posts">{postsJSX}</div>;
};

export default Posts;