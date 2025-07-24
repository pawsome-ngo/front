import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component
import styles from './EventCard.module.css';

const EventCard = ({ title, description, images }) => {
    return (
        <div className={styles.card}>
            <div className={styles.carouselWrapper}>
                <Carousel images={images} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default EventCard;
