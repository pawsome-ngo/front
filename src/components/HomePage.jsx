import React from 'react';
import imageOne from '../images/image-one.jpg'; // Make sure the path is correct
import '../App.css'; // We'll still use the main CSS file for now

const HomePage = () => (
    <main className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Giving Paws a Second Chance</h1>
            <p className="hero-subtitle">
                We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Your support can change a life today.
            </p>
            <div className="hero-buttons">
                <a href="#adopt" className="button button-primary">Adopt a Friend</a>
                <a href="#volunteer" className="button button-secondary">Volunteer</a>
            </div>
        </div>
        <div className="hero-image-container">
            <img src={imageOne} alt="Rescued animal" className="hero-image" />
        </div>
    </main>
);

export default HomePage;
