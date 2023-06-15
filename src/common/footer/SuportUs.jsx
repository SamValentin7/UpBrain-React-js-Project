import './footer.css'
import { Link } from 'react-router-dom'

const SuportUs = () => {
  return (
    <div className="footer-col">
      <h4>Suport Us</h4>
      <ul>
        <li><Link to="/paypal">PayPal</Link></li>
      </ul>
    </div>
  )
}
export default SuportUs