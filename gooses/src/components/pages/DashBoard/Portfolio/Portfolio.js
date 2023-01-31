import Post from "./Post";
import Posts from "./Posts";
import Portfolio from "./Portfolio-posts.json"
import React from "react";
import "./Portfolio.css"

const DashPortfolio = () => {
  

  //Post to track the post displayed by Post
  const [post, setPost] = React.useState(Portfolio[0])

  //Function to change the displayed post
  const selectPost = (selected) => {
    setPost(selected)
  }

  return (

  <div className='Background'>
        <div className='centered'>
                <div className="RecentrePort">
                <Posts posts={Portfolio} select={selectPost}/>
                </div>
        </div>
      </div>
  );
}

export default DashPortfolio;