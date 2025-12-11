// pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Building, Sparkles, HeartHandshake } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // CHANGE THIS TO YOUR EMAIL
  const YOUR_EMAIL = "udit9407@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, Email, and Message are required!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject || "General Inquiry",
          message: formData.message,
          _subject: "New Message from SCADE Contact Page",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('Thank You! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus('Oops! Something went wrong. Please try again or WhatsApp us: 7411532800');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40 overflow-x-hidden"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >

      {/* Hero Section - Fully Responsive */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-6 text-center">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 sm:w-[900px] h-80 sm:h-[900px] bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-[700px] h-72 sm:h-[700px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-cyan-800 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let’s Connect
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl text-cyan-700 font-light max-w-4xl mx-auto leading-relaxed px-4">
            We’re here for you — whether it’s about Magmist, Tavarum, dealership, collaboration, or just a hello from a fellow wellness believer.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 animate-pulse" />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 animate-pulse delay-300" />
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 animate-pulse delay-700" />
          </div>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 sm:py-16 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 p-8 sm:p-10 lg:p-12"
          >
            <h2 
              className="text-4xl sm:text-5xl font-bold text-cyan-800 mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h2>

            <div className="space-y-8">
              {[
                { icon: Building, title: "Our Home", content: <>SCADE Store-Studio<br />Housing Board Colony, Hootagalli<br /><span className="font-semibold text-cyan-700">Mysore, Karnataka 570018</span></> },
                { icon: Phone, title: "Call or WhatsApp", content: <><a href="tel:+917411532800" className="text-lg font-medium text-cyan-700">+91 74115 32800</a><br /><a href="https://wa.me/917411532800" target="_blank" rel="noopener" className="text-sm text-cyan-600 underline">Chat on WhatsApp</a></> },
                { icon: Mail, title: "Email Us", content: <a href="mailto:scade.magmist@gmail.com" className="text-lg text-cyan-700 break-all">scade.magmist@gmail.com</a> },
                { icon: Clock, title: "We’re Available", content: <>Mon – Sat: 9:00 AM – 6:00 PM IST<br /><span className="text-sm text-gray-600">Replies within 24 hours</span></> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-800 text-base sm:text-lg">{item.title}</h3>
                    <div className="text-gray-700 mt-1 text-sm sm:text-base leading-relaxed">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200 text-center">
              <p className="text-cyan-800 font-medium text-sm sm:text-base leading-relaxed">
                Looking for <span className="font-bold">Dealership</span> or <span className="font-bold">Collaboration</span>?<br className="sm:hidden" /> We’re growing — and we’d love to grow with you.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 p-8 sm:p-10 lg:p-12"
          >
            <h2 
              className="text-4xl sm:text-5xl font-bold text-cyan-800 mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text" name="name" placeholder="Your Full Name *"
                value={formData.name} onChange={handleChange} required
                className="w-full px-5 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition text-base placeholder-gray-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email" name="email" placeholder="Email Address *"
                  value={formData.email} onChange={handleChange} required
                  className="px-5 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition text-base"
                />
                <input
                  type="tel" name="phone" placeholder="Phone (Optional)"
                  value={formData.phone} onChange={handleChange}
                  className="px-5 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition text-base"
                />
              </div>

              <input
                type="text" name="subject" placeholder="Subject (e.g. Dealership, Demo)"
                value={formData.subject} onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition text-base"
              />

              <textarea
                name="message" rows="5" placeholder="Your message... We're excited to hear from you"
                value={formData.message} onChange={handleChange} required
                className="w-full px-5 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition resize-none text-base"
              />

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl text-center font-medium text-sm sm:text-base border ${
                    submitStatus.includes("Thank")
                      ? "bg-gradient-to-r from-green-100 to-cyan-100 text-green-800 border-green-200"
                      : "bg-red-50 text-red-700 border-red-200"
                  }`}
                >
                  {submitStatus}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-b from-white to-cyan-50/60">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-800 text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Proudly from Mysore, Karnataka
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Map First on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-8 border-cyan-100 order-1 lg:order-2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCADE Technologies - Mysore Location"
              />
            </motion.div>

            {/* Text Second on Mobile */}
            <div className="text-left order-2 lg:order-1 px-4 sm:px-0">
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-5">Made in Mysore, Made for the World</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our journey began in the clean, green, and culturally rich city of Mysore — the city of palaces, yoga, and pure living. Every Magmist unit, every dream of Tavarum, and every drop of pure water we create carries the soul of this beautiful land.
              </p>
              <p className="text-base sm:text-lg text-cyan-700 font-medium mt-6">
                Visit us anytime. The door (and our hearts) are always open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-900 text-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <h2 
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let’s Build the Future Together
          </h2>
          <p className="text-lg sm:text-2xl lg:text-3xl font-light opacity-95 mb-10 max-w-3xl mx-auto">
            One home. One drop. One healthier India.
          </p>
          <a
            href="https://wa.me/7411532800"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 sm:px-14 py-5 sm:py-7 rounded-full text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-amber-500/60 hover:scale-105 transition-all duration-300"
          >
            <HeartHandshake className="w-9 h-9 sm:w-10 sm:h-10" />
            Start the Conversation
            <Sparkles className="w-9 h-9 sm:w-10 sm:h-10" />
          </a>
          <p className="mt-10 text-base sm:text-lg lg:text-xl opacity-80 italic">
            Proudly Made in <span className="font-bold text-cyan-300">Mysore, Karnataka</span> • With Love, Science & Soul
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;