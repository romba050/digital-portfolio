import './SkillsSection.css';

function SkillsSection() {
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
    <section className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
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
