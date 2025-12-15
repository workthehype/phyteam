"use client";

import { useState } from "react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Inc.",
    image: "👩‍💼",
    content:
      "Working with Phyteam transformed our business. Their innovative approach to our e-commerce platform increased our sales by 300% in just 6 months!",
    project: "E-Commerce Platform",
    rating: 5,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "HealthPlus",
    image: "👨‍⚕️",
    content:
      "The healthcare dashboard they built is simply outstanding. Our staff efficiency improved dramatically, and patients love the intuitive interface.",
    project: "Healthcare Dashboard",
    rating: 5,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Manager",
    company: "FinanceFlow",
    image: "👩‍💻",
    content:
      "Exceptional quality and attention to detail. The mobile banking app exceeded all our expectations with its security features and user experience.",
    project: "Mobile Banking App",
    rating: 5,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Marketing Director",
    company: "ContentMaster",
    image: "👨‍💼",
    content:
      "The AI content generator has revolutionized our workflow. What used to take days now takes minutes, and the quality is consistently impressive.",
    project: "AI Content Generator",
    rating: 5,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "VP Operations",
    company: "PropertyHub",
    image: "👩",
    content:
      "Their real estate platform brought our business into the modern age. The virtual tours feature is a game-changer for our clients.",
    project: "Real Estate Platform",
    rating: 5,
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Fitness Coach",
    company: "FitLife Pro",
    image: "👨‍🏫",
    content:
      "The fitness tracking app they developed is incredible. My clients are more engaged than ever, and the IoT integration works flawlessly.",
    project: "Fitness Tracking App",
    rating: 5,
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

export default function PortfolioTestimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
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
              Client Success Stories
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isInView ? "animate-slide-up stagger-1" : "opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto ${
              isInView ? "animate-slide-up stagger-2" : "opacity-0"
            }`}
          >
            Real results from real partnerships that drive business growth
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveTestimonial(index)}
            >
              {/* Testimonial Card */}
              <div
                className={`relative p-6 rounded-2xl bg-gray-900/50 border backdrop-blur-sm transition-all duration-500 h-full cursor-pointer ${
                  activeTestimonial === index
                    ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105"
                    : "border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-cyan-400/20">
                  "
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {testimonial.content}
                  </p>

                  {/* Project Badge */}
                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                {activeTestimonial === index && (
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-2xl blur-xl opacity-30 -z-10`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        {/* <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800 backdrop-blur-sm ${
            isInView ? "animate-fade-in stagger-3" : "opacity-0"
          }`}
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "200+", label: "5-Star Reviews" },
            { value: "95%", label: "Repeat Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* CTA */}
        <div
          className={`text-center mt-12 ${
            isInView ? "animate-fade-in stagger-4" : "opacity-0"
          }`}
        >
          <p className="text-gray-400 mb-6">
            Join hundreds of satisfied clients who trust us with their projects
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            Get Your Free Consultation
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
