"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Shield,
  HelpCircle,
  FileText,
  Users,
  AlertCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // footer links organized by sections
  const footerLinks = {
    features: [
      { name: "AI Bet Slip Scanner", href: "/features" },
      { name: "Intelligent Analytics", href: "/features" },
      { name: "Smart Dashboard", href: "/features" },
      { name: "Secure & Private", href: "/features" },
      { name: "Real-Time Updates", href: "/features#real-time-updates" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/about#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Responsible Gambling", href: "#responsible-gambling" },
      { name: "News", href: "#news" },
    ],
    support: [
      { name: "Help Center", href: "/support" },
      { name: "FAQ", href: "/support#faqs" },
      { name: "Community", href: "/support#community" },
      { name: "Tutorials", href: "/support#guides" },
      { name: "Contact Support", href: "/support#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Data Protection", href: "#data-protection" },
      { name: "Licensing", href: "#licensing" },
    ],
  };

  // Social media links
  const socialLinks = [
    {
      name: "Instagram",
      icon: BsInstagram,
      href: "https://www.instagram.com/zorthq/?igsh=MXA5bWE2dDQ0dHQyMw%3D%3D#",
    },
    {
      name: "Youtube",
      icon: BsTiktok,
      href: "https://www.tiktok.com/@zortapp",
    },
  ];

  // show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <AnimatedScrollTopButton show={showScrollTop} onClick={scrollToTop} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              ZORT
            </motion.h2>
            <p className="text-gray-400 max-w-xs">
              Transform Your Betting Game with AI-powered analytics and
              intelligent insights
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={16} />
                <span>info@zort.app</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                <MapPin size={16} />
                <span>123 Tech Avenue, London, EC1A 1BB, UK</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Phone size={16} />
                <span>+44 (20) 1234-4567</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Features Links */}
          <FooterLinkSection title="Features" links={footerLinks.features} />

          {/* Company Links */}
          <FooterLinkSection
            title="Company"
            links={footerLinks.company}
            icons={{
              About: Users,
              Contact: Mail,
              Careers: FileText,
              "Responsible Gambling": Shield,
              News: AlertCircle,
            }}
          />

          {/* Support Links */}
          <FooterLinkSection
            title="Support"
            links={footerLinks.support}
            icons={{
              FAQ: HelpCircle,
              "Contact Support": Mail,
            }}
          />
        </div>

        {/* Legal Links Section */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-4">
                Get the latest news and updates about ZORT
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white flex-1"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Notice */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <div className="flex items-center space-x-3 mb-3">
            <Shield size={20} className="text-gray-400" />
            <h3 className="text-md font-semibold text-white">
              Responsible Gambling
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            ZORT promotes responsible gambling. Our application is intended for
            individuals over the age of 18 only. Please gamble responsibly and
            be aware of the risks involved.
            <Link
              href="/responsible-gambling"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              Learn more about responsible gambling
            </Link>
            .
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ZORT. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/responsible-gambling"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Responsible Gambling
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

// Helper Components
const FooterLinkSection = ({
  title,
  links,
  icons = {},
}: {
  title: string;
  links: { name: string; href: string }[];
  icons?: Record<string, React.ElementType>;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => {
          const Icon = icons[link.name];
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              >
                {Icon && <Icon size={16} className="mr-2" />}
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const AnimatedScrollTopButton = ({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
};
