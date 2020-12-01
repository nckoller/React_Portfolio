import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./index.html">
          Nina Koller
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <li>
              <Link to={'/'} className="nav-item nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/portfolio'} className="nav-item nav-link">
                Portfolio
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
