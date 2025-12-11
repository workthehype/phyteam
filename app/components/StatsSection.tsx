"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a1520] to-[#0f1e2e] overflow-hidden"
    >
      {/* Animated curved gradient waves */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Top curved wave */}
          <motion.svg
            className="absolute top-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: "40%" }}
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 1 }}
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              d="M0,160 C320,100 420,180 720,160 C1020,140 1120,200 1440,180 L1440,0 L0,0 Z"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.2 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              d="M0,120 C320,80 420,140 720,120 C1020,100 1120,160 1440,140 L1440,0 L0,0 Z"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Bottom curved wave */}
          <motion.svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: "50%" }}
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              fill="url(#gradient2)"
              d="M0,224 C320,160 420,240 720,224 C1020,208 1120,256 1440,240 L1440,320 L0,320 Z"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              fill="url(#gradient3)"
              d="M0,256 C320,192 420,272 720,256 C1020,240 1120,288 1440,272 L1440,320 L0,320 Z"
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don&apos;t take our word{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              for it.
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <StatCard
            number={50}
            suffix="+"
            label="satisfied clients"
            delay={0.3}
            isInView={isInView}
          />
          <StatCard
            number={95}
            suffix="%"
            label="project success rate"
            delay={0.5}
            isInView={isInView}
          />
          <StatCard
            number={4.9}
            suffix=""
            label="average rating"
            delay={0.7}
            isInView={isInView}
            decimal
          />
        </div>
      </div>

      {/* Floating particles disabled for performance */}
    </section>
  );
};

// Animated counter component
const AnimatedCounter = ({
  value,
  decimal = false,
}: {
  value: number;
  decimal?: boolean;
}) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
  });
  const displayValue = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (displayValue.current) {
        displayValue.current.textContent = decimal
          ? latest.toFixed(2)
          : Math.floor(latest).toString();
      }
    });

    return () => unsubscribe();
  }, [springValue, decimal]);

  return <span ref={displayValue}>0</span>;
};

// Individual stat card
const StatCard = ({
  number,
  suffix,
  label,
  delay,
  isInView,
  decimal = false,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
  decimal?: boolean;
}) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className="group relative text-center"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(6,182,212,0) 0%, rgba(59,130,246,0) 50%, rgba(139,92,246,0) 100%)",
            "linear-gradient(90deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(139,92,246,0.3) 100%)",
            "linear-gradient(90deg, rgba(6,182,212,0) 0%, rgba(59,130,246,0) 50%, rgba(139,92,246,0) 100%)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {/* Number with animated gradient */}
        <motion.div
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <AnimatedCounter value={number} decimal={decimal} />
          {suffix}
        </motion.div>

        {/* Label */}
        <motion.p
          className="text-gray-400 text-sm md:text-base lg:text-lg font-light tracking-wide group-hover:text-gray-200 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          {label}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-6 mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "60%", opacity: 1 } : {}}
          transition={{ delay: delay + 0.7, duration: 0.8 }}
          whileHover={{ width: "100%", transition: { duration: 0.3 } }}
        />

        {/* Animated ring on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-400/0 rounded-full group-hover:border-cyan-400/50 transition-colors duration-500"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-br-lg" />

      {/* Sparkle effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 bg-cyan-400"
          style={{
            top: `${30 + i * 20}%`,
            right: `${10 + i * 5}%`,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      ))}
    </motion.div>
  );
};

export default StatsSection;
