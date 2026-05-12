import './Section.css';

function ProjectsSection() {
  const scrollToNavigation = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Blood Vessel Segmentation (Master Thesis)",
      description: "Leveraging Neural Networks and Probability Theory to find blood vessels",
      url: "https://github.com/romba050/MFN_RBV_segmentation"
    },
    {
      title: "Blood Vessel Segmentation Webapp",
      description: "Interactive webapp for vessel segmentation",
      url: "https://basile-rommes.com/bvs"
    },
    {
      title: "Protein Superpositioning",
      description: "Using Bayesian Inference to position protein structures over each other",
      url: "https://github.com/romba050/Protein_Superpositioning_using_Bayesian_Inference"
    },
    {
      title: "Convolutional Neural Network based Hand-Written Digit Recognizer",
      description: "",
      url: "https://basile-rommes.com/hand-written-digits"
    },
    {
      title: "Spotle Assist Project",
      description: "The smart assistant to the Spotle artist guessing game",
      url: "https://basile-rommes.com/spotle/"
    },
    {
      title: "NEAR Data Request Form",
      description: "Plan your data application to conduct ageing research",
      url: "https://basile-rommes.com/near-data-request/"
    },
    {
      title: "Swedish Cake Day",
      description: "Find out which cake is celebrated today in Sweden, the country of pastries",
      url: "https://basile-rommes.com/cake/"
    },
    {
      title: "AI Art Turing Test",
      description: "Test your ability to distinguish AI-generated images from human art",
      url: "https://basile-rommes.com/ai-art-quiz/"
    }
  ];

  return (
    <section id="projects" className="section common-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects & WebApps</h2>
          <button className="back-to-nav-btn" onClick={scrollToNavigation} aria-label="Back to navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-marker">►</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
