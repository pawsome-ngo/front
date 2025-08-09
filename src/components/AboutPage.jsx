import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaShieldAlt, FaHeartbeat, FaHome, FaUtensils, FaPlusSquare} from 'react-icons/fa';
import ImageLightbox from './ImageLightbox'; // Import the new component
import styles from './AboutPage.module.css';
import appStyles from '../App.module.css';

// Import profile pictures
import devanjanaGupta from '../images/profile/devanjana-gupta.jpeg';
import wrighbedDutta from '../images/profile/wrighbed-dutta.jpeg';
import avikSengupta from '../images/profile/avik-sengupta.jpeg';
import anirudhChakraborty from '../images/profile/anirudh-chakraborty.jpeg';
import sreekantaBol from '../images/profile/sreekanta-bol.jpeg';
import nilotpalBhattacharya from '../images/profile/nilotpal-bhattacharya.jpeg';
import ranabirRoy from '../images/profile/ranabir-roy.jpeg';
import souvikSingha from '../images/profile/souvik-singha.jpeg';
import amitabhaDeb from '../images/profile/amitabha-deb.jpeg';
import sudipSaha from '../images/profile/sudip-saha.jpeg';

// Import partner logos
import hsiLogo from '../images/logo/humane-society-international.png';
import tripuraPoliceLogo from '../images/logo/tripura-police.png';
import tripuraForestLogo from '../images/logo/tripura-forest-department.png';
import amcLogo from '../images/logo/agartala-municipal-corporation.png';
import arddLogo from '../images/logo/animal-resource-development-department.png';
import tvdaLogo from '../images/logo/tripura-veterinary-doctors-association.png';

const mainTeam = [
    { name: 'Smt. Devanjana Gupta', title: 'Founder', image: devanjanaGupta },
    { name: 'Shree Wrighbed Dutta', title: 'General Secretary', image: wrighbedDutta },
    { name: 'Shree Avik Sengupta', title: 'President', image: avikSengupta },
    { name: 'Shree Anirudh Chakraborty', title: 'Asst. General Secretary', image: anirudhChakraborty },
    { name: 'Shree Sreekanta Bol', title: 'Vice President', image: sreekantaBol },
];

const associateMembers = [
    { name: 'Shree Nilotpal Bhattacharya', title: 'Associate Member', image: nilotpalBhattacharya },
    { name: 'Dr. Ranabir Roy', title: 'Associate Member', image: ranabirRoy },
];

const executiveMembers = [
    { name: 'Souvik Singha', title: 'Executive Member', image: souvikSingha },
    { name: 'Amitabha Deb', title: 'Executive Member', image: amitabhaDeb },
    { name: 'Sudip Saha', title: 'Executive Member', image: sudipSaha },
];

const partners = [
    { name: 'Humane Society International', logo: hsiLogo },
    { name: 'Tripura Police', logo: tripuraPoliceLogo },
    { name: 'Tripura Forest Department', logo: tripuraForestLogo },
    { name: 'Agartala Municipal Corporation', logo: amcLogo },
    { name: 'Animal Resource Development Department', logo: arddLogo },
    { name: 'Tripura Veterinary Doctors Association', logo: tvdaLogo },
];

