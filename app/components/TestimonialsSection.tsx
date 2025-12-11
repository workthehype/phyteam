"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { staggerContainer, staggerItem } from "../utils/motion";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CTO, InfoTech Solutions",
      quote:
        "Working with Phyteam has been refreshing. Their innovative approach and modern tech stack delivered exactly what we needed for our digital transformation.",
      gradient: "from-cyan-400 to-blue-500",
      image: "/images/avatar-1.jpg",
    },
    {
      name: "Priya Sharma",
      role: "VP Engineering, TechnoServe",
      quote:
        "Despite being new, their team showed remarkable expertise and professionalism. The mobile app they built exceeded our expectations.",
      gradient: "from-purple-400 to-pink-500",
      image: "/images/avatar-2.jpg",
    },
    {
      name: "Amit Patel",
      role: "CEO, StartupIndia",
      quote:
        "Fresh ideas, modern solutions! Their website development and SEO strategies are already showing promising results in our first quarter.",
      gradient: "from-orange-400 to-red-500",
      image: "/images/avatar-3.jpg",
    },
    {
      name: "Sneha Reddy",
      role: "Director of IT, FinCorp India",
      quote:
        "Impressed by their technical capabilities and commitment. The custom software solution is streamlining our operations effectively.",
      gradient: "from-green-400 to-teal-500",
      image: "/images/avatar-4.jpg",
    },
    {
      name: "Vikram Singh",
      role: "COO, RetailHub",
      quote:
        "Their digital marketing approach is data-driven and results-focused. We're already seeing strong engagement from our target audience.",
      gradient: "from-indigo-400 to-purple-500",
      image: "/images/avatar-5.jpg",
    },
    {
      name: "Neha Gupta",
      role: "Founder, EduTech India",
      quote:
        "Excellent communication and understanding of our needs. Phyteam brings a fresh perspective to solving business challenges with technology.",
      gradient: "from-pink-400 to-rose-500",
      image: "/images/avatar-6.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-[#0a1e2e] to-black relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #06b6d4 1px, transparent 1px),
              linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold"
          >
            What Our Clients{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Say
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
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
                className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a2332]/90 to-[#0f1820]/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 h-full overflow-hidden">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
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
                  {/* Quote icon */}
                  <motion.div className="absolute -top-2 -left-2 text-6xl text-cyan-400/20 font-serif">
                    &ldquo;
                  </motion.div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6 relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-full relative overflow-hidden border-2 border-gray-700 shadow-lg"
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg text-white transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm transition-colors">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote text */}
                  <motion.p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 relative">
                    {testimonial.quote}
                  </motion.p>

                  {/* Star rating */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>

                {/* Corner decorations */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation dots (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 mt-12"
        >
          {[0, 1].map((page) => (
            <motion.button
              key={page}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full ${
                page === 0 ? "bg-cyan-400 w-8" : "bg-gray-600"
              } transition-all duration-300`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
