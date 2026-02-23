import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const Register = lazy(() => import('./pages/Register/Register.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const Donation = lazy(() => import('./pages/Donation/Donation.jsx'));
const Testimonies = lazy(() => import('./pages/Testimonies/Testimonies.jsx'));

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-1CYH4PP6H4';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const existingScript = document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.dataset.gaId = GA_MEASUREMENT_ID;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);

  return (
    <div className="app-container">
      <Header />

      <Suspense fallback={<main style={{ padding: '2rem', textAlign: 'center' }}>Loading...</main>}>
     <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/home" element={<Home />} />
  <Route path="/donation" element={<Donation/>} />
  <Route path="/testimonies" element={<Testimonies/>} />
</Routes>
      </Suspense>

      

      <Footer />
    </div>
  );
}

export default App;
