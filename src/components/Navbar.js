import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt='NUWIT logo'/>
        </Link>
      </div>
      <button className='hamburger' onClick={handleToggle} aria-label='Toggle menu'>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/officers" onClick={handleLinkClick}>Officers</Link></li>
        <li><Link to="/membership" onClick={handleLinkClick}>Membership</Link></li>
        <li><Link to="/sponsors" onClick={handleLinkClick}>Sponsors</Link></li>
        <li><Link to="/calendar" onClick={handleLinkClick}>Calendar</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;