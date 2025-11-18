import { useState, useEffect } from 'react';
import './Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { trackProjectView, trackLinkClick } from '../utils/analytics';

function Projects() {
const projects = [
  {
    id: 1,
    title: 'Investment Portfolio Tracker',
    description:
      'A full-stack investment tracker enabling real-time portfolio insights with live market updates, secure authentication, and Docker-based deployment.',
    technologies: ['Spring Boot', 'PostgreSQL', 'Docker', 'OAuth 2.0', 'Finnhub API'],
    image: 'https://via.placeholder.com/600x400/4A90E2/ffffff?text=Investment+Portfolio+Tracker',
    githubLink: 'https://github.com/anshgandhi17/Portfilio_Tracker_Backend',
    liveLink: '',
  },
  {
    id: 2,
    title: 'Intelligent Tutoring System',
    description:
      'An adaptive learning platform leveraging Gemini API for dynamic question generation and personalized study sessions, deployed using CI/CD automation.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Gemini API'],
    image: 'https://via.placeholder.com/600x400/7B68EE/ffffff?text=Intelligent+Tutoring+System',
    githubLink: '',
    liveLink: 'https://techtutor-project.onrender.com/',
  },
  {
    id: 3,
    title: 'UBC Insights',
    description:
      'A data integration and analysis tool built using Express.js with TDD principles, enabling high-quality APIs and efficient structured data parsing.',
    technologies: ['TypeScript', 'Express.js', 'Chai', 'Mocha', 'Parse5'],
    image: 'https://via.placeholder.com/600x400/50C878/ffffff?text=UBC+Insights',
    githubLink: '',
    liveLink: '',
  },
  {
    id: 4,
    title: 'Body Wellness Club',
    description:
      'A modular Java-based fitness management system featuring OOP design, JUnit testing, and JSON data persistence for user tracking and settings management.',
    technologies: ['Java', 'Swing', 'JUnit', 'JSON'],
    image: 'https://via.placeholder.com/600x400/F5A623/ffffff?text=Body+Wellness+Club',
    githubLink: 'https://github.com/anshgandhi17/Body_Energy_Club_Java_Personal_Project',
    liveLink: '',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive, animated personal portfolio showcasing projects, experiences, and AI-driven learning interests with a modern React frontend.',
    technologies: ['React', 'Framer Motion', 'CSS3'],
    image: 'https://via.placeholder.com/600x400/FF6B6B/ffffff?text=Portfolio+Website',
    githubLink: '',
    liveLink: '',
  },
  {
    id: 6,
    title: 'AI Resume Analyzer',
    description:
      'A resume optimization tool leveraging AI to help users optimize their resumes for ATS systems and recruiters with intelligent feedback and suggestions.',
    technologies: ['FastAPI', 'Next.js 14', 'LangChain', 'ChromaDB', 'Ollama'],
    image: 'https://via.placeholder.com/600x400/9B59B6/ffffff?text=AI+Resume+Analyzer',
    githubLink: '',
    liveLink: '',
  },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.2 });

  // Track project views when carousel changes
  useEffect(() => {
    trackProjectView(projects[currentIndex].title);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleProjectLinkClick = (linkType, projectTitle, url) => {
    trackLinkClick(`${projectTitle} - ${linkType}`, url, 'project');
  };

  return (
    <section id="projects" className="section projects-section">
      <h2
        ref={titleRef}
        className={`section-title fade-in-up ${titleVisible ? 'visible' : ''}`}
      >
        Projects
      </h2>
      <div
        ref={carouselRef}
        className={`carousel fade-in-up stagger-1 ${carouselVisible ? 'visible' : ''}`}
      >
        <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous project">
          &#8249;
        </button>

        <div className="carousel-content">
          <div className="project-card">
            <div className="project-info">
              <h3 className="project-title">{projects[currentIndex].title}</h3>
              <p className="project-description">{projects[currentIndex].description}</p>
              <div className="project-technologies">
                {projects[currentIndex].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {projects[currentIndex].githubLink && (
                  <a
                    href={projects[currentIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                    onClick={() => handleProjectLinkClick('GitHub', projects[currentIndex].title, projects[currentIndex].githubLink)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {projects[currentIndex].liveLink && (
                  <a
                    href={projects[currentIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                    onClick={() => handleProjectLinkClick('Live Demo', projects[currentIndex].title, projects[currentIndex].liveLink)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-button next" onClick={nextSlide} aria-label="Next project">
          &#8250;
        </button>
      </div>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
