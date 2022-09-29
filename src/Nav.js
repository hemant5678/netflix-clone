import React, { useEffect, useState } from 'react'
import logo from "./Netflix-Brand-Logo-removebg-preview.png"
import avatar from "./Netflix-avatar.png"
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100)
      {
        handleShow(true);
      }
      else 
      {
        handleShow(false)
      };
      
    });

  }, []);
 
  return (
    <div className={`nav ${show && "nav_black"}`}>
    
        <img className="logo" src={logo} alt='logo'/>
        <img className="avatar" src={avatar} alt='logo'/>

    </div>
  )
}

export default Nav