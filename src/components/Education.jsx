import "../css/Education.css";

const education = [
  {
    degree: "M.Sc. IT",
    specialization: "Information and Data Science",
    institution: "The Maharaja Sayajirao University of Baroda",
    status: "Currently Pursuing",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    specialization: "Science",
    institution: "shri r k parikh arts & science college",
    status: "Completed",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <p className="section-label">MY ACADEMIC BACKGROUND</p>

        <h2 className="education-title">
          Education <span>& Learning</span>
        </h2>

        <p className="education-description">
          My academic journey and continuous learning in technology.
        </p>

        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={item.degree}>
              <div className="education-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="education-content">
                <span className="education-status">{item.status}</span>

                <h3>{item.degree}</h3>

                <p className="education-specialization">
                  {item.specialization}
                </p>

                <p className="education-institution">
                  {item.institution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;