import React, { useEffect, useState } from 'react';
import '../index.css';

function HomePage() {
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const delay = 100; // set the delay in milliseconds
    const words = "Welcome to my personal portfolio website! As a Software Engineer and AI Developer, I'm excited to showcase my skills, experiences, and projects that have shaped my career. This website serves as part of my portfolio, and I have implemented the frontend using React. The website has been deployed using Github and AWS Amplify, which allows me to easily update and showcase my projects. While the frontend is up and running, I'm still working on implementing the backend. Once completed, the website will be able to handle contact requests and other interactions. In the meantime, please don't hesitate to reach out to me via email at moritz1996.mueller@gmail.com. ".split(' ');
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



