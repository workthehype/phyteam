"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const AboutPage = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that drive your business forward.",
      icon: "💡",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Integrity",
      description:
        "Transparency and honesty guide every decision we make, building lasting trust with our clients.",
      icon: "🤝",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring the highest quality standards.",
      icon: "⭐",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Collaboration",
      description:
        "Success is built on teamwork. We work closely with you to achieve shared goals.",
      icon: "🚀",
      gradient: "from-pink-500 to-cyan-500",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "SC",
      bio: "15+ years in enterprise technology",
    },
    {
      name: "Michael Roberts",
      role: "CTO",
      image: "MR",
      bio: "Expert in cloud architecture",
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      image: "EJ",
      bio: "Award-winning UX designer",
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "DP",
      bio: "Full-stack development specialist",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1e2e] via-black to-[#0a1e2e] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1e2e]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider hover:opacity-80 transition"
          >
            Phy<span className="text-cyan-400">team</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </Link>
            <Link href="/about" className="text-cyan-400 font-semibold">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHeroInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
              PT
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Phyteam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Empowering businesses with innovative technology solutions since
            2010. We transform challenges into opportunities through expertise,
            dedication, and cutting-edge innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">200+</div>
              <div className="text-gray-400 mt-2">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">15+</div>
              <div className="text-gray-400 mt-2">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">500+</div>
              <div className="text-gray-400 mt-2">Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1520] to-black" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed relative z-10">
              To be the trusted technology partner that helps businesses
              navigate digital transformation with confidence. We believe in
              creating sustainable, scalable solutions that not only solve
              today's challenges but anticipate tomorrow's opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 relative z-10">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Vision
                </h3>
                <p className="text-gray-400 text-sm">
                  Leading digital innovation globally
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Quality
                </h3>
                <p className="text-gray-400 text-sm">
                  Excellence in every solution
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  Impact
                </h3>
                <p className="text-gray-400 text-sm">
                  Measurable business results
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full relative overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a1520] to-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{member.image}</span>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Let's discuss how we can help transform your business
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
