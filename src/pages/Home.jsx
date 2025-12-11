// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../Components/HeroCarousel';
import Innovations from '../Components/Innovation';
import WhyChooseUs from '../Components/whyus';
import Team from '../Components/Team';
import OurCampus from '../Components/OurCampus';
import { Droplets, Flower2, PhoneCall } from 'lucide-react';

const Home = () => {
  const whatsappNumber = "7411532800";
  const getWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-cyan-50/30 overflow-x-hidden">

      {/* Hero Carousel - Already responsive */}
      <HeroCarousel />

      {/* Premium Sections */}
      <Innovations />
      <Team />
      <OurCampus />
      <WhyChooseUs />

      {/* Product Quick Preview - Fully Responsive */}
      <section className="py-16 sm:py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Our Flagship Products
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12 lg:mb-16 px-4">
            Sustainable wellness solutions crafted with precision, science, and care.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Magmist Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/50">
                <div className="p-10 sm:p-12 lg:p-16 text-white">
                  <Droplets className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 drop-shadow-lg" />
                  <h3 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Magmist
                  </h3>
                  <p className="text-base sm:text-lg lg:text-2xl leading-relaxed mb-8 lg:mb-10 opacity-95 font-light">
                    Pure, alkaline, mineral-rich water — directly from the air you breathe.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link
                      to="/magmist"
                      className="bg-white text-cyan-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-cyan-50 hover:shadow-xl transition-all duration-300 shadow-lg text-center"
                    >
                      Discover Magmist
                    </Link>
                    <a
                      href={getWhatsAppLink("Hi SCADE! I'm interested in Magmist AWG. Please share details & pricing.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white/90 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-white hover:text-cyan-700 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                    >
                      <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tavarum Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-amber-500/50">
                <div className="p-10 sm:p-12 lg:p-16 text-white">
                  <Flower2 className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 drop-shadow-lg" />
                  <h3 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Tavarum
                  </h3>
                  <p className="text-base sm:text-lg lg:text-2xl leading-relaxed mb-8 lg:mb-10 opacity-95 font-light">
                    100% organic Ayurvedic hair care — chemical-free, nourishing, timeless.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link
                      to="/tavarum"
                      className="bg-white text-amber-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-amber-50 hover:shadow-xl transition-all duration-300 shadow-lg text-center"
                    >
                      Discover Tavarum
                    </Link>
                    <a
                      href={getWhatsAppLink("Hi SCADE! Interested in Tavarum organic hair range. Please share products list.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white/90 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-white hover:text-amber-700 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                    >
                     Coming soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Epic CTA - Fully Responsive */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Start Your Journey to<br className="sm:hidden" /> Pure Health & Wellness
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 lg:mb-12 opacity-90 max-w-3xl mx-auto font-light px-4">
            Pure water. Pure beauty. Pure trust — delivered with Indian innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            <a
              href={getWhatsAppLink("Hello SCADE Team! I'm from your website — very excited about Magmist & Tavarum!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 sm:px-16 py-5 sm:py-7 rounded-full text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-amber-500/60 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8" />
              Chat on WhatsApp Now
            </a>

            <Link
              to="/contact"
              className="border-4 border-white px-10 sm:px-16 py-5 sm:py-7 rounded-full text-xl sm:text-2xl font-bold hover:bg-white hover:text-cyan-700 transition-all duration-500 shadow-2xl w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-12 sm:mt-16 text-lg sm:text-xl lg:text-2xl font-light italic opacity-80">
            Proudly Made in India • Built for the World
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;