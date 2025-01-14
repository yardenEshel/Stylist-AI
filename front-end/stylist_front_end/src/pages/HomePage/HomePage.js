import React from 'react';
import './HomePage.css';

const Homepage = ({ scrollToLogin }) => {
  return (
    <div className="homepage-container">
      <div className="hero-content">
        <h1 className="hero-title">STYLIST AI</h1>
        <p className="hero-description">
        Find the perfect look, effortlessly!        </p>
        <br></br>

        <button onClick={scrollToLogin} className="hero-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
