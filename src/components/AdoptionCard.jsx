import React from 'react';
import Carousel from './Carousel'; // We'll reuse the carousel component
import styles from './AdoptionCard.module.css';
import appStyles from '../App.module.css';

const AdoptionCard = ({ title, age, location, about, images }) => {
    return (
        <div className={styles.card}>
            <div className={styles.carouselWrapper}>
                <Carousel images={images} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.name}>{title}</h2>
                <div className={styles.details}>
                    <span><strong>Age:</strong> {age}</span>
                    <span><strong>Location:</strong> {location}</span>
                </div>
                <p className={styles.about}>{about}</p>
                <button className={`${appStyles.btn} ${appStyles.btnPrimary}`}>
                    Inquire About This Litter
                </button>
            </div>
        </div>
    );
};

export default AdoptionCard;
