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

// Import all images for the vaccination camps event
import vacImg1 from '../images/events/vaccination-camps/image-one.jpeg';
import vacImg2 from '../images/events/vaccination-camps/image-two.jpeg';
import vacImg3 from '../images/events/vaccination-camps/image-three.jpeg';
import vacImg4 from '../images/events/vaccination-camps/image-four.jpeg';
import vacImg5 from '../images/events/vaccination-camps/image-five.jpeg';

// Import all images for the dog smuggling event
import smuggleImg1 from '../images/events/dog-smuggling/image-one.jpeg';
import smuggleImg2 from '../images/events/dog-smuggling/image-two.jpeg';
import smuggleImg3 from '../images/events/dog-smuggling/image-three.jpeg';
import smuggleImg4 from '../images/events/dog-smuggling/image-four.jpeg';
import smuggleImg5 from '../images/events/dog-smuggling/image-five.jpeg';

// Import all images for the dog smuggling event
import dogCarnivalImg1 from '../images/events/dog-carnival/image-1.jpeg';
import dogCarnivalImg2 from '../images/events/dog-carnival/image-2.jpeg';
import dogCarnivalImg3 from '../images/events/dog-carnival/image-3.jpeg';
import dogCarnivalImg4 from '../images/events/dog-carnival/image-4.jpeg';
import dogCarnivalImg5 from '../images/events/dog-carnival/image-5.jpeg';
import dogCarnivalImg6 from '../images/events/dog-carnival/image-6.jpeg';
import dogCarnivalImg7 from '../images/events/dog-carnival/image-7.jpeg';
import dogCarnivalImg8 from '../images/events/dog-carnival/image-8.jpeg';
import dogCarnivalImg9 from '../images/events/dog-carnival/image-9.jpeg';
import dogCarnivalImg10 from '../images/events/dog-carnival/image-10.jpeg';
import dogCarnivalImg11 from '../images/events/dog-carnival/image-11.jpeg';

const eventsData = [
    {
        title: 'Anti-Smuggling Operations',
        description: 'In close cooperation with the Tripura Police, our brave teams have been instrumental in intercepting illegal dog smuggling operations. This dangerous but vital work saves countless lives and brings criminals to justice. We are committed to ending this cruel trade.',
        images: [smuggleImg1, smuggleImg2, smuggleImg3, smuggleImg4, smuggleImg5],
    },
    {
        title: 'Vaccination Camps',
        description: 'Protecting our community, one paw at a time. Our regular vaccination camps help prevent the spread of diseases like rabies, ensuring the health and safety of both street animals and residents. These events are a crucial part of our mission to foster a safe environment for all.',
        images: [vacImg1, vacImg2, vacImg3, vacImg4, vacImg5],
    },
    {
        title: 'A Pawsitively Fun Dog Carnival!',
        description: 'The energy at our recent dog carnival was off the charts! Our canine competitors tackled agility courses, showed off their best tricks, and made new friends at every turn. Meanwhile, their humans browsed through vendor booths and enjoyed a day of community and fun. This event wouldn\'t have been possible without the amazing support of our volunteers and attendees.',
        images: [dogCarnivalImg1, dogCarnivalImg2, dogCarnivalImg3, dogCarnivalImg4, dogCarnivalImg5,dogCarnivalImg6, dogCarnivalImg7, dogCarnivalImg8,dogCarnivalImg9, dogCarnivalImg10, dogCarnivalImg11],
    },
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
                <h1>Our Initiatives</h1>
                <p>Reaching milestones and sharing stories from the Pawsome community.</p>
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
