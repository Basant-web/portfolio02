import "../css/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-header">
          <p className="section-label">GET TO KNOW ME</p>

          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-subtitle">
            A little about my journey as a developer.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">
            <h3>
              I'm Basant, a <span>Frontend Developer</span>.
            </h3>

            <p>
              I'm a web development enthusiast who enjoys turning ideas
              into responsive, interactive, and user-friendly websites.
              I focus on writing clean code and creating simple,
              intuitive user experiences.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, and React to build
              modern web interfaces. I also enjoy learning new
              technologies and improving my problem-solving skills
              through practical projects.
            </p>

            <p>
              My current goal is to secure a frontend development
              internship where I can contribute to real projects,
              learn from experienced developers, and grow my skills.
            </p>

            <a href="#contact" className="about-contact-btn">
              Let's Connect <span>↗</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="about-highlights">

            <div className="highlight-card">
              <span className="highlight-number">01</span>
              <div>
                <h4>Frontend Development</h4>
                <p>Building responsive web interfaces.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">02</span>
              <div>
                <h4>React Development</h4>
                <p>Creating reusable UI components.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span className="highlight-number">03</span>
              <div>
                <h4>Continuous Learning</h4>
                <p>Improving through hands-on projects.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;