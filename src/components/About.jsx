import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const traits = [
    'Curious',
    'Lifelong Learner',
    'Problem Solver',
    'Creative Thinker'
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
          About Me
        </h2>
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-wrapper">
              <img 
                src="/surya.png" 
                alt="Profile" 
              />
              <div className="image-border"></div>
            </div>
          </div>
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <p className="bio">
              I'm a passionate Full Stack developer with a love for creating beautiful, 
              functional web experiences. With expertise in modern web technologies, 
              I transform ideas into elegant digital solutions that users love.
            </p>
            <p className="bio">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open-source projects, or learning the latest frameworks 
              and tools in the ever-evolving world of web development.
            </p>
            <div className="traits">
              <h3>What defines me:</h3>
              <div className="traits-grid">
                {traits.map((trait, index) => (
                  <div 
                    key={index} 
                    className="trait-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="trait-icon">✦</span>
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
