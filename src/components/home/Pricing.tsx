import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const planVariants = {
    hover: {
      y: -10,
      border: "1px solid oklch(0.623 0.214 259.815)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-black">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlock Powerful Insights,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Whatever Your Betting Style
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Zort-App offers flexible pricing tailored for every type of
            bettor—from casual users to professionals. Our plans ensure you get
            the exact features you need without paying for extras.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Basic Plan */}
          <motion.div
            className="relative bg-[#1c2237] bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
            variants={planVariants}
            whileHover="hover"
          >
            <div className="absolute -top-24 -right-24 w-40 h-40 bg-purple-500 rounded-full opacity-10"></div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </span>
              Basic Plan
            </h3>
            <p className="text-gray-400 mb-4">
              Ideal for beginners and casual bettors
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">AI bet slip scanning</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Smart dashboards</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Secure data tracking</span>
              </li>
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="relative bg-[#1c2237] bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transform md:scale-105 z-10 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
            variants={planVariants}
            whileHover="hover"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full opacity-20"></div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-xs font-bold px-2 py-1 rounded-full text-white">
              Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 8a1 1 0 100 2h6a1 1 0 100-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm12-8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Pro Plan
            </h3>
            <p className="text-gray-400 mb-4">
              Designed for the serious bettor
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">
                  Enhanced intelligent analytics
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Real-time updates</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">
                  Deeper betting trend insights
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">All Basic features</span>
              </li>
            </ul>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="relative bg-[#1c2237] bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
            variants={planVariants}
            whileHover="hover"
          >
            <div className="absolute -top-24 -right-24 w-40 h-40 bg-blue-500 rounded-full opacity-10"></div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Premium Plan
            </h3>
            <p className="text-gray-400 mb-4">For the ultimate experience</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Advanced strategy tools</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Priority support</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">Exclusive features</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300">All Pro features</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Security badge */}
        <div
          className="flex items-center justify-center mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center bg-[#1c2237] bg-opacity-50 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300 text-sm">
              All plans include secure, private data tracking
            </span>
          </div>
        </div>

        {/* CTA button */}

        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <motion.a
            href="/pricing"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>See Pricing</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