const AboutPage = () => {
    const [lightboxImage, setLightboxImage] = useState(null);

    return (
        <>
            <div className={styles.aboutPageContainer}>
                <div className={styles.aboutHeader}>
                    <h1>About Pawsome</h1>
                    <p className={styles.aboutSubtitle}>A Movement for the Voiceless</p>
                </div>

                <section className={styles.aboutSection}>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2015 by Mrs. Devanjana Gupta, Pawsome is Tripura’s pioneering animal welfare NGO,
                        passionately dedicated to protecting and uplifting the lives of street animals and preserving
                        our fragile coexistence with wildlife. What began as a grassroots movement has now grown into
                        one of the most respected organizations in Northeast India—honored as the Best Animal Welfare
                        Organization of the Northeast by FIAPO and applauded by the Animal Welfare Board of India.
                    </p>
                    <p>
                        Driven by compassion and courage, our work spans far beyond rescue and treatment. Every day,
                        our volunteer-led teams provide 8 to 10 on-site medical treatments and first-aid care to injured
                        and ill street animals, along with vaccination and sterilization drives to control the street
                        animal population humanely.
                    </p>
                </section>

                <section className={styles.aboutSection}>
                    <h2>Our Mission</h2>
                    <div className={styles.missionCards}>
                        <div className={styles.missionCard}>
                            <FaPlusSquare className={styles.missionIcon} />
                            <h3>Rescue & Medical Care</h3>
                            <p>We have successfully rescued over 12,000 stray animals, birds, and wildlife, providing them with critical medical care and a second chance at life.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <FaUtensils className={styles.missionIcon} />
                            <h3>Community Feeding</h3>
                            <p>We conduct feeding drives, providing nutritious and hygienic food to more than 250 stray dogs and cats across the city.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <FaShieldAlt className={styles.missionIcon} />
                            <h3>Justice & Awareness</h3>
                            <p>We work with authorities to fight illegal wildlife trafficking, dog meat smuggling, and animal cruelty, ensuring justice is served.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <FaHeartbeat className={styles.missionIcon} />
                            <h3>Public Health</h3>
                            <p>We organize vaccination and sterilization drives to promote public health and humanely control the stray animal population.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <FaHome className={styles.missionIcon} />
                            <h3>Pet-Friendly Initiatives</h3>
                            <p>We launch initiatives like The Dog Carnival and adoption camps to promote responsible pet ownership and reduce cruelty.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.aboutSection}>
                    <h2>In Collaboration With</h2>
                    <div className={styles.partnersGrid}>
                        {partners.map((partner) => (
                            <div className={styles.partnerLogoWrapper} key={partner.name}>
                                <img src={partner.logo} alt={`${partner.name} logo`} className={styles.partnerLogo} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.aboutSection}>
                    <h2>Meet the Team</h2>
                    <div className={styles.teamGrid}>
                        {mainTeam.map((member) => (
                            <div className={styles.teamMemberCard} key={member.name}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.profileImage}
                                    onClick={() => setLightboxImage(member.image)}
                                />
                                <h4 className={styles.memberName}>{member.name}</h4>
                                <p className={styles.memberTitle}>{member.title}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.coreCommitteeTitle}>Associate Members</h3>
                    <div className={styles.teamGrid}>
                        {associateMembers.map((member) => (
                            <div className={styles.teamMemberCard} key={member.name}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.profileImage}
                                    onClick={() => setLightboxImage(member.image)}
                                />
                                <h4 className={styles.memberName}>{member.name}</h4>
                                <p className={styles.memberTitle}>{member.title}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.coreCommitteeTitle}>Executive Members</h3>
                    <div className={styles.teamGrid}>
                        {executiveMembers.map((member) => (
                            <div className={styles.teamMemberCard} key={member.name}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.profileImage}
                                    onClick={() => setLightboxImage(member.image)}
                                />
                                <h4 className={styles.memberName}>{member.name}</h4>
                                <p className={styles.memberTitle}>{member.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`${styles.aboutSection} ${styles.joinUsSection}`}>
                    <h2>Join Us. Be the Voice They Need.</h2>
                    <p>Pawsome isn’t just an NGO—it’s a movement. A call to action. A fight for those who cannot fight for themselves.</p>
                    <Link to="/signup" className={`${appStyles.btn} ${appStyles.btnPrimary} ${styles.joinUsButton}`}>Become a Volunteer</Link>
                </section>
            </div>
            <ImageLightbox src={lightboxImage} alt="Team member profile" onClose={() => setLightboxImage(null)} />
        </>
    );
};

export default AboutPage;
