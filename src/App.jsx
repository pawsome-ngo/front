import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';

// Import the page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import AdoptionPage from './components/AdoptionPage';
import EventsPage from './components/EventsPage'; // Import the new page

// Import your icon images
import facebookIcon from './images/icons/facebook.png';
import instagramIcon from './images/icons/instagram.png';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
            <div className={styles.app}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <Link to="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
                            <span role="img" aria-label="paw print" className={styles.logoIcon}>🐾</span>
                            <span className={styles.logoText}>Pawsome NGO</span>
                        </Link>
                    </div>
                    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                        <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/adoption" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Adoption</Link>
                        <Link to="/events" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Events</Link>
                        <Link to="/signup" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Join Us</Link>
                        <a href="#donate" className={`${styles.navLink} ${styles.donateButton}`}>Donate</a>
                    </nav>
                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                    </button>
                </header>

                {/* Page content is rendered here based on the URL */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/adoption" element={<AdoptionPage />} />
                    <Route path="/events" element={<EventsPage />} /> {/* Add the new route */}
                </Routes>

                {/* Footer */}
                <footer className={styles.footer}>
                    <div className={styles.socialLinks}>
                        <a href="https://www.instagram.com/pawsome_agartala_registeredngo/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <img src={instagramIcon} alt="Instagram" className={styles.socialIconImg} />
                        </a>
                        <a href="https://www.facebook.com/pawsomengo/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <img src={facebookIcon} alt="Facebook" className={styles.socialIconImg} />
                        </a>
                    </div>
                    <p>&copy; 2024 Pawsome NGO. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
