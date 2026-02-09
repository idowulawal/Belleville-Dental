import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Ticker from './components/Ticker.jsx';
import ProfessionalEducation from './pages/ProfessionalEducation.jsx';
import PatientEducation from './pages/PatientEducation.jsx';
import Research from './pages/Research.jsx';
import Products from './pages/Products.jsx';
import Gallery from './pages/Gallery.jsx';
import SiteMap from './pages/SiteMap.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-32 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/professional-education" element={<ProfessionalEducation />} />
            <Route path="/patient-education" element={<PatientEducation />} />
            <Route path="/research" element={<Research />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
        <Ticker />
      </div>
    </Router>
  );
};

export default App;
