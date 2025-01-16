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
    background: '#f5f5dc', // Beige background color to match the hero
    color: '#2c2c2c', // Darker text color for contrast (same as hero text)
    textAlign: 'center', // Centers the text
    padding: '20px 0', // Adds vertical padding for spacing
    bottom: 0, // Positions at the very bottom
    width: '100%', // Ensures the footer spans the entire width
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    zIndex: 1000, // Ensures it stays above other elements
  },
  text: {
    margin: 0, // Removes unnecessary margin
    fontSize: '16px', // Keeps the font readable
    fontFamily: '"Arial", sans-serif', // Matches the hero font
  },
  link: {
    color: '#2c2c2c', // Matches the darker text color
    textDecoration: 'underline', // Underline for links
    transition: 'color 0.3s ease', // Smooth transition for hover effects
  },
};


export default Footer;
