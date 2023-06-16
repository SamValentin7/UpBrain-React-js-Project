import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logout from '../../components/Login/Logout';
import { GoogleLogin } from 'react-google-login';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState('');

  const handleLogout = () => {
    setLoggedIn(false);
    setUserImage('');
  };

  const handleLogin = (response) => {
    const { profileObj } = response;
    setLoggedIn(true);
    setUserImage(profileObj.imageUrl);
    console.log(profileObj);
    console.log(response);
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
