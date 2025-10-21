import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Developed a fully responsive, custom-built personal portfolio to showcase my skills, projects, and professional background to potential employers. Implemented a clean, modern user interface with a focus on user experience, resulting in an intuitive and easy-to-navigate site.',
      techStack: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: '/portfolio.png',
      demoLink: 'https://example.com/portfolio-demo',
      githubLink: 'https://github.com/luffy-811'
    },
    {
      title: 'Expense Tracker Web Application',
      description: 'Built a full-stack expense management system with CRUD operations, category/date filtering, and summary reports to track expenses effectively. Optimized SQL queries and applied modular design principles for better performance.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: '/expense-tracker.png',
      githubLink: 'https://github.com/luffy-811/Expense-tracker'
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
          Featured Projects
        </h2>
        <p className={`projects-subtitle ${isVisible ? 'visible' : ''}`}>
          Here are some of my key projects demonstrating full-stack development skills
        </p>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
