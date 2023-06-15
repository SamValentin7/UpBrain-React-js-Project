import './footer.css';
import { Link } from 'react-router-dom';

const Follow = () => {
  return (
    <div className="footer-col">
      <h4>Follow Us</h4>
      <div className="social-links">
        <Link to="#" title="Share on facebook">
          <i className="fa fa-facebook"></i>
        </Link>
        <Link to="#" title="Share on youtube">
          <i className="fa fa-youtube"></i>
        </Link>
        <Link to="#" title="Share on instagram">
          <i className="fa fa-instagram"></i>
        </Link>
        <Link to="#" title="Share on linkedin">
          <i className="fa fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};
export default Follow;