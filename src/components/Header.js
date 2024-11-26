import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {
  // Defining the state and the function within the component
  const [isVisible, setIsVisible] = useState(false); 

  const toggleDisplay = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  const handleScrollToSection = () => {
    setTimeout(() => {
        const section = document.getElementById('contact-socials');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0); // Delay to ensure the page loads before scrolling
  };

  return (
    <header>
      <div className='logo-wrapper'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/images/brand/logo-black.png`} alt="Logo" /> 
      </div>

      <div className='hamburger-wrapper'>
        <button className="hamburger" onClick={toggleDisplay}>
          {/* Incase of image toggle icons*/}
          <img src={isVisible ? `${process.env.PUBLIC_URL}/images/core/close-nav-menu.png` : `${process.env.PUBLIC_URL}/images/core/hamburger.png`} alt={isVisible ? "Close menu" : "Open menu"} />
          
          {/* Incase of text toggle icons - just remove the comment on the code below*/}
          {/* {isVisible ? '✕' : '☰'} */}
        </button>
      </div>

      <nav onClick={toggleDisplay} className={`nav-content-wrapper ${isVisible ? 'show' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
              Portfolio
            </NavLink>
          </li> 
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li> 
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li> 
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
          </li>
          <NavLink style={{ padding: '0' }} to="/contact" onClick={handleScrollToSection}>
            <button>Get in Touch</button>
          </NavLink> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
