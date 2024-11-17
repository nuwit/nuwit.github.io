import '../styles/Home.css';
import { useEffect } from 'react';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  useEffect(() => {
    document.title = "NUWIT | Home";
  }, []);
  
  return (
    <div className="home-container">
      <div className="home-title">
        <h1>NORTHEASTERN WOMEN IN TECHNOLOGY</h1>
      </div>

      <div className="home-description">
        <p>
          Northeastern University Women in Technology (NUWIT) is an undergraduate organization
          supporting women in Computer and Data Science. We create opportunities to connect, 
          learn, and grow together in a supportive community.
        </p>
      </div>

      {/* Code-Style Section */}
      <div className="code-section">
        <pre>
          {`#NUWIT {
  stands-for: "Northeastern University Women in Technology";
  location: "Boston, MA";
  description: "An undergraduate organization supporting women interested in tech";
  email: "nuwomenintech@gmail.com";
}`}
        </pre>
      </div>

      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower women in technology by fostering a community of learners, 
          mentors, and leaders. We aim to promote diversity and inclusivity in the tech field 
          through events, workshops, and networking opportunities.
        </p>
      </div>

      <div className="join-us">
        <h2>Join us!</h2>
        <div className="join-us-details">
          <div className="detail-item">
          <i className="fas fa-calendar-alt" />
            <span>Every Tuesday</span>
          </div>
          <div className="detail-item">
          <i className="fas fa-clock" />
            <span>7:00pm - 8:00pm</span>
          </div>
          <div className="detail-item">
          <i className="fas fa-map-marker-alt" />
            <span>Richards Hall 300</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;