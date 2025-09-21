import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">Manik</span>
          <span className="logo-accent">Dev</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a href="#home" className="navbar-link active"><span>Home</span></a>
          <a href="#about" className="navbar-link"><span>About</span></a>
          <a href="#experience" className="navbar-link"><span>Experience</span></a>
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={toggleMobileMenu}><span>Home</span></a>
        <a href="#about" className="mobile-link" onClick={toggleMobileMenu}><span>About</span></a>
        <a href="#experience" className="mobile-link" onClick={toggleMobileMenu}><span>Experience</span></a>
      </div>
    </nav>
  );
};

export default Navbar;