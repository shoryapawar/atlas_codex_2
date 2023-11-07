import { Link } from 'react-router-dom';
import './Navbar.css' 
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/">Atlas Codex</Link>
      </div>
      <ul className="nav-options">
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/main">Quizes</Link>
        </li>
        <li>
          <Link to="/lesson">Lessons</Link>
        </li>
        <li>
          <Link to="/team">Dev Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;