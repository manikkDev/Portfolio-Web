import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`navbar ${theme}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.div className="navbar-logo" variants={itemVariants}>
          <span className="logo-text">Manik</span>
          <span className="logo-accent">Dev</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div className="navbar-menu" variants={itemVariants}>
          <motion.a 
            href="#home" 
            className="navbar-link active"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Home</span>
          </motion.a>
          <motion.a 
            href="#about" 
            className="navbar-link"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>About</span>
          </motion.a>
          <motion.a 
            href="#experience" 
            className="navbar-link"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Experience</span>
          </motion.a>
        </motion.div>

        {/* Theme Toggle & Mobile Menu */}
        <motion.div className="navbar-actions" variants={itemVariants}>
          {/* Theme Toggle */}
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="toggle-track">
              <motion.div 
                className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? '🌙' : '☀️'}
              </motion.div>
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.a 
          href="#home" 
          className="mobile-link" 
          onClick={toggleMobileMenu}
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Home</span>
        </motion.a>
        <motion.a 
          href="#about" 
          className="mobile-link" 
          onClick={toggleMobileMenu}
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>About</span>
        </motion.a>
        <motion.a 
          href="#experience" 
          className="mobile-link" 
          onClick={toggleMobileMenu}
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Experience</span>
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;