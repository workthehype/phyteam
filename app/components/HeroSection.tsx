"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const HeroSection = () => {
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
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in stagger-1">
              Transform Your Business
            </span>
            <br />
            <span className="inline-block animate-fade-in stagger-3">
              with{" "}
            </span>
            <span className="inline-block relative animate-scale-in stagger-4 ml-2">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Cutting-Edge Technology
              </span>
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-expand stagger-5" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-6">
            We empower businesses with custom software development, Mobile Application development, data analytics,
            AI integration, and cloud solutions to drive growth,
            efficiency, and lasting impact.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-slide-up stagger-7">
          <Link href="#services">
            <button className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-5 h-5 animate-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </Link>

          <Link href="/about">
            <button className="relative group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 active:scale-95 cursor-pointer">
              <span className="relative z-10">Learn More</span>
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Team" },
            { value: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-lift cursor-default animate-fade-in"
              style={{ animationDelay: `${0.9 + idx * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default memo(HeroSection);
