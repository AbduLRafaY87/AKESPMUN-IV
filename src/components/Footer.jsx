// import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Column 1 - Logo & Socials */}
        <div className="footer__column footer__column--branding">
          <img src={logo} alt="AKESPMUN Logo" className="footer__logo" />
          <p className="footer__tagline">Model United Nations - 2025</p>
          <p className="footer__subtitle">Four Years in the Making</p>
          
          {/* Social Icons */}
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer__column">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li><a href="/" className="footer__link">Home</a></li>
            <li><a href="/registrations" className="footer__link">Registration</a></li>
            <li><a href="/committees" className="footer__link">Committees</a></li>
            <li><a href="/contact" className="footer__link">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer__column">
          <h3 className="footer__title">Get in Touch</h3>
          <div className="footer__contact">
            <p className="footer__contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:central@akesp.org" className="footer__link">akesp.mun@gmail.com</a>
            </p>
            {/* <p className="footer__contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:akesp_mun_example@akesp.org" className="footer__link">akesp_mun_example@akesp.org</a>
            </p> */}
          </div>
        </div>

        {/* Column 4 - Google Maps */}
        <div className="footer__column footer__column--map">
          <div className="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d67.0624281!3d24.9227504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f6ccec4bcaf%3A0xd26e80f8eafbe7be!2sAga%20Khan%20Higher%20Secondary%20School%20Karachi!5e0!3m2!1sen!2s!4v0"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p>
          Copyright &copy; <span className="footer__copyright-brand">AKESPMUN IV</span> {new Date().getFullYear()}.
          All rights reserved. Designed & Developed by&nbsp;&nbsp;&nbsp;
          <a 
            href="https://www.primecreators.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer__developer"
          >
            Prime Creators <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;