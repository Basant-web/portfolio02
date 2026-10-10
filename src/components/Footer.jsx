import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Basant<span>.</span>
          </a>

          <p>
            Frontend Developer passionate about building
            modern and user-friendly web experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-navigation">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect With Me</h3>

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

          <a href="mailto:yadavbasant2800@gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>Basant</span>.
          All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;