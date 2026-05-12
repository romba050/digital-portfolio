import './Section.css';

function WorkExpSection() {
  const scrollToNavigation = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workExperiences = [
    {
      title: "Software Developer",
      company: "Karolinska Institutet",
      period: "09/2022 - 09/2024",
      responsibilities: [
        "Data harmonisation for epidemiological research",
        "Maintenance of the NEAR database and Website",
        "Building pipelines in R and Python",
        "WebDev in PHP and WordPress"
      ]
    },
    {
      title: "Research and Development Specialist",
      company: "Luxembourg Centre for Systems Biomedicine",
      period: "09/2020 - 08/2022",
      responsibilities: [
        "Data management and curation within the european BIOMAP and the luxembourgish CON-VINCE projects",
        "Using RedCAP to capture medical data",
        "Building re-usable data pipelines in KNIME",
        "Teaching in the Master of Data Science Course \"Python and R Programming\""
      ]
    }
  ];

  return (
    <section id="work-experience" className="section common-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <button className="back-to-nav-btn" onClick={scrollToNavigation} aria-label="Back to navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="work-experience-list">
          {workExperiences.map((exp, index) => (
            <div key={index} className="work-experience-card">
              <div className="work-header">
                <h3 className="work-title">{exp.title} | {exp.company}</h3>
                <p className="work-period">{exp.period}</p>
              </div>
              <ul className="work-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExpSection;
