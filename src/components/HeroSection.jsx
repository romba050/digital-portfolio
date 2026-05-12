import Barcode from './Barcode';
// import VertBarcode from './VertBarcode';
import GlitchPill from './GlitchPill';
import Star from './Star';

function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section hero-section">
      <div className="upper">
        <div className="top-bar">
          <div className="stamp">CV</div>
          <div className="meta-label">Personal Portfolio</div>
          <Barcode />
        </div>

        <div className="divider-line"></div>

        <div className="content-row">
          <div className="left-content">
            <div className="logotype">BASILE<br/>ROMMES</div>

            <GlitchPill />

            <div className="subtext">
              <span>basilerommes@hotmail.com</span>
              <span>Stockholm, Sweden</span>
            </div>
          </div>

          <div className="right-content">
            <div className="find-me-section">
              <div className="find-me">Find me</div>
              <a className="pill-link" href="https://linkedin.com/in/basile-rommes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="pill-link" href="https://github.com/romba050" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>

        {/* Commented out elements not in the new layout */}
        {/* <div className="crosshair-zone">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0"  y1="29" x2="58" y2="29" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="29" y1="0"  x2="29" y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <circle cx="29" cy="29" r="13" stroke="#0F0F0F" strokeWidth="1"/>
            <circle cx="29" cy="29" r="2.5" fill="#0F0F0F"/>
            <line x1="0"  y1="0"  x2="7"  y2="0"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="0"  x2="0"  y2="7"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="0"  x2="51" y2="0"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="0"  x2="58" y2="7"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="58" x2="7"  y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="58" x2="0"  y2="51" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="58" x2="51" y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="58" x2="58" y2="51" stroke="#0F0F0F" strokeWidth="1"/>
          </svg>
          <VertBarcode />
        </div> */}
      </div>

      {/* <div className="h-separator"></div> */}

      {/* Star navigation section - black box */}
      <div className="star-navigation-box">
        <div className="star-wrap">
          <button
            className="nav-header nav-top-left"
            onClick={() => scrollToSection('projects')}
          >
            {"Projects &\nWebApps"}
          </button>
          <button
            className="nav-header nav-top-right"
            onClick={() => scrollToSection('work-experience')}
          >
            {"Work\nExperience"}
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
            {"Experience &\nQualifications"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
