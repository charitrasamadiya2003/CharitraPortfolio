
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import './index.css';

function App() {
  // Smooth scroll handler
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.hash && e.target.hash.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll, true);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Resume id = "resume" />
        <Certificates id = "certificates"  />

        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

