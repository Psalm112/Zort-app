import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Flexible{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Plans
            </span>{" "}
            for Every Bettor
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose a plan that fits your betting style. Whether you&apos;re a
            casual bettor or a pro, Zort has the perfect features to transform
            your betting experience.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link
                href="#pricing-plans"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Choose Your Plan
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link
                href="/download"
                className="px-8 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium hover:border-purple-500 transition-all duration-300"
              >
                Download The App
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div
        className="absolute right-0 bottom-0 opacity-40 transform translate-x-1/4"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <motion.div
          className="w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
      <div
        className="absolute left-0 top-1/4 opacity-40 transform -translate-x-1/4"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <motion.div
          className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
