import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import './Resume.css';
import { motion } from 'framer-motion';

const Resume = () => {
  const resumeFile = '/Resume.pdf'; // Path to the PDF in the public folder

  const handleViewResume = () => {
    console.log('View Resume button clicked');
    window.open(resumeFile, '_blank');
  };

  const handleDownloadResume = () => {
    console.log('Download Resume button clicked');
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Charitra_Samadiya_Resume.pdf'; // Change to your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="lux-resume-section text-center">
      <div className="container">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Explore My Resume
        </motion.h2>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Browse through my experience, education, and projects all in one polished document.
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleViewResume}
            className="lux-btn-outline"
            aria-label="View Resume PDF"
          >
            <FaEye className="me-2" />
            View Resume
          </button>

          <button
            onClick={handleDownloadResume}
            className="lux-btn-golden"
          >
            <FaDownload className="me-2" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
