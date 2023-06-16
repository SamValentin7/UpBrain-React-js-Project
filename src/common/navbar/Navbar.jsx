import { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logout from '../../components/Login/Logout';
import Login from '../../components/Login/Login';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('loggedInUser');
        window.location.reload();
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
                        <li><Logout onLogout={handleLogout} /></li>
                    ) : (
                        <li><Login /></li>
                    )}
                </ul>
            </div>
            <i className="fa fa-bars"></i>
        </nav>
    );
};

export default Navbar;
