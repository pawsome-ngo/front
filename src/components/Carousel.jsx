import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Carousel.module.css';

const Carousel = ({ images = [] }) => { // Accept images as a prop
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (images.length === 0) return;
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        if (images.length === 0) return;
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                goToNext();
            }, 5000); // Change slide every 5 seconds

            return () => {
                clearInterval(timer); // Cleanup the timer on component unmount
            };
        }
    }, [currentIndex, images]);

    if (images.length === 0) {
        return <div>No images to display.</div>;
    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.navigationOverlay} onClick={goToPrevious}></div>
            <div className={`${styles.navigationOverlay} ${styles.navigationOverlayRight}`} onClick={goToNext}></div>

            <div className={styles.carouselSlider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className={styles.carouselSlide} key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
                    </div>
                ))}
            </div>
            <button className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={goToPrevious}>
                <FaChevronLeft />
            </button>
            <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={goToNext}>
                <FaChevronRight />
            </button>
            <div className={styles.carouselDots}>
                {images.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        className={`${styles.carouselDot} ${currentIndex === slideIndex ? styles.carouselDotActive : ''}`}
                        onClick={() => goToSlide(slideIndex)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
