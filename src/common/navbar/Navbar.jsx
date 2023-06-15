import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
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
                    <li><Link to="/login">Log</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
        </nav>
    )
}

export default Navbar