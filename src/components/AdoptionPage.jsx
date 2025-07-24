import React from 'react';
import AdoptionCard from './AdoptionCard';
import styles from './AdoptionPage.module.css';

// Import all images for adoption
// Case 1
import oneImg1 from '../images/adoption/one/image-one.jpg';
import oneImg2 from '../images/adoption/one/image-two.jpg';
import oneImg3 from '../images/adoption/one/image-three.jpg';
// Case 2
import twoImg1 from '../images/adoption/two/image-one.jpg';
import twoImg2 from '../images/adoption/two/image-two.jpg';
import twoImg3 from '../images/adoption/two/image-three.jpg';
// Case 3
import threeImg1 from '../images/adoption/three/image-one.jpg';
import threeImg2 from '../images/adoption/three/image-two.jpg';
import threeImg3 from '../images/adoption/three/image-three.jpg';
// Case 4
import fourImg1 from '../images/adoption/four/image-one.jpg';
import fourImg2 from '../images/adoption/four/image-two.jpg';
import fourImg3 from '../images/adoption/four/image-three.jpg';
// Case 5
import fiveImg1 from '../images/adoption/five/image-one.jpg';
import fiveImg2 from '../images/adoption/five/image-two.jpg';
import fiveImg3 from '../images/adoption/five/image-three.jpg';

const adoptionData = [
    {
        title: 'A Playful Litter',
        age: '3 Months',
        location: 'Agartala',
        about: 'This energetic litter is full of fun and mischief. These puppies love to play and explore. They are looking for a forever family to give them names and lots of love.',
        images: [oneImg1, oneImg2, oneImg3],
    },
    {
        title: 'Gentle Siblings',
        age: '2 Months',
        location: 'Udaipur',
        about: 'A group of sweet and gentle souls with the most loving eyes. They are a bit shy at first but warm up quickly. They would thrive in a calm and patient home.',
        images: [twoImg1, twoImg2, twoImg3],
    },
    {
        title: 'Adventurous Pups',
        age: '4 Months',
        location: 'Dharmanagar',
        about: 'These curious pups are always ready for the next big adventure. They are very smart and eager to learn new tricks. An active family would be perfect for them.',
        images: [threeImg1, threeImg2, threeImg3],
    },
    {
        title: 'A Snuggly Bunch',
        age: '3 Months',
        location: 'Agartala',
        about: 'This litter is full of lap dogs who love nothing more than to snuggle. They are calm, affectionate, and would be great companions for a loving family.',
        images: [fourImg1, fourImg2, fourImg3],
    },
    {
        title: 'Goofy Brothers & Sisters',
        age: '2 Months',
        location: 'Belonia',
        about: 'A litter of goofy and lovable puppies who will keep you entertained with their silly antics. They have hearts of gold and are waiting for a family to share them with.',
        images: [fiveImg1, fiveImg2, fiveImg3],
    },
];

const AdoptionPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Find Your New Best Friend</h1>
                <p>These loving souls are waiting for a forever home. Open your heart and adopt today.</p>
            </div>
            <div className={styles.grid}>
                {adoptionData.map((pet) => (
                    <AdoptionCard key={pet.title} {...pet} />
                ))}
            </div>
        </div>
    );
};

export default AdoptionPage;
