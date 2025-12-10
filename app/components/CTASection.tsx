"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black via-[#0a1520] to-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Start Your </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Transformation?
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Let's discuss how HexaCore can help your business scale,
                innovate, and succeed.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20"
                  >
                    Book a Call
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Illustration - Network Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              {/* Central Cube */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/50 rounded-2xl flex items-center justify-center relative z-10 shadow-2xl shadow-cyan-500/20">
                  <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-lg transform rotate-12" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
              </motion.div>

              {/* Connection Nodes - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-8 left-1/2 -translate-x-1/2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  👤
                </div>
                {/* Connection Line */}
                <div className="absolute top-full left-1/2 w-px h-20 bg-gradient-to-b from-cyan-400/50 to-transparent" />
              </motion.div>

              {/* Connection Nodes - Right Top */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-24 right-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  💻
                </div>
                {/* Connection Line */}
                <div className="absolute top-1/2 right-full w-24 h-px bg-gradient-to-l from-cyan-400/50 to-transparent -translate-y-1/2" />
              </motion.div>

              {/* Connection Nodes - Right Bottom */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute bottom-24 right-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  🎧
                </div>
                {/* Connection Line */}
                <div className="absolute top-1/2 right-full w-24 h-px bg-gradient-to-l from-cyan-400/50 to-transparent -translate-y-1/2" />
              </motion.div>

              {/* Connection Nodes - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  👤
                </div>
                {/* Connection Line */}
                <div className="absolute bottom-full left-1/2 w-px h-20 bg-gradient-to-t from-cyan-400/50 to-transparent" />
              </motion.div>

              {/* Connection Nodes - Left Bottom */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute bottom-24 left-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  👤
                </div>
                {/* Connection Line */}
                <div className="absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-cyan-400/50 to-transparent -translate-y-1/2" />
              </motion.div>

              {/* Connection Nodes - Left Top */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute top-24 left-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
                  👤
                </div>
                {/* Connection Line */}
                <div className="absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-cyan-400/50 to-transparent -translate-y-1/2" />
              </motion.div>

              {/* Outer Connection Nodes with connecting lines */}
              {/* Top Right Corner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute top-0 right-16"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-400/20 rounded-lg flex items-center justify-center text-lg">
                  👤
                </div>
                <div className="absolute top-full left-1/2 w-px h-16 bg-gradient-to-b from-cyan-400/30 to-transparent" />
              </motion.div>

              {/* Bottom Right Corner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute bottom-0 right-16"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-400/20 rounded-lg flex items-center justify-center text-lg">
                  🎧
                </div>
                <div className="absolute bottom-full left-1/2 w-px h-16 bg-gradient-to-t from-cyan-400/30 to-transparent" />
              </motion.div>

              {/* Bottom Left Corner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute bottom-0 left-16"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-400/20 rounded-lg flex items-center justify-center text-lg">
                  👤
                </div>
                <div className="absolute bottom-full left-1/2 w-px h-16 bg-gradient-to-t from-cyan-400/30 to-transparent" />
              </motion.div>

              {/* Top Left Corner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="absolute top-0 left-16"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-cyan-400/20 rounded-lg flex items-center justify-center text-lg">
                  👤
                </div>
                <div className="absolute top-full left-1/2 w-px h-16 bg-gradient-to-b from-cyan-400/30 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
