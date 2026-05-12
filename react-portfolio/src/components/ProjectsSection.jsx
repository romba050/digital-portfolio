import './Section.css';

function ProjectsSection() {
  const projects = [
    {
      title: "Blood Vessel Segmentation (Master Thesis)",
      description: "Leveraging Neural Networks and Probability Theory to find blood vessels"
    },
    {
      title: "Blood Vessel Segmentation Webapp",
      description: "Interactive webapp for vessel segmentation"
    },
    {
      title: "Protein Superpositioning",
      description: "Using Bayesian Inference to position protein structures over each other"
    },
    {
      title: "Convolutional Neural Network based Hand-Written Digit Recognizer",
      description: ""
    },
    {
      title: "Spotle Assist Project",
      description: "The smart assistant to the Spotle artist guessing game"
    },
    {
      title: "NEAR Data Request Form",
      description: "Plan your data application to conduct ageing research"
    },
    {
      title: "Swedish Cake Day",
      description: "Find out which cake is celebrated today in Sweden, the country of pastries"
    },
    {
      title: "AI Art Turing Test",
      description: "Test your ability to distinguish AI-generated images from human art"
    }
  ];

  return (
    <section id="projects" className="section common-section">
      <div className="section-container">
        <h2 className="section-title">Projects & WebApps</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-marker">►</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
