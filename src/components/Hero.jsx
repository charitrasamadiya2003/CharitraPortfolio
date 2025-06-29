import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero d-flex flex-column align-items-center justify-content-center"
    >
      <div>
        <motion.img
          src="/charitra.png"
          alt="Charitra Samadiya"
          className="profile-img"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 12,
            opacity: { duration: 0.4 }
          }}
        />
      </div>

      <motion.h1
        className="hero-title mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Charitra Samadiya Jain
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        Frontend Developer · ReactJS · Web Aesthetics & Performance
      </motion.p>

      <motion.div
        className="social-links mt-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 2
            }
          }
        }}
      >
        {[
          {
            href: "https://linkedin.com/in/charitra-samadiya-28ab66330",
            icon: <FaLinkedin />,
            label: "LinkedIn"
          },
          {
            href: "https://www.github.com/charitra-samadiya",
            icon: <FaGithub />,
            label: "GitHub"
          },
          {
            href: "https://www.facebook.com/profile.php?id=100071556547110",
            icon: <FaFacebook />,
            label: "Facebook"
          }
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="social-icon"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
