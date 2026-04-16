import './ExperienceSection.css';

function ExperienceSection() {
  const qualifications = [
    "4 years of experience in clinical data management",
    "Strong hands-on experience and knowledge in Python and R",
    "Focus on bioinformatics in protein structures and medical image analysis",
    "Good understanding of statistical principles and machine learning and their respective applications",
    "Experience in WebDev using PHP, WordPress or Python libraries"
  ];

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
    <section className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience & Qualifications</h2>
        <div className="qualifications-list">
          {qualifications.map((qual, index) => (
            <div key={index} className="qualification-item">
              <span className="qualification-marker">►</span>
              <span className="qualification-text">{qual}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title work-experience-title">Work Experience</h2>
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

export default ExperienceSection;
