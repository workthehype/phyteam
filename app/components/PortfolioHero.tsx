"use client";

import { useInView } from "../hooks/useInView";

export default function PortfolioHero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #06b6d4 1px, transparent 1px),
              linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Subtitle */}
        <div
          className={`inline-block mb-6 ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 backdrop-blur-sm">
            ✨ Transforming Ideas Into Reality
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
            isInView ? "animate-slide-up stagger-1" : "opacity-0"
          }`}
        >
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            Our Creative
          </span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
            isInView ? "animate-slide-up stagger-2" : "opacity-0"
          }`}
        >
          Discover a collection of innovative projects showcasing our expertise
          in web development, mobile apps, AI solutions, and cutting-edge design
          that drives business success.
        </p>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ${
            isInView ? "animate-scale-in stagger-3" : "opacity-0"
          }`}
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Global Clients" },
            { value: "15+", label: "Industry Awards" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-16 ${
            isInView ? "animate-fade-in stagger-4" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
