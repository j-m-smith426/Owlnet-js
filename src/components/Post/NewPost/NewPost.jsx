import React from 'react'
import TitleBar from '../TitleBar/TitleBar'


const NewPost = () => {
  return (
    <>
        <TitleBar userName={'Test'}/>
        <div className="text_entry">
            <textarea className='borderless post_body' cols={100} placeholder='What is new today?'/>
        </div>
        <div className="inserts">
            <button type='button' className="btn btn-primary rounded">Post</button>
        </div>
    </>
  )
}

export default NewPost