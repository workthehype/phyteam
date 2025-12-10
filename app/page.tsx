import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1e2e] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1e2e]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            Phy<span className="text-cyan-400">team</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              About
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <button className="flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">
                🌐
              </span>
              EN
            </button> */}
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Book a Call
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#0a1e2e] to-[#0a1e2e]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business
            <br />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Future-Ready Technology
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From strategy to execution, we're your partners in digital
            transformation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition">
              Get Started
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Book a Call
            </button>
          </div>

          {/* Trusted by logos */}
          <div className="mt-20">
            <p className="text-gray-500 text-sm mb-8">
              Trusted by 200+ clients
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="text-gray-400 font-semibold text-xl">HSBC</div>
              <div className="text-gray-400 font-semibold text-xl">PSE&G</div>
              <div className="text-gray-400 font-semibold text-xl">KPMG</div>
              <div className="text-gray-400 font-semibold text-xl">
                Deloitte
              </div>
              <div className="text-gray-400 font-semibold text-xl">
                Accenture
              </div>
              <div className="text-gray-400 font-semibold text-xl">
                Marriott
              </div>
              <div className="text-gray-400 font-semibold text-xl">Hilton</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cloud Solutions */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Migrate and optimize your infrastructure with cloud-native
                solutions designed for maximum scalability and operational cost.
              </p>
            </div>

            {/* Data & AI Consulting */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data & AI Consulting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Harness the power of your data with predictive analytics and
                machine learning solutions tailored to your industry.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stay protected with vulnerability assessments, penetration
                testing, and compliance solutions for global regulations.
              </p>
            </div>

            {/* Digital Workplace Solutions */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Digital Workplace Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empower your teams with modern collaboration tools, remote work
                infrastructure, and seamless integrations.
              </p>
            </div>

            {/* Digital Strategy */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We develop end-to-end strategies that align your business goals
                with the right digital transformation.
              </p>
            </div>

            {/* IT Modernization */}
            <div className="bg-[#0f1a24] border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">IT Modernization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Legacy systems are outdated but migrations don't have to be
                hard. We plan the modernization of your IT stack.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for?
            </p>
            <button className="border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:border-cyan-500 transition">
              See Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#0a1e2e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">
              Trust
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Companies
              <br />
              Choose HexaCore
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-400 text-sm">
                We don't believe in one-size-fits-all. Our solutions are
                customized to your specific needs and goals.
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">We Don't Save Time</h3>
              <p className="text-gray-400 text-sm">
                Our agile teams ensure rapid deployment without sacrificing
                quality or security standards.
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Future-Ready Solutions</h3>
              <p className="text-gray-400 text-sm">
                Stay ahead with scalable solutions built for tomorrow's
                challenges.
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Engaged People</h3>
              <p className="text-gray-400 text-sm">
                Our team is committed to your success from day one to long-term
                partnership.
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-400 text-sm">
                With 350+ successful projects, we've earned the trust of
                industry leaders worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Don't take our word for it.
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
                350+
              </div>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
                90%
              </div>
              <p className="text-gray-400">Client Retention Rate</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
                4.97
              </div>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#0a1e2e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "HexaCore transformed our infrastructure. Their cloud migration
                was seamless and their team was incredibly responsive throughout
                the entire process."
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">VP Engineering</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "The AI solutions they implemented have revolutionized our data
                analytics. We're now making data-driven decisions faster than
                ever."
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-gray-400 text-sm">CEO, StartupX</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Outstanding cybersecurity implementation. They identified
                vulnerabilities we didn't know existed and secured our entire
                infrastructure."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Pricing
            <br />
            for Every Business
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose a plan that fits your needs. From startups to enterprises, we
            have solutions for everyone.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            View Pricing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1e2e] border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 phyteam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
