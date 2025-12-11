// src/pages/Innovations.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Flower2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import magmist from '../Asset/demo.mp4';
import Tavarum from "../Asset/tavarum.png"

const Innovations = () => {
  return (
    <>
      
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-cyan-50/60 py-24 lg:py-40 px-6 overflow-hidden"
           style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Floating Light Blue Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-300/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Title – Playfair Display */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            Our Innovations
          </motion.h1>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-10 lg:p-20 text-center"
          >
            <h2 
              className="text-3xl lg:text-4xl font-bold text-cyan-900 mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About SCADE Store-Studio
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              Established in 2025 in Mysore, Karnataka — SCADE is where medical science meets cutting-edge engineering.
            </p>
            <p className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
              We don’t follow trends. We create sustainable, science-backed solutions that make pure hydration and natural beauty accessible to everyone.
            </p>
            <p className="mt-12 text-2xl italic text-cyan-700 font-medium flex items-center justify-center gap-5 justify-center">
              <Droplets className="w-8 h-8 text-cyan-500" />
              Water from Air, Health in Every Drop
              <Droplets className="w-8 h-8 text-cyan-500" />
            </p>
          </motion.div>

          {/* Magmist – Light Blue Masterpiece */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl mt-32 bg-white"
          >
            <div className="relative h-96 lg:h-full bg-black/90">
              <video
                src={magmist}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <h3 className="text-5xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Magmist
                </h3>
                <p className="text-xl mt-2 opacity-90 font-light">Pure Hydration from Air</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50/90 via-blue-50 to-white p-12 lg:p-20 flex flex-col justify-center">
              <h3 
                className="text-4xl lg:text-5xl font-bold text-cyan-800 mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Future of Water Is Here
              </h3>
              <p className="text-lg text-gray-700 mt-6 font-light leading-relaxed">
                Advanced Atmospheric Water Generators that create pure, alkaline, mineral-rich drinking water — directly from the air you breathe.
              </p>

              <ul className="mt-10 space-y-6">
                {[
                  "Extracts water from air",
                  "natural mineralization",
                  "Alkaline pH 8–9.5 • ",
                  "Zero Water waste",
                  "Home • Office • Off-grid models available"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <CheckCircle2 className="w-7 h-7 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/magmist"
                className="mt-12 group inline-flex items-center gap-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-500 w-fit"
              >
                Discover Magmist
                <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>

          {/* Tavarum – Warm Luxury (kept golden) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl mt-32"
          >
            <div className="p-12 lg:p-20 bg-gradient-to-br from-amber-50 to-rose-50 flex flex-col justify-center order-2 lg:order-1">
              <h3 
                className="text-4xl lg:text-5xl font-bold text-amber-800 mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Nature’s Luxury for Your Hair
              </h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                100% organic Ayurvedic hair care. No chemicals. Only rare herbs, cold-pressed oils, and ancient wisdom.
              </p>
              <ul className="mt-10 space-y-6">
                {[
                  "100% Organic • Zero Chemicals",
                  "Hair Oil • Serum • Mask • Natural Dye",
                  "No Sulphates • No Parabens • No Ammonia",
                  "Promotes growth • Reduces greying • Restores shine"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 text-gray-700"
                  >
                    <Flower2 className="w-7 h-7 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/tavarum"
                className="mt-12 group inline-flex items-center gap-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-500 w-fit"
              >
                Explore Tavarum
                <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
              </Link>
            </div>

            <div className="relative h-96 lg:h-full bg-gradient-to-t from-amber-900/90 via-amber-800/50 to-transparent flex items-center justify-center order-1 lg:order-2">
              <div className="text-center text-white px-10">
                <motion.div
                  animate={{ y: [0, -25, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                <img src={Tavarum} />
                </motion.div>
                <p className="text-5xl font-light tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Coming 2026
                </p>
                <p className="mt-6 text-xl opacity-90">A Revolution in Natural Beauty</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Innovations;