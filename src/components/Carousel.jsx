import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../App.css';

// Import your images from the new folder
import imageOne from '../images/carousel/image-one.jpg';
import imageTwo from '../images/carousel/image-two.jpg';
import imageThree from '../images/carousel/image-three.jpg';
import imageFour from '../images/carousel/image-four.jpg';
import imageFive from '../images/carousel/image-five.jpg';

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 3000); // Change slide every 5 seconds

        return () => {
            clearInterval(timer); // Cleanup the timer on component unmount
        };
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <div className="carousel-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </div>
            <button className="carousel-arrow carousel-arrow--left" onClick={goToPrevious}>
                <FaChevronLeft />
            </button>
            <button className="carousel-arrow carousel-arrow--right" onClick={goToNext}>
                <FaChevronRight />
            </button>
            <div className="carousel-dots">
                {images.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        className={`carousel-dot ${currentIndex === slideIndex ? 'carousel-dot--active' : ''}`}
                        onClick={() => goToSlide(slideIndex)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
