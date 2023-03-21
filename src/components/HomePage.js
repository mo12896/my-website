import React, { useEffect, useState } from 'react';
import '../index.css';

function HomePage() {
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const delay = 100; // set the delay in milliseconds
    const words = "Welcome to my personal portfolio website! As a Software Engineer, I'm excited to showcase my skills, experiences, and projects that have shaped my career.".split(' ');
    let count = 0;

    const interval = setInterval(() => {
      if (count < words.length) {
        setShowText(prevState => prevState + ' ' + words[count]);
        count++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div className="profile-image-container">
        <img className="profile-image" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="My Profile" />
      </div>
      <h2>Welcome to my Website!</h2>
      {showText && (
        <p className="animated-text">
          {showText}
        </p>
      )}
    </div>
  );
}

export default HomePage;



