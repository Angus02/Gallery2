import Post from "./Post";
import Posts from "./Posts";
import Blog from "./Blog-posts.json"
import React from "react";
import "./Blog.css"

const DashBlog = () => {
  

  //Post to track the post displayed by Post
  const [post, setPost] = React.useState(Blog[0])

  //Function to change the displayed post
  const selectPost = (selected) => {
    setPost(selected)
  }

  return (

    <div className='Background'>
      <div className='centered'>
        <div>
                        <div className="Recentre">
                          <Posts posts={Blog} select={selectPost}/>
                        </div>
        </div>
      </div>
    </div>
  );
}

export default DashBlog;