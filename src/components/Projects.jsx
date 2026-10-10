import "../css/Projects.css";

const projects = [
  {
    number: "01",
    title: "CineVerse",
    description:
      "A React-based movie discovery platform featuring API integration, filtering movies, movie details, and personalized watchlist management.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Basant-web/cineverse",
    demo: "https://cineverse-nu-hazel.vercel.app/",
  },
  {
    number: "02",
    title: "TaskFloW",
    description:
      "A React-based task management application that enables users to search, organize, and track tasks with priority levels, project categorization, completion status, and task progress monitoring.",
    technologies: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/Basant-web/To-Do-List",
    demo: "https://todolist2245.netlify.app/",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and journey as a frontend developer.",
    technologies: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/Basant-web/portfolio02",
    showLiveDemo: false
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Heading */}
        <div className="projects-header">
          <p className="section-label">MY RECENT WORK</p>

          <h2 className="projects-title">
            Featured <span>Projects</span>
          </h2>

          <p className="projects-description">
            Here are some projects I've built while learning and
            improving my development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              {/* Card Header */}
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-symbol">&lt;/&gt;</span>
              </div>

              {/* Project Information */}
              <h3>{project.title}</h3>

              <p className="project-text">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Separate Buttons */}
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-btn"
                >
                  GitHub <span>↗</span>
                </a>

                {project.showLiveDemo !== false && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-btn"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;