import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import PropTypes from 'prop-types'

const TitleBar = props => {
  return (
    <div className="title_bar_post">
        <div className='title_user'>
            <AccountCircleRoundedIcon fontSize='large'/>
            <h5 className='title_user_name'>
                {props.userName}

            </h5>
        </div>
            <MenuRoundedIcon />
        </div>
  )
}

TitleBar.propTypes = {
    userName: String
}

export default TitleBar