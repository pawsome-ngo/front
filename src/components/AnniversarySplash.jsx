import React, { useState, useEffect } from 'react';
import styles from './AnniversarySplash.module.css';

const AnniversarySplash = ({ onFinish }) => {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true);
            setTimeout(onFinish, 500); // Wait for fade-out animation to complete
        }, 4000); // Display for 4 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`${styles.splashScreen} ${exiting ? styles.exiting : ''}`}>
            <div className={styles.content}>
                <div className={styles.logo}>🎉</div>
                <h1>Celebrating 10 Pawsome Years!</h1>
                <p>Thank you for being part of our journey.</p>
            </div>
            {/* Simple CSS Confetti */}
            {[...Array(10)].map((_, i) => <div key={i} className={`${styles.confetti} ${styles[`confetti-${i}`]}`}></div>)}
        </div>
    );
};

export default AnniversarySplash;
