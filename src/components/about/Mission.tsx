"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp } from "lucide-react";

const OurMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-blue-500">Mission</span> &{" "}
            <span className="text-purple-500">Vision</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Target size={28} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To empower bettors with advanced analytics and smart tracking
              tools that enhance their betting strategy while promoting
              responsible gambling.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
              <TrendingUp size={28} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We aim to be the go-to AI-powered bet-tracking platform, providing
              accurate insights and a seamless experience for all users.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background element */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default OurMission;
