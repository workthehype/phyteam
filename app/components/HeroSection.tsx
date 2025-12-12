"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, staggerItem } from "../utils/motion";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Page load animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
      {/* Hero Image Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <Image
          src="/images/hero-team.jpg"
          alt="Professional team collaboration"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 z-10" />

        {/* Minimal grid overlay */}
        <div
          className="absolute inset-0 opacity-5 z-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="max-w-6xl mx-auto relative z-10 text-center"
      >
        {/* Main heading with typing effect and gradient animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block"
            >
              Transform Your Business
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block"
            >
              with {"  "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block relative"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                Future-Ready
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-2xl -z-10"
              />
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            >
              Technology
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with fade-in */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          From strategy to execution, we&apos;re your partners in digital
          transformation.
        </motion.p>

        {/* CTA Buttons with hover effects */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-lg"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-white text-black px-10 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:border-cyan-400/50 transition-all shadow-lg backdrop-blur-sm"
          >
            <span className="relative z-10">Book a Call</span>
          </motion.button>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-20 h-20 border-2 border-cyan-400/30 rounded-2xl backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-16 h-16 border-2 border-purple-400/30 rounded-full backdrop-blur-sm hidden lg:block"
        />
      </motion.div>

      {/* Add gradient animation keyframes to globals.css */}
      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
