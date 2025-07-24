import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './DonatePage.module.css';
import appStyles from '../App.module.css';

const DonatePage = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const upiId = 'pawsome@upi';

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
        }, () => {
            setCopySuccess('Failed to copy');
            setTimeout(() => setCopySuccess(''), 2000);
        });
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <FaHeart className={styles.headerIcon} />
                <h1>Support Our Cause</h1>
                <p>Your generosity fuels our mission. Every donation, no matter the size, makes a world of difference in the lives of animals in need. Thank you for being their hero.</p>
            </div>
            <div className={styles.donateCard}>
                <h2>Donate via UPI</h2>
                <p>You can send your contribution directly to our UPI ID. This is the fastest and most direct way to support our work.</p>
                <div className={styles.upiInfo}>
                    <span className={styles.upiId}>{upiId}</span>
                    <button onClick={handleCopy} className={`${appStyles.btn} ${appStyles.btnSecondary}`}>
                        {copySuccess || 'Copy ID'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
