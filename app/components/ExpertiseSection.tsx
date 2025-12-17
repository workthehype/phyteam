"use client";

import { useRef, memo } from "react";

const ExpertiseSection = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Website Development",
      description:
        "Build responsive, high-performance websites with modern frameworks and best practices. From landing pages to complex web applications.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements. Scalable, secure, and built for growth.",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
      gradient: "from-yellow-500 to-orange-600",
      glowColor: "yellow",
    },
    // {
    //   title: "Data & AI Consulting",
    //   description:
    //     "Harness the power of your data with predictive analytics and machine learning solutions tailored to your industry.",
    //   icon: (
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth={2}
    //       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    //     />
    //   ),
    //   gradient: "from-purple-500 to-pink-600",
    //   glowColor: "purple",
    // },
    {
      title: "Mobile App Development (iOS & Android)",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
      gradient: "from-orange-500 to-red-600",
      glowColor: "orange",
    },
    // {
    //   title: "Digital Marketing Solutions",
    //   description:
    //     "Boost your online visibility with data-driven SEO strategies and comprehensive digital marketing campaigns that drive results.",
    //   icon: (
    //     <>
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    //       />
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //       />
    //     </>
    //   ),
    //   gradient: "from-yellow-500 to-orange-600",
    //   glowColor: "yellow",
    // },
    // {
    //   title: "Digital Strategy",
    //   description:
    //     "We develop end-to-end strategies that align your business goals with the right digital transformation.",
    //   icon: (
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth={2}
    //       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    //     />
    //   ),
    //   gradient: "from-indigo-500 to-purple-600",
    //   glowColor: "indigo",
    // },
    // {
    //   title: "Programm",
    //   description:
    //     "Legacy systems are outdated but migrations don't have to be hard. We plan the modernization of your IT stack.",
    //   icon: (
    //     <>
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    //       />
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //       />
    //     </>
    //   ),
    //   gradient: "from-yellow-500 to-orange-600",
    //   glowColor: "yellow",
    // },
  ];

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
        {/* Section header - Simplified for performance */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Expertise
            </span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#0f1a24] to-[#0a0f1a] border border-gray-800/50 rounded-3xl p-8 h-full overflow-hidden backdrop-blur-sm">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-colors">
                    <svg
                      className="w-8 h-8 text-cyan-400 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {service.icon}
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <button className="border-2 border-gray-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">See Free Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(ExpertiseSection);
