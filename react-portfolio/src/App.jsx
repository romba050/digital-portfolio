import HeroSection from './components/HeroSection';
import NetworkSection from './components/NetworkSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import QualificationsSection from './components/QualificationsSection';
import WorkExpSection from './components/WorkExpSection';
import './App.css';

function App() {
  return (
    <div className="scroll-container">
      <HeroSection />
      <NetworkSection />
      <ProjectsSection />
      <WorkExpSection />
      <SkillsSection />
      <QualificationsSection />
    </div>
  );
}

export default App;
