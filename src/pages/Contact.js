import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Contact.css';

function Contact() {
  useEffect(() => {
    document.title = "NUWIT | Contact";
  }, []);

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get in Touch with NUWIT</h1>
      <p className="contact-description">
        Connect with us through any of the platforms below or join our email list!
      </p>
      <div className="contact-links">
        <a href="https://nuwit-community.slack.com/signup#/domain-signup" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-slack" /> Slack
        </a>
        <a href="https://www.instagram.com/nuwomenintech/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" /> Instagram
        </a>
        <a href="https://www.linkedin.com/company/northeastern-university-women-in-technology-nuwit/posts/?feedView=all" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a href="https://www.facebook.com/nuwomenintech/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" /> Facebook
        </a>
        <a href="mailto:nuwomenintech@gmail.com" className="contact-link">
          <i className="fas fa-envelope" /> Email Us
        </a>
        <a href="https://neu.us14.list-manage.com/subscribe?u=7c6df5449c37e5f0a39a6ec97&id=754fd92124" className="contact-link" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope-open-text" /> Join Our Email List
        </a>
      </div>
    </div>
  );
}

export default Contact;