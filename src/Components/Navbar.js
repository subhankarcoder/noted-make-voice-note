import React, { useState, useEffect } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoon } from "react-icons/fi";



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>Noted</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#generate">Generate</a>
            </li>
            <li>
              <a href="#card-body">Results</a>
            </li>
            {/* <li>
              <a href="#">Contact</a>
            </li> */}
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a
              className="hamburger"
              href="#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar