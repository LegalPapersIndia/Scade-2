// src/components/TeamSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// High-quality, professional, optimized placeholder portraits (free for commercial use)
const teamImages = {
  chinmai: "https://images.unsplash.com/photo-1580489944761-15a19d654",
  deekshith: "https://images.unsplash.com/photo-1507003211169-0a1dd7",
  samartha: "https://images.unsplash.com/photo-1472099645785-5658abft=crop&crop=face&auto=format&q=85",
  anuradha: "https://images.unsplash.com/photo-1573496359142-b8c3a6e0&h=800&fit=crop&crop=face&auto=format&q=85",
  savitha: "https://images.unsplash.com/photo-1588516906797-2c9fit=crop&crop=face&auto=format&q=85"
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Chinmai V S , PT',
      role: 'Managing Director',
      qualifications: 'PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT',
      bio: 'Clinical expert in advanced physiotherapy and functional rehabilitation. She founded SCADE to bring science-backed wellness into every home.',
      quote: 'Innovation begins with understanding human health',
      image: teamImages.chinmai,
    },
    {
      name: 'Deekshith P',
      role: 'Technical Head',
      qualifications: 'Mechatronics Engineer',
      bio: 'Architect of Magmist’s core AWG technology. Specializes in sensor systems, automation, and sustainable smart devices.',
      quote: 'Turning ideas into intelligent, sustainable systems.',
      highlight: true,
      image: teamImages.deekshith,
    },
    {
      name: 'Samartha V S',
      role: 'Marketing Head',
      qualifications: 'Fire & Safety, Aeronautical & Marine Eng., NEBOSH',
      bio: 'Translates complex technology into stories that connect with families and communities.',
      quote: 'Connecting innovation with the people who need it.',
      highlight: true,
      image: teamImages.samartha,
    },
    {
      name: 'Anuradha D R',
      role: 'Finance & Operations',
      bio: 'Guides SCADE’s growth with transparency and strong values. Believes in building organizations that last.',
      quote: 'Strong values build strong organizations.',
      highlight: true,
      image: teamImages.anuradha,
    },
    {
      name: 'Savitha',
      role: 'Finance & Administration',
      bio: 'Manages financial planning with care and wisdom. Passionate about supporting innovations that deliver clean water to homes.',
      quote: 'Supporting innovation through smart financial planning.',
      highlight: true,
      image: teamImages.savitha,
    },
  ];

  return (
    <>
      {/* Font Link – Add once in index.html */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"> */}

      <section className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/50 via-white to-cyan-50/40 overflow-hidden"
               style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Team
            </h2>
            <p className="mt-8 text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Visionaries blending medical science and engineering excellence — 
              <span className="block mt-4 text-cyan-700 font-medium text-2xl">
                delivering pure hydration and wellness to every home.
              </span>
            </p>
          </motion.div>

          {/* Team Grid – Perfect Circular Professional Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
                  {/* Circular Image with Subtle Ring */}
                  <div className="relative overflow-hidden rounded-full shadow-2xl ring-8 ring-cyan-100/60 ring-offset-8 ring-offset-transparent transition-all duration-500 group-hover:ring-cyan-400 group-hover:shadow-cyan-500/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Soft overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Name + Role */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl font-bold drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {member.name}
                    </h3>
                    <p className="text-cyan-200 font-medium text-lg mt-1 drop-shadow">
                      {member.role}
                    </p>
                  </div>

                  {/* Core Team Badge */}
                  {member.highlight && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-xs font-bold px-5 py-2 rounded-full rounded-full shadow-lg">
                      CORE TEAM
                    </div>
                  )}
                </div>

                {/* Bio Card Below */}
                <div className="mt-10 text-center px-4">
                  {member.qualifications && (
                    <p className="text-cyan-700 font-bold text-sm uppercase tracking-widest mb-4">
                      {member.qualifications}
                    </p>
                  )}
                  <p className="text-gray-700 text-lg leading-relaxed font-light">
                    {member.bio}
                  </p>
                  <p className="mt-8 pt-6 border-t border-cyan-100 text-cyan-800 font-medium italic text-lg">
                    “{member.quote}”
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-32"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <p className="text-4xl lg:text-5xl font-bold text-cyan-800">
              Made in India
            </p>
            <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mt-4">
              Built for the World
            </p>

            <Link
              to="/team"
              className="mt-12 inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-400"
            >
              Know Our Full Journey →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;