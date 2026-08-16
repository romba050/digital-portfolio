const LINKS = [
  { id: 'projects', label: 'Projects & WebApps' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'qualifications', label: 'Experience & Qualifications' },
];

function MenuBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu-bar">
      <div className="menu-brand">BASILE ROMMES</div>
      <div className="menu-links">
        {LINKS.map(({ id, label }) => (
          <button key={id} className="menu-link" onClick={() => scrollToSection(id)}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default MenuBar;
