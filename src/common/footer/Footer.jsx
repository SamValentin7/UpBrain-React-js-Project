import './footer.css'
import { Link } from 'react-router-dom'
import Pages from './Pages'
import SuportUs from './SuportUs'
import More from './More'
import Follow from './Follow'

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          <Pages />
          <SuportUs />
          <More />
          <Follow />
        </div>
      </div>
    </div>
  )
}
export default Footer 