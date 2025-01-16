// Import necessary dependencies
import './Login.css';

import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

// preview-start
const providers = [
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'linkedin', name: 'LinkedIn' },
];
// preview-end

export default function OAuthSignInPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  // Define the signIn function inside the component to access navigate
  const signIn = async (provider) => {
    // Simulate sign-in process
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Sign in with ${provider.name}`);
        resolve({});
        // After successful sign-in, navigate to onboarding
        navigate('/onboarding');
      }, 500);
    });
    return promise;
  };

  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    // preview-end
  );
}

/*
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Login = () => {
  const navigate = useNavigate();

  const handleOnBoardingClick = () => {
    // Programmatically navigate to /onboarding
    navigate('/onboarding');
  };
  return (
    <div className="login-container">
  <div className="login-box">
    <h1 className="login-title">Log in\Register</h1>
    <form className="login-form">
    <TextField id="outlined-email" label="Phone number or Email" variant="outlined" required/>
      <button type="submit" onClick={handleOnBoardingClick} className="login-button">
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

export default Login;*/