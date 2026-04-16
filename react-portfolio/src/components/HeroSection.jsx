import Barcode from './Barcode';
import VertBarcode from './VertBarcode';
import GlitchPill from './GlitchPill';

function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="upper">
        <div className="top-bar">
          <div className="stamp">CV</div>
          <div className="meta-label">Personal Portfolio</div>
          <Barcode />
        </div>

        <div className="divider-line"></div>

        <div className="logotype">BASILE<br/>ROMMES</div>

        <GlitchPill />

        <div className="subtext">
          <span>basilerommes@hotmail.com</span>
          <span>Stockholm, Sweden</span>
        </div>

        <div className="crosshair-zone">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0"  y1="29" x2="58" y2="29" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="29" y1="0"  x2="29" y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <circle cx="29" cy="29" r="13" stroke="#0F0F0F" strokeWidth="1"/>
            <circle cx="29" cy="29" r="2.5" fill="#0F0F0F"/>
            <line x1="0"  y1="0"  x2="7"  y2="0"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="0"  x2="0"  y2="7"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="0"  x2="51" y2="0"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="0"  x2="58" y2="7"  stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="58" x2="7"  y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="0"  y1="58" x2="0"  y2="51" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="58" x2="51" y2="58" stroke="#0F0F0F" strokeWidth="1"/>
            <line x1="58" y1="58" x2="58" y2="51" stroke="#0F0F0F" strokeWidth="1"/>
          </svg>
          <VertBarcode />
        </div>
      </div>

      <div className="h-separator"></div>
    </section>
  );
}

export default HeroSection;
