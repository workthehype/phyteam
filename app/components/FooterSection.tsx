"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-[#0a0f1a] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-12" />
                </div>
                <span className="text-xl font-bold">
                  Phy<span className="text-cyan-400">team</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              © {currentYear} Phyteam. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm"
                >
                  Service
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Cloud Solutions</li>
              <li className="text-gray-400 text-sm">Data & AI</li>
              <li className="text-gray-400 text-sm">Cybersecurity</li>
              <li className="text-gray-400 text-sm">Digital Workplace</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">contact@phyteam.com</li>
              <li className="text-gray-400 text-sm">+91 12345 67890</li>
              <li className="text-gray-400 text-sm">Aligarh, U.P. India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-sm"
              >
                Terms of Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
