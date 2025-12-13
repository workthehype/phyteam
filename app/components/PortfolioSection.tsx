"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "../hooks/useInView";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Modern e-commerce solution with real-time inventory and AI-powered recommendations.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "AI", "Stripe"],
    link: "#",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description:
      "Intuitive dashboard for healthcare professionals to manage patient data efficiently.",
    image: "/images/project-2.jpg",
    tags: ["React", "Tailwind", "Chart.js", "Firebase"],
    link: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure and user-friendly mobile banking experience with biometric authentication.",
    image: "/images/project-3.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "Security"],
    link: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Machine Learning",
    description:
      "Intelligent content creation tool powered by advanced AI algorithms.",
    image: "/images/project-4.jpg",
    tags: ["Python", "TensorFlow", "API", "Cloud"],
    link: "#",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Full Stack",
    description:
      "Comprehensive property listing platform with virtual tours and advanced search.",
    image: "/images/project-5.jpg",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "3D"],
    link: "#",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile & IoT",
    description:
      "Smart fitness companion with wearable integration and personalized coaching.",
    image: "/images/project-6.jpg",
    tags: ["Flutter", "IoT", "ML", "HealthKit"],
    link: "#",
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const categories = [
  "All Projects",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  "Machine Learning",
  "Full Stack",
];

export default function PortfolioSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current =
          node;
      }}
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 ${
                isInView ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Our Work
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isInView ? "animate-slide-up stagger-1" : "opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Portfolio
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Showcase
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-sm" />
            </span>
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto ${
              isInView ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            Explore our collection of cutting-edge projects that blend
            innovation, design excellence, and technical mastery
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            isInView ? "animate-slide-up stagger-3" : "opacity-0"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100"
                    : "bg-white/5 opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Border */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "border-2 border-transparent"
                    : "border border-gray-700 group-hover:border-cyan-500/50"
                }`}
              />

              {/* Text */}
              <span className="relative z-10">{category}</span>

              {/* Hover Shine Effect */}
              {activeCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                isInView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Container */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />

                  {/* Placeholder Image - Replace with actual images */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                    <div className="text-6xl opacity-20">
                      {project.category === "Web Development" && "💻"}
                      {project.category === "UI/UX Design" && "🎨"}
                      {project.category === "Mobile Development" && "📱"}
                      {project.category === "Machine Learning" && "🤖"}
                      {project.category === "Full Stack" && "⚡"}
                      {project.category === "Mobile & IoT" && "📊"}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-white text-black font-semibold rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-400 hover:scale-110"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-700 group-hover:border-cyan-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `
                      linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(6, 182, 212, 0.3) 50%, 
                        transparent 100%
                      )
                    `,
                    animation:
                      hoveredProject === project.id
                        ? "border-flow 2s linear infinite"
                        : "none",
                  }}
                />
              </div>

              {/* Floating Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center mt-16 ${
            isInView ? "animate-slide-up stagger-4" : "opacity-0"
          }`}
        >
          {/* <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          > */}
          {/* <span className="relative z-10">View All Projects</span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
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
            </svg> */}

          {/* Shine Effect */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" /> */}
          {/* </a> */}
        </div>
      </div>

      {/* Custom Keyframe Animation */}
      <style jsx>{`
        @keyframes border-flow {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100%) rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.08);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
