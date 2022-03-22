import React from 'react';
import './Header.css';
import themeSwitchIcon from '../assets/header/theme-switch.png';
import searchIcon from '../assets/header/search.png';
import punkLogo from '../assets/header/cryptopunk-logo.png';
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src={punkLogo}
          className="punkLogo"
          alt="punklogo"
        />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img
            src={searchIcon}
            className="searchInput"
            alt="search icon"
          />
        </div>
        <input
          className="searchInput"
          placeholder="Colletion , item, user"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img
            src={themeSwitchIcon}
            alt="switch icon"
          />
        </div>
      </div>
      <div className="loginButton">
        <p>GET IN</p>
      </div>
    </div>
  );
};

export default Header;
