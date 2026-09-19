import { useEffect } from 'react';
import React, { useState } from 'react';
import '../styles/Officers.css';
import anushaPhoto from '../assets/eboard/anusha.jpg';
import cathreenPhoto from '../assets/eboard/cathreen.jpg';
import deekshitaPhoto from '../assets/eboard/deekshita.jpg';
import diyaPhoto from '../assets/eboard/diya.jpg';
import rebeccaPhoto from '../assets/eboard/rebecca.jpg';
import ananyaPhoto from '../assets/eboard/ananya.jpg';
import dhruviPhoto from '../assets/eboard/dhruvi.jpg';
import tanviPhoto from '../assets/eboard/tanvi.png';
// TODO: swap for mia.jpg once her photo is in
import placeholderPhoto from '../assets/eboard/placeholder.jpg';

function Officers() {
  useEffect(() => {
    document.title = "NUWIT | Officers";
  }, []);

  return (
    <div>
      <div className="officer-title">
        <h1>LEARN ABOUT THE LEADERSHIP</h1>
      </div>
      <div className="officer-grid">
        {officers.map((officer, index) => (
          <Officer key={index} officer={officer} />
        ))}
      </div>
    </div>
  );
}


const Officer = ({ officer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="officer" onClick={togglePopup}>
      <img src={officer.photo} alt={officer.name} />
      <h3>{officer.name}</h3>
      <p>{officer.position}</p>
      <span className="modal-links">
        <a href={officer.email} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href={officer.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </span>

      {isOpen && (
        <div className="popup">
          <div className='popup-content' onClick={(e) => e.stopPropagation()}>
            <button className='close-button' onClick={togglePopup}>x</button>
            <h4>{officer.name}</h4>
            <p>
              <a href={officer.email} target="_blank" rel="noopener noreferrer">Email</a>
            </p>
            <p>
              <a href={officer.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <h4>Fun Facts</h4>
            <p className="modal-description"><b>Major: </b>{officer.funFacts.major}</p>
            <p className="modal-description"><b>Hometown: </b>{officer.funFacts.hometown}</p>
            <p className="modal-description"><b>Favorite Study Spot: </b>{officer.funFacts.favoriteStudySpot}</p>
            <p className="modal-description"><b>Bucket List Item: </b>{officer.funFacts.bucketListItem}</p>
            <p className="modal-description"><b>Go to Study Snack: </b>{officer.funFacts.goToStudySnack}</p>
          </div>
        </div>
      )}
    </div>
  );
};



const officers = [
  {
    name: "Cathreen Paul",
    photo: cathreenPhoto,
    position: "President",
    email: "mailto:Paul.cat@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/cathreenpaul/",
    funFacts: {
      major: "Data Science and Business Administration (concentrating in Healthcare Management and Consulting)",
      hometown: "Long Island, NY",
      favoriteStudySpot: "Random classrooms in Richards",
      bucketListItem: "Visit every state!",
      goToStudySnack: "Buldakkk!!",
    },
  },
  {
    name: "Dhruvi Kapadia",
    photo: dhruviPhoto,
    position: "Vice President",
    email: "mailto:kapadia.dhr@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/dhruvi-kapadia/",
    funFacts: {
      major: "Computer Science",
      hometown: "Mumbai, India",
      favoriteStudySpot: "Orange couches in Snell Library",
      bucketListItem: "Going to Italy and visiting every single museum",
      goToStudySnack: "Strawberry Yogurt",
    },
  },
  {
    name: "Deekshita Madhalam",
    photo: deekshitaPhoto,
    position: "Treasurer",
    email: "mailto:madhalam.d@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/deekshita-madhalam/",
    funFacts: {
      major: "Data Science and Business Administration",
      hometown: "Quincy, MA",
      favoriteStudySpot: "EXP because its not entirely quiet",
      bucketListItem: "I really want to go skydiving or bungee jumping",
      goToStudySnack: "Chocolate covered raisins!",
    },
  },
  {
    name: "Rebecca Lee",
    photo: rebeccaPhoto,
    position: "Design Chair",
    email: "mailto:lee.rebec@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/rebecca-megan-lee/",
    funFacts: {
      major: "Computer Science",
      hometown: "East Brunswick, NJ",
      favoriteStudySpot: "My room - it’s nice and cozy",
      bucketListItem: "I'd like to visit every continent at some point",
      goToStudySnack: "Pocky",
    },
  },
  {
    name: "Diya Kadakia",
    photo: diyaPhoto,
    position: "PR Chair",
    email: "mailto:kadakia.d@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/diya-kadakia/",
    funFacts: {
      major: "Data Science & Business Administration (Concentration in Finance)",
      hometown: "Sayreville, NJ",
      favoriteStudySpot: "Snell Library",
      bucketListItem: "Seeing the northern lights in Iceland is on top of my bucket list",
      goToStudySnack: "Pretzels",
    },
  },
  {
    name: "Tanvi Agarwal",
    photo: tanviPhoto,
    position: "Tech & Web Chair",
    email: "mailto:agarwal.tanv@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/tanvi-agarwal-ta09/",
    funFacts: {
      major: "Computer Science",
      hometown: "Kolkata, India",
      favoriteStudySpot: "EXP",
      bucketListItem: "Do a pull up",
      goToStudySnack: "BBQ Lays",
    },
  },
  {
    name: "Ananya Krishnamurthy",
    photo: ananyaPhoto,
    position: "Outreach Co-Chair",
    email: "mailto:krishnamurthy.an@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/ananya-krishnamurthy-b308a62b8/",
    funFacts: {
      major: "Data Science",
      hometown: "Farmington, CT",
      favoriteStudySpot: "Snell Library",
      bucketListItem: "Going in a hot air balloon",
      goToStudySnack: "Pretzels!",
    },
  },
  {
    // TODO: fill in Mia's email, LinkedIn, photo and fun facts
    name: "Mia Corfmat",
    photo: placeholderPhoto,
    position: "Outreach Co-Chair",
    email: "mailto:",
    linkedin: "",
    funFacts: {
      major: "TBD",
      hometown: "TBD",
      favoriteStudySpot: "TBD",
      bucketListItem: "TBD",
      goToStudySnack: "TBD",
    },
  },
  {
    name: "Anusha Narang",
    photo: anushaPhoto,
    position: "Community Engagement Chair",
    email: "mailto:narang.an@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/anusha-narang-9973862a2/",
    funFacts: {
      major: "Computer Science",
      hometown: "CT",
      favoriteStudySpot: "Snell Engineering",
      bucketListItem: "living in another country for at least a month",
      goToStudySnack: "green crunchy grapes!",
    },
  }
];
export default Officers;