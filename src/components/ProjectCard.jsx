import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <span className="link-icon">⌨️</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
