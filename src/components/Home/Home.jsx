import React from 'react'
import "./Home.css"
import NewPost from '../Post/NewPost/NewPost'
import LoadedPost from '../Post/LoadedPost/LoadedPost'
const Home = () => {
  return (
    <div className='content_container'>
      <div className="title_block">
        <h1>Home</h1>
      </div>
      <div className="new_post">
        <NewPost />
      </div>
      <LoadedPost />
    </div>
  )
}

export default Home