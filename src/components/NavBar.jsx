// import React from 'react'
import Icon from "../assets/owlnet-logo/cover.png"
import "./NavBar.css";
import { SearchBar } from "./SearchBar/SearchBar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function NavBar() {
  return (
    <>
        <div className="icon_container">
            <img src={Icon} alt="Logo" className="logo_nav"/>
        </div>
        <div className="search_bar">
            <SearchBar />
        </div>
        <div className="menu">
            <div>
              <NotificationsIcon />
            </div>
            <div>
              <MessageIcon />
            </div>
            <div>
              <AccountCircleRoundedIcon />
            </div>
        </div>
    </>
  )
}

export default NavBar