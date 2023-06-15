import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="text-box">
                <h1>Math Games</h1>
                <p>Free games for your brain</p>
                <Link className="hero-btn" to="/games">Play Now</Link>
            </div>
        </div>
    )
}

export default Header