import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import styles from './HomePage.module.css';
import appStyles from '../App.module.css';

// Import carousel images for the home page
import imageOne from '../images/carousel/image-one.jpg';
import imageTwo from '../images/carousel/image-two.jpg';
import imageThree from '../images/carousel/image-three.jpg';
import imageFour from '../images/carousel/image-four.jpg';
import imageFive from '../images/carousel/image-five.jpg';

const homePageImages = [imageOne, imageTwo, imageThree, imageFour, imageFive];

const HomePage = () => (
    <main className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Giving Paws a Second Chance</h1>
            <p className={styles.heroSubtitle}>
                We are dedicated to rescuing, rehabilitating, and rehoming animals in need. Your support can change a life today.
            </p>
            <div className={styles.heroButtons}>
                <Link to="/adoption" className={`${appStyles.btn} ${appStyles.btnPrimary}`}>Adopt a Friend</Link>
                <Link to="/signup" className={`${appStyles.btn} ${appStyles.btnSecondary}`}>Join Us</Link>
            </div>
        </div>
        <div className={styles.heroImageContainer}>
            <Carousel images={homePageImages} />
        </div>
    </main>
);

export default HomePage;
