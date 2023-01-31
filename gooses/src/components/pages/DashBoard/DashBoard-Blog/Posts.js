import React from "react";
import "./Blog.css"

const Posts = (props) => {
  //creating an array of JSX for each post, using the map array method
  const postsJSX = props.posts.map((post, index) => (
    <div className="PostContainer" onClick={() => props.select(post)}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.body}</p>

    </div>
  ));

  return <div className="posts">{postsJSX}</div>;
};

export default Posts;