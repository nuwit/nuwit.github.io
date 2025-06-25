import { useEffect } from 'react';
import React, { useState } from 'react';
import '../styles/Officers.css'; 
import nandiniPhoto from '../assets/eboard/nandini.jpg';
import anushaPhoto from '../assets/eboard/anusha.jpg';
import cathreenPhoto from '../assets/eboard/cathreen.png';
import deekshitaPhoto from '../assets/eboard/deekshita.jpg';
import diyaPhoto from '../assets/eboard/diya.jpg';
import eshaPhoto from '../assets/eboard/esha.jpg';
import paulaPhoto from '../assets/eboard/paula.jpeg';
import rebeccaPhoto from '../assets/eboard/rebecca.jpg';
import sabinePhoto from '../assets/eboard/sabine.jpg';

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
      name: "Nandini Ghosh",
      photo: nandiniPhoto,
      position: "President",
      email: "mailto:ghosh.na@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/ghoshnandini/",
      funFacts: {
        major: "Computer Science & Design",
        hometown: "Pune, India",
        favoriteStudySpot: "ISEC high chairs by the big windows for natural light!",
        bucketListItem: "Visiting the new Tangled ride at Tokyo Disneyland",
        goToStudySnack: "Welch’s gummies and Tostitos with salsa",
      },
    },
    {
      name: "Cathreen Paul",
      photo: eshaPhoto,
      position: "Vice President",
      email: "mailto:pandya.e@northeastern.edu",
      linkedin: "https://www.linkedin.com/in/eshapandya/",
      funFacts: {
        major: "Computer Science",
        hometown: "New City, NY",
        favoriteStudySpot: "My room at 2am",
        bucketListItem: "Have an etsy shop",
        goToStudySnack: "Sour patch kids",
      },
    },
    {
        name: "Anusha Narang",
        photo: anushaPhoto,
        position: "Treasurer",
        email: "mailto:narang.an@northeastern.edu",
        linkedin: "https://www.linkedin.com/in/anusha-narang-9973862a2/",
        funFacts: {
          major: "Computer Science",
          hometown: "CT",
          favoriteStudySpot: "snell engineering",
          bucketListItem: "living in another country for at least a month",
          goToStudySnack: "green crunchy grapes!",
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
          bucketListItem: "I’d like to visit every continent at some point",
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
        name: "Sabine Laurence",
        photo: sabinePhoto,
        position: "Tech & Web Chair",
        email: "mailto:laurence.s@northeastern.edu",
        linkedin: "www.linkedin.com/in/sabine-laurence",
        funFacts: {
          major: "Computer Science & Economics",
          hometown: "San Jose, CA",
          favoriteStudySpot: "Boston Public Library",
          bucketListItem: "Visit all 7 continents",
          goToStudySnack: "Popcorn",
        },
    },
    {
        name: "Cathreen Paul",
        photo: cathreenPhoto,
        position: "Outreach Co-Chair",
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
        name: "Paula Sefia",
        photo: paulaPhoto,
        position: "Outreach Co-Chair",
        email: "mailto:sefia.p@northeastern.edu",
        linkedin: "https://www.linkedin.com/in/paulasefia/",
        funFacts: {
          major: "Computer Science",
          hometown: "Newark, NJ",
          favoriteStudySpot: "I LOVE to study in the tunnels near Gallery 360!",
          bucketListItem: "Going to Disneyland/World someday! I've wanted to go since I was 4 years old",
          goToStudySnack: "Double stuffed golden oreos",
        },
    },
    {
        name: "Deekshita Madhalam",
        photo: deekshitaPhoto,
        position: "Community Engagement Chair",
        email: "mailto:madhalam.d@northeastern.edu",
        linkedin: "https://www.linkedin.com/in/deekshita-madhalam/",
        funFacts: {
          major: "Data Science and Business Administration",
          hometown: "Quincy, MA",
          favoriteStudySpot: "EXP because its not entirely quiet",
          bucketListItem: "I really want to go skydiving or bungee jumping",
          goToStudySnack: "Chocolate covered raisins!",
        },
    }
  ];
  export default Officers;