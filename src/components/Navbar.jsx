import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-nobg.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Ref to detect clicks outside the navbar
  const navRef = useRef(null);
  
  // Location hook to close menu on route change
  const location = useLocation();

  // Handle Scroll for transparency effect
  useEffect(() => {
    const handleScroll = () => {
      // Switch to scrolled style after 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open AND click is NOT inside the navbar ref
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu automatically when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/committees', label: 'Committees' },
    { path: '/registrations', label: 'Registrations' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About AKESPMUN' },
    { path: '/contact', label: 'Contact Us' }
    { path: 'https://drive.google.com/file/d/149z2zLDiK6-wR4y2eC-b56w5fh9hfBVE/view', label: 'Accord' }
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} 
      ref={navRef}
    >
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img
            src={logo}
            alt="AKESPMUN Logo"
            className="navbar__logo-img"
            onError={(e) => e.target.style.display = 'none'}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar__menu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar__item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="navbar__toggle"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-menu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar__mobile-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;