import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="status-dot"></span>
          HELLO, I'M
        </p>

        <h1 className="hero-name">
          Basant<span>.</span>
        </h1>

        <h2 className="hero-title">
          Frontend Developer
        </h2>

        <p className="hero-description">
          I build responsive, accessible, and user-friendly web
          experiences using modern frontend technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            Explore My Work <span>↗</span>
          </a>

          <a href="#about" className="hero-btn hero-btn-secondary">
            About Me
          </a>
        </div>

        <div className="hero-scroll">
          <span className="scroll-line"></span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>
    </section>
  );
}

export default Hero;