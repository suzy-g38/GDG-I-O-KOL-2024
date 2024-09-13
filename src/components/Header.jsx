import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <h1 style={{ textAlign: "center" }}>
        Mastering Chrome DevTools for Enhanced Web Performance
      </h1>
      <nav>
        <ul className="nav-tabs">
          <li>
            <Link to="/coverage-analysis">Coverage Analysis</Link>
          </li>
          <li>
            <Link to="/coverage-analysis-optimize">
              Coverage Analysis Optimize
            </Link>
          </li>
          <li>
            <Link to="/performance-profiling">Performance Profiling</Link>
          </li>
          <li>
            <Link to="/performance-profiling-optimize">
              Performance Profiling Optimize
            </Link>
          </li>
          {/* <li>
            <Link to="/advance">Advance</Link>
          </li> */}
          <li>
            <Link to="/advance-optimization">Advance Optimization</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
