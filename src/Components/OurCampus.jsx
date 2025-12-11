// src/components/OurCampus.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import campus from '../Asset/Campus.mp4';

const OurCampus = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40 overflow-hidden">
      {/* ===== FULL-SCREEN VIDEO ON MOBILE | TALL ON DESKTOP ===== */}
      <div className="relative w-full h-screen md:h-auto md:aspect-video lg:aspect-[21/9] md:max-h-[720px] lg:max-h-[800px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={campus}
          autoPlay
          muted
          loop
          playsInline
          poster="/campus-poster.jpg" // Add a high-quality still image in public/
          loading="lazy"
        >
          Your browser does not support video.
        </video>

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none md:hidden" />
      </div>

      {/* ===== CONTENT BELOW VIDEO (Safe Area) ===== */}
      <div className="relative bg-white pt-16 sm:pt-20 lg:pt-28 px-6 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Main Heading */}
          <div className="text-center mb-12 lg:mb-20">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Campus
            </h2>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Proudly rooted in the royal heritage city of{' '}
              <span className="text-cyan-700 font-semibold">Mysore, Karnataka</span>
            </p>
          </div>

          <h3
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-800 mb-12 lg:mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover Our Manufacturing Campus
          </h3>

          {/* Contact + Map Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100/80 overflow-hidden">
            <div className="p-8 sm:p-10 lg:p-14 xl:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">

                {/* Contact Info - Appears second on mobile */}
                <div className="space-y-10 order-2 lg:order-1">
                  <h3
                    className="text-3xl sm:text-4xl font-bold text-cyan-800 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Visit Us in Mysore
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-cyan-100 rounded-2xl flex-shrink-0">
                        <MapPin className="w-8 h-8 text-cyan-700" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-800">SCADE Store-Studio</p>
                        <p className="text-lg text-gray-700 mt-1">Housing Board Colony, Hootagalli</p>
                        <p className="text-base text-cyan-700 font-medium">Mysore, Karnataka 570018</p>
                        <p className="text-sm text-gray-500 mt-3 font-light italic">
                          In the heart of India's cleanest & most beautiful city
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-cyan-100 rounded-2xl">
                        <Phone className="w-7 h-7 text-cyan-700" />
                      </div>
                      <a
                        href="tel:+917411532800"
                        className="text-xl font-semibold text-gray-800 hover:text-cyan-700 transition"
                      >
                        +91 74115 32800
                      </a>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-cyan-100 rounded-2xl">
                        <Mail className="w-7 h-7 text-cyan-700" />
                      </div>
                      <a
                        href="mailto:scade.magmist@gmail.com"
                        className="text-xl font-semibold text-gray-800 hover:text-cyan-700 transition break-all"
                      >
                        scade.magmist@gmail.com
                      </a>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 font-light leading-relaxed pt-6 border-t border-cyan-100">
                    We welcome visitors, partners & dealers with open arms.<br />
                    <span className="text-cyan-700 font-medium">Feel free to connect!</span>
                  </p>
                </div>

                {/* Google Map - Appears first on mobile for better UX */}
                <div className="order-1 lg:order-2">
                  <h4
                    className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-6 text-center lg:text-left"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Locate Us on the Map
                  </h4>
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-cyan-200/50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
                      width="100%"
                      height="420"
                      className="w-full h-80 sm:h-96 lg:h-full min-h-80"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SCADE Campus Location"
                    ></iframe>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4 font-light italic">
                    Interactive map • Exact pin shared on request
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="text-center mt-20 lg:mt-28">
            <p
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-800 italic leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Made with care in Mysore
            </p>
            <p
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent mt-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Innovating for a Healthier World
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCampus;