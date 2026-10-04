import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button className="menu-button" onClick={toggleSidebar} aria-label="Toggle sidebar">
          ☰
        </button>

        <div className="brand-mark">
          <span className="brand-icon">✈️</span>
          <span>Aviator Predictor 2026</span>
        </div>
      </div>

      <div className="status-pill">
        <span className="status-dot" />
        Live
      </div>
    </header>
  );
}

export default Header;
