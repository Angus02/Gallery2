import React from "react"
import "./Blog.css"

const Post = (props) => {
    return (
        <div className="Post">
          <h1>{props.post.body}</h1>
          <h3>{props.post.date}</h3>
          <p>{props.post.body}</p>
        </div>
      );}

export default Post
