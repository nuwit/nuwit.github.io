import React from 'react';
import '../styles/Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} NUWIT. All Rights Reserved.</p>
      <div className="footer-links">
      <a href="https://nuwit-community.slack.com/signup#/domain-signup" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-slack" /> Slack
        </a>
        <a href="https://www.instagram.com/nuwomenintech/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" /> Instagram
        </a>
        <a href="https://www.linkedin.com/company/northeastern-university-women-in-technology-nuwit/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a href="https://www.facebook.com/nuwomenintech/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" /> Facebook
        </a>
        <a href="mailto:nuwomenintech@gmail.com">
          <i className="fas fa-envelope" /> Email Us
        </a>
        <a href="https://neu.us14.list-manage.com/subscribe?u=7c6df5449c37e5f0a39a6ec97&id=754fd92124" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope-open-text" /> Join Our Email List
        </a>
      </div>
    </footer>
  );
};

export default Footer;