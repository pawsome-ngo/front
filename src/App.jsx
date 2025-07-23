import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons
import './App.css';

// Import the page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
            <div className="app">
                {/* Header */}
                <header className="header">
                    <div className="logo-container">
                        <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
                            <span role="img" aria-label="paw print" className="logo-icon">🐾</span>
                            <span className="logo-text">Pawsome NGO</span>
                        </Link>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#contact" className="nav-link">Contact</a>
                        <a href="#donate" className="nav-link donate-button">Donate</a>
                    </nav>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                </header>

                {/* Page content is rendered here based on the URL */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>

                {/* Footer */}
                <footer className="footer">
                    <div className="social-links">
                        <a href="https://www.instagram.com/pawsome_agartala_registeredngo/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/pawsomengo/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaFacebook />
                        </a>
                    </div>
                    <p>&copy; 2024 Pawsome NGO. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
