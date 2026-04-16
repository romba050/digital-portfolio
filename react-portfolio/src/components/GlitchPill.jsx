import { useEffect, useRef } from 'react';

const GLITCH_ROWS = [
  [{ w: 8, opacity: 0.85 }, { w: 13, opacity: 0.5 }],
  [{ w: 16, opacity: 1 },   { w: 6,  opacity: 0.6 }],
  [{ w: 10, opacity: 0.4 }, { w: 7,  opacity: 0.75 }],
];

function GlitchPill() {
  const scatterRef = useRef(null);

  useEffect(() => {
    if (!scatterRef.current) return;

    const scatter = scatterRef.current;
    scatter.innerHTML = '';

    GLITCH_ROWS.forEach(cols => {
      const row = document.createElement('div');
      row.className = 'pill-glitch-scatter-row';
      cols.forEach(({ w, opacity }) => {
        const cell = document.createElement('span');
        cell.style.width = w + 'px';
        cell.style.opacity = opacity;
        row.appendChild(cell);
      });
      scatter.appendChild(row);
    });
  }, []);

  return (
    <div className="pill">
      <div className="pill-glitch">
        <span style={{width:'11px'}}></span>
        <span style={{width:'6px', marginRight:'2px', opacity:0.7}}></span>
        <span style={{width:'9px'}}></span>
      </div>
      <div ref={scatterRef} className="pill-glitch-scatter"></div>
      <div className="pill-text">MSc Bioinformatics</div>
    </div>
  );
}

export default GlitchPill;
