function Star() {
  return (
    <div className="star-wrap">
      <svg className="star-svg" width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#7B2FFF"/>
            <stop offset="25%"  stopColor="#00C9FF"/>
            <stop offset="55%"  stopColor="#00FF94"/>
            <stop offset="80%"  stopColor="#FFE500"/>
            <stop offset="100%" stopColor="#FF6B00"/>
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
        <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="url(#sg1)" opacity="0.95"/>
        <path d="M130,250 C125,192 85,165 130,130 C175,165 135,192 130,250 Z" fill="url(#sg2)" opacity="0.95"/>
        <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="url(#sg1)" opacity="0.95"/>
        <path d="M250,130 C192,135 165,175 130,130 C165,85 192,125 250,130 Z" fill="url(#sg2)" opacity="0.95"/>
        <path d="M130,55 C134,90 158,110 130,130 C102,110 126,90 130,55 Z"  fill="#00EEFF" opacity="0.45"/>
        <path d="M130,205 C126,170 102,150 130,130 C158,150 134,170 130,205 Z" fill="#FF3CAC" opacity="0.4"/>
        <path d="M55,130 C90,126 110,102 130,130 C110,158 90,134 55,130 Z"  fill="#FFE500" opacity="0.45"/>
        <path d="M205,130 C170,134 150,158 130,130 C150,102 170,126 205,130 Z" fill="#00FF94" opacity="0.4"/>
        <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="url(#sshine)" opacity="0.65"/>
        <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="url(#sshine)" opacity="0.35"/>
        <ellipse cx="122" cy="38" rx="7" ry="12" fill="white" opacity="0.45" transform="rotate(-15,122,38)"/>
        <ellipse cx="118" cy="35" rx="2.5" ry="5" fill="white" opacity="0.7"  transform="rotate(-15,118,35)"/>
        <path d="M130,10 C135,68 175,95 130,130 C85,95 125,68 130,10 Z"   fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.25"/>
        <path d="M130,250 C125,192 85,165 130,130 C175,165 135,192 130,250 Z" fill="none" stroke="#9B00FF" strokeWidth="0.5" opacity="0.25"/>
        <path d="M10,130 C68,125 95,85 130,130 C95,175 68,135 10,130 Z"   fill="none" stroke="#FFE500" strokeWidth="0.5" opacity="0.25"/>
        <path d="M250,130 C192,135 165,175 130,130 C165,85 192,125 250,130 Z" fill="none" stroke="#00FF94" strokeWidth="0.5" opacity="0.25"/>
      </svg>
    </div>
  );
}

export default Star;
