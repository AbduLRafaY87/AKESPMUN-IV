import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-nobg.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate dynamic styles based on scroll
  const opacity = Math.min(0.5 + scrollY / 25, 0.95);
  const shadowOpacity = Math.min(scrollY / 10, 1);
  const blurIntensity = Math.min(0.3 + scrollY / 1, 10);

  const navStyle = {
    backgroundColor: `rgba(27, 59, 47, ${opacity})`,
    boxShadow: `0 5px 50px rgba(0, 0, 0, ${shadowOpacity * 0.5})`,
    backdropFilter: `blur(${blurIntensity}px)`,
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/committees', label: 'Committees' },
    { path: '/registrations', label: 'Registrations' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About AKESPMUN' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className="navbar" style={navStyle}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img
            src={logo}
            alt="Logo"
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
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
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