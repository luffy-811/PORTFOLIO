import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer & UI Enthusiast';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    };

    typingInterval = setInterval(typeText, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <Spline 
        scene="https://prod.spline.design/3GGQeTYK9ac1v0EG/scene.splinecode"
        className="hero-spline"
      />
      
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-greeting fade-in">
              Hi, I'm <span className="highlight">SURYA PRAKASH REDDY</span>
            </h1>
            <p className="hero-tagline fade-in-delay">
              {displayText}
              {isTyping && <span className="cursor">|</span>}
            </p>
            <button className="cta-button fade-in-delay-2" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
