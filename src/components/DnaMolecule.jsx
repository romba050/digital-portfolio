function DnaMolecule() {
  return (
    <svg
      className="dna-svg"
      width="360"
      height="360"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4BE1EC"/>
          <stop offset="100%" stopColor="#CC5EEE"/>
        </linearGradient>

        {/* Horizontal gradient for base pairs - using userSpaceOnUse */}
        <linearGradient id="basePairGradient" x1="50" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4BE1EC"/>
          <stop offset="100%" stopColor="#CC5EEE"/>
        </linearGradient>
      </defs>

      {/* Left strand of the double helix */}
      <path
        d="M 60 20 Q 40 50, 60 80 Q 80 110, 60 140 Q 40 170, 60 200 Q 80 230, 60 260 Q 40 290, 60 320"
        stroke="url(#dnaGradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Right strand of the double helix */}
      <path
        d="M 140 20 Q 160 50, 140 80 Q 120 110, 140 140 Q 160 170, 140 200 Q 120 230, 140 260 Q 160 290, 140 320"
        stroke="url(#dnaGradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Base pairs - horizontal rungs connecting the strands */}
      {/* Colors calculated to match the vertical gradient from cyan to purple */}
      <line x1="50" y1="50" x2="150" y2="50" stroke="#5FE3EC" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="60" y1="80" x2="140" y2="80" stroke="#6DD4EC" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="70" y1="110" x2="130" y2="110" stroke="#7AC5ED" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="60" y1="140" x2="140" y2="140" stroke="#88AAEE" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="50" y1="170" x2="150" y2="170" stroke="#9A89EF" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="60" y1="200" x2="140" y2="200" stroke="#AA7AEF" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="70" y1="230" x2="130" y2="230" stroke="#BB6AEE" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="60" y1="260" x2="140" y2="260" stroke="#C463EE" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
      <line x1="50" y1="290" x2="150" y2="290" stroke="#CD5DEE" strokeWidth="4" opacity="0.85" strokeLinecap="round"/>
    </svg>
  );
}

export default DnaMolecule;
