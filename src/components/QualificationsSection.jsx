import './Section.css';

function QualificationsSection() {
  const scrollToNavigation = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const qualifications = [
    "4 years of experience in clinical data management",
    "Strong hands-on experience and knowledge in Python and R",
    "Focus on bioinformatics in protein structures and medical image analysis",
    "Good understanding of statistical principles and machine learning and their respective applications",
    "Experience in WebDev using PHP, WordPress or Python libraries"
  ];

  return (
    <section id="qualifications" className="section common-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Qualifications</h2>
          <button className="back-to-nav-btn" onClick={scrollToNavigation} aria-label="Back to navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="skills-grid">
          {qualifications.map((qual, index) => (
            <div key={index} className="skill-card">
              <div className="skill-marker">►</div>
              <div className="skill-content">
                <p className="skill-items">{qual}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;
