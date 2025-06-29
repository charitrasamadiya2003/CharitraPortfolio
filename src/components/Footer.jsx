import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaEnvelope,
  FaCode
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="luxury-footer bg-dark text-white py-5 position-relative">
      <Container>
        <Row className="justify-content-center">
          <motion.div
            className="col-lg-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h5 className="mb-3 footer-name">Charitra Samadiya</h5>
            <p className="mb-4">
              Frontend Developer | React Specialist | Creating beautiful digital experiences
            </p>

            <div className="social-icons mb-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white mx-2"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white mx-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100071556547110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white mx-2"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="mailto:charitrasamadiya@gmail.com" 
                className="text-white mx-2"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            <div className="mb-3">
              <a 
                href="#home" 
                className="btn btn-outline-light btn-sm rounded-pill mx-1"
              >
                Back to Top
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline-light btn-sm rounded-pill mx-1"
              >
                Contact Me
              </a>
            </div>

            <p className="small mb-0">
              <FaCode className="me-1" />
              Built with React, Bootstrap, and ❤️
            </p>
            <p className="small mt-2 mb-0">
              © {new Date().getFullYear()} Charitra Samadiya. All rights reserved.
            </p>
          </motion.div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
