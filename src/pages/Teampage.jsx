import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, Wrench, Sparkles, Home, HeartHandshake, 
  Quote, ChevronDown, ChevronUp, Heart 
} from "lucide-react";

const Team = () => {
  const [expanded, setExpanded] = useState(null);

  const teamMembers = [
    {
      name: "Dr. Chinmai V S , PT",
      role: "Managing Director",
      qualifications: "PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT",
      background: "Clinical expert in advanced physiotherapy, manual therapy, dry needling, and functional rehab.",
      contributions: "Dr. Chinmai drives SCADE’s product vision by merging medical intelligence with engineering innovation. She leads scientific validation, oversees product testing, and builds strategic alliances that shape Magmist’s health-first technology.",
      bio: "A new-age health innovator from Mysore, Dr. Chinmai brings 10+ years of clinical experience into the world of consumer tech. She founded SCADE to make science-led wellness accessible through smart products. She is passionate about community health, young talent mentorship, and building solutions that elevate everyday living.",
      quote: "Innovation begins with understanding human health",
      image: "https://via.placeholder.com/600x600/0891b2/ffffff?text=Dr.+Chinmai",
      color: "from-cyan-500 to-blue-600",
      icon: Stethoscope
    },
    {
      name: "Deekshith P",
      role: "Technical Head",
      qualifications: "Mechatronics Engineer",
      background: "Specialized in mechatronics, 3D design, CAD modeling, sensor systems, and Arduino programming.",
      contributions: "Deekshi architected the core technology behind Magmist. He leads hardware engineering, system optimization, sensor integration, and performance validation. His focus is to create devices that are energy-efficient, reliable, and future-ready.",
      bio: "A builder at heart, Deekshi blends engineering discipline with creative problem-solving. His interest in robotics and automation fuels SCADE’s push toward intelligent, sustainable water tech.",
      quote: "Turning ideas into intelligent, sustainable systems.",
      image: "https://via.placeholder.com/600x600/0e7490/ffffff?text=Deekshi",
      color: "from-blue-600 to-cyan-700",
      icon: Wrench
    },
    {
      name: "Samartha V S",
      role: "Marketing Head",
      qualifications: "Diploma in Fire and Safety, Aeronautical, and Marine Engineering, NEBOSH",
      background: "Engineering-driven marketer with expertise in Fire & Safety, Aeronautical, and Marine Engineering.",
      contributions: "Samartha leads brand strategy, digital campaigns, market expansion, and consumer storytelling. He translates Magmist’s technical advantages into compelling narratives that resonate across homes, businesses, and communities.",
      bio: "A dynamic communicator, Samartha brings structure, creativity, and analytical thinking to SCADE’s marketing. He is passionate about educating people on sustainable hydration and building a brand that stands for trust, innovation, and wellness.",
      quote: "Connecting innovation with the people who need it.",
      image: "https://via.placeholder.com/600x600/0369a1/ffffff?text=Samartha",
      color: "from-cyan-600 to-sky-700",
      icon: Sparkles
    },
    {
      name: "Anuradha D R",
      role: "Finance & Operations",
      background: "Strong foundation in family and resource management with a deep interest in health-focused lifestyles.",
      contributions: "Anuradha steers SCADE’s financial ecosystem—budgeting, investments, vendor management, and long-term planning. She ensures transparency, stability, and smart allocation of resources.",
      bio: "As a guiding force behind the company, Anuradha brings balance, financial discipline, and ethical leadership. Her belief in sustainable living aligns with SCADE’s mission.",
      quote: "Strong values build strong organizations.",
      image: "https://via.placeholder.com/600x600/0891b2/ffffff?text=Anuradha",
      color: "from-teal-500 to-cyan-600",
      icon: Home
    },
    {
      name: "Savitha",
      role: "Finance & Administration",
      background: "A community-driven leader passionate about supporting innovations that uplift essential resources like clean water.",
      contributions: "Savitha manages budgeting, audits, and financial forecasting. She maintains investor confidence, optimizes expenditure, and supports growth initiatives.",
      bio: "Rooted in family values and thoughtful decision-making, Savitha contributes wisdom and structure to SCADE’s financial operations. She believes in simple, impactful innovations that create long-term value.",
      quote: "Supporting innovation through smart financial planning.",
      image: "https://via.placeholder.com/600x600/0e7490/ffffff?text=Savitha",
      color: "from-blue-500 to-cyan-600",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40 overflow-x-hidden">
      
      {/* Hero Section - Responsive */}
      <section className="py-16 px-6 text-center sm:py-20 lg:py-32">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-cyan-800 mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet Our Family
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-2xl lg:text-3xl text-cyan-700 font-light max-w-4xl mx-auto px-4"
        >
          Doctors, engineers, dreamers — united from Mysore to bring pure hydration to every Indian home.
        </motion.p>
      </section>

      {/* Team Grid - Fully Responsive */}
      <section className="py-12 px-6 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {teamMembers.map((member, i) => {
            const Icon = member.icon;
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden h-full flex flex-col">
                  
                  {/* Image Container - Responsive */}
                  <div className="relative p-6 sm:p-8 lg:p-10 pb-0">
                    <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
                      <div className="absolute inset-0 rounded-full ring-4 sm:ring-8 ring-cyan-200/50 group-hover:ring-cyan-400/70 transition-all" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-2xl border-4 sm:border-8 border-white"
                      />
                      <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-4 sm:p-5 rounded-full shadow-2xl">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-12 sm:pt-16 pb-8 px-6 sm:px-8 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-800 mb-2 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-lg sm:text-xl font-semibold text-cyan-600 mb-2">
                        {member.role}
                      </p>
                      {member.qualifications && (
                        <p className="text-xs sm:text-sm text-cyan-700 italic mb-4 opacity-90 px-2">
                          {member.qualifications}
                        </p>
                      )}

                      {/* Quote */}
                      <div className="my-6 p-5 sm:p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 mx-auto mb-3 opacity-70" />
                        <p className="text-sm sm:text-base lg:text-lg font-medium text-cyan-800 italic leading-relaxed">
                          “{member.quote}”
                        </p>
                      </div>

                      {/* Know More Button */}
                      <button
                        onClick={() => setExpanded(isExpanded ? null : i)}
                        className="inline-flex items-center gap-2 mx-auto mt-4 text-cyan-700 font-bold hover:text-cyan-900 transition text-sm sm:text-base touch-manipulation"
                      >
                        {isExpanded ? "Show Less" : "Know More About Journey"}
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-cyan-100 space-y-5 text-left text-gray-700 text-sm sm:text-base">
                            {member.background && (
                              <div>
                                <h4 className="font-bold text-cyan-800 mb-1 text-sm sm:text-base">Background</h4>
                                <p className="leading-relaxed">{member.background}</p>
                              </div>
                            )}
                            <div>
                              <h4 className="font-bold text-cyan-800 mb-1 text-sm sm:text-base">Key Contributions</h4>
                              <p className="leading-relaxed">{member.contributions}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-cyan-800 mb-1 text-sm sm:text-base">About</h4>
                              <p className="leading-relaxed">{member.bio}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA - Responsive */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-900 text-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <h2 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Are SCADE
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl font-light opacity-95 mb-12 max-w-3xl mx-auto px-4">
            A family united by science, values, and the dream of pure water for every home.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 sm:gap-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 sm:px-16 py-6 sm:py-8 rounded-full text-lg sm:text-2xl font-bold shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105 touch-manipulation"
          >
            <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10" />
            Join Our Journey
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>

          <p className="mt-12 text-base sm:text-lg lg:text-xl opacity-90 italic">
            Proudly Made in <span className="font-bold text-cyan-300">Mysore, Karnataka</span> • With Love & Science
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;