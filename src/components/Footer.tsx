// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="src/icons/icononly.png" alt="Logo" className="logo" />
                <nav>
                    <a href="HomePage.tsx">Home</a>
                    <a href="src/AboutUs.tsx">About us</a>
                    <a href="src/Services.tsx">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="src/components/ContactUs.tsx">Contact us</a>
                </nav>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 <span>Website</span>. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#terms">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
