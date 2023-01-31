import React from "react"
import "./Portfolio.css"

const Post = (props) => {
    return (
        <div className="PostPort">
          <h1>{props.post.body}</h1>
          <img src={props.post.image} />
          <h3>{props.post.date}</h3>
          <p>{props.post.body}</p>
        </div>
      );}

export default Post
