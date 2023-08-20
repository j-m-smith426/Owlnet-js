import React from 'react'
import {Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';

import "./Menu.css"
const Menu = () => {
  return (
    <nav className="sidebar">
              <ul>
                <li className='link_block'>
                  <Link to={"/"}>
                    <div className="list_icon">
                    <HomeIcon fontSize='large'/>  
                    </div>

                    <h3 className='link_text'>
                        Home
                    </h3>
                  </Link>
                </li>
                <li className='link_block'>
                  <Link to={"/follow"}>
                    <div className="list_icon">
                    <PeopleIcon fontSize='large'/>  
                    </div>
                    <h3 className='link_text'>

                    Following
                    </h3>
                  </Link>
                </li>
                <li className='link_block'>
                  <Link to={"/setting"}>
                    <div className="list_icon">
                    <SettingsIcon fontSize='large'/>  
                    </div>
                    <h3 className='link_text'>
                        Settings
                        </h3>
                  </Link>
                </li>
                <li className='link_block'>
                  <Link to={"/discover"}>
                    <div className="list_icon">
                    <PublicIcon fontSize='large'/>  
                    </div>
                   <h3 className='link_text'>
                    Discover
                    </h3> 
                  </Link>
                </li>
              </ul>
            </nav>
  )
}

export default Menu