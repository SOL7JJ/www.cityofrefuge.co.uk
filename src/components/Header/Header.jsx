import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.jpg"; // uppercase LOGO






function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}

<Link to="/home" onClick={() => setIsOpen(false)} className="logo-link">
  <div className="logo-section">
    <img src={logo} alt="Logo" className="logo-image" />
    <div className="logo-container">
      <h2 className="logo">CITY OF REFUGE</h2>
      <p className="tagline">INTERNATIONAL MINISTRIES</p>
    </div>
  </div>
</Link>

        

        {/* Hamburger menu */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Centered nav links */}
        <nav className={`nav-center ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/home" onClick={() => setIsOpen(false)}>HOME</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
            </li>
            <li>
              <Link to="/donation" onClick={() => setIsOpen(false)}>DONATION</Link>
            </li>
            <li>
              <Link to="/testimonies" onClick={() => setIsOpen(false)}>TESTIMONIES</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
            </li>
          </ul>
        </nav>

        {/* Right side nav links */}
        <nav className={`nav-right ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>LOGIN</Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setIsOpen(false)}>REGISTER</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
