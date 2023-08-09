// import React from 'react'
import Icon from "../assets/owlnet-logo/cover.png"
import "./NavBar.css";

function NavBar() {
  return (
    <>
        <div className="icon_container">
            <img src={Icon} alt="Logo" className="logo_nav"/>
        </div>
        <div className="search_bar">
            Search
        </div>
        <div className="menu">
            <div>bell</div>
            <div>message</div>
            <div>profile</div>
        </div>
    </>
  )
}

export default NavBar