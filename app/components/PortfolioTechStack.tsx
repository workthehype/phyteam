"use client";

import { useInView } from "../hooks/useInView";

const techCategories = [
  {
    category: "Frontend",
    color: "from-cyan-500 to-blue-500",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "💚" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Three.js", icon: "🎲" },
    ],
  },
  {
    category: "Backend",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎸" },
      { name: "Express", icon: "🚂" },
      { name: "GraphQL", icon: "◆" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  {
    category: "Mobile",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" },
      { name: "Expo", icon: "🎯" },
      { name: "PWA", icon: "⚡" },
    ],
  },
  {
    category: "Database",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-blue-500 to-indigo-500",
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⎈" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Azure", icon: "☁️" },
    ],
  },
  {
    category: "AI & ML",
    color: "from-violet-500 to-purple-500",
    technologies: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "OpenAI", icon: "🤖" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "LangChain", icon: "🔗" },
    ],
  },
];

export default function PortfolioTechStack() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slower" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #06b6d4 1px, transparent 1px),
              linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
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
              Technologies We Master
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isInView ? "animate-slide-up stagger-1" : "opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Tech
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto ${
              isInView ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            Leveraging cutting-edge technologies to build powerful, scalable
            solutions
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`group ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Card */}
              <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group/tech cursor-pointer"
                    >
                      <span className="text-2xl group-hover/tech:scale-125 transition-transform duration-300">
                        {tech.icon}
                      </span>
                      <span className="text-sm text-gray-300 group-hover/tech:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800 backdrop-blur-sm ${
            isInView ? "animate-fade-in stagger-3" : "opacity-0"
          }`}
        >
          <p className="text-gray-300 text-lg mb-4">
            <span className="font-semibold text-cyan-400">
              100+ Technologies
            </span>{" "}
            at our disposal to bring your vision to life
          </p>
          <p className="text-gray-500 text-sm">
            From blockchain to AI, we stay ahead of the curve with the latest
            innovations
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
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
