function GlitchPill() {
  return (
    <div className="pill">
      <div className="pill-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* DNA double helix */}
          {/* Left strand */}
          <path d="M8 4 Q12 8 8 12 Q4 16 8 20 Q12 24 8 28" stroke="#0F0F0F" strokeWidth="2" fill="none"/>
          {/* Right strand */}
          <path d="M24 4 Q20 8 24 12 Q28 16 24 20 Q20 24 24 28" stroke="#0F0F0F" strokeWidth="2" fill="none"/>
          {/* Connecting bars */}
          <line x1="8" y1="6" x2="24" y2="6" stroke="#0F0F0F" strokeWidth="1.5"/>
          <line x1="8" y1="10" x2="24" y2="10" stroke="#0F0F0F" strokeWidth="1.5"/>
          <line x1="8" y1="14" x2="24" y2="14" stroke="#0F0F0F" strokeWidth="1.5"/>
          <line x1="8" y1="18" x2="24" y2="18" stroke="#0F0F0F" strokeWidth="1.5"/>
          <line x1="8" y1="22" x2="24" y2="22" stroke="#0F0F0F" strokeWidth="1.5"/>
          <line x1="8" y1="26" x2="24" y2="26" stroke="#0F0F0F" strokeWidth="1.5"/>
          {/* Base pairs (dots) */}
          <circle cx="8" cy="6" r="2" fill="#0F0F0F"/>
          <circle cx="24" cy="6" r="2" fill="#0F0F0F"/>
          <circle cx="8" cy="14" r="2" fill="#0F0F0F"/>
          <circle cx="24" cy="14" r="2" fill="#0F0F0F"/>
          <circle cx="8" cy="22" r="2" fill="#0F0F0F"/>
          <circle cx="24" cy="22" r="2" fill="#0F0F0F"/>
        </svg>
      </div>
      <div className="pill-text">MSc Bioinformatics</div>
    </div>
  );
}

export default GlitchPill;
