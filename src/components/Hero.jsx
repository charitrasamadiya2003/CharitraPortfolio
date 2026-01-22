import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  // 🔁 Side Effect: Run only once when the Hero component mounts
 useEffect(() => {
  fetch("https://api64.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/track-visitor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip: data.ip,
          userAgent: navigator.userAgent,
        }),
      }).catch((err) => console.error("Visitor track error:", err));
    })
    .catch((err) => console.error("IP fetch error:", err));

  return () => {
    console.log("Hero component unmounted");
  };
}, []);



  const socialLinks = [
    {
      href: "https://linkedin.com/in/charitra-samadiya-28ab66330",
      icon: <FaLinkedin />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/charitrasamadiya2003",
      icon: <FaGithub />,
      label: "GitHub"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100071556547110",
      icon: <FaFacebook />,
      label: "Facebook"
    }
  ];

  return (
    <section
      id="home"
      className="hero d-flex flex-column align-items-center justify-content-center"
    >
      <link
        rel="preload"
        as="image"
        href={`${import.meta.env.BASE_URL}`}
      />
      <div>
        <motion.img
          src={`${import.meta.env.BASE_URL}charitra.png`}
          alt="Charitra Samadiya - Frontend Developer"
          className="profile-img"
          width="180"
          height="180"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <motion.h1
        className="hero-title mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        Charitra Samadiya
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
        Frontend Developer · ReactJS · Web Aesthetics & Performance
      </motion.p>

      <motion.div
        className="social-links mt-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.8
            }
          }
        }}
      >
        {socialLinks.map((item, i) => (
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
