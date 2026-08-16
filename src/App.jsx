import MenuBar from './components/MenuBar';
import HeroSection from './components/HeroSection';
// import NetworkSection from './components/NetworkSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import QualificationsSection from './components/QualificationsSection';
import WorkExpSection from './components/WorkExpSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <MenuBar />
      <div className="scroll-container">
        <HeroSection />
        {/* NetworkSection now integrated into HeroSection */}
        {/* <NetworkSection /> */}
        <ProjectsSection />
        <WorkExpSection />
        <SkillsSection />
        <QualificationsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
