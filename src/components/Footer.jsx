import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-id">
            <div className="footer-name">Basile Rommes</div>
            <div className="footer-role">MSc Bioinformatics</div>
          </div>
          <SocialLinks containerClass="footer-icons" iconClass="footer-icon" />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Basile Rommes. All rights reserved.
        </div>
        <div className="footer-meta">
          Website generated with Claude Code • Animation by{' '}
          <a href="https://x.com/yuruyurau" target="_blank" rel="noopener noreferrer">
            @yuruyurau
          </a>{' '}
          • Last built: {__BUILD_DATE__}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
