import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true)
    }
    else
      setColor(false)
  }

  window.addEventListener('scroll', changeColor)

  return (
    <>
      <nav className={color ? 'main-nav nav-bg' : 'main-nav'}>
        {/* 3rd social media links */}
        
        {/* 1st logo part  */}
        <div className="logo">
          
          <Link to="/" ><img src={process.env.PUBLIC_URL + '/logo-white.png'} /></Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/products">All</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">

        </div>

        
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  )
}


export default Navbar;