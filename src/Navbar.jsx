import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Ensure correct path to your CSS file

function NavBar() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  const handleDropdownToggle1 = () => {
    setDropdownOpen1(!dropdownOpen1);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
  };

  const handleDropdownToggle2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    setDropdownOpen1(false);
    setDropdownOpen3(false);
  };

  const handleDropdownToggle3 = () => {
    setDropdownOpen3(!dropdownOpen3);
    setDropdownOpen1(false);
    setDropdownOpen2(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef1.current && !dropdownRef1.current.contains(event.target) &&
      dropdownRef2.current && !dropdownRef2.current.contains(event.target) &&
      dropdownRef3.current && !dropdownRef3.current.contains(event.target)
    ) {
      setDropdownOpen1(false);
      setDropdownOpen2(false);
      setDropdownOpen3(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src='/logo/practo-logo-917D9B45A1-seeklogo.com.png' alt="Logo" />
          </div>
          <ul className="nav-links left">
            <li><a href="#">Find Doctors</a></li>
            <li><a href="#">Video Consult</a></li>
            <li><a href="#">Surgeries</a></li>
          </ul>
          <ul className="nav-links right">
            <li className="nav-itemm dropdownplz" ref={dropdownRef1}>
              <a
                className="nav-link dropdownplz-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen1 ? 'true' : 'false'}
                onClick={handleDropdownToggle1}
              >
                <span className="new-badge cushion-right-small">NEW</span> For Corporates
              </a>
              <div
                className={`dropdownplz-menu ${dropdownOpen1 ? 'show' : ''}`}
                aria-labelledby="navbarDropdown1"
              >
                <a className="dropdownplz-item" href="#action/3.1" onClick={() => setDropdownOpen1(false)}>Health & wellness plans</a>
                <a className="dropdownplz-item" href="#action/3.2" onClick={() => setDropdownOpen1(false)}>Group Insurance</a>
                <div className="dropdownplz-divider"></div>
              </div>
            </li>
            <li className="nav-itemm dropdownplz" ref={dropdownRef2}>
              <a
                className="nav-link dropdownplz-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen2 ? 'true' : 'false'}
                onClick={handleDropdownToggle2}
              >
                For Providers 
              </a>
              <div
                className={`dropdownplz-menu ${dropdownOpen2 ? 'show' : ''}`}
                aria-labelledby="navbarDropdown2"
              >
                <a className="dropdownplz-item" href="#action/3.1" onClick={() => setDropdownOpen2(false)}>Practo Prime</a>
                <a className="dropdownplz-item" href="#action/3.2" onClick={() => setDropdownOpen2(false)}>Software for providers </a>
                <a className="dropdownplz-item" href="#action/3.3" onClick={() => setDropdownOpen2(false)}>List your practice for free</a>
                <div className="dropdownplz-divider"></div>
                <a className="dropdownplz-item" href="#action/3.4" onClick={() => setDropdownOpen2(false)}>ABDM</a>
              </div>
            </li>
            <li className="nav-itemm dropdownplz" ref={dropdownRef3}>
              <a
                className="nav-link dropdownplz-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen3 ? 'true' : 'false'}
                onClick={handleDropdownToggle3}
              >
                Security & help
              </a>
              <div
                className={`dropdownplz-menu ${dropdownOpen3 ? 'show' : ''}`}
                aria-labelledby="navbarDropdown3"
              >
                <a className="dropdownplz-item" href="#action/3.1" onClick={() => setDropdownOpen3(false)}>Data security</a>
                <a className="dropdownplz-item" href="#action/3.2" onClick={() => setDropdownOpen3(false)}>Help</a>
                <div className="dropdownplz-divider"></div>
              </div>
            </li>
            <li className="auth-link"><a href="#">Login/Signup</a></li>
          </ul>
        </div>
      </nav>
      <hr className="sectionn-divider" />
    </div>
  );
}

export default NavBar;
