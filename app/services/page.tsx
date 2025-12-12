"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description:
        "Enterprise-grade web applications built with cutting-edge technologies and best practices.",
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "CMS Development",
        "API Integration",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "Mobile UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure designed for reliability, security, and performance.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "DevOps Implementation",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security",
      ],
      technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and advanced analytics.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration",
        "Data Science",
      ],
      technologies: ["TensorFlow", "PyTorch", "Python", "Scikit-learn"],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that drive growth and maximize ROI.",
      features: [
        "SEO & SEM",
        "Content Marketing",
        "Social Media Strategy",
        "Email Campaigns",
        "Analytics & Reporting",
        "Conversion Optimization",
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 6,
      icon: Users,
      title: "Consulting Services",
      description:
        "Strategic guidance to help you navigate digital transformation and achieve your goals.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Process Optimization",
        "Team Training",
        "Quality Assurance",
        "Project Management",
      ],
      technologies: ["Agile", "Scrum", "JIRA", "Confluence"],
      gradient: "from-teal-500 to-green-600",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that align with your business objectives.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Agile methodology ensures quick iterations and timely project completion.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Rigorous testing and code reviews guarantee enterprise-grade quality.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated support team available round the clock for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />

      {/* Hero Section - Modern & Dynamic */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          {/* Diagonal lines pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                #06b6d4 60px,
                #06b6d4 61px
              )`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <span className="text-cyan-400 text-sm font-bold tracking-wider">
                  EXPERT SOLUTIONS
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white mb-2">Transform Your</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Partner with industry experts to build scalable, innovative
                solutions that drive growth and exceed expectations. We turn
                complex challenges into elegant digital experiences.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/about"
                  className="group px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-700 hover:border-cyan-500/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    100+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Experts
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px]">
                {/* Floating Cards */}
                <div
                  className="absolute top-0 left-0 w-72 h-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 transform hover:scale-105 transition-transform duration-500"
                  style={{ transform: "rotate(-6deg)" }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Web Development
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Custom web applications built with cutting-edge technologies
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 font-semibold">
                      Next.js
                    </span>
                  </div>
                </div>

                <div
                  className="absolute top-24 right-0 w-72 h-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl shadow-purple-500/10 transform hover:scale-105 transition-transform duration-500"
                  style={{ transform: "rotate(6deg)" }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    AI Solutions
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Intelligent automation powered by machine learning
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 font-semibold">
                      ML
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-xs text-pink-400 font-semibold">
                      AI
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-80 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-3xl p-6 shadow-2xl shadow-blue-500/10 transform hover:scale-105 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Cloud Services
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Scalable infrastructure designed for the future
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 font-semibold">
                      AWS
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">
                      Azure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Professional Layout */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div
                    className={`space-y-3 mb-6 transition-all duration-300 ${
                      activeService === service.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-300 ${
                      activeService === service.id
                        ? "opacity-100"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-full justify-center`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Expand Indicator */}
                  {activeService !== service.id && (
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Phyteam
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Project?
                </span>
              </h2>

              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you achieve your business
                goals with our expert solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500/50 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
