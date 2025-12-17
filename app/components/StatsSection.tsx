"use client";

import { useRef, useEffect, memo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15, once: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a1520] to-[#0f1e2e] overflow-hidden"
    >
      {/* Static gradient background - Performance optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {/* Simplified static background */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent" />

          {/* Static gradient orbs - Performance optimized */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Don&apos;t take our word{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              for it.
            </span>
          </h2>
        </div>

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
            number={99}
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
        type: "spring" as const,
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring" as const, stiffness: 400, damping: 10 },
      }}
      className="group relative text-center"
    >
      {/* Simplified glow effect - removed expensive animation */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-purple-500/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card content */}
      <div className="relative z-10">
        {/* Number with gradient - removed expensive animation */}
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 transition-all duration-500">
          <AnimatedCounter value={number} decimal={decimal} />
          {suffix}
        </div>

        {/* Label */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light tracking-wide group-hover:text-gray-200 transition-colors duration-300">
          {label}
        </p>

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
            rotate: { duration: 20, repeat: Infinity, ease: "linear" as const },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1] as const,
            },
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

export default memo(StatsSection);
