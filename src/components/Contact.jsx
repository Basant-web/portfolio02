import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="contact-title">
          Let's Work <span>Together.</span>
        </h2>

        <p className="contact-description">
          I'm looking for opportunities to grow as a frontend developer
          and work on meaningful projects. Have an opportunity or idea?
          Let's connect!
        </p>

        <a
          href="mailto:yadavbasant2800@gmail.com"
          className="contact-email"
        >
          yadavbasant2800@gmail.com <span>↗</span>
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/Basant-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/basant-yadav-84b757381"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;