import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel'; // Import the new Carousel component
import '../App.css';

const HomePage = () => (
    <main className="hero">
        <div className="hero-content">
            <h1 className="hero-title">Giving Paws a Second Chance</h1>
            <p className="hero-subtitle">
                We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Your support can change a life today.
            </p>
            <div className="hero-buttons">
                <a href="#adopt" className="button button-primary">Adopt a Friend</a>
                <Link to="/signup" className="button button-secondary">Join Us</Link>
            </div>
        </div>
        <div className="hero-image-container">
            {/* Replace the single image with the Carousel component */}
            <Carousel />
        </div>
    </main>
);

export default HomePage;
