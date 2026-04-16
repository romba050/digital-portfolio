import HeroSection from './components/HeroSection';
import NetworkSection from './components/NetworkSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import './App.css';

function App() {
  return (
    <div className="scroll-container">
      <HeroSection />
      <NetworkSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
