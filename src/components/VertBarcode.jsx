import { useEffect, useRef } from 'react';

const VERT_BARCODE_BARS = [
  { w: 1.5 }, { w: 3 }, { w: 1 }, { w: 2 },
  { w: 1 },   { w: 4 }, { w: 1.5 }, { w: 3 },
  { w: 2 },   { w: 1 },
];

function VertBarcode() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';

    VERT_BARCODE_BARS.forEach(({ w }) => {
      const bar = document.createElement('span');
      bar.style.width = w + 'px';
      bar.style.display = 'block';
      bar.style.height = '55px';
      bar.style.background = '#0F0F0F';
      container.appendChild(bar);
    });
  }, []);

  return <div ref={containerRef} className="vert-barcode"></div>;
}

export default VertBarcode;
