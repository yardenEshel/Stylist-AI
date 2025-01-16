import React from 'react';
import './HomePage.css';
import { useRef } from 'react';
import Login from '../Login/Login';

const Homepage = () => {
  const loginRef = useRef(null);

  const scrollToLogin = () => {
    loginRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-subcontainer">
        <section className="hero-content">
          <h1 className="hero-title">STYLIST AI</h1>
          <p className="hero-description">
            Find the perfect look, effortlessly!
          </p>
          <br></br>
          <button onClick={scrollToLogin} className="hero-button">
            Get Started
          </button>
        </section>
      </div>

      {/* Login Section */}
      <section ref={loginRef} className="login-section">
        <Login />
      </section>
    </div>
  );
};

export default Homepage;
