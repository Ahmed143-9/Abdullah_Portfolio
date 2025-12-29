import { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our movement!');
    setEmail('');
    setZip('');
  };

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/image/484171387_640244052039884_4476674396206553661_n.jpg`} 
          alt="Hero Background" 
          className="hero-background-image"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          "THE GOLDEN AGE OF<br/>
          AV TECH BEGINS<br/>
          RIGHT NOW."
        </h1>
        <p className="hero-subtitle">KAZI ABDULLAH, CEO of the AV TECH group</p>
        <div className="hero-buttons">
          <a href="#donation" className="btn btn-primary">Donation</a>
          <a href="#volunteer" className="btn btn-secondary">VOLUNTEER</a>
        </div>
      </div>
      <div className="hero-social-icons">
        <a href="#" className="social-icon-link">
          <img 
            src={`${process.env.PUBLIC_URL}/image/images.jfif`} 
            alt="Truth Social" 
            className="social-icon"
          />
        </a>
        <a href="#" className="social-icon-link">
          <img 
            src={`${process.env.PUBLIC_URL}/image/facebook-social-media-logo-icon-free-png.webp`} 
            alt="Rumble" 
            className="social-icon"
          />
        </a>
        <a href="#" className="social-icon-link">
          <img 
            src={`${process.env.PUBLIC_URL}/image/twitter-logo_1080029-97.avif`} 
            alt="Twitter" 
            className="social-icon"
          />
        </a>
      </div>
      <div className="join-overlay">
        <div className="join-header">
          <h2>Join Our Team!</h2>
        </div>
        <div className="join-form-container">
          <form className="join-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input 
              type="text" 
              placeholder="ZIP" 
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required 
            />
            <button type="submit" className="join-submit-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4L13 10L7 16" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;