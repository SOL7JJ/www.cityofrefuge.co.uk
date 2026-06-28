import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.jpg"; // uppercase LOGO

const navItems = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Donation", "/donation"],
  ["Testimonies", "/testimonies"],
  ["Contact", "/contact"],
  ["Login", "/login"],
  ["Register", "/register"],
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="site-menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <Link to="/home" onClick={() => setIsOpen(false)} className="logo-link">
          <div className="logo-section">
            <img src={logo} alt="City of Refuge logo" className="logo-image" />
            <div className="logo-container">
              <p className="logo">City of Refuge</p>
              <p className="tagline">International Ministries</p>
            </div>
          </div>
        </Link>

        <div className="nav-spacer" />

        <nav id="site-menu" className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navItems.map(([label, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
