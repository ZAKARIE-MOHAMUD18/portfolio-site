// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Hello! I'm Zakerie, a front-end developer passionate about designing and building clean, responsive, and user-focused web applications. I love turning ideas into real products using modern technologies like React.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        I focus on creating accessible, high-performance websites that look great and work seamlessly across devices. I’m constantly learning and pushing myself to write clean, scalable code and deliver smooth user experiences.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        Here are a few technologies I’ve been working with recently:
      </motion.p>

      <motion.ul
        className="tech-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS / Sass</li>
        <li>HTML</li>
        <li>Vite</li>
        <li>Git & GitHub</li>
      </motion.ul>
    </motion.section>
  );
}

export default About;
