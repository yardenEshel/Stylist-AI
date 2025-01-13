import React from 'react';
// If you are using React Router for internal navigation, uncomment the following line
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        {/* If you have React Router setup, replace <a> with <Link to="/terms">, etc. */}
        &nbsp;
        <a href="/terms" style={styles.link}>Terms of Use </a> 
        &nbsp;
        <a href="/privacy" style={styles.link}>Privacy </a>
        &nbsp;
        <a href="/contact" style={styles.link}>Contact</a>
      </p>
      <br></br>
      <p style={styles.text}>StylistAI © 2025</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(to right,rgb(57, 65, 118),rgb(33, 174, 139))', // Gradient background
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px 0', // Sticks to the bottom (see note below)
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.3)', // Subtle shadow at top of footer
  },
  text: {
    margin: 0,
    fontSize: '16px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    
  },
  
  link: {
    color: '#ffffff',
    textDecoration: 'underline',
  },
};

export default Footer;
