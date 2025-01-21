import React from 'react';
import './HomePage.css';
import { useRef, useEffect} from 'react';
import Login from '../Login/Login';
import About from '../About/About';
import FadeInOnScroll from '../../functions/FadeInOnScrolling';

const Homepage = () => {
  const loginRef = useRef(null);

  const scrollToLogin = () => {
    loginRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-subcontainer">
        <section className="hero-content">
          <h1 className="hero-title">ⱯiStyle</h1>
          <p className="hero-description">
            Find the perfect look, effortlessly!
          </p>
          <br></br>
          <button onClick={scrollToLogin} className="hero-button">
            Get Started
          </button>
        </section>
      </div>
      
      <section className="About-section">
        <FadeInOnScroll key="about-section">
          <About />
        </FadeInOnScroll>
        </section>
      
      {/* Login Section */}
      <section ref={loginRef} className="login-section">
        <Login />
      </section>
    </div>
  );
};

export default Homepage;
