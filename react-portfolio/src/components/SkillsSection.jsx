import './Section.css';

function SkillsSection() {
  const scrollToNavigation = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      category: "Programming",
      items: "Python (Scikit-learn, Pandas), R, Unix/Bash, C++, SQL, PHP"
    },
    {
      category: "Data Visualisation",
      items: "Matplotlib, Plotly, Streamlit"
    },
    {
      category: "Machine Learning",
      items: "PyTorch, Keras"
    },
    {
      category: "Modeling",
      items: "Convolutional Neural Networks, Bayesian Maximum a posteriori estimation, logistic regression, linear regression, decision trees"
    },
    {
      category: "Databases and Cloud",
      items: "MySQL, MariaDB, AWS, Docker, InfluxDB, Grafana"
    }
  ];

  return (
    <section id="skills" className="section common-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <button className="back-to-nav-btn" onClick={scrollToNavigation} aria-label="Back to navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-marker">►</div>
              <div className="skill-content">
                <h3 className="skill-category">{skill.category}:</h3>
                <p className="skill-items">{skill.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
