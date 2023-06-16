// Navbar.js

import {useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logout from '../../components/Login/Logout';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setLoggedIn(true);
      setUserImage(user.imageUrl);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    setUserImage('');
    localStorage.removeItem('loggedInUser');
  };

  return (
    <nav>
      <img src="public/assets/Logo.png" alt="The Logo" />
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times"></i>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/games">GAMES</Link></li>
          {loggedIn ? (
            <>
              <li>
                <img src={userImage} alt="User Profile" />
              </li>
              <li><Logout onLogout={handleLogout} /></li>
            </>
          ) : (
            <li><Link to="/login">Log In</Link></li>
          )}
        </ul>
      </div>
      <i className="fa fa-bars"></i>
    </nav>
  );
};

export default Navbar;
