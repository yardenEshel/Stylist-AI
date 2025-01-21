import React from 'react';
import './About.css';

// Importing images
import aiFashion from './images/ai-fashion.png';
import sustainableFashion from './images/sustainable-fashion.png';
import stylePreview from './images/style-preview.png';
import effortlessShopping from './images/effortless-shopping.png';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Aistyle</h1>
            <p className="about-description">
                Aistyle is revolutionizing fashion with AI-powered recommendations tailored to your unique style, 
                values, and the latest trends.
            </p>

            <div className="about-grid">
                <div className="about-card">
                    <img src={aiFashion} alt="Personalized AI" className="about-card-image" />
                    <h3>Personalized AI</h3>
                    <p>Our AI adapts to your style preferences, offering evolving suggestions that fit your taste.</p>
                </div>

                <div className="about-card">
                    <img src={sustainableFashion} alt="Sustainability" className="about-card-image" />
                    <h3>Sustainable Choices</h3>
                    <p>Support ethical and eco-friendly fashion with our curated recommendations.</p>
                </div>

                <div className="about-card">
                    <img src={stylePreview} alt="Smart Previews" className="about-card-image" />
                    <h3>Smart Previews</h3>
                    <p>Visualize your outfits before purchasing with our advanced preview technology.</p>
                </div>

                <div className="about-card">
                    <img src={effortlessShopping} alt="Effortless Shopping" className="about-card-image" />
                    <h3>Effortless Shopping</h3>
                    <p>Enjoy a seamless shopping experience with personalized product selections.</p>
                </div>
            </div>

        </div>
    );
};

export default About;
