import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
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
