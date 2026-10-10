import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="logo">
        Basant<span>.</span>
      </a>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#home" className="active">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact" className="nav-contact">
            Contact Me <span>↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;