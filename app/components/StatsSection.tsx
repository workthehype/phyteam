"use client";

import { useRef, useEffect, memo, useState } from "react";

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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

// Simple counter - no animation for performance
const AnimatedCounter = ({
  value,
  decimal = false,
}: {
  value: number;
  decimal?: boolean;
}) => {
  return <span>{decimal ? value.toFixed(2) : value}</span>;
};

// Individual stat card - simplified for performance
const StatCard = ({
  number,
  suffix,
  label,
  decimal = false,
}: {
  number: number;
  suffix: string;
  label: string;
  delay?: number;
  isInView?: boolean;
  decimal?: boolean;
}) => {
  return (
    <div className="group relative text-center transition-transform hover:scale-105 duration-300">
      {/* Card content */}
      <div className="relative z-10">
        {/* Number with gradient */}
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
          <AnimatedCounter value={number} decimal={decimal} />
          {suffix}
        </div>

        {/* Label */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg font-light tracking-wide">
          {label}
        </p>

        {/* Decorative line */}
        <div className="mt-6 mx-auto w-3/5 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-300" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-br-lg" />
    </div>
  );
};

export default memo(StatsSection);
