import React from 'react'
import "./Home.css"
import NewPost from '../Post/NewPost/NewPost'
const Home = () => {
  return (
    <div className='content_container'>
      <div className="title_block">
        <h1>Home</h1>
      </div>
      <div className="new_post">
        <NewPost />
      </div>
      <div className="post">Post</div>
    </div>
  )
}

export default Home