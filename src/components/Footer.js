import React from 'react';
import '../App.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-4 profile-links">
          <a
            href="https://www.linkedin.com/in/nina-koller-82b1994b"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
        <div className="col-md-4 profile-links">
          <a
            href="https://github.com/nckoller"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>
        <div className="col-md-4 profile-links">
          <a
            href="https://github.com/nckoller/react_portfolio/raw/master/assets/BCSResume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
