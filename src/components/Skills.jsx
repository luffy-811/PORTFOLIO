import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, icon: '{ }' },
        { name: 'JAVA', level: 95, icon: '' },
        
        { name: 'Python', level: 75, icon: '🐍' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Node.js', level: 85, icon: '◈' },
        { name: 'Next.js', level: 82, icon: '▲' },
        { name: 'Express', level: 80, icon: 'E' },
        { name: 'HTML', level: 75, icon: '<>' },
        { name: 'CSS3', level: 90, icon: '#' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88, icon: '⎇' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '⌨️' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`additional-skills ${isVisible ? 'visible' : ''}`}>
          <h3>Also familiar with:</h3>
          <div className="badges-container">
            <span className="skill-badge">REST APIs</span>
            <span className="skill-badge">SPRING BOOT</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">MySQL</span>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
