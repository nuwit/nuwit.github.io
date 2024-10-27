import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
        <Link to="/">
          <img src={logo} alt='NUWIT logo'/>
        </Link>
        </div>
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/officers">Officers</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;