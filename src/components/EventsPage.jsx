import React from 'react';
import EventCard from './EventCard';
import styles from './EventsPage.module.css';

// Import all images for the adoption event
import adoptionImg1 from '../images/events/adoption-card/image-one.jpeg';
import adoptionImg2 from '../images/events/adoption-card/image-two.jpeg';
import adoptionImg3 from '../images/events/adoption-card/image-three.jpeg';
import adoptionImg4 from '../images/events/adoption-card/image-four.jpeg';
import adoptionImg5 from '../images/events/adoption-card/image-five.jpeg';
import adoptionImg6 from '../images/events/adoption-card/image-six.jpeg';

// Import all images for the awards event
import awardImg1 from '../images/events/awards-card/image-one.jpeg';
import awardImg2 from '../images/events/awards-card/image-two.jpeg';
import awardImg3 from '../images/events/awards-card/image-three.jpeg';
import awardImg4 from '../images/events/awards-card/image-four.jpeg';
import awardImg5 from '../images/events/awards-card/image-five.jpeg';

// Import all images for the Durga Puja event
import pujaImg1 from '../images/events/pet-friendly-durga-puja/image-one.jpeg';
import pujaImg2 from '../images/events/pet-friendly-durga-puja/image-two.jpeg';
import pujaImg3 from '../images/events/pet-friendly-durga-puja/image-three.jpeg';
import pujaImg4 from '../images/events/pet-friendly-durga-puja/image-four.jpeg';
import pujaImg5 from '../images/events/pet-friendly-durga-puja/image-five.jpeg';

const eventsData = [
    {
        title: 'Recent Adoption Drives',
        description: 'We are overjoyed to share moments from our recent adoption events. Each picture tells a story of a life changed forever. These are just a few of the many happy beginnings we\'ve facilitated, all thanks to the love and support of our community. More stories to come!',
        images: [adoptionImg1, adoptionImg2, adoptionImg3, adoptionImg4, adoptionImg5, adoptionImg6],
    },
    {
        title: 'Awards & Recognition',
        description: 'We are humbled and honored to be recognized for our work in animal welfare. These awards are a testament to the dedication of our volunteers and the incredible support from our community. Thank you for making our mission possible.',
        images: [awardImg1, awardImg2, awardImg3, awardImg4, awardImg5],
    },
    {
        title: 'Pet-Friendly Durga Puja',
        description: 'In a groundbreaking moment for the state, Pawsome proudly organized Tripura’s first pet-friendly Durga Puja. We celebrated inclusion, compassion, and culture, proving that our furry friends can be a part of every celebration.',
        images: [pujaImg1, pujaImg2, pujaImg3, pujaImg4, pujaImg5],
    },
];

const EventsPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Our Events</h1>
                <p>Celebrating milestones and sharing stories from the Pawsome community.</p>
            </div>
            <div className={styles.eventsList}>
                {eventsData.map((event) => (
                    <EventCard key={event.title} {...event} />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
