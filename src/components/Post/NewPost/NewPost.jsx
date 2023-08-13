import React from 'react'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const NewPost = () => {
  return (
    <>
        <div className="title_bar_post">
            <AccountCircleRoundedIcon fontSize='large'/>
            <MenuRoundedIcon />
        </div>
        <div className="text_entry">
            <textarea className='borderless' cols={100} placeholder='What is new today?'/>
        </div>
        <div className="inserts">
            <button type='button' className="btn btn-primary rounded">Post</button>
        </div>
    </>
  )
}

export default NewPost