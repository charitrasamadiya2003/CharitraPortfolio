import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section text-white py-5">
      <div className="container text-center">

        {/* Heading */}
        <motion.h2
          className="fw-bold about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Who I Am
        </motion.h2>

        {/* Line Divider */}
        <motion.div
          className="about-divider mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        {/* Premium Intro Text */}
        <motion.p
          className="about-subtext mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I’m Charitra — a frontend developer crafting beautiful, intuitive, and responsive digital experiences.
        </motion.p>

        {/* Main Body */}
        <motion.p
          className="about-paragraph mt-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          My approach blends clean UI with powerful frontend logic. From minimalist portfolios to dynamic web apps,
          I design with purpose — ensuring that every element feels intentional, elegant, and fast.
        </motion.p>

        <motion.p
          className="about-paragraph"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          I work with startups, creators, and visionaries to bring their digital visions to life — all while delivering smooth,
          high-performance code built with React and modern web tools.
        </motion.p>

        {/* Technologies Heading */}
        <motion.h3
          className="about-tech-heading mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          Tools I Master
        </motion.h3>

        {/* Tech Badges */}
        <motion.ul
          className="list-inline mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <li className="list-inline-item tech-pill">React</li>
          <li className="list-inline-item tech-pill">JavaScript (ES6+)</li>
          <li className="list-inline-item tech-pill">HTML5</li>
          <li className="list-inline-item tech-pill">CSS3</li>
          <li className="list-inline-item tech-pill">Bootstrap</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
