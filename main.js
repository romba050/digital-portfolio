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

const VERT_BARCODE_BARS = [
  { w: 1.5 }, { w: 3 }, { w: 1 }, { w: 2 },
  { w: 1 },   { w: 4 }, { w: 1.5 }, { w: 3 },
  { w: 2 },   { w: 1 },
];

const GLITCH_ROWS = [
  [{ w: 8, opacity: 0.85 }, { w: 13, opacity: 0.5 }],
  [{ w: 16, opacity: 1 },   { w: 6,  opacity: 0.6 }],
  [{ w: 10, opacity: 0.4 }, { w: 7,  opacity: 0.75 }],
];

function buildBarcode() {
  const container = document.getElementById('barcode');
  if (!container) return;

  const barsWrapper = document.createElement('div');
  barsWrapper.style.display = 'flex';
  barsWrapper.style.gap = '0';
  barsWrapper.style.alignItems = 'flex-start';

  BARCODE_BARS.forEach(({ w, gap }) => {
    const bar = document.createElement('span');
    bar.style.width = w + 'px';
    bar.style.marginRight = gap + 'px';
    barsWrapper.appendChild(bar);
  });

  container.appendChild(barsWrapper);

  const label = document.createElement('div');
  label.className = 'barcode-label';
  label.textContent = '4821-0039-BR';
  container.appendChild(label);
}

function buildVertBarcode() {
  const container = document.getElementById('vert-barcode');
  if (!container) return;
  VERT_BARCODE_BARS.forEach(({ w }) => {
    const bar = document.createElement('span');
    bar.style.width = w + 'px';
    container.appendChild(bar);
  });
}

function buildGlitch() {
  const scatter = document.getElementById('pill-glitch-scatter');
  if (!scatter) return;
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
}

document.addEventListener('DOMContentLoaded', () => {
  buildBarcode();
  buildVertBarcode();
  buildGlitch();
});
