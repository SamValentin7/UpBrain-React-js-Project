import './footer.css'
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <div className="footer-col">
      <h4>More</h4>
      <ul>
        <li><a href="https://www.mathgames.com/" target="https://www.mathgames.com/">mathgames.com</a></li>
        <li><a href="https://www.coolmathgames.com/" target="https://www.coolmathgames.com/">coolmathgames.com</a></li>
        <li><a href="https://www.mathplayground.com/math-games.html/" target="https://www.mathplayground.com/math-games.html/">mathplayground.com</a></li>
      </ul>
    </div>
  )
}
export default More