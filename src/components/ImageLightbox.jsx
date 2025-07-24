import React from 'react';
import styles from './ImageLightbox.module.css';

const ImageLightbox = ({ src, alt, onClose }) => {
    if (!src) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content}>
                <img src={src} alt={alt} className={styles.image} />
                <button className={styles.closeBtn} onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageLightbox;
