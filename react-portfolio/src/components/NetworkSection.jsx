import Star from './Star';

function NetworkSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section network-section">
      <div className="network-content">
        <div className="star-wrap">
          <button
            className="nav-header nav-top-left"
            onClick={() => scrollToSection('projects')}
          >
            Projects & WebApps
          </button>
          <button
            className="nav-header nav-top-right"
            onClick={() => scrollToSection('work-experience')}
          >
            Work Experience
          </button>
          <Star />
          <button
            className="nav-header nav-bottom-left"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button
            className="nav-header nav-bottom-right"
            onClick={() => scrollToSection('qualifications')}
          >
            Experience & Qualifications
          </button>
        </div>

        <div className="bottom-row">
          <div className="globe-box">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="32" stroke="#888" strokeWidth="0.8"/>
              <ellipse cx="40" cy="40" rx="32" ry="14" stroke="#888" strokeWidth="0.8"/>
              <ellipse cx="40" cy="40" rx="16" ry="32" stroke="#888" strokeWidth="0.8"/>
              <line x1="8"  y1="40" x2="72" y2="40" stroke="#888" strokeWidth="0.8"/>
              <line x1="40" y1="8"  x2="40" y2="72" stroke="#888" strokeWidth="0.8"/>
              <ellipse cx="40" cy="40" rx="18" ry="9" stroke="#FF6B00" strokeWidth="1.2"/>
              <circle cx="40" cy="40" r="5" stroke="#FF6B00" strokeWidth="1"/>
              <circle cx="40" cy="40" r="2" fill="#FF6B00"/>
            </svg>
            <div className="globe-label">Network</div>
          </div>

          <div className="links-col">
            <div className="find-me">Find me</div>
            <a className="pill-link" href="https://linkedin.com/in/basile-rommes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="pill-link" href="https://github.com/romba050" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>

        <div className="reg-mark">
          <div className="reg-h"></div>
          <div className="reg-v"></div>
          <div className="reg-circle"></div>
          <div className="reg-v"></div>
          <div className="reg-code">REG-01</div>
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
