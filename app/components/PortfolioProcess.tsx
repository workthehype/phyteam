"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Research",
    description:
      "We dive deep into understanding your business goals, target audience, and market landscape to create a solid foundation.",
    icon: "🔍",
    color: "from-cyan-500 to-blue-500",
    features: [
      "Market Analysis",
      "User Research",
      "Competitive Study",
      "Goal Definition",
    ],
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description:
      "Crafting a comprehensive roadmap with clear milestones, timelines, and technical architecture for success.",
    icon: "📋",
    color: "from-blue-500 to-purple-500",
    features: [
      "Project Roadmap",
      "Tech Stack Selection",
      "Resource Planning",
      "Risk Assessment",
    ],
  },
  {
    id: 3,
    title: "Design & Prototype",
    description:
      "Creating stunning, user-centric designs that bring your vision to life with interactive prototypes.",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    features: [
      "Wireframing",
      "UI/UX Design",
      "Interactive Prototypes",
      "Design System",
    ],
  },
  {
    id: 4,
    title: "Development",
    description:
      "Building robust, scalable solutions using cutting-edge technologies and best coding practices.",
    icon: "⚡",
    color: "from-pink-500 to-red-500",
    features: [
      "Agile Development",
      "Code Reviews",
      "Quality Assurance",
      "Performance Optimization",
    ],
  },
  {
    id: 5,
    title: "Testing & QA",
    description:
      "Rigorous testing across devices, browsers, and scenarios to ensure flawless functionality.",
    icon: "✅",
    color: "from-red-500 to-orange-500",
    features: [
      "Functional Testing",
      "Security Audit",
      "Performance Testing",
      "User Acceptance",
    ],
  },
  {
    id: 6,
    title: "Launch & Support",
    description:
      "Smooth deployment with ongoing support, monitoring, and continuous improvements for long-term success.",
    icon: "🚀",
    color: "from-orange-500 to-cyan-500",
    features: ["Deployment", "Monitoring", "Maintenance", "Optimization"],
  },
];

export default function PortfolioProcess() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 ${
              isInView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400">
              Our Approach
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isInView ? "animate-slide-up stagger-1" : "opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Development
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto ${
              isInView ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group ${
                  isInView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Card */}
                <div
                  className={`relative p-6 rounded-2xl bg-gray-900/50 border backdrop-blur-sm transition-all duration-500 cursor-pointer h-full ${
                    activeStep === step.id
                      ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${
                        step.color
                      } flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 ${
                        activeStep === step.id ? "scale-110" : ""
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div
                      className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${
                        step.color
                      } bg-clip-text text-transparent border ${
                        activeStep === step.id
                          ? "border-cyan-400"
                          : "border-gray-700"
                      }`}
                    >
                      Step {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <svg
                          className="w-4 h-4 text-cyan-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Glow Effect */}
                  {activeStep === step.id && (
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur-md opacity-10 -z-10`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 ${
            isInView ? "animate-fade-in stagger-3" : "opacity-0"
          }`}
        >
          <p className="text-gray-400 mb-6">
            Ready to bring your project to life?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            Start Your Project
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
