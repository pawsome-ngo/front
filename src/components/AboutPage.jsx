import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
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
                        <h3>Justice & Awareness</h3>
                        <p>We work with authorities to fight illegal wildlife trafficking, dog meat smuggling, and animal cruelty, ensuring justice is served. Our legal and awareness efforts are a bold stand for the rights of stray animals.</p>
                    </div>
                    <div className={styles.missionCard}>
                        <h3>Public Health</h3>
                        <p>We organize vaccination drives to raise awareness about zoonotic diseases like rabies, helping to reduce human-stray dog conflicts and build healthier, safer communities.</p>
                    </div>
                    <div className={styles.missionCard}>
                        <h3>Pet-Friendly Initiatives</h3>
                        <p>We launch initiatives like The Dog Carnival, adoption camps, and workshops to promote responsible pet ownership and reduce cruelty towards companion animals.</p>
                    </div>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <h2>Meet the Team</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMemberCard}>
                        <h4>Smt. Devanjana Gupta</h4>
                        <p>Founder</p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <h4>Shree Wrighbed Dutta</h4>
                        <p>General Secretary</p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <h4>Shree Avik Sengupta</h4>
                        <p>President</p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <h4>Shree Anirudh Chakraborty</h4>
                        <p>Assistant General Secretary</p>
                    </div>
                    <div className={styles.teamMemberCard}>
                        <h4>Shree Sreekanta Bol</h4>
                        <p>Vice President</p>
                    </div>
                </div>
                <h3 className={styles.coreCommitteeTitle}>Executive/Core Committee Members</h3>
                <ul className={styles.coreCommitteeList}>
                    <li>Souvik Singha</li>
                    <li>Amitabha Deb</li>
                    <li>Sudip Saha</li>
                    <li>Indrajit Saha</li>
                    <li>Nilotpal Bhattacharjee</li>
                    <li>Satyajit Paul</li>
                </ul>
            </section>

            <section className={`${styles.aboutSection} ${styles.joinUsSection}`}>
                <h2>Join Us. Be the Voice They Need.</h2>
                <p>Pawsome isn’t just an NGO—it’s a movement. A call to action. A fight for those who cannot fight for themselves.</p>
            </section>
        </div>
    );
};

export default AboutPage;
