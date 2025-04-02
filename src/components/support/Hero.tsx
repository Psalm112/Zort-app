"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[45vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Help?{" "}
            </span>
            We&apos;ve Got You Covered
          </h1>
          <p className="text-lg text-gray-300 mb-8 mx-auto max-w-2xl">
            Find answers to common questions, explore guides, or contact our
            support team for assistance with your betting analytics journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-xl mx-auto"
        >
          <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-full p-1 pl-6">
            <Search className="w-5 h-5 text-purple-600 mr-2" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, guides..."
              className="w-full bg-transparent border-none outline-none py-3 text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="ml-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 py-3 px-6">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
