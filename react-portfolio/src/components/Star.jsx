function Star() {
  return (
    <svg className="star-svg" width="360" height="360" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#7B2FFF"/>
          <stop offset="25%"  stopColor="#00C9FF"/>
          <stop offset="55%"  stopColor="#00FF94"/>
          <stop offset="80%"  stopColor="#FFE500"/>
          <stop offset="100%" stopColor="#f87a21"/>
        </linearGradient>
        <linearGradient id="sg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FF3CAC"/>
          <stop offset="35%"  stopColor="#7B2FFF"/>
          <stop offset="65%"  stopColor="#00C9FF"/>
          <stop offset="100%" stopColor="#00FF94"/>
        </linearGradient>
        <linearGradient id="sshine" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#9B00FF"  stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      {/* Main 4 points (North, South, East, West) */}
      <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="url(#sg1)" opacity="0.95"/>
      <path d="M130,250 C125,192 85,165 130,130 C175,165 135,192 130,250 Z" fill="url(#sg2)" opacity="0.95"/>
      <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="url(#sg1)" opacity="0.95"/>
      <path d="M250,130 C192,135 165,175 130,130 C165,85 192,125 250,130 Z" fill="url(#sg2)" opacity="0.95"/>

      {/* Diagonal 4 points (NE, SE, SW, NW) */}
      <path d="M215,45 C172,72 162,112 130,130 C112,98 132,88 215,45 Z"  fill="url(#sg2)" opacity="0.85"/>
      <path d="M215,215 C172,188 162,148 130,130 C112,162 132,172 215,215 Z" fill="url(#sg1)" opacity="0.85"/>
      <path d="M45,215 C88,188 98,148 130,130 C148,162 128,172 45,215 Z"  fill="url(#sg2)" opacity="0.85"/>
      <path d="M45,45 C88,72 98,112 130,130 C148,98 128,88 45,45 Z"   fill="url(#sg1)" opacity="0.85"/>

      {/* Shine effects */}
      <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="url(#sshine)" opacity="0.65"/>
      <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="url(#sshine)" opacity="0.35"/>
      <path d="M215,45 C172,72 162,112 130,130 C112,98 132,88 215,45 Z"  fill="url(#sshine)" opacity="0.45"/>
      <path d="M45,45 C88,72 98,112 130,130 C148,98 128,88 45,45 Z"   fill="url(#sshine)" opacity="0.45"/>

      {/* Stroke outlines */}
      <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.25"/>
      <path d="M130,250 C125,192 85,165 130,130 C175,165 135,192 130,250 Z" fill="none" stroke="#9B00FF" strokeWidth="0.5" opacity="0.25"/>
      <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="none" stroke="#FFE500" strokeWidth="0.5" opacity="0.25"/>
      <path d="M250,130 C192,135 165,175 130,130 C165,85 192,125 250,130 Z" fill="none" stroke="#00FF94" strokeWidth="0.5" opacity="0.25"/>
      <path d="M215,45 C172,72 162,112 130,130 C112,98 132,88 215,45 Z"  fill="none" stroke="#00C9FF" strokeWidth="0.5" opacity="0.25"/>
      <path d="M215,215 C172,188 162,148 130,130 C112,162 132,172 215,215 Z" fill="none" stroke="#f87a21" strokeWidth="0.5" opacity="0.25"/>
      <path d="M45,215 C88,188 98,148 130,130 C148,162 128,172 45,215 Z"  fill="none" stroke="#FF3CAC" strokeWidth="0.5" opacity="0.25"/>
      <path d="M45,45 C88,72 98,112 130,130 C148,98 128,88 45,45 Z"   fill="none" stroke="#7B2FFF" strokeWidth="0.5" opacity="0.25"/>
    </svg>
  );
}

export default Star;
