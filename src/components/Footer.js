import React from 'react';
import '../styles/Footer.css'; // Import the CSS for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} NUWIT. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/nuwit" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:nuwit@northeastern.edu">
          <i className="fa fa-envelope"></i> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;