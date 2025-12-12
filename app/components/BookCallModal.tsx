"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUp, scaleIn } from "../utils/motion";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    onClose();
  };

  const services = [
    "Website Development",
    "Custom Software",
    "Mobile App Development",
    "Data & AI Consulting",
    "SEO & Digital Marketing",
    "Digital Strategy",
    "Other",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto pt-20">
            <motion.div
              {...scaleIn}
              initial="initial"
              animate="animate"
              exit="initial"
              className="relative w-full max-w-xl my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-cyan-400/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <motion.div {...fadeUp} className="mb-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Book a Call
                    </h2>
                    <p className="text-sm text-gray-400">
                      Let&apos;s discuss how we can help transform your business
                    </p>
                  </motion.div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="relative">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 bg-white/5 border ${
                            focusedField === "name"
                              ? "border-cyan-400"
                              : "border-gray-700"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 bg-white/5 border ${
                            focusedField === "email"
                              ? "border-cyan-400"
                              : "border-gray-700"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 bg-white/5 border ${
                            focusedField === "phone"
                              ? "border-cyan-400"
                              : "border-gray-700"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Company */}
                      <div className="relative">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 bg-white/5 border ${
                            focusedField === "company"
                              ? "border-cyan-400"
                              : "border-gray-700"
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                          placeholder="Your Company"
                        />
                      </div>

                      {/* Service */}
                      <div className="relative md:col-span-2">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("service")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 bg-white/5 border ${
                            focusedField === "service"
                              ? "border-cyan-400"
                              : "border-gray-700"
                          } rounded-xl text-white focus:outline-none transition-all duration-300`}
                        >
                          <option value="" className="bg-gray-900">
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                              className="bg-gray-900"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 py-2.5 bg-white/5 border ${
                          focusedField === "message"
                            ? "border-cyan-400"
                            : "border-gray-700"
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none`}
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30"
                    >
                      Schedule Call
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookCallModal;
