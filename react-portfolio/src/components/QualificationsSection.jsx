import './Section.css';

function QualificationsSection() {
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
        <h2 className="section-title">Experience & Qualifications</h2>
        <div className="qualifications-list">
          {qualifications.map((qual, index) => (
            <div key={index} className="qualification-item">
              <span className="qualification-marker">►</span>
              <span className="qualification-text">{qual}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;
