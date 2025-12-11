// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar';
import EnquiryPopup from './Components/Enquiryform';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Magmist from './pages/MagmistPage';
import Tavarum from './pages/TavarumPage';
import Team from './pages/Teampage';
import Contact from './pages/Contact';

import Footer from './Components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden">

        {/* Navbar always on top */}
        <Navbar />

        {/* Auto scroll to top on page change */}
        <ScrollToTop />

        {/* Main content area: responsive & full-width */}
        <main className="flex-grow w-full">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 w-full">

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/magmist" element={<Magmist />} />
              <Route path="/tavarum" element={<Tavarum />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </div>
        </main>

        {/* Footer stays at bottom */}
        <Footer />

        {/* Popup always visible on page load */}
        <EnquiryPopup autoOpen={true} />
      </div>
    </Router>
  );
};

export default App;
