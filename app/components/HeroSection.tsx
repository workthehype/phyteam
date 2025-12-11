"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.15 * i,
          duration: 0.55,
          ease: "easeOut",
        },
      }),
    }),
    []
  );

  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 overflow-hidden bg-hero-gradient">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-28 -left-28 w-[360px] h-[360px] rounded-full blur-lg opacity-30 bg-orb-1" />
        <div className="absolute -bottom-28 -right-28 w-[420px] h-[420px] rounded-full blur-lg opacity-24 bg-orb-2" />

        <div className="absolute inset-0 opacity-6 bg-grid-svg" />

        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{ top: `${28 + i * 20}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10 text-center"
      >
        <motion.div custom={0} variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block opacity-95">Transform Your Business</span>

            <span className="block mt-2">
              <span className="inline-block">with</span>
              <span className="inline-block mx-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-slow font-extrabold">
                Future-Ready
              </span>
              <span className="inline-block">Technology</span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          custom={1}
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          From strategy to execution — your partners in digital transformation.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          custom={2}
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          {/* PRIMARY CTA */}
          <Link
            href="#contact"
            scroll={true}
            prefetch={false}
            className="cta-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Get Started</span>

              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#06B6D4]/30 to-[#3B82F6]/30"></span>
            <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"></span>
          </Link>

          {/* GHOST CTA */}
          <Link
            href="#book"
            scroll={true}
            prefetch={false}
            className="cta-ghost group relative overflow-hidden"
          >
            <span className="relative z-10">Book a Call</span>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <div className="floating-square hidden lg:block" aria-hidden />
        <div className="floating-circle hidden lg:block" aria-hidden />
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --grid-svg: url("/assets/grid.svg");
        }

        .bg-hero-gradient {
          background: linear-gradient(
            180deg,
            #071426 0%,
            #0b2a3e 50%,
            #071426 100%
          );
        }

        .bg-grid-svg {
          background-image: var(--grid-svg),
            linear-gradient(transparent, rgba(255, 255, 255, 0.01));
          background-size: 60px 60px;
          background-repeat: repeat;
        }

        .bg-orb-1 {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(6, 182, 212, 0.15),
            transparent 30%
          );
        }

        .bg-orb-2 {
          background: radial-gradient(
            circle at 70% 70%,
            rgba(139, 92, 246, 0.14),
            transparent 30%
          );
        }

        @keyframes gradientSlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradientSlow 6s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(150%);
            opacity: 0;
          }
        }

        @keyframes floatSmall {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0) rotate(0);
          }
        }

        .floating-square,
        .floating-circle {
          animation: floatSmall 6s ease-in-out infinite;
          will-change: transform;
        }

        .floating-square {
          position: absolute;
          top: 5rem;
          right: 4rem;
          width: 5rem;
          height: 5rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(56, 189, 248, 0.12);
        }

        .floating-circle {
          position: absolute;
          bottom: 6rem;
          left: 3rem;
          width: 4rem;
          height: 4rem;
          border-radius: 9999px;
          border: 1px solid rgba(99, 102, 241, 0.12);
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.4rem;
          border-radius: 9999px;
          font-weight: 600;
          position: relative;
          background-image: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
          color: white;
          box-shadow: 0 8px 30px rgba(6, 182, 212, 0.1);
          transition: transform 180ms ease, box-shadow 220ms ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(6, 182, 212, 0.2);
        }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.4rem;
          border-radius: 9999px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #e6eef6;
          transition: transform 180ms ease, background-color 180ms ease,
            border-color 180ms ease;
        }

        .cta-ghost:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(96, 165, 250, 0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-slow,
          .floating-circle,
          .floating-square {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
