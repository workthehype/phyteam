"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MonitorSmartphone,
  Code2,
  BrainCircuit,
  Smartphone,
  LineChart,
  Rocket,
} from "lucide-react";

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Website Development",
      description:
        "Build responsive, high-performance websites with modern frameworks and best practices. From landing pages to complex web applications.",
      icon: <MonitorSmartphone className="w-8 h-8 text-cyan-400" />,
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements. Scalable, secure, and built for growth.",
      icon: <Code2 className="w-8 h-8 text-yellow-400" />,
      gradient: "from-yellow-500 to-orange-600",
      glowColor: "yellow",
    },
    {
      title: "Data & AI Consulting",
      description:
        "Harness the power of your data with predictive analytics and machine learning solutions tailored to your industry.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500 to-pink-600",
      glowColor: "purple",
    },
    {
      title: "Mobile App Development (iOS & Android)",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.",
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      gradient: "from-orange-500 to-red-600",
      glowColor: "orange",
    },
    {
      title: "SEO & Digital Marketing Solutions",
      description:
        "Boost your online visibility with data-driven SEO strategies and comprehensive digital marketing campaigns that drive results.",
      icon: <LineChart className="w-8 h-8 text-yellow-400" />,
      gradient: "from-yellow-500 to-orange-600",
      glowColor: "yellow",
    },
    {
      title: "Digital Strategy",
      description:
        "We develop end-to-end strategies that align your business goals with the right digital transformation.",
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      gradient: "from-indigo-500 to-purple-600",
      glowColor: "indigo",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0a0f1a] to-black overflow-hidden"
    >
      {/* Background effects - static for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static gradient orbs */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl opacity-[0.07]" />
        <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-[0.07]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Expertise
            </span>
          </motion.h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#0f1a24] to-[#0a0f1a] border border-gray-800/50 rounded-3xl p-8 h-full overflow-hidden backdrop-blur-sm">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={
                    hoveredCard === index ? { x: "200%" } : { x: "-100%" }
                  }
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="relative z-10">{service.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 className="text-xl font-bold mb-4 text-white transition-colors duration-300">
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </motion.p>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6 text-cyan-400"
                  >
                    <svg
                      className="w-6 h-6"
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
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(6, 182, 212, 0.8)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
            <span className="relative z-10 ">See Free Consultation</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
