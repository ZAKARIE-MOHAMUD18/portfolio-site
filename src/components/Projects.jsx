// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Country Population Finder",
    description:
      "A web app that lets users search for countries and view their population using a REST API. Built as a Phase 1 final project.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/ZAKARIE-MOHAMUD18/phase-1-project",
    demo: "https://zakarie-mohamud18.github.io/phase-1-project/"
  },
  {
    title: "SMART Goal Planner",
    description:
      "A fintech app that helps users plan and track savings goals with real-time progress updates and deposit tracking.",
    stack: ["React", "JSON Server", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/smart-goal-planner",
    demo: "#"
  },
  {
    title: "Blog Manager",
    description:
      "A simple React CRUD app to create, edit, and delete blog posts, using json-server to simulate a REST API backend.",
    stack: ["React", "JSON Server", "React Router"],
    github: "https://github.com/yourusername/react-blog-manager",
    demo: "#"
  }
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
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
        Some Things I’ve Built
      </motion.h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-stack">
              {project.stack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
