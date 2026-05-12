import { useEffect, useRef } from 'react';

const BARCODE_BARS = [
  { w: 2.5, gap: 4 },
  { w: 1.5, gap: 2 },
  { w: 3.5, gap: 4 },
  { w: 1,   gap: 3 },
  { w: 2,   gap: 2 },
  { w: 4.5, gap: 4 },
  { w: 1,   gap: 2 },
  { w: 2.5, gap: 3 },
  { w: 1,   gap: 2 },
  { w: 3.5, gap: 4 },
  { w: 2,   gap: 2 },
  { w: 1,   gap: 3 },
  { w: 4.5, gap: 4 },
  { w: 1,   gap: 2 },
  { w: 2.5, gap: 3 },
  { w: 3,   gap: 4 },
  { w: 1,   gap: 2 },
  { w: 2,   gap: 2 },
  { w: 4,   gap: 4 },
  { w: 1.5, gap: 2 },
  { w: 3,   gap: 0 },
];

function Barcode() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    const barsWrapper = document.createElement('div');
    barsWrapper.style.display = 'flex';
    barsWrapper.style.gap = '0';
    barsWrapper.style.alignItems = 'flex-start';

    BARCODE_BARS.forEach(({ w, gap }) => {
      const bar = document.createElement('span');
      bar.style.width = w + 'px';
      bar.style.marginRight = gap + 'px';
      bar.style.display = 'inline-block';
      bar.style.height = '48px';
      bar.style.background = '#0F0F0F';
      barsWrapper.appendChild(bar);
    });

    container.appendChild(barsWrapper);

    const label = document.createElement('div');
    label.className = 'barcode-label';
    label.textContent = '4821-0039-BR';
    container.appendChild(label);
  }, []);

  return <div ref={containerRef} className="barcode"></div>;
}

export default Barcode;
