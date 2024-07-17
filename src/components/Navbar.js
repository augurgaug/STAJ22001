import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">HomePage</div>
      <div className="navbar-profile">
        
        <div className="profile-picture">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Profile-picture" />
        </div>
        <span className="username">Aug Ugurg</span>
      </div>
    </nav>
  );
};

export default Navbar;
