import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2>Ready to start? Book a lesson and begin making real progress.</h2>
        <Link to="/contact" className="footer-cta-button">
          Book a lesson
        </Link>
      </div>

      <div className="footer-bottom">
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/blog">Lessons</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonies">Reviews</Link>
          <Link to="/contact">Book</Link>
        </nav>
        <p>&copy; 2026 - jjai.dev.</p>
      </div>
    </footer>
  );
}

export default Footer;
