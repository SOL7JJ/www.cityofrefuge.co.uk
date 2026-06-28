import './Home.css';
import homeImage from '../../assets/home.jpg';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="eyebrow">Deptford, London</p>
          <h1 className="hero-title">Welcome to City of Refuge International Ministries</h1>
          <p className="hero-subtitle">
            A Christ-centered community growing in faith, love, prayer, and service.
          </p>
          <div className="hero-actions">
            <a
              href="https://www.facebook.com/profile.php?id=100077531105752"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Join Us This Sunday
            </a>
            <Link to="/contact" className="secondary-button">
              Get in Touch
            </Link>
          </div>
        </div>

        <figure className="home-hero-media">
          <img
            src={homeImage}
            alt="City of Refuge International Ministries church service"
            className="church-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption className="church-caption">
            Go and make disciples of all nations.
          </figcaption>
        </figure>
      </section>

      <section className="home-info-grid page-shell">
        <article className="info-card">
          <p className="eyebrow">Sunday Services</p>
          <h2>Morning Worship</h2>
          <p className="service-time">11:00 AM</p>
          <p className="service-location">Giffin Street, Deptford, London, UK</p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Online</p>
          <h2>Upcoming Events</h2>
          <p>Watch live streams and stay connected with church updates.</p>
          <a
            href="https://www.facebook.com/watch/live/?mibextid=wwXIfr&ref=watch_permalink&v=2468942850105970&rdid=AxxMavKxqu78C1T8"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            View Events
          </a>
        </article>
      </section>
    </div>
  );
}
