import './footer.css'
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div className="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/games">Games</Link></li>
      </ul>
    </div>
  )
}
export default Pages