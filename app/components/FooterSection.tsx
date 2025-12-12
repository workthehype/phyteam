"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { memo } from "react";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { name: "YouTube", icon: <Youtube size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-[#05070d] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/20">
                  <div className="w-6 h-6 bg-white rounded rotate-12" />
                </div>
                <span className="text-2xl font-bold">
                  Phy<span className="text-cyan-400">team</span>
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mt-1">
              © {currentYear} Phyteam. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
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
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((s, index) => (
                <motion.a
                  key={index}
                  href={s.href}
                  title={s.name}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 cursor-pointer bg-gray-800/50 hover:bg-cyan-500/20 
                  border border-gray-700 hover:border-cyan-400/60 rounded-full flex items-center 
                  justify-center transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
                >
                  <span className="text-cyan-300">{s.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-10">
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition text-sm cursor-pointer"
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

export default memo(FooterSection);
