// Import necessary dependencies
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Log in\Register</h1>
        <form className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Email Address Or Phone Number"
            required
          />
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>
        <p className="login-footer">
          Don’t have an account? <a href="#" className="login-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;