import React from 'react';
import '../css/navbar.css';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEnvelope,faBell} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const username = localStorage.getItem('username');
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };
  return (
    <nav className="navbar">
      <div className='dropdownn'>
      <div className="dropdown">
  <button className="btn " type="button" data-bs-toggle="dropdown"  aria-expanded="false">
 <FontAwesomeIcon icon={faBars} style={{color: "#1859c9",}} />
  </button>
  <ul className="dropdown-menu">
    <li><Button className="dropdown-item" onClick={handleLogout} label="ÇIKIŞ YAP"/></li>
    <li><Button className="dropdown-item" label="a"/></li>
    <li><Button className="dropdown-item"label="a" /></li>
  </ul>
</div></div>
      <div className="navbar-profile">
      <Button className="btn"><FontAwesomeIcon  icon={faEnvelope} /></Button>
      <Button className="btn"><FontAwesomeIcon  icon={faBell} /></Button>
        <div className="profile-picture">


          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Profile-picture" />
        </div>
        <span className="username">{username}</span>
   
      </div>
    </nav>
  );
};

export default Navbar;
