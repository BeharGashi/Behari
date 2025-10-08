import React from 'react';
import './Footer.css';
import logo from '../../logo/new-logo-wn.png';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wave"></div>
            
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-section ft-logo">
                        <div className="logo-container">
                            <img src={logo} alt="Natural Wohnbau Logo" className="footer-logo" />
                            <h2>NATURAL WOHNBAU</h2>
                        </div>
                        <p>Mit Qualität, natürlichen Materialien und innovativer Architektur schaffen wir Lebensräume, die bleiben.</p>
                        
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Rechtliches <div className="underline"></div></h3>
                        <ul>
                            <li><a href="/rechtlicherhinweise"><FaArrowRight className="arrow" /> Rechtliche Hinweise</a></li>
                            <li><a href="/impressum"><FaArrowRight className="arrow" /> Impressum</a></li>
                            <li><a href="/Datenschutz"><FaArrowRight className="arrow" /> Datenschutz</a></li>
                            <li><a href="#"><FaArrowRight className="arrow" /> Über Uns</a></li>
                        </ul>
                    </div>

                    <div className="footer-kontakt">
                        <h3>Kontakt <div className="underline"></div></h3>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FaEnvelope className="contact-icon" />
                            </div>
                            <span>info@natural-wohnbau.com</span>
                        </div>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FaPhoneAlt className="contact-icon" />
                            </div>
                            <span>+383 48 188 572</span>
                        </div>
                        <div className="contact-item">
                            <div className="icon-wrapper">
                                <FaMapMarkerAlt className="contact-icon" />
                            </div>
                            <div className="address">
                                <span>Pajazit Islami 1, Erolina 5</span>
                                <span>12000 Fushe Kosovo</span>
                                <span>Kosovo</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-newsletter">
                        <h3>Newsletter <div className="underline"></div></h3>
                        <p>Abonnieren Sie unseren Newsletter für exklusive Angebote, Inspirationen und Neuigkeiten.</p>

                        <form className="newsletter-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ihre E-Mail Adresse"
                                    required
                                />
                                <button type="submit">
                                    <span className="send-icon">→</span>
                                </button>
                            </div>
                            <div className="form-note">
                                Wir respektieren Ihre Privatsphäre
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} Natural Wohnbau. Alle Rechte vorbehalten.</p>
                    <div className="legal-links">
                        <a href="/datenschutz">Datenschutz</a>
                        <span>|</span>
                        <a href="/impressum">Impressum</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;