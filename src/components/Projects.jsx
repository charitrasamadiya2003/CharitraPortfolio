import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="lux-projects-section">
      <div className="container text-center">

        {/* Animated Heading */}
        <motion.h2
          className="fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Explore My Projects
        </motion.h2>

        {/* Folder Card */}
        <motion.a
          href="https://github.com/charitra-samadiya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-block lux-folder-link"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <div className="lux-folder-card shadow p-4 rounded-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/715/715676.png"
              alt="Projects Folder"
              className="img-fluid"
              style={{ maxWidth: '100px' }}
            />
            <div className="lux-folder-label mt-3">Open GitHub Folder</div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
