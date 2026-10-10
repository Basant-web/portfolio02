import "../css/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and APIs.",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🗄️" },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use to develop and manage projects.",
    skills: [
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📬" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="section-label">MY EXPERTISE</p>

        <h2 className="skills-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skills-description">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <div className="skill-category-card" key={category.title}>
              <h3>{category.title}</h3>

              <p className="category-description">
                {category.description}
              </p>

              <div className="technology-list">
                {category.skills.map((skill) => (
                  <div className="technology-item" key={skill.name}>
                    <span className="technology-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;