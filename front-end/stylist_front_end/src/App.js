import React, { useRef } from 'react';
import Homepage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const loginRef = useRef(null);

  const scrollToLogin = () => {
    loginRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="app-container">
      <Homepage scrollToLogin={scrollToLogin} />
      <div ref={loginRef}>
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default App;