// src/components/Header.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <a href="#home" className="logo">Zakerie</a>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <motion.a
            href="#about"
            onClick={closeDrawer}
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            onClick={closeDrawer}
            whileHover={{ scale: 1.1 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            onClick={closeDrawer}
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={closeDrawer}
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>

        <div className="hamburger" onClick={toggleDrawer}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
