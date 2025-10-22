import './Navbar.css';

function Navbar({ show, darkMode, toggleDarkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${show ? 'navbar-visible' : ''}`}>
      <div className="navbar-content">
        <button onClick={() => scrollToSection('about')} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection('experiences')} className="nav-link">
          Experiences
        </button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">
          Projects
        </button>
        <button
          className="theme-toggle-navbar"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
