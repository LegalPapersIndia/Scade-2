// components/Enquiryform.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, PhoneCall, Sparkles, Send } from "lucide-react";

const EnquiryPopup = ({ autoOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Apna email yahan daal do jahan mail aana chahiye
  const YOUR_EMAIL = "udit9407@gmail.com"; //  YAHAN APNA EMAIL DAAL DO

  const whatsappNumber = "7411532800";

  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closePopup = () => {
    setIsOpen(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  // 1. Live Demo → WhatsApp pe bhejo
  const requestLiveDemo = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Name aur Phone daal do bhai!");
      return;
    }

    const msg = `Namaste! LIVE Demo chahiye Magmist ka%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || "Nahi diya"}%0A%0AJaldi call karo!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    alert("Demo request bhej diya! 2 ghante mein call aayega");
    closePopup();
  };

  const joinNowSendEmail = async () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Name aur Phone toh bharo pehle!");
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "Not provided",
      type: "Join Now / Updates",
      _subject: "New Join Request - Magmist Updates",
      _replyto: formData.email || formData.phone,
    };

    try {
      await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      alert("Join request bhej di gayi! Welcome to Magmist family");
      closePopup();
    } catch (error) {
      alert("Network issue hai, WhatsApp pe message kar do: 7411532800");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl"
      >
        <PhoneCall className="w-8 h-8" />
      </motion.button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-cyan-100"
          >
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-6 text-center">
              <button onClick={closePopup} className="absolute top-4 right-4 text-white/80 hover:text-white">
                <X className="w-6 h-6" />
              </button>
              <Sparkles className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <h3 className="text-2xl font-bold">Book Your Free Demo</h3>
            </div>

            <div className="p-6 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 outline-none"
              />

              {/* Dono Buttons – Alag Alag Kaam */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={requestLiveDemo}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <Sparkles className="w-5 h-5" /> Submit on Whatsapp
                </button>

                <button
                  onClick={joinNowSendEmail}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition disabled:opacity-70"
                >
                  
                  {isSubmitting ? "Submitting your details...." : <> <Send className="w-5 h-5" /> Submit</>}
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 font-medium">
                we will reply in 2 Hours
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default EnquiryPopup;