import '../index.css';

function HomePage() {

  return (
    <div className="home-page">
      <div className="profile-image-container">
          <img className="profile-image" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="My Profile" />
        </div>
      <h2>Welcome to my website!</h2>
      <p>This is the home page.</p>
    </div>
  );
}

export default HomePage;